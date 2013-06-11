---
layout: blog
title: On the Future of Lazy Vals In Scala
poster: Alex
---


This post has nothing to do with `Future`s.
But let's cut to the chase.
Scala lazy `val`s are object fields that are not initialized with a value when the object is created.
Instead, the field is initialized the first time it is referenced by some thread of control.
Here's an example:

    class UnitVector(val angle: Double) {
      lazy val x = {
        println("Getting initialized...")
        math.sin(angle)
      }
    }

    val v = new UnitVector(math.Pi / 4)
    println("Computing x...")
    v.x
    println("Value of x: " + v.x)

The program prints `Computing x.` first due to the `lazy` modifier on `x`.
It prints `Getting initialized...` only once -- after initialization the value is cached, so to speak.
Notice the wording "thread of control" above.
Indeed, the field `x` could have been accessed by different threads
and as the above example shows, the so-called lazy val initializer block can have side-effects.
If multiple threads were allowed to run the initializer block, program semantics would be non-deterministic.

To discard the possibility of executions where the `Getting initialized...` is executed twice,
the Scala compiler transforms the lazy val declarations in the following manner.
Assume the following definition:

    final class LazyCell {
      lazy val value = 17
    }

This is an illustration of what the Scala compiler transforms it to:

    final class LazyCell {
      @volatile var bitmap_0: Boolean = false
      var value_0: Int = _
      private def value_lzycompute(): Int = {
        this.synchronized {
          if (!bitmap_0) {
            value_0 = 17
            bitmap_0 = true
          }
        }
        value_0
      }
      def value = if (bitmap_0) value_0 else value_lzycompute()
    }

I assume here that you're familiar with what the `synchronized` keyword does in Java,
otherwise you can think of it as means to lock a critical section.

First of all, there has to be some way of knowing whether the lazy field already got initialized or not.
Hence the `bitmap_0` field -- if it is `false`, then the lazy val is not initialized, otherwise it is.
The space overheads here are negligible -- due to object 8-byte boundary alignment,
the runtime size of the object will not change on a 32-bit JVM.

