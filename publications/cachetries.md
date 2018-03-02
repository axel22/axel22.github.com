---
layout: publication
title: Cache-Tries -- Concurrent Lock-Free Hash-Tries with Constant-Time Operations
authors: Aleksandar Prokopec
venue: PPoPP 2018
permalink: /publications/cachetries/index.html
---


## Abstract

Concurrent non-blocking hash tries
have good cache locality,
and horizontally scalable operations.
However, operations on most existing
concurrent hash tries run in O(log n) time.

In this paper,
we show that the concurrent hash trie operations
can run in expected constant time.
We present a novel lock-free concurrent hash trie design
that exerts less pressure on the memory allocator.
This hash trie is augmented with a quiescently consistent cache,
which permits the basic operations to run in expected O(1) time.
We show a statistical analysis for the constant-time bound,
which, to the best of our knowledge,
is the first such proof for hash tries.
We also prove the safety, lock-freedom and linearizability properties.
On typical workloads,
our implementation demonstrates up to 5x performance improvements
with respect to the previous hash trie variants.


## Links

\[[PDF](/resources/docs/p137-prokopec.pdf)\]
\[[BibTex](/resources/docs/bibtex/cachetries.bib)\]


## References

Miguel Areias and Ricardo Rocha. 2014. On the Correctness and Efficiency of Lock-Free Expandable Tries for Tabled Logic Programs. In Proceedings of the 16th International Symposium on Practical Aspects of Declarative Languages - Volume 8324 (PADL 2014). Springer-Verlag New York, Inc., New York, NY, USA, 168--183.  [doi>10.1007/978-3-319-04132-2_12]
 	
Miguel Areias and Ricardo Rocha. 2016. A Lock-Free Hash Trie Design for Concurrent Tabled Logic Programs. Int. J. Parallel Program. 44, 3 (June 2016), 386--406.  [doi>10.1007/s10766-014-0346-1]
 	
Phil Bagwell. 2000. Fast And Space Efficient Trie Searches. Technical Report.
 	
Phil Bagwell. 2001. Ideal Hash Trees. (2001).
 	
