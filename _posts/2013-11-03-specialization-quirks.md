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
Problem is, specialization interacts with a some edge-cases in the language and obscure language features in ways
that are not expected.
Sometimes, these are just unresolved bugs.
Here are some tips and tricks that might help you.

Note: when used correctly, this is a powerful and extremely useful feature few JVM languages (if any) can parallel these days.
Don't get scared by these tips.


## Know the conditions for method specialization

Perhaps you're not aware of this, but even if a method is a part of a specialized class and contains specializable code,
it will not really be specialized unless the specialized type appears in its argument list or its return type.
For example:

    def getValue[@specialized T]: T = ???

    class Foo[@specialized T] {
      var value: T = _
      def reset() {
        value = getValue
      }
    }

Above, `reset` is not specialized. This is an elaborate design decision taken in specialization.
If you want `reset` to be specialized, do something like this:

    def reset(): T = {
      value = getValue
      value
    }

> Be aware that for a method to be specialized, it must either take an argument of specializable type from its environment, or it must return a value of such a type.

But that's not all. If more than one type-parameter is specialized, then specialized class instances are created only if all the specialized type parameters are instantiated at a primitive type. Here's a quiz:

    class Foo[@specialized T, @specialized S, R] {
      var tv: T = _
      var sv: S = _
      var rv: R = _
    }
    val x = new Foo[Int, String, String]
    val y = new Foo[Int, Long, String]

Will `x` and/or `y` refer to a specialized object?

Specialization never generates a specialized class that is a combination of specialized and generic type parameters that have been annotated with `@specialized`.
The compiler will "rewrite" the last 2 lines to:

    val x = new Foo[java.lang.Integer, String, String]
    val y = new Foo$mcIJ$sp

So, `y` is instantiated with a specialized class `Foo$mcIJ$sp` because both `T` and `S` are instantiated at primitive types `Int` and `Long`, but `x` refers to a generic object.

> Specialization has an all-or-nothing semantics when picking a specialized implementation -- all the `@specialized`-annotated type parameters must be instantiated as primitive types to yield a specialized object.

Don't be surprised if half-specialized constructor invocations end up creating object instances that box everything.
This applies to methods as well as constructor invocations.


## Initialize specialized values outside constructor body

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
      private val insertsBuffer = new Traversable.Buffer[(K, V)]
      private val clearsBuffer = new Traversable.Buffer[Unit]
    
      def inserts: Traversable[(K, V)] = insertsBuffer
      def clears: Traversable[Unit] = clearsBuffer
    }

If you try to instantiate `Actions` in Scala 2.10.1, you'll get:

    Exception in thread "main" java.lang.IllegalAccessError
      at org.test.Actions$mcI$sp.<init>(Main.scala:57)
      at org.test.Main$.main(Main.scala:21)
      at org.test.Main.main(Main.scala)

I won't get into why the above fails the way it fails - suffices to say that the specialization creates specialized fields in the specialized variants of the class 
and does not properly rewire the bridges for the field accessor methods in the constructor body correctly.
Here is the pattern to solve the above issues - create a method `init` in which you initialize the troublesome fields:

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

Make sure that the `init` method takes an argument of the specialized type.
This will enforce proper specialization and accessing the fields properly.
Note that I spent some time minimizing the above example from real, bigger codebase, and it's not really that easy to trigger it.
I won't get into the precise conditions for this issue to happen, as this is buggy behaviour anyway -- the important thing is to know how to solve these kind of `IllegalAccessError`s if you run into them.

> When initializing more complex specialized classes, consider creating an `init` method to initialize specializable fields.


## Resolve access problems using the `package`-`private` modifier

When you instantiate an anonymous class inside a specialized class and the
anonymous class accesses private members of the surrounding specialized class,
you might get a compiler error message telling you that the member cannot be accessed.
In the following example:

    class Buffer[@specialized T] {
      private var array: Array[T] = ???
      def iterator = new Iterator[T] {
        var i = 0
        def hasNext = i < array.length
        def next() = ???
      }
    }

an anonymous iterator should have access to the specialized array of the surrounding buffer.
Normally, the compiler should remove the `private` modifier of the surrounding class,
so that those fields don't end up `private` at the bytecode level (this is the case for both Scala and Java, I believe).
With specialization this sometimes does not happen.
Solution -- just make the problematic members `package`-`private`.

> Use the `package-private` modifier for fields meant to be private to resolve access problems in inner classes.


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

> Use traits in specialized class hierarchies to ensure that all the specialized methods are correctly inherited.


## Avoid `trait`s where possible

