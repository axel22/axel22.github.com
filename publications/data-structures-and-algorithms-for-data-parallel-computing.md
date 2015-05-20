---
layout: publication
title: PhD Thesis - Data Structures and Algorithms for Data-Parallel Computing in a Managed Runtime
authors: Aleksandar Prokopec
venue: EPFL
permalink: /publications/data-structures-and-algorithms-for-data-parallel-computing/index.html
---



## Abstract

The data-parallel programming model fits nicely with the existing
declarative-style bulk operations that augment
collection libraries in many languages today.
Data collection operations like reduction, filtering or mapping
can be executed by a single processor or many processors at once.
However, there are multiple challenges to overcome when parallelizing collection operations.

First, it is challenging to construct a collection in parallel by multiple processors.
Traditionally, collections are backed by data structures with thread-safe variants of their update operations.
Such data structures are called concurrent data structures.
Their update operations require interprocessor synchronization
and are generally slower than the corresponding single-threaded update operations.
Synchronization costs can easily invalidate performance gains
from parallelizing bulk operations such as mapping or filtering.
This thesis presents a parallel collection framework with a range of data structures
that reduce the need for interprocessor synchronization,
effectively boosting data-parallel operation performance.
The parallel collection framework is implemented in Scala,
but the techniques in this thesis can be applied to other managed runtimes.

Second, most concurrent data structures can only be traversed
in the absence of concurrent modifications.
We say that such concurrent data structures are *quiescently consistent*.
The task of ensuring quiescence falls on the programmer.
This thesis presents a novel, lock-free, scalable concurrent data structure
called a *Ctrie*, which supports a linearizable, lock-free, constant-time
snapshot operation.
The Ctrie snapshot operation is used to parallelize Ctrie operations
without the need for quiescence.
We show how the linearizable, lock-free, constant-time snapshot operation
can be applied to different concurrent, lock-free tree-like data structures.

Finally, efficiently assigning parts of the computation to different processors, or *scheduling*, is not trivial.
Although most computer systems have several identical CPUs,
memory hiearchies, cache-coherence protocols and interference with
concurrent processes influence the effective speed of a CPU.
Moreover, some data-parallel operations inherently require more work
for some elements of the collection than others --
we say that no data-parallel operation has a *uniform workload* in practice.
This thesis presents a novel technique for parallelizing highly irregular computation workloads,
called the *work-stealing tree scheduling*.
We show that the work-stealing tree scheduler outperforms other schedulers
when parallelizing highly irregular workloads,
and retains optimal performance when parallelizing more uniform workloads.

Concurrent algorithms and data structure operations in this thesis are linearizable and lock-free.
We present pseudocode with detailed correctness proofs for concurrent data structures and algorithms in this thesis,
validating their correctness, identifying linearization points and showing their lock-freedom.



## Links

