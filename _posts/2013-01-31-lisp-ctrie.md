---
layout: blog
title: A Lisp Ctrie implementation
poster: Alex
---


I was aware of the [Java implementation of Ctrie](https://github.com/flegall/concurrent-hash-trie)
for some time now.
The original Ctrie was implemented by myself in Scala, and is a part of the Scala standard library since version 2.10.
We have published two papers about the Ctrie, the initial one at [LCPC 2011](http://lcpc11.cs.colostate.edu/)
and another at [PPOPP 2012](http://dynopt.org/ppopp-2012/), which hints how concurrent data structure snapshots can be computed efficiently,
in a lock-free manner.

I've just found out that there is now another [Java implementation](https://github.com/romix/java-concurrent-hash-trie-map)
as well as a [Common Lisp implementation of Ctrie](https://github.com/danlentz/cl-ctrie/)
available on GitHub.
It's great to know that people got interested and there are other implementations out there.





