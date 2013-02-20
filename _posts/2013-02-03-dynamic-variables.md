---
layout: blog
title: Implementing Dynamic Variables
poster: Alex
---


There does not seem to be an efficient way to implement a dynamic variable on the JVM.
What do I mean by this?
There is no efficient way to do the following:

    val dv = new DynamicVariable[String]("initial value")

    def call() {
      println(dv())
    }

    call() // prints `initial value`
    dv := "new value"
    call() // prints `new value`
    
where efficient means that the read `dv()` is as efficient as reading an object instance field.

You could use a global variable, but if your application is multithreaded, it won't work correctly.
The best thing people have come up with is using a [`ThreadLocal`](http://docs.oracle.com/javase/7/docs/api/java/lang/ThreadLocal.html)
to simulate a dynamically scoped variable.
Indeed, this is how Scala does it.
Unfortunately, while a lot of effort was invested to make these efficient in mainstream JVMs,
they are not as [performant as one would like them to be](http://stackoverflow.com/questions/609826/performance-of-threadlocal-variable).
Alternatively, you could pass a `ThreadContext` as an additional argument to every method as is done in JRuby.
Or you could try to enforce that every thread is an instance of a special class and cast `currentThread` to that class.
Neither are appealing.

Why are they important in the first place?
There are many reasons, customizing the execution environment being one of the important applications -- think of
software transactional memory APIs, functional reactive programming APIs, customizing the GUI code context.
They allow looser coupling between parts of the code and induce less boilerplate in situations where procedures
would otherwise be heavy on parameters.
Other use case examples are outlined in the [paper](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.20.6982)
by Hanson and Proebsting.
Their paper describes a nice mechanism to implement dynamic variables in a language such as C or C++.
Alas, the approach is totally inapplicable to the JVM, where there is no concept of pointers, and
particularly of local stack variable addressing.
The more troubling issue is that the `use` statement they describe has linear complexity in the number of currently
used dynamic variables, and the only proposed mechanism to address this is maintaining a hash table,
bringing us back to square one and `ThreadLocal`s. 
And ironically, their implementation uses a thread-local `current` variable, thus relying
on the very mechanism they are trying to implement.