\[[PDF](/resources/docs/my_thesis.pdf)\]
\[[Infoscience](http://infoscience.epfl.ch/record/200977?ln=en)\]
\[[General Public Presentation](https://www.youtube.com/watch?v=mbvdj4qnD-4)\]


## References

G. M. Adelson-Velsky and E. M. Landis. An algorithm for the organization of information. Doklady Akademii Nauk SSSR, 146: 263266, 1962.

Ole Agesen, David L. Detlefs, Christine H. Flood, Alexander T. Garthwaite, Paul A. Martin, Nir N. Shavit, and Guy L. Steele Jr. Dcas-based concurrent deques, 2000.

Eric Allen, David Chase, Joe Hallett, Victor Luchangco, Jan-Willem Maessen, Sukyoung Ryu, Guy L. Steele Jr., and Sam Tobin. The Fortress Language Specification. Technical report, Sun Microsystems, Inc., 2007. URL http: //research.sun.com/projects/plrg/Publications/fortress1.0beta.pdf.

M. Areias and R. Rocha. A Lock-Free Hash Trie Design for Concurrent Tabled Logic Programs. In C. Grelck, editor, 7th International Symposium on High-level Parallel Programming and Applications (HLPP 2014), pages 259 278, Amsterdam, Netherlands, July 2014.

Nimar S. Arora, Robert D. Blumofe, and C. Greg Plaxton. Thread scheduling for multiprogrammed multiprocessors. In Proceedings of the tenth annual ACM symposium on Parallel algorithms and architectures, SPAA 98, pages 119 129, New York, NY, USA, 1998. ACM. ISBN
0-89791-989-0. 

Arvind, R. S. Nikhil, and K. K. Pingali. I-structures: Data structures for parallel computing. ACM Trans. Prog. Lang. and
Sys., 11(4):598 632, October 1989.

Phil Bagwell. Ideal hash trees, 2001.

Phil Bagwell. Fast Functional Lists, Hash-Lists, Deques, and Variable Length Arrays. Technical report, 2002.

Philip Bagwell and Tiark Rompf. RRB-Trees: Efficient Immutable Vectors. Technical report, 2011.

Douglas Baskins. Judy array implementation. http://judy.sourceforge.net/, 2000.

Guy E. Blelloch. Nesl: A nested data-parallel language. Technical report, Pittsburgh, PA, USA, 1992.

Robert D. Blumofe and Charles E. Leiserson. Scheduling
multithreaded computations by work stealing. J. ACM, 46(5):720–748, September
1999. ISSN 0004-5411.

Robert D. Blumofe, Christopher F. Joerg, Bradley C. Kuszmaul, Charles E.
Leiserson, Keith H. Randall, and Yuli Zhou. Cilk: An efficient multithreaded
runtime system. In Journal of Parallel and Distributed Computing, pages 207–216,
1995.

Hans-J. Boehm, Russ Atkinson, and Michael Plass. Ropes: An alternative to strings. Softw. Pract. Exper., 25(12):
1315–1330, December 1995. ISSN 0038-0644

Nathan Bronson. Composable Operations on High-Performance Concurrent Collections. PhD thesis, 2011.

Nathan Bronson. Scalastm implementation. https://nbronson.github.io/scala-stm/, 2011.

Nathan G. Bronson, Jared Casper, Hassan Chafi, and Kunle Olukotun. A practical concurrent binary search tree. SIGPLAN Not., 45(5):257–268, January 2010. ISSN 0362-1340.

Nathan G. Bronson, Hassan Chafi, and Kunle Olukotun. CCSTM: A library-based stm for scala. In The First
Annual Scala Workshop at Scala Days, 2010.

Michael G. Burke, Kathleen Knobe, Ryan Newton, and Vivek Sarkar. Concurrent collections programming model. In Encyclopedia of Parallel Computing, pages 364–371. 2011.

Eugene Burmako and Martin Odersky. Scala Macros, Technical Report. In Third International Valentin Turchin Workshop on Metacom-
putation, 2012. URL http://scalamacros.org/.

Antal Buss, Harshvardhan, Ioannis Papadopoulos, Nancy M. Amato, and Lawrence Rauchwerger.
Stapl: standard template adaptive parallel library.
In Proceedings of the 3rd Annual Haifa Experimental Systems Conference, SYSTOR ’10, pages 14:1–14:10, New York, NY, USA, 2010. ACM. ISBN 978-1-60558-908-4

Bradford L. Chamberlain. A brief overview of Chapel, 2013.

Philippe Charles, Christian Grothoff, Vijay Saraswat, Christoph von Praun, and Vivek Sarkar. X10: an object-oriented approach to non-uniform cluster computing. In Proceedings of the 20th annual ACM SIGPLAN conference on Object-oriented pro-
gramming, systems, languages, and applications, OOPSLA ’05, pages 519–538, New
York, NY, USA, 2005. ACM. ISBN 1-59593-031-0

David Chase and Yossi Lev. Dynamic circular work-stealing deque.
In Proceedings of the seventeenth annual ACM symposium on Parallelism in algorithms and architectures, SPAA ’05, pages 21–28, New York, NY, USA, 2005. ACM. ISBN 1-58113-986-1

Cliff Click. Towards a scalable non-blocking coding style, 2007. URL http://www.azulsystems.com/events/javaone_2007/2007_LockFreeHash.pdf

Guojing Cong, Sreedhar B. Kodali, Sriram Krishnamoorthy, Doug Lea, Vijay A. Saraswat, and Tong Wen. Solving large, irregular graph problems using adaptive work-stealing. In ICPP, pages 536–545, 2008.

Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.
Introduction to Algorithms. The MIT Press, 2 edition, 2001.

Rene De La Briandais.
File searching using variable length keys.
In Papers Presented at the March 3-5, 1959, Western Joint Computer Conference,
IRE-AIEE-ACM ’59 (Western), pages 295–298, New York, NY, USA,
1959. ACM.

Iulian Dragos. Compiling Scala for Performance. PhD thesis, IC, Lausanne, 2010.

Iulian Dragos and Martin Odersky. Compiling generics through user-directed type specialization. In Proceedings of the 4th workshop on the Implementation, Compilation, Optimization of Object-Oriented Languages and Programming Systems, ICOOOLPS ’09, pages 42–47, New York, NY, USA, 2009. ACM

Faith Ellen, Panagiota Fatourou, Eric Ruppert, and Franck van Breugel. Non-blocking binary search trees. In Proceedings of the 29th ACM SIGACT-SIGOPS Symposium on Principles of Distributed Computing, PODC ’10, pages 131–140, New York, NY, USA, 2010. ACM. ISBN 978-1-60558-888-9. doi: 10.1145/1835698.1835736. URL http://doi.acm.org/10.1145/1835698.1835736.

Faith Fich, Danny Hendler, and Nir Shavit. On the inherent weakness of conditional synchronization primitives. In Proceed-
ings of the Twenty-third Annual ACM Symposium on Principles of Distributed Computing, PODC ’04, pages 80–87, New York, NY, USA, 2004. ACM. ISBN 1-58113-802-4. doi: 10.1145/1011767.1011780. URL http://doi.acm.org/10.1145/1011767.1011780.

Edward Fredkin. Trie memory. Commun. ACM, 3(9):490–499, September 1960. ISSN 0001-0782. doi: 10.1145/367390.367400. URL http://doi.acm.org/10.1145/367390.367400.

Daniel Friedman and David Wise. The impact of applicative programming on multiprocessing. In International Conference on Parallel
Processing, 1976.

Matteo Frigo, Charles E. Leiserson, and Keith H. Randall. The implementation of the Cilk-5 multithreaded language. In Proceedings of the ACM SIGPLAN 1998 conference on Programming language design and implementation, PLDI ’98, pages 212–223, New York, NY, USA, 1998.
ACM. ISBN 0-89791-987-4. doi: 10.1145/277650.277725. URL http://doi.acm.org/10.1145/277650.277725.

Andy Georges, Dries Buytaert, and Lieven Eeckhout. Statistically rigorous java performance evaluation. In OOPSLA, pages 57–76, 2007.
[Goetz et al.(2006)Goetz, Bloch, Bowbeer, Lea, Holmes, and Peierls] Brian Goetz, Joshua Bloch, Joseph Bowbeer, Doug Lea, David Holmes, and Tim Peierls. Java Concurrency in Practice. Addison-Wesley Longman, Amsterdam, 2006. ISBN 0321349601. URL http://www.amazon.de/
Java-Concurrency-Practice-Brian-Goetz/dp/0321349601.

Philipp Haller, Aleksandar Prokopec, Heather Miller, Viktor Klang, Roland Kuhn, and Vojin Jovanovic. Scala improvement proposal: Futures and promises (SIP-14). 2012.
See http://docs.scala-lang.org/sips/pending/futures-promises.html.

Jr. R. H. Halstead. MultiLISP: A language for concurrent symbolic computation. ACM Trans. Prog. Lang. and Sys., 7(4):501–538, October 1985.

Timothy L. Harris. A pragmatic implementation of non-blocking linked-lists. In Proceedings of the 15th International Conference on Distributed Computing, DISC ’01, pages 300–314, London, UK, UK, 2001. Springer-Verlag. ISBN 3-540-42605-1. URL http://dl.acm.org/citation.cfm?id=645958.676105.

Timothy L. Harris, Keir Fraser, and Ian A. Pratt. A practical multi-word compare-and-swap operation. In Proceedings of the 16th International Conference on Distributed Computing, DISC ’02, pages 265–279, London, UK, UK, 2002. Springer-Verlag. ISBN 3-540-00073-9. URL
http://dl.acm.org/citation.cfm?id=645959.676137.

Jr. Henry C. Baker and Carl Hewitt. The incremental garbage collection of processes. In Proc. Symp. on Art. Int. and Prog. Lang.,
1977.

Maurice Herlihy. A methodology for implementing highly concurrent data objects. ACM Trans. Program. Lang. Syst., 15(5):745–770, November 1993.
ISSN 0164-0925. doi: 10.1145/161468.161469. URL http://doi.acm.org/10.
1145/161468.161469.

Maurice Herlihy and J. Eliot B. Moss. Transactional memory: Architectural support for lock-free data structures. In Proceedings of the 20th Annual International Symposium on Computer Architecture, ISCA ’93, pages 289–300, New York, NY, USA, 1993. ACM. ISBN 0-8186-3810-9. doi: 10.1145/165123.165164.
URL http://doi.acm.org/10.1145/165123.165164.

Maurice Herlihy and Nir Shavit. The Art of Multiprocessor Programming. Morgan Kaufmann Publishers Inc., San Francisco, CA, USA, 2008.
ISBN 0123705916, 9780123705914.

Maurice Herlihy and Jeannette M. Wing. Linearizability: A correctness condition for concurrent objects. ACM Transactions on Programming
Languages and Systems, 12(3):463–492, July 1990.

Ralf Hinze and Ross Paterson. Finger trees: A simple general-purpose data structure. J. Funct. Program., 16(2):197–217, March 2006.
ISSN 0956-7968. doi: 10.1017/S0956796805005769. URL http://dx.doi.org/10.1017/S0956796805005769.

Susan Flynn Hummel, Edith Schonberg, and Lawrence E. Flynn. Factoring: a method for scheduling parallel loops. Commun. ACM, 35(8):90–101, August 1992. ISSN 0001-0782. doi:10.1145/135226.135232. URL http://doi.acm.org/10.1145/135226.135232.

Kenneth E. Iverson. A programming language. John Wiley & Sons, Inc., New York, NY, USA, 1962. ISBN 0-471430-14-5.

Richard E. Jones and Rafael Dueire Lins. Garbage Collection: Algorithms for Automatic Dynamic Memory Management. John Wiley, 1996. ISBN
0-471-94148-4.

Haim Kaplan and Robert E. Tarjan. Persistent lists with catenation via recursive slow-down. In Proceedings of the Twenty-seventh Annual
ACM Symposium on Theory of Computing, STOC ’95, pages 93–102, New York, NY, USA, 1995. ACM. ISBN 0-89791-718-9. doi: 10.1145/225058.225090. URL http://doi.acm.org/10.1145/225058.225090.

Tom Knight. An architecture for mostly functional languages. In Proceedings of the 1986 ACM Conference on LISP and Functional Programming, LFP ’86, pages 105–112, New York, NY, USA, 1986. ACM. ISBN 0-89791-200-4. doi:10.1145/319838.319854. URL http://doi.acm.org/10.1145/319838.319854

C. Koelbel and P. Mehrotra. Compiling global name-space parallel loops for distributed execution. Parallel and Distributed Systems, IEEE
Transactions on, 2(4):440 –451, oct 1991. ISSN 1045-9219. doi: 10.1109/71.97901.

Clyde P. Kruskal and Alan Weiss. Allocating independent subtasks on parallel processors. IEEE Trans. Softw. Eng., 11(10):1001–1016,
October 1985. ISSN 0098-5589. doi: 10.1109/TSE.1985.231547. URL http://dx.doi.org/10.1109/TSE.1985.231547

H. T. Kung and Philip L. Lehman. Concurrent manipulation of binary search trees. ACM Trans. Database Syst., 5(3):354–382, September 1980. ISSN 0362-5915. doi: 10.1145/320613.320619. URL http://doi.acm.org/10.1145/320613.320619

Doug Lea. A java fork/join framework. In Proceedings of the ACM 2000 Conference on Java Grande, JAVA ’00, pages 36–43, New York, NY, USA, 2000.
ACM. ISBN 1-58113-288-3. doi: 10.1145/337449.337465. URL http://doi.acm.org/10.1145/337449.337465.

Doug Lea. Doug lea’s workstation, 2014. URL http://g.oswego.edu/

Dan Lentz. Common lisp ctrie implementation, 2013. URL https://github.com/danlentz/cl-ctrie

Roman Levenstein. Java ctrie implementation, 2012. URL https://github.com/romix/java-concurrent-hash-trie-map

W. Litwin, Y. Sagiv, and K. Vidyasankar. Concurrency and trie hashing. Acta Inf., 26(7):597–614, September 1989. ISSN 0001-5903. doi: 10.1007/BF00288973. URL http://dx.doi.org/10.1007/BF00288973

Witold Litwin. Trie hashing. In Proceedings of the 1981 ACM SIGMOD International Conference on Management of Data, SIGMOD ’81, pages 19–29, New York, NY, USA, 1981. ACM. ISBN 0-89791-040-0. doi: 10.1145/582318.582322
URL http://doi.acm.org/10.1145/582318.582322

Henning Makholm. Answer at the mathematics forum (stackexchange). https://math.stackexchange.com/questions/297375/bins-in-balls-where-
bin-size-grows-exponentially, 2013

Erik Meijer. Your mouse is a database. Commun. ACM, 55(5):66–73, 2012.

John M. Mellor-Crummey. Concurrent queues: Practical fetch-and-Φ algorithms. 1987.

Maged M. Michael. High performance dynamic lock-free hash tables and list-based sets. In Proceedings of the Fourteenth Annual ACM Symposium on Parallel Algorithms and Architectures, SPAA ’02, pages 73–82, New York,
NY, USA, 2002. ACM. ISBN 1-58113-529-7. doi: 10.1145/564870.564881. URL
http://doi.acm.org/10.1145/564870.564881.

Maged M. Michael. Hazard pointers: Safe memory reclamation for lock-free objects. IEEE Trans. Parallel Distrib. Syst., 15(6):491–504, June 2004.
ISSN 1045-9219. doi: 10.1109/TPDS.2004.8. URL http://dx.doi.org/10.1109/TPDS.2004.8.

Maged M. Michael and Michael L. Scott. Simple, fast, and practical non-blocking and blocking concurrent queue algorithms. In PODC, pages
267–275, 1996.

Mark Moir and Nir Shavit. Concurrent data structures, 2004.

Martin Odersky. Scala 2.8 collections. Technical report, EPFL, Lausanne, November 2009.

Martin Odersky and Adriaan Moors. Fighting bit rot with types (experience report: Scala collections). In Ravi Kannan and K Narayan

Kumar, editors, IARCS Annual Conference on Foundations of Software Technology and Theoretical Computer Science (FSTTCS 2009), volume 4 of Leibniz International Proceedings in Informatics (LIPIcs), pages 427–451, Dagstuhl,
Germany, 2009. Schloss Dagstuhl–Leibniz-Zentrum fuer Informatik. ISBN 978-3-939897-13-2. doi: http://dx.doi.org/10.4230/LIPIcs.FSTTCS.2009.2338. URL http://drops.dagstuhl.de/opus/volltexte/2009/2338

Chris Okasaki. Purely Functional Data Structures. PhD thesis, Pittsburgh, PA, USA, 1996. AAI9813847.

Chris Okasaki. Catenable double-ended queues. In Proceedings of the second ACM SIGPLAN international conference on Functional programming,
pages 66–74. ACM Press, 1997.

Chris Okasaki. Purely Functional Data Structures. Cambridge University Press, New York, NY, USA, 1998. ISBN 0-521-63124-6.

Simon Peyton Jones. Harnessing the multicores: Nested data parallelism in haskell. In Proceedings of the 6th Asian Symposium on Programming
Languages and Systems, APLAS ’08, pages 138–138, Berlin, Heidelberg, 2008.
Springer-Verlag. ISBN 978-3-540-89329-5. doi: 10.1007/978-3-540-89330-1_10.
URL http://dx.doi.org/10.1007/978-3-540-89330-1_10

C. D. Polychronopoulos and D. J. Kuck. Guided self-scheduling: A practical scheduling scheme for parallel supercomputers. IEEE Trans. Comput., 36(12):1425–1439, December 1987. ISSN 0018-9340. doi: 10.1109/TC.1987.5009495. URL http://dx.doi.org/10.1109/TC.1987.5009495.

Aleksandar Prokopec. https://github.com/storm-enroute/reactive-
collections (Reactive Collections repository), 2014.

Aleksandar Prokopec. Scalameter website, 2014b. URL http://scalameter.github.io

Aleksandar Prokopec and Dmitry Petrashko. Scalablitz documentation, 2013. URL http://scala-blitz.github.io/home/documentation/

Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. Cache-Aware Lock-Free Concurrent Hash Tries.
Technical report, 2011.

Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. Lock-free resizeable concurrent tries. In LCPC,
pages 156–170, 2011.

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. A generic parallel collection framework. In Proceedings of the 17th international conference on Parallel processing - Volume Part II, Euro-Par’11, pages 136–147, Berlin, Heidelberg, 2011c. Springer-
Verlag. ISBN 978-3-642-23396-8. URL http://dl.acm.org/citation.cfm?id=2033408.2033425

Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky.
Concurrent tries with efficient non-blocking snapshots. pages 151–160, 2012a.
doi: 10.1145/2145816.2145836. URL http://doi.acm.org/10.1145/2145816.2145836.

Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and Martin Odersky.
Flowpools: A lock-free deterministic concurrent dataflow abstraction. In LCPC, pages 158–173, 2012.

Aleksandar Prokopec, Philipp Haller, and Martin Odersky. Containers and Aggregates, Mutators and Isolates for Reactive Programming. In Scala 2014, 2014.
URL https://github.com/storm-enroute/reactive-collections,http:
//reactive-collections.com/

Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. On Lock-Free Work-stealing Iterators for
Parallel Data Structures. Technical report, 2014.

William Pugh. Skip lists: A probabilistic alternative to balanced trees. Commun. ACM, 33(6):668–676, June 1990a. ISSN 0001-0782. doi: 10.1145/78973.78977. URL http://doi.acm.org/10.1145/78973.78977.

William Pugh. Concurrent maintenance of skip lists. Technical report, College Park, MD, USA, 1990b.

James Reinders. Intel threading building blocks. O’Reilly & Associates, Inc., Sebastopol, CA, USA, first edition, 2007. ISBN 9780596514808.

Peter Van Roy and Seif Haridi. Concepts, Techniques, and Models of Computer Programming. MIT Press, 2004. ISBN 0-262-22069-5.

Vivek Sarkar. Optimized unrolling of nested loops. In Proceedings of the 14th international conference on Supercomputing, ICS ’00, pages 153–166, New York, NY, USA, 2000. ACM. ISBN 1-58113-270-0. doi: 10.1145/335231.335246.
URL http://doi.acm.org/10.1145/335231.335246.

William N. Scherer, Doug Lea, and Michael L. Scott. Scalable synchronous queues. Commun. ACM, 52(5):100–111, 2009.

Tobias Schlatter, Aleksandar Prokopec, Heather Miller, Philipp Haller, and Martin Odersky.
Multi-lane flowpools: A detailed look. Technical report, EPFL, Lausanne, September 2012.

Tobias Schlatter, Aleksandar Prokopec, Heather Miller, Philipp Haller, and Martin Odersky.
Flowseqs: Barrier-free parseqs. Technical report, EPFL, Lausanne, January 2013.

Michael Schröder. Haskell ctrie implementation, 2014. URL http://hackage.haskell.org/package/ctrie

Ori Shalev and Nir Shavit. Split-ordered lists: Lock-free extensible hash tables. J. ACM, 53(3):379–405, May 2006. ISSN 0004-5411. doi: 10.
1145/1147954.1147958. URL http://doi.acm.org/10.1145/1147954.1147958

Nir Shavit and Dan Touitou. Software transactional memory. In Proceedings of the Fourteenth Annual ACM Symposium on Principles of Distributed Computing, PODC ’95, pages 204–213, New York, NY,
USA, 1995. ACM. ISBN 0-89791-710-3. doi: 10.1145/224964.224987. URL http://doi.acm.org/10.1145/224964.224987

Guy Steele. Organizing functional code for parallel execution; or, foldl and foldr considered slightly harmful. International Conference on Functional Programming (ICFP), 2009.

Guy Steele. How to think about parallel programming: Not! Strange Loop Conference, 2010.

Arvind K. Sujeeth. Composition and reuse with compiled domain-specific languages. In In Proceedings of ECOOP, 2013.

Olivier Tardieu, Haichuan Wang, and Haibo Lin. A work-stealing scheduler for x10’s task parallelism with suspension. In Proceedings of the 17th ACM SIGPLAN symposium on Principles and Practice of Parallel Programming, PPoPP ’12, pages 267–276, New York, NY,
USA, 2012. ACM. ISBN 978-1-4503-1160-1. doi: 10.1145/2145816.2145850. URL
http://doi.acm.org/10.1145/2145816.2145850

Stephen Toub. Patterns of parallel programming, 2010.

T. H. Tzen and L. M. Ni. Trapezoid self-scheduling: A practical scheduling scheme for parallel compilers. IEEE Trans. Parallel Distrib. Syst.

V. Luchangco Y. Lev, M. Herlihy and N. Shavit. A provably correct scalable skiplist (brief announcement). In Proc. of the 10th International Conference On Principles Of Distributed Systems (OPODIS 2006), 2006.
