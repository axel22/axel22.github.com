---
layout: blog
title: Quirks of Scala Specialization
poster: Alex
image: /resources/images/scala-programming-language.jpg
---


Having used specialization a lot and having fixed some of its issues,
I came across a couple of useful tricks -- I want to document them both for myself and others.
Specialization is the feature that allows you to generate separate versions of generic classes for primitive types,
thus avoiding boxing in most cases.
First introduced in Scala 2.8 by Iulian Dragos, by Scala 2.11 specialization has become a pretty robust language feature,
and a lot of its issues have been fixed, but there are places where it might stab you in the back if you don't watch out.
Problem is, specialization interacts with a huge bunch of edge-cases in the language and obscure language features in ways
that are not expected.
Sometimes, these are just unresolved bugs.
Here are some tips and tricks that might help you.

## Instantiating another specialized value in the constructor

Specialization in 2.10 has a problem of specializing constructors in some cases.
Lets say you want to track different method invocations until seeing a specific value `stopKey`
and you want your own specialized collections for the task.
At some point you could arrive at classes `Traversable`, `Traversable.Buffer` and `Actions` as below:

    trait Traversable[@specialized(Int, Long, Double) T] {
      self =>
    }

    object Traversable {
      class Buffer[@specialized(Int, Long, Double) T]
      extends Traversable[T] {
        def +=(value: T) {
        }
      }
    }

    class Actions[@specialized(Int, Long) K, V](val stopKey: K) {
      private val insertsBuffer: Traversable.Buffer[(K, V)] = new Traversable.Buffer[(K, V)]
      private val clearsBuffer: Traversable.Buffer[Unit] = new Traversable.Buffer[Unit]
    
      def inserts: Traversable[(K, V)] = insertsBuffer
      def clears: Traversable[Unit] = clearsBuffer
    }

If you try to instantiate `Actions`, you'll get:

    Exception in thread "main" java.lang.IllegalAccessError
      at org.test.Actions$mcI$sp.<init>(Main.scala:57)
      at org.test.Main$.main(Main.scala:21)
      at org.test.Main.main(Main.scala)

I won't get into why the above fails the way it fails - suffices to say that the specialization creates specialized fields in the specialized variants of the class 
and does not properly rewire the bridges for the method fields correctly.
Here is the pattern to solve the above issues - create a method `init` in which you initialize the troublesome fields
are initialized:

    class Actions[@specialized(Int, Long) K, V](val stopKey: K) {
      private var insertsBuffer: Traversable.Buffer[(K, V)] = null
      private var clearsBuffer: Traversable.Buffer[Unit] = null
      
      protected def init(sk: K) {
        insertsBuffer = new Traversable.Buffer[(K, V)]
        clearsBuffer = new Traversable.Buffer[Unit]
      }
      
      init(stopKey)
      
      def inserts: Traversable[(K, V)] = insertsBuffer
      def clears: Traversable[Unit] = clearsBuffer
    }

This will enforce proper specialization and accessing the fields properly.


## Use `trait`s where possible

For each specialized class `C[@specialized T]`, specialization creates its normal generic version `C[T]`
and a specialized version, e.g. `C$mcI$sp`, that extends the generic version:

    class C$mcI$sp extends C[Int]

and then overrides the bridge methods that need to be specialized.
Obviously, extending specialized class `C[T]` with `D[@specialized T] extends C[T]` will result in a diamond
inheritance and the compiler will drop the specialized `C$mcI$sp` from the hierarchy of `D[T]`
(you will even get a warning).
Dropping the specialized class means you will lose specializations of some methods.

Bottomline is, use traits with specialization if you need to extend specialized classes - they allow multiple inheritance
and you won't lose specialized method versions from the hierarchy.


## Avoid `trait`s where possible

This seems to contradict the previous hint.
Well, traits are problematic.
They are not supported natively on the JVM, so the compiler has to generate a lot of bridge methods each time
an abstract or a concrete class extend a trait.
If you take a look at the standard collections code, there are classes like `AbstractSeq` which serve no
purpose other than to force the compiler to spit out all the bridge methods into the base class `AbstractSeq`
so that the subclasses of `AbstractSeq` don't have to have all the bridge methods for `Seq` -- instead,
they inherit them the normal JVM way from `AbstractSeq`.
I've handwaved the details here -- the important thing is that this technique reduces the standard library
size significantly.

Now, thinking in terms of specialization -- a specialized method (one inside a specialized class
will have at most 9 bridges for a single specialized type parameter.
Obviously, you want to extend specialized traits as least as possible.
In many cases you will extend a specialized class only for a concrete type and not for all possible types.
A good example are anonymous classes.
Lets say you have a trait `Observer` that observes:

    trait Observer[@specialized T] {
      def observe(value: T): Unit
    }

You would typically extend it for particular types `T` as an anonymous class:

    eventSource.register(new Observer[Int] {
      var sum = 0
      def observe(value: T) = sum += value
    }

Why have `Observer` as a trait then and generate hundreds of bridge methods everywhere?
Instantiate a specialized abstract class `AbstractObserver[@specialized T]`.
Extending it for a single type, e.g. `Int`, will inherit the specialized `AbstractObserver$mcI$sp`
and you won't lose specialized methods as described in the previous hint.


## Make your classes as flat as possible

Specialization is getting more robust, but make no mistakes about it -- sometimes it interacts weirdly with some Scala features.
Sometimes this is due to bugs, sometimes due to some more fundamental issues.

One important consideration are nested and inner classes.
Avoid them!
You could write:

    trait View[@specialized T] {
      self =>
      def foreach(f: T => Unit): Unit
      def filter(p: T => Boolean) = {
        new View {
          def foreach(f: T => Unit) = for (v <- self) if (p(v)) f(v)
        }
      }
    }

Instead, write:

    trait View[@specialized T] {
      self =>
      def foreach(f: T => Unit): Unit
      def filter(p: T => Boolean) = {
        new View.Filtered[T](self, p)
      }
    }
    
    object View {
      class Filtered[@specialized T](val self: View[T], val p: T => Boolean)
      extends View[T] {
        def foreach(f: T => Unit) = for (v <- self) if (p(v)) f(v)
      }
    }

Sometimes the specialization phase of the compiler will fail to reproduce the correct flattening of the nested classes, so you need to do it yourself.
The particular example in this hint might even work, but in general avoid nesting specialized stuff in specialized stuff.
In the best case, you will receive a warning about some members of the enclosing class not being accessible or not existing.


## Avoid `super` calls

Qualified `super` calls are (perhaps fundamentally) broken with specialization.
Rewiring the super-accessor methods properly in the specialization phase is a nightmare that has not been solved so far.
So, avoid them like the plague, at least for now.
In particular, don't rely that stackable modifications pattern will work with it well (as if anybody's using that one anyway).


## Think about the primitive types you really care about

Blindly specializing on all your primitive types is both unnecessary
and can boost your compilation times to high heaven,
as well as generate thousands of small classes.
So, think about which primitive types your application(s) will actually use.
I usually specialize on `Int`, `Long` and `Double`, in many cases that's enough:

    class Foo[@specialized(Int, Long, Double) T]

I hope this summarizes some of the useful guidelines when dealing with Scala specialization.
I'll add more tips here if I remember some or run into them.

