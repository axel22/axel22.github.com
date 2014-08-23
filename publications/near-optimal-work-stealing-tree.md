---
layout: publication
title: Near Optimal Work-Stealing Tree Scheduler for Highly Irregular Data-Parallel Workloads 
authors: Aleksandar Prokopec, Martin Odersky
venue: LCPC 2013
permalink: /publications/near-optimal-work-stealing-tree/index.html
---


## Abstract

We present a work-stealing algorithm for runtime scheduling of data-parallel operations
in the context of shared-memory architectures on data sets with
highly-irregular workloads that are not known a priori to the scheduler.
This scheduler can parallelize loops and operations expressible with a parallel
reduce or a parallel scan.
The scheduler is based on the work-stealing tree data structure, which
allows workers to decide on the work division in a lock-free, workload-driven
manner and attempts to minimize the amount of communication between them.
A significant effort is given to showing that the algorithm has the
least possible amount of overhead.

We provide an extensive experimental evaluation, comparing the advantages
and shortcomings of different data-parallel schedulers in order to
combine their strengths.
We show specific workload distribution patterns appearing in practice
for which different schedulers yield suboptimal speedup, explaining their
drawbacks and demonstrating how the work-stealing tree scheduler overcomes them.
We thus justify our design decisions experimentally, but also provide
a theoretical background for our claims.


## Links

\[[PDF](/resources/docs/lcpc2013_submission_6.pdf)\]


## References

Nimar S. Arora, Robert D. Blumofe, and C. Greg Plaxton. Thread scheduling for multiprogrammed multiprocessors. In Proceedings of the tenth annual ACM symposium on Parallel algorithms and architectures, SPAA ’98, pages 119–129, New York, NY, USA, 1998. ACM.

Robert D. Blumofe, Christopher F. Joerg, Bradley C. Kuszmaul, Charles E. Leiserson, Keith H.Randall, YuliZhou. Cilk: An efficient multithreaded runtime system. In Journal of Parallel and Distributed Computing, pages 207–216, 1995.

Antal Buss, Harshvardhan, Ioannis Papadopoulos, Olga Pearce, Timmie Smith, Gabriel Tanase, Nathan Thomas, Xiabing Xu, Mauro Bianco, Nancy M. Amato, Lawrence Rauchwerger. Stapl: standard template adaptive parallel library. In Proceedings of the 3rd Annual Haifa Experimental Systems Conference, SYSTOR ’10, pages 14:1–14:10, New York, NY, USA, 2010. ACM.

Manuel M. T. Chakravarty, Roman Leshchinskiy, Simon Peyton Jones, Gabriele Keller, Simon Marlow. Data parallel haskell: a status report. In Proceedings of the 2007 workshop on Declarative aspects of multicore programming, DAMP ’07, pages 10–18, New York, NY, USA, 2007. ACM.

Craig Chambers, Ashish Raniwala, Frances Perry, Stephen Adams, Robert R. Henry, Robert Bradshaw, and Nathan Weizenbaum. Flumejava: easy, efficient data-parallel pipelines. In Proceedings of the 2010 ACM SIGPLAN conference on Programming language design and implementation, PLDI ’10, pages 363–375, New York, NY, USA, 2010. ACM.

David Chase, Yossi Lev. Dynamic circular work-stealing deque. In Proceedings of the seventeenth annual ACM symposium on Parallelism in algorithms and architectures, SPAA ’05, pages 21–28, New York, NY, USA, 2005. ACM.

Guojing Cong, Sreedhar B. Kodali, Sriram Krishnamoorthy, Doug Lea, Vijay A. Saraswat, Tong Wen. Solving large, irregular graph problems using adaptive work-stealing. In ICPP, pages 536–545, 2008.

Matteo Frigo, Charles E. Leiserson, Keith H. Randall. The implementation of the Cilk-5 multithreaded language. In Proceedings of the ACM SIGPLAN 1998 conference on Programming language design and implementation, PLDI ’98, pages 212–223, New York, NY, USA, 1998. ACM.

Maurice Herlihy and Nir Shavit. The Art of Multiprocessor Programming. Morgan Kaufmann Publishers Inc., San Francisco, CA, USA, 2008.

Susan Flynn Hummel, Edith Schonberg, and Lawrence E. Flynn. Factoring: a method for scheduling parallel loops. Commun. ACM, 35(8):90–101, August 1992.

Intel Software Network. Intel Cilk Plus. http://cilkplus.org/.

Joseph JáJá. An Introduction to Parallel Algorithms. Addison-Wesley, 1992.

C. Koelbel, P. Mehrotra. Compiling global name-space parallel loops for distributed execution. Parallel and Distributed Systems, IEEE Transactions on, 2(4):440 –451, oct 1991.

Clyde P. Kruskal and Alan Weiss. Allocating independent subtasks on parallel processors. IEEE Trans. Softw. Eng., 11(10):1001–1016, October 1985.

Doug Lea. A java fork/join framework. In Java Grande, pages 36–43, 2000.

C. D. Polychronopoulos and D. J. Kuck. Guided self-scheduling: A practical scheduling scheme for parallel supercomputers. IEEE Trans. Comput., 36(12):1425–1439, December 1987.

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. A generic parallel collection framework. In Proceedings of the 17th International Conference on Parallel Processing - Volume Part II, Euro-Par’11, pages 136–147, Berlin, Heidelberg, 2011. Springer-
Verlag.

James Reinders. Intel threading building blocks. O’Reilly & Associates, Inc., Sebastopol, CA, USA, first edition, 2007.

Vivek Sarkar. Optimized unrolling of nested loops. In Proceedings of the 14th international conference on Supercomputing, ICS ’00, pages 153–166, New York, NY, USA, 2000. ACM.

Olivier Tardieu, Haichuan Wang, and Haibo Lin. A work-stealing scheduler for X10’s task parallelism with suspension. In Proceedings of the 17th ACM SIGPLAN symposium on Principles and Practice of Parallel Programming, PPoPP ’12, pages 267–276, New York, NY, USA, 2012. ACM.

T. H. Tzen and L. M. Ni. Trapezoid self-scheduling: A practical scheduling scheme for parallel compilers. IEEE Trans. Parallel Distrib. Syst., 4(1):87–98, January 1993