Locks are assumed to be (and are) expensive, so it's not efficient to lock on every read.
This is why the `bitmap_0` field being annotated as `@volatile` is being read before acquiring the lock,
and is known as the [double-checked locking idiom](http://en.wikipedia.org/wiki/Double-checked_locking).
The lock is only acquired if the `bitmap_0` is `false`, implying nothing about whether `value_0` was assigned,
so a thread might try to acquire the lock of the `LazyCell` object and execute the initializer block,
in this case just `17`.
However, reading `bitmap_0` guarantees that `value_0` was assigned, in every execution.
To see why this is so, search around for the Java Memory Model and the `volatile` semantics.
Bottom line -- if you understand the transformation above, you understand how the lazy val initialization works in Scala,
and should be convinced that it is safe.

Or, should you?

As some people in the Scala community recently remarked,
this can lead to some pretty weird behaviour.
The following example should work perfectly:

    object A {
      lazy val a0 = B.b
      lazy val a1 = 17
    }

    object B {
      lazy val b = A.a1
    }

Should it? Does it? Or not? Try to see why.

Unfortunately, if `A.a0` is accessed by some thread `Ta` and `B.b` is accessed by some thread `Tb`,
there is a possibility of a deadlock.
The reason lies in the `lzycompute` method shown earlier -- both threads attempt to grab a hold of the other object's
lock from within the initializer blocks of the lazy vals `a0` and `b`, respectively.
While doing so, they do not let go of their own lock.
Thus, a deadlock may occur when using several lazy vals referring to each other,
although they do not form a circular dependency.

This problem is more serious than it may seem at first glance --
patterns that address initialization order issues use lazy vals
and some Scala constructs are expressed in terms of them,
nested singleton objects being the most prominent one.


## Better Lazy Vals

We attempt to categorize and address these issues in
[SIP-20](http://docs.scala-lang.org/sips/pending/improved-lazy-val-initialization.html),
a Scala improvement proposal available at the docs site.

The basic idea behind the proposed changes is very simple.
Instead of selfishly holding the lock of the object containing the lazy val,
the lock is acquired once to let the other threads know that some thread
is initializing the lazy val, and once more to let them know that the 
initialization is completed.
The threads that arrive after initialization has started but before it
has finished are forced to `wait` for completion on the monitor of the
`this` object.

Here as an illustration:

    class LazyCell {
      @volatile var bitmap_0: Int = 0
      var value_0: Int = _
      private def value_lzycompute(): Int = {
        this.synchronized {
          if (bitmap_0 == 0) {
            bitmap_0 = 1
          } else {
            while (bitmap_0 == 1) {
              this.wait()
            }
            return value_0
          }
        }
        val result = 0 // the initializer block goes here
        this.synchronized {
          value_0 = result
          bitmap_0 = 3
          this.notifyAll()
        }
        value_0
      }
      def value = if (bitmap_0 == 3) value_0 else value_lzycompute()
    }

Note that this new scheme requires more than 2 bitmap states,
but this does not change the memory footprint significantly
and in most cases not at all.v

We explore several variants of this idea in the SIP,
and state the perceived advantages and disadvantages of each.
The SIP also comes with a solid suite of microbenchmarks,
designed to validate the assumption that the lazy val
performance will not change significantly.


## Beyond Lazy Vals

And now the point behind this blog post --
the proposed scheme does not solve all the lazy val issues.
Since this scheme relies on acquiring the monitor of the `this` object,
it will fall short in some interactions with the user-code.
Here's an example from the SIP:

    class A { self =>
      lazy val x: Int = {
        (new Thread() {
          override def run() = self.synchronized { while (true) {} }
        }).start()
        1
      }
    }

If the newly created thread starts running before the caller thread
acquires the monitor in the second synchronized block, a deadlock occurs.
More subtle and more realistic scenarios can likewise cause deadlocks.
The SIP does not address them.

Ideally, a basic language feature like lazy initialization should address these issues,
which might render it a leaky abstraction.
There are some solutions, but there are also reasons why they are not in the SIP.

As few people have suggested, there exist initialization schemes not
mentioned in the SIP that avoid deadlocks due to interactions with the user code.
Since these interactions are due to user code synchronizing on the same
object as the behind-the-scene lazy val initialization mechanism,
a solution is to make the lazy val initialization mechanism synchronize on some other object.
A compiler could emit a hidden dummy object field and initialize a dummy object
for each lazy val, so that initializing threads can synchronize on it, but the user
code cannot see it.
Something like this:

    class LazyCell {
      @volatile private var bitmap_0 = 0
      @volatile private var value_dummy = new AnyRef
      private var value_0 = _
      private def value_lzycompute() = ??? // sync, init, sync
      def value = if (bitmap_0 == 3) value_0 else value_lzycompute()
    }

This is an overkill -- on average it increases the object size by 12 bytes per a lazy val field on a 32-bit JVM.
So lets try something smarter.
Instead of creating many objects and fields for them,
we could have a single field for all the dummy synchronization objects used
at one particular instance in time stored in an immutable list.
While the list would be immutable, the field for the list would be volatile
and modified with a CAS.
Given a class:

    class A {
      lazy val x = 17
      lazy val y = 19
    }

here's one possible scenario for such a list, where `y` is initialized first
and `x` after that.
Dummy synchronization objects are removed from the list once the initialization
fully completes and the corresponding bitmap entry was updated.

    list --|
    list --> [ y ] --|
    list --> [ x ] --> [ y ] --|
    list --> [ x ] --|
    list --|

This might have more runtime overheads than is reasonable, though.
The prospect of having to traverse this list when there are multiple
lazy vals is particularly unsettling to me.
It also does more bookkeeping at runtime than is actually necessary.
Read on.

An alternative to this lock-free scheme that seems to have a lot of runtime overheads
is to keep one object per lazy val field in the companion object of the class.
Comparing this approach with keeping a concurrent linked list, it scales field-wise,
assuming that the false-sharing issues are handled correctly, but does
not scale instance-wise, since all the threads initializing the same lazy val
field of different objects would access the same dummy synchronization object.
But, we could have multiple dummy synchronization objects in the companion object.
Threads that initialize a lazy val field could choose one uniquely based
on the object's `identityHashCode` value.

    object A {
      val x_dummies = Array.fill[AnyRef](N)(new AnyRef)
      val y_dummies = Array.fill[AnyRef](N)(new AnyRef)
    }

This seems better than the list approach, because it only allocates the dummies only once.
This is ok, since the number of threads causing contention on the dummies is
at runtime bound by the number of processors.
And indeed, by tweaking the `N` and relating it to the number of processors `P`
we can decrease the probability of contention on a dummy synchronization object arbitrarily,
although `N` grows quadratically with `P` for a fixed probability -- see the birthday paradox.

A downside common to the last two schemes is that they rely on using CAS.
As soon as the `@volatile` bitmap is written to outside of a `synchronized` block,
CAS with retry logic cannot be avoided, since there might be lazy val fields in
the same object being initialized concurrently.
We discuss in the SIP what using CAS entails.

In conclusion, solution to the lazy val initialization problems should be:
- simple - because simple is easy to implement
- simple - because simple often means efficient
- robust - work in all theoretical scenarios
- robust - work in practical circumstances

Looking back at the hypothetical solutions above,
although they in theory solve the user code interaction issue,
none of them works in practical circumstances well
(using CAS might be problematic, and false sharing issues are not immediately apparent),
is probably not too efficient in the common case (although this wasn't tested)
and could be too complex to understand, implement or maintain.

But if I had to choose, I'd pick the one with the dummy synchronization objects in the class companion object.
Seems to be the simplest and is scalable both field-wise and instance-wise.