This seems to contradict the previous hint.
Well, traits are problematic.
They are not supported natively on the JVM, so the compiler has to generate a lot of bridge methods each time
an abstract or a concrete class extend a trait.
If you take a look at the standard collections code, there are classes like `AbstractSeq` which serve no
purpose other than to force the compiler to spit out all the bridge methods into a base class like `AbstractSeq`
so that its subclasses don't have to have all the bridge methods -- instead,
they inherit them the normal JVM way from this base class, e.g. `AbstractSeq`.
I've handwaved the details away here -- the important thing is that this technique reduces the standard library
size significantly.

Now, thinking in terms of specialization -- a specialized method (one inside a specialized class)
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
Extending it for a single type, e.g. `Int`, will inherit the specialized variant `AbstractObserver$mcI$sp`
and you won't lose specialized methods as described in the previous hint.

> Use abstract specialized superclasses for anonymous classes and classes extending superclasses with a concrete specialized type parameter to save compilation time and make compiler output smaller.


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

> In general, avoid nesting specialized classes.


## Avoid `super` calls

Qualified `super` calls are (perhaps fundamentally) broken with specialization.
Rewiring the super-accessor methods properly in the specialization phase is a nightmare that has not been solved so far.
So, avoid them like the plague, at least for now.
In particular, don't rely that stackable modifications pattern will work with it well (as if anybody's using that one anyway).

> Avoid `super` calls.


## Be wary of `var`s

Be aware that `var`s with specializable types may result in an increase in memory footprint. Namely, because of the limitations of the JVM in combination with the current specialization design in which subclasses are specializations of the generic class, the following class:

    class Foo[@specialized(Int) T](var x: T)

will result in a generic class `Foo` with one field `x`, and a specialized class `Foo$mcI$sp` with **an additional field** `x$mcI$sp`:

    class Foo$mcI$sp(var x$mcI$sp: Int)
    extends Foo[Int](null)

The original field `x` is initialized to `null` in a specialized subclass.

> Avoid or minimize `var`s in specialized classes if memory footprint is a concern.

So what can you do if you still need those `var`s but want to reduce memory footprint?
You can use the following trick.
Lets say that you are implementing a closed addressing hash table and need an `Entry` object for each key.
Normally, you'd declare a specialized class `Entry` with a `key` field that would be duplicated.
Instead, you can declare a trait:

    trait Entry[@specialized(Int, Long) K] {
      def key: K
      def key_=(k: K): Unit
    }

Now, you can have concrete implementations of that trait:

    final class AnyRefEntry[K](var key: K) extends Entry[K]
    final class IntEntry(var key: Int) extends Entry[Int]
    final class LongEntry(var key: Long) extends Entry[Long]

Each of these concrete entries will have only a single field.
To instantiate the correct `Entry` implementation in the hash table implementation,
use a typeclass resolved when the hash table is instantiated:

    trait Entryable[@specialized(Int, Long) K] {
      def newEntry(k: K): Entry[K]
    }
    
    implicit def anyRefEntryable[K] = new Entryable[K] {
      def newEntry(k: K) = new AnyRefEntry(k)
    }
    
    implicit def intEntryable = new Entryable[Int] {
      def newEntry(k: Int) = new IntEntry(k)
    }
    
    class HashTable[@specialized(Int, Long) K]
      (implicit val e: Entryable[K])
    
The most specific implicit is then resolved when
calling `new HashTable`.


## Think about the primitive types you really care about

Blindly specializing on all your primitive types is both unnecessary
and can boost your compilation times to high heaven,
as well as generate thousands of small classes.
So, think about which primitive types your application(s) will actually use.
I usually specialize on `Int`, `Long` and `Double`, in many cases that's enough:

    class Foo[@specialized(Int, Long, Double) T]

In fact, you will find that the `FunctionN` classes in the Scala standard library are specialized only for specific types. And the higher the arity, the less they're specialized.

> Restrict your specialized primitive types to ensure shorter compilation times and make compiler output smaller.


## Avoid using specialization and implicit classes

Instead of:

    implicit class MyTupleOps[@specialized T, @specialized S](tuple: (T, S)) {
      def reverse: (S, T) = (tuple._2, tuple._1)
    }

Do this:

    class MyTupleOps[@specialized T, @specialized S](val tuple: (T, S)) {
      def reverse: (S, T) = (tuple._2, tuple._1)
    }
    implicit def tupleOps[@specialized T, @specialized S](tuple: (T, S)) =
      new MyTupleOps[T, S](tuple)

I've ran across situations when specialized implicit classes compiled in a separate compilation run do not pickle the symbols correctly.
While this will probably be fixed in the future, if you run into error messages telling you that the `MyTupleOps` symbol is not available, the above is likely to solve the issue.


I hope this summarizes some of the useful guidelines when dealing with Scala specialization.
I'll add more tips here if I remember some or run into them.

