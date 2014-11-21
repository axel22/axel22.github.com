---
layout: publication
title: Efficient Lock-Free Work-stealing Iterators for Data-Parallel Collections 
authors: Aleksandar Prokopec, Dmitry Petrashko, Martin Odersky
venue: Parallel, Distributed, and Network-Based Processing 2015 (PDP 2015)
permalink: /publications/efficient-lock-free-work-stealing-iterators.html
---


## Abstract

High-level data-structures are an important foundation for most applications.
With the rise of multicores, there is a trend of supporting data-parallel collection operations in general purpose programming languages.
However, these operations often incur high-level abstraction and scheduling penalties.

We present a generic data-parallel collections design based on work-stealing for shared-memory architectures that overcomes abstraction penalties through callsite specialization of data-parallel operation instances.
Moreover, we introduce *work-stealing iterators* that allow more fine-grained and efficient work-stealing.
By eliminating abstraction penalties and making work-stealing data-structure-aware we achieve several dozen times better performance compared to existing JVM-based approaches.


## Links

\[[PDF]()]
\[[BibTex]()\]
\[[IEEE Xplore](http://ieeexplore.ieee.org/Xplore/home.jsp)\]


## References

E. Burmako and M. Odersky. Scala Macros, a Technical Report. In Third International Valentin Turchin Workshop on Metacomputation, 2012.

I. Dragos and M. Odersky. Compiling generics through user-directed type specialization. ICOOOLPS ’09, pages 42–47, New York, NY, USA, 2009. ACM.

C. P. Kruskal and A. Weiss. Allocating independent subtasks on parallel processors. IEEE Trans. Softw. Eng., 11(10):1001–1016, Oct. 1985.

D. Lea. A java fork/join framework. In Java Grande, pages 36–43, 2000.

C. D. Polychronopoulos and D. J. Kuck. Guided self-scheduling: A practical scheduling scheme for parallel super-computers. IEEE Trans. Comput., 36(12):1425–1439, Dec. 1987.

A. Prokopec. Data Structures and Algorithms for Data-Parallel Computing in a Managed Runtime. Phd thesis, École polytechnique fédérale de Lausanne, 2014.

A. Prokopec, P. Bagwell, T. Rompf, and M. Odersky. A generic parallel collection framework. Euro-Par’11, pages 136–147, Berlin, Heidelberg, 2011. Springer-Verlag.

A. Prokopec and M. Odersky. Near optimal work-stealing tree scheduler for highly irregular data-parallel workloads. 2013.

T. H. Tzen and L. M. Ni. Trapezoid self-scheduling: A practical scheduling scheme for parallel compilers. IEEE Trans. Parallel Distrib. Syst., 4(1):87–98, Jan. 1993.
