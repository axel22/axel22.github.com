---
layout: blog
title: Implementing Dynamic Variables
poster: Alex
---


There does not seem to be an efficient way to implement a dynamic variable on the JVM.
The best thing people have come up with is using a [`ThreadLocal`](http://docs.oracle.com/javase/7/docs/api/java/lang/ThreadLocal.html)
to simulate a dynamically scoped variable.
Unfortunately, while a lot of effort was invested to make these efficient in mainstream JVMs,
they are not as [performant as one would like them to be](http://stackoverflow.com/questions/609826/performance-of-threadlocal-variable).

Why are they important in the first place?
There are many reasons, customizing the execution environment being one of the important applications -- think of
software transactional memory APIs, functional reactive programming APIs, customizing the GUI code context.
They allow looser coupling between parts of the code and induce less boilerplate in situations where procedures
would otherwise be heavy on parameters.
Other use case examples are outlined in the [paper](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.20.6982)
by Hanson and Proebsting.
Their paper describes a nice mechanism to implement dynamic variables in a language such as C or C++.
Alas, the approach is totally inapplicable to the JVM, where there is not concept of pointers, and
particularly of local stack variables addressing.
The more troubling issue is that the `use` statement they describe has linear complexity in the number of currently
used dynamic variables, and the only proposed mechanism to address this is maintaining a hash table,
bringing us back to square one and `ThreadLocal`s.
Ironically, their implementation relies on the use of a thread-local `current` variable, thus relying
on the very mechanism they are trying to implement.