Dmitry Basin, Edward Bortnikov, Anastasia Braginsky, Guy Golan-Gueta, Eshcar Hillel, Idit Keidar, and Moshe Sulamy. 2017. KiWi: A Key-Value Map for Scalable Real-Time Analytics. In Proceedings of the 22Nd ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming (PPoPP '17). ACM, New York, NY, USA, 357--369.  [doi>10.1145/3018743.3018761]
 	
Douglas Baskins. 2000. The Judy Array Implementation. http://judy.sourceforge.net/. (2000).
 	
Anastasia Braginsky and Erez Petrank. 2011. Locality-conscious Lock-free Linked Lists. In Proceedings of the 12th International Conference on Distributed Computing and Networking (ICDCN'11). Springer-Verlag, Berlin, Heidelberg, 107--118. http://dl.acm.org/citation.cfm?id= 1946143.1946153
 	
Anastasia Braginsky and Erez Petrank. 2012. A Lock-free B+Tree. In Proceedings of the Twenty-fourth Annual ACM Symposium on Parallelism in Algorithms and Architectures (SPAA '12). ACM, New York, NY, USA, 58--67.  [doi>10.1145/2312005.2312016]
 	
Nathan G. Bronson, Jared Casper, Hassan Chafi, and Kunle Olukotun. 2010. A Practical Concurrent Binary Search Tree. SIGPLAN Not. 45, 5 (Jan. 2010), 257--268.  [doi>10.1145/1837853.1693488]
 	
Cliff Click. 2007. Towards a Scalable Non-Blocking Coding Style. (2007). http://www.azulsystems.com/events/javaone_2007/2007_LockFreeHash.pdf
 	
Rene De La Briandais. 1959. File Searching Using Variable Length Keys. In Papers Presented at the the March 3--5, 1959, Western Joint Computer Conference (IRE-AIEE-ACM '59 (Western)). ACM, New York, NY, USA, 295--298.  [doi>10.1145/1457838.1457895]

Faith Ellen, Panagiota Fatourou, Eric Ruppert, and Franck van Breugel. 2010. Non-blocking Binary Search Trees. In Proceedings of the 29th ACM SIGACT-SIGOPS Symposium on Principles of Distributed Computing (PODC '10). ACM, New York, NY, USA, 131--140.  [doi>10.1145/1835698.1835736]
 	
Edward Fredkin. 1960. Trie Memory. Commun. ACM 3, 9 (Sept. 1960), 490--499.  [doi>10.1145/367390.367400]
 	
Andy Georges, Dries Buytaert, and Lieven Eeckhout. 2007. Statistically Rigorous Java Performance Evaluation. SIGPLAN Not. 42, 10 (Oct. 2007), 57--76.  [doi>10.1145/1297105.1297033]
 	
Timothy L. Harris, Keir Fraser, and Ian A. Pratt. 2002. A Practical Multi-word Compare-and-Swap Operation. In Proceedings of the 16th International Conference on Distributed Computing (DISC '02). Springer-Verlag, London, UK, UK, 265--279. http://dl.acm.org/citation.cfm7id=645959.676137
 	
Maurice Herlihy, Yossi Lev, Victor Luchangco, and Nir Shavit. 2006. A Provably Correct Scalable Concurrent Skip List. (2006).
 	
Maurice Herlihy and Nir Shavit. 2008. The Art of Multiprocessor Programming. Morgan Kaufmann Inc., San Francisco, CA, USA.
 	
P.G. Jensen, K.G. Larsen, and J. Srba. 2017. PTrie: Data Structure for Compressing and Storing Sets via Prefix Sharing. In Proceedings of the 14th International Colloquium on Theoretical Aspects of Computing (ICTAC'17) (LNCS). Springer, 1--18. To appear.
 	
Pramod G. Joisha. 2014. Sticky Tries: Fast Insertions, Fast Lookups, No Deletions for Large Key Universes. In Proceedings of the 2014 International Symposium on Memory Management (ISMM '14). ACM, New York, NY, USA, 35--46.  [doi>10.1145/2602988.2602998]
	
Charles Knessl and Wojciech Szpankowski. 2000. A Note on the Asymptotic Behavior of the Heights in b-Tries for b Large. Electr. J. Comb. 7 (2000). http://www.combinatorics.org/Volume_7/Abstracts/v7i1r39.html
 	
H. T. Kung and Philip L. Lehman. 1980. Concurrent Manipulation of Binary Search Trees. ACM Trans. Database Syst. 5, 3 (Sept. 1980), 354--382.  [doi>10.1145/320613.320619]
 	
Doug Lea. 2014. Doug Lea's Workstation. (2014). http://g.oswego.edu/
 	
Franklin Mark Liang. 1983. Word Hy-phen-a-tion by Com-pu-ter. Ph.D. Dissertation. Stanford University, Stanford, CA 94305. Also available as Stanford University, Department of Computer Science Report No. STAN-CS-83-977.
 	
Ralph C. Merkle. 1988. A Digital Signature Based on a Conventional Encryption Function. In A Conference on the Theory and Applications of Cryptographic Techniques on Advances in Cryptology (CRYPTO '87). Springer-Verlag, London, UK, UK, 369--378. http://dl.acm.org/citation.cfm?id=646752.704751
 	
Maged M. Michael. 2002. High Performance Dynamic Lock-free Hash Tables and List-based Sets. In Proceedings of the Fourteenth Annual ACM Symposium on Parallel Algorithms and Architectures (SPAA '02). ACM, New York, NY, USA, 73--82.  [doi>10.1145/564870.564881]
	
Rotem Oshman and Nir Shavit. 2013. The SkipTrie: Low-depth Concurrent Search Without Rebalancing. In Proceedings of the 2013 ACM Symposium on Principles of Distributed Computing (PODC '13). ACM, New York, NY, USA, 23--32.  [doi>10.1145/2484239.2484270]
 	
Aleksandar Prokopec. 2014. Data Structures and Algorithms for Data-Parallel Computing in a Managed Runtime. Ph.D. Dissertation. IC, Lausanne.  [doi>10.5075/epfl-thesis-6264]
 	
Aleksandar Prokopec. 2014. ScalaMeter Website. (2014). http://scalameter.github.io
 	
Aleksandar Prokopec. 2015. SnapQueue: Lock-free Queue with Constant Time Snapshots. In Proceedings of the 6th ACM SIGPLAN Symposium on Scala (SCALA 2015). ACM, New York, NY, USA, 1--12.  [doi>10.1145/2774975.2774976]
 	
Aleksandar Prokopec. 2016. Pluggable Scheduling for the Reactor Programming Model. In Proceedings of the 6th International Workshop on Programming Based on Actors, Agents, and Decentralized Control (AGERE 2016). ACM, New York, NY, USA, 41--50.  [doi>10.1145/3001886.3001891]
 	
Aleksandar Prokopec. 2017. Analysis of Concurrent Lock-Free Hash Tries with Constant-Time Operations. ArXiv e-prints (Dec. 2017). arXiv:cs.DS/1712.09636
 	
Aleksandar Prokopec. 2017. Encoding the Building Blocks of Communication. In Proceedings of the 2017 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! 2017). ACM, New York, NY, USA, 104--118.  [doi>10.1145/3133850.3133865]
 	
Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. Cache-Aware Lock-Free Concurrent Hash Tries. Technical Report.
 	
Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. Lock-Free Resizeable Concurrent Tries. Springer Berlin Heidelberg, Berlin, Heidelberg, 156--170.  [doi>10.1007/978-3-642-36036-7_11]
 	
Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. 2011. A Generic Parallel Collection Framework. In Proceedings of the 17th international conference on Parallel processing - Volume Part II (Euro-Par'11). Springer-Verlag, Berlin, Heidelberg, 136--147. http://dl.acm.org/citation.cfm?id=2033408.2033425
 	
Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky. 2012. Concurrent Tries with Efficient Non-blocking Snapshots. (2012), 151--160.  [doi>10.1145/2145816.2145836]
 	
Aleksandar Prokopec, Heather Miller, Philipp Haller, Tobias Schlatter, and Martin Odersky. 2012. FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction, Proofs. Technical Report.
 	
Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and Martin Odersky. 2012. FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction. In LCPC. 158--173.
 	
Aleksandar Prokopec and Martin Odersky. 2015. Isolates, Channels, and Event Streams for Composable Distributed Programming. In 2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!) (Onward! 2015). ACM, New York, NY, USA, 171--182.  [doi>10.1145/2814228.2814245]
 	
Aleksandar Prokopec and Martin Odersky. 2016. Conc-Trees for Functional and Parallel Programming. Springer International Publishing, Cham, 254--268.  [doi>10.1007/978-3-319-29778-1_16]
 	
A. Prokopec, D. Petrashko, and M. Odersky. 2015. Efficient Lock-Free Work-Stealing Iterators for Data-Parallel Collections. In 2015 23rd Euromicro International Conference on Parallel, Distributed, and Network-Based Processing. 248--252.  [doi>10.1109/PDP.2015.65]
 	
William Pugh. 1990. Concurrent Maintenance of Skip Lists. Technical Report. College Park, MD, USA.
 	
N. Shafiei. 2013. Non-blocking Patricia Tries with Replace Operations. In 2013 IEEE 33rd International Conference on Distributed Computing Systems. 216--225.  [doi>10.1109/ICDCS.2013.43]
 	
Michael J. Steindorfer and Jurgen J. Vinju. 2015. Optimizing Hash-array Mapped Tries for Fast and Lean Immutable JVM Collections. SIGPLAN Not. 50, 10 (Oct. 2015), 783--800.  [doi>10.1145/2858965.2814312]
 	
Michael J. Steindorfer and Jurgen J. Vinju. 2016. Towards a Software Product Line of Trie-based Collections. In Proceedings of the 2016 ACM SIGPLAN International Conference on Generative Programming: Concepts and Experiences (GPCE 2016). ACM, New York, NY, USA, 168--172.  [doi>10.1145/2993236.2993251]
