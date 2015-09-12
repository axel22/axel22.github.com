---
layout: publication
title: Conc-Trees for Functional and Parallel Programming
authors: Aleksandar Prokopec, Martin Odersky
venue: LCPC 2015
permalink: /publications/conc-trees/index.html
---


## Abstract

Parallel algorithms can be expressed more concisely in a functional programming style.
This task is made easier through the use of proper sequence data structures,
which allow splitting the data structure between the processors as easily as concatenating several data structures together.
Efficient update, split and concatenation operations are essential for declarative-style parallel programs.

This paper shows a functional data structure
that can improve the efficiency of parallel programs.
The paper introduces two Conc-Tree variants:
the Conc-Tree list, which provides worst-case O(log n) time
lookup, update, split and concatenation operations,
and the Conc-Tree rope, which additionally provides amortized O(1) time
append and prepend operations.
The paper demonstrates how Conc-Trees implement efficient mutable sequences,
evaluates them against similar persistent and mutable data structures,
and shows up to 3x performance improvements
when applying Conc-Trees to data-parallel operations.



## Links

\[[PDF](/resources/docs/lcpc-conc-trees.pdf)\]
\[[BibTex](/resources/docs/bibtex/conc-trees.bib)\]
\[[Springer]()\]


## References

G. M. Adelson-Velsky and E. M. Landis. An algorithm for the organization of
information. Doklady Akademii Nauk SSSR, 146:263-266, 1962.

Eric Allen, David Chase, Joe Hallett, Victor Luchangco, Jan-Willem Maessen,
Sukyoung Ryu, Guy Steele, and Sam Tobin-Hochstadt. The Fortress Language
Specification. Technical report, Sun Microsystems, Inc., 2007.

Phil Bagwell. Fast Functional Lists, Hash-Lists, Deques, and Variable Length
Arrays. Technical report, 2002.

Philip Bagwell and Tiark Rompf. RRB-Trees: Efficient Immutable Vectors. Technical report, 2011.

Hans-J. Boehm, Russ Atkinson, and Michael Plass. Ropes: An alternative to
strings. Softw. Pract. Exper., 25(12):1315-1330, December 1995.

Ralf Hinze and Ross Paterson. Finger trees: A simple general-purpose data structure. J. Funct. Program., 16(2):197-217, March 2006.

Haim Kaplan and Robert E. Tarjan. Persistent lists with catenation via recursive
slow-down. STOC '95, pages 93-102, New York, NY, USA, 1995. ACM.

Haim Kaplan and Robert E. Tarjan. Purely functional representations of catenable
sorted lists. In Proceedings of the Twenty-eighth Annual ACM Symposium on
Theory of Computing, STOC '96, pages 202-211, New York, NY, USA, 1996. ACM.

Chris Okasaki. Purely Functional Data Structures. PhD thesis, Pittsburgh, PA,
USA, 1996. AAI9813847.

Chris Okasaki. Catenable double-ended queues. In Proceedings of the second ACM
SIGPLAN international conference on Functional programming, pages 66-74. ACM
Press, 1997.

Chris Okasaki. Purely Functional Data Structures. Cambridge University Press,
NY, USA, 1998.

Aleksandar Prokopec. Data Structures and Algorithms for Data-Parallel Computing in a Managed Runtime. PhD thesis, EPFL, 2014.

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. A generic
parallel collection framework. In Proceedings of the 17th international conference
on Parallel processing - Volume Part II, Euro-Par'11, pages 136-147, Berlin, Heidelberg, 2011. Springer-Verlag.

Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky.
Concurrent tries with efficient non-blocking snapshots. PPoPP '12, pages 151-160,
New York, NY, USA, 2012. ACM.

Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. On Lock-Free
Work-stealing Iterators for Parallel Data Structures. Technical report, 2014.

Guy Steele. Organizing functional code for parallel execution; or, foldl and foldr
considered slightly harmful. International Conference on Functional Programming
(ICFP), 2009.
