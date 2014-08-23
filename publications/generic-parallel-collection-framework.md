---
layout: publication
title: Generic Parallel Collection Framework
authors: Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, Martin Odersky
venue: 
permalink: /publications/generic-parallel-collection-framework/index.html
---


## Abstract

Most applications manipulate structured data. Modern languages and platforms provide collection frameworks with basic data structures like lists, hashtables and trees. These data structures have a range of predefined operations which include mapping, filtering or finding elements. Such bulk operations traverse the collection and process the elements sequentially. Their implementation relies on iterators, which are not applicable to parallel operations due to their sequential nature.
We present an approach to parallelizing collection operations in a generic way, used to factor out common parallel operations in collection libraries. Our framework is easy to use and straightforward to extend to new collections. We show how to implement concrete parallel collections such as parallel arrays and parallel hash maps, proposing an efficient solution to parallel hash map construction. Finally, we give benchmarks showing the performance of parallel collection operations.


## Links

\[[Full text](/resources/docs/techrep.pdf)\]


## References

C. P. Kruskall, A. Weiss: Allocating Independent Subtasks on Parallel Processors.
IEEE Transactions on Software engineering, 1985.

C. Polychronopolous, D. Kuck: Guided Self-Scheduling: A Practical Scheduling Scheme for Parallel Supercomputers. IEEE Transactions on Computers, 1987.

S. F. Hummel, E. Schonberg, L. E. Flynn: Factoring: A Method for Schedulling Parallel Loops. Communications of the ACM, 1992.

D. Lea: A Java Fork/Join Framework. 2000.

D. Traore, J.-L. Roch, N. Maillard, T. Gautier, J. Bernard: Deque-free work-optimal parallel STL algorithms. Proceedings of the 14th Euro-Par conference, 2008.

M. Odersky, et al.: An Overview of the Scala Programming Language. Technical Report LAMP-REPORT-2006-001, EPFL, 2006.

M. Odersky, L. Spoon, B. Venners: Programming in Scala. Artima Press, 2008.

M. Odersky: Scala 2.8 collections. EPFL, 2009.

S. Toub: Patterns of Parallel Programming. Microsoft Corporation, 2010.

Doug Lea's Home Page: http://gee.cs.oswego.edu/

R. D. Blumofe, C. E. Leiserson: Scheduling Multithreaded Computations by Work Stealing. 35th IEEE Conference on Foundations of Computer Science, 1994.

G. Cong, S. Kodali, S. Krishnamoorthy, D. Lea, V. Saraswat, T. Wen: Solving Large, Irregular Graph Problems Using Adaptive Work Stealing.
Proceedings of the 2008 37th International Conference on Parallel Processing, 2008.

William Pugh. Skip Lists: A Probabilistic Alternative to Balanced Trees. Communications ACM, volume 33, 1990.


Jean Vuillemin: A data structure for manipulating priority queues. Communications ACM, volume 21, 1978.

H.-J. Boehm, R. Atkinson, M. Plass: Ropes: An Alternative to Strings. Software: Practice and Experience, 1995.

N. Shavit, M. Herlihy: The Art of Multiprocessor Programming. Morgan Kaufmann, 2008.

C. Okasaki: Purely Functional Data Structures. Cambridge University Press, 1999.

M. Odersky, A. Moors: Fighting Bitrot with Types. Foundations of Software Technology and Theoretical Computer Science, 2009.

P. Bagwell: Ideal Hash Trees. 2002.

Iulian Dragos, Martin Odersky: Compiling Generics Through User-Directed Type Specialization. Fourth ECOOP Workshop on Implementa-
tion, Compilation, Optimization of Object-Oriented Languages, Programs and Systems, 2009.

M. Moir, N. Shavit: Concurrent data structures. Handbook of Data Structures and Applications, Chapman and Hall, 2007.

S. P. Jones, R. Leshchinskiy, G. Keller, M. M. T. Chakravarty: Harnessing the Multicores: Nested Data Parallelism in Haskell. Foundations of Software Technology and Theoretical Computer Science, 2008.

Intel Thread Building Blocks: Tutorial: http://www.intel.com. 2010.

A. Buss, Harshvardhan, I. Papadopoulos, O. Tkachyshyn, T. Smith, G. Tanase, N. Thomas, X. Xu, M. Bianco, N. M. Amato, L. Rauchwerger: STAPL: Standard Template Adaptive Parallel Library. Haifa Experimental Systems Conference, 2010.

E. Allen, D. Chase, J. Hallett, V. Luchangco, J.-W. Maessen, S. Ryu, G. L. Steele Jr., S. Tobin-Hochstadt, et al.: The Fortress Language Speciﬁcation. 2008.

G. L. Steele Jr., How to Think about Parallel Programming: Not!: http://www.infoq.com/presentations/Thinking-Parallel-Programming.
2011.

A. Georges, D. Buytaert, L. Eeckhout: Statistically Rigorous Java Performance Evaluation. OOPSLA, 2007.

R. Hinze, R. Paterson: Finger Trees: A Simple General-purpose Data Structure. Journal of Functional Programming, 2006.
