---
layout: publication
title: Non-Blocking Interpolation Search Trees with Doubly-Logarithmic Running Time
authors: Trevor Brown, Aleksandar Prokopec, Dan Alistarh
venue: Principles and Practice of Parallel Programming 2020 (PPoPP 2020)
permalink: /publications/c-ist/index.html
---


## Abstract

Balanced search trees typically use key comparisons to guide
their operations, and achieve logarithmic running time. By
relying on numerical properties of the keys, interpolation
search achieves lower search complexity and better performance. Although interpolation-based data structures were
investigated in the past, their non-blocking concurrent variants have received very little attention so far.

In this paper, we propose the first non-blocking implementation of the classic interpolation search tree (IST) data
structure. For arbitrary key distributions, the data structure
ensures worst-case O(logn + p) amortized time for search,
insertion and deletion traversals. When the input key distributions are smooth, lookups run in expected O(log logn +p)
time, and insertion and deletion run in expected amortized
O(log logn + p) time, where p is a bound on the number
of threads. To improve the scalability of concurrent insertion and deletion, we propose a novel parallel rebuilding
technique, which should be of independent interest.

We evaluate whether the theoretical improvements translate to practice by implementing the concurrent interpolation search tree,
and benchmarking it on uniform and nonuniform key distributions, for dataset sizes in the millions
to billions of keys. Relative to the state-of-the-art concurrent data structures, the concurrent interpolation search tree
achieves performance improvements of up to 15% under
high update rates, and of up to 50% under moderate update
rates. Further, ISTs exhibit up to 2× less cache-misses, and
consume 1.2 − 2.6× less memory compared to the next best
alternative on typical dataset sizes. We find that the results
are surprisingly robust to distributional skew,
which suggests that our data structure can be a promising alternative
to classic concurrent search structures.

## Links

\[[PDF](/resources/docs/c-ist.pdf)\]
\[[BibTex](/resources/docs/bibtex/c-ist.bib)\]
\[[ACM](https://dl.acm.org/doi/abs/10.1145/3332466.3374542)\]

## References


[1] 2018. SkipTrie Implementation at GitHub. https://github.com/
JoeLeavitt/SkipTrie

[2] Dan Alistarh, Trevor Brown, Justin Kopinsky, Jerry Z. Li, and Giorgi
Nadiradze. 2018. Distributionally Linearizable Data Structures. In
Proceedings of the 30th on Symposium on Parallelism in Algorithms
and Architectures (SPAA ’18). ACM, New York, NY, USA, 133–142.
https://doi.org/10.1145/3210377.3210411

[3] Maya Arbel-Raviv and Trevor Brown. 2017. Reuse, Don’t Recycle:
Transforming Lock-Free Algorithms That Throw Away Descriptors.
In 31st International Symposium on Distributed Computing, DISC 2017,
October 16-20, 2017, Vienna, Austria. 4:1–4:16. https://doi.org/10.4230/
LIPIcs.DISC.2017.4

[4] Maya Arbel-Raviv and Trevor Brown. 2017. Reuse, don’t Recycle:
Transforming Lock-free Algorithms that Throw Away Descriptors.
CoRR abs/1708.01797 (2017). arXiv:1708.01797 http://arxiv.org/abs/
1708.01797

[5] Maya Arbel-Raviv and Trevor Brown. 2018. Harnessing Epoch-based
Reclamation for Efficient Range Queries. In Proceedings of the 23rd ACM
SIGPLAN Symposium on Principles and Practice of Parallel Programming
(PPoPP ’18). ACM, New York, NY, USA, 14–27. https://doi.org/10.1145/
3178487.3178489

[6] Maya Arbel-Raviv, Trevor Brown, and Adam Morrison. 2018. Getting
to the Root of Concurrent Binary Search Tree Performance. In USENIX
Annual Technical Conference.

[7] James Aspnes, Maurice Herlihy, and Nir Shavit. 1994. Counting Networks. J. ACM 41, 5 (Sept. 1994), 1020–1048. https://doi.org/10.1145/185675.185815

[8] Dmitry Basin, Edward Bortnikov, Anastasia Braginsky, Guy GolanGueta, Eshcar Hillel, Idit Keidar, and Moshe Sulamy. 2017. KiWi:
A Key-Value Map for Scalable Real-Time Analytics. In Proceedings
of the 22Nd ACM SIGPLAN Symposium on Principles and Practice of
Parallel Programming (PPoPP ’17). ACM, New York, NY, USA, 357–369.
https://doi.org/10.1145/3018743.3018761

[9] Anastasia Braginsky and Erez Petrank. 2012. A lock-free B+ tree. In
Proceedings of the twenty-fourth annual ACM symposium on Parallelism
in algorithms and architectures. ACM, 58–67.

[10] Nathan G. Bronson, Jared Casper, Hassan Chafi, and Kunle Olukotun. 2010. A Practical Concurrent Binary Search Tree. SIGPLAN Not. 45, 5 (Jan. 2010), 257–268. https://doi.org/10.1145/1837853.1693488

[11] Trevor Brown. 2014. B-slack Trees: Space Efficient B-Trees. In Algorithm Theory - SWAT 2014 - 14th Scandinavian Symposium and
Workshops, Copenhagen, Denmark, July 2-4, 2014. Proceedings. 122–133. https://doi.org/10.1007/978-3-319-08404-6\_11

[12] Trevor Brown. 2017. Reclaiming memory for lock-free data structures: there has to be a better way. CoRR abs/1712.01044 (2017).
arXiv:1712.01044 http://arxiv.org/abs/1712.01044

[13] Trevor Brown. 2017. Techniques for Constructing Efficient Data Structures. Ph.D. Dissertation. University of Toronto.

[14] Trevor Brown and Hillel Avni. 2012. Range Queries in Non-blocking kary Search Trees. In Principles of Distributed Systems, 16th International
Conference, OPODIS 2012, Rome, Italy, December 18-20, 2012. Proceedings.
31–45. https://doi.org/10.1007/978-3-642-35476-2\_3

[15] Trevor Brown and Joanna Helga. 2011. Non-blocking k-ary Search
Trees. In Principles of Distributed Systems - 15th International Conference, OPODIS 2011, Toulouse, France, December 13-16, 2011. Proceedings.
207–221. https://doi.org/10.1007/978-3-642-25873-2\_15

[16] Trevor Brown, Aleksandar Prokopec, and Dan Alistarh. 2020. Artifact
for Non-Blocking Interpolation Search Trees with Doubly-Logarithmic
Running Time. https://doi.org/10.1145/3332466.3374542

[17] Trevor Brown, Aleksandar Prokopec, and Dan Alistarh. 2020. NonBlocking Interpolation Search Trees with Doubly-Logarithmic Running Time. In Proceedings of the 25th Symposium on Principles and
Practice of Parallel Programming (PPoPP ’20). ACM, New York, NY,
USA.

[18] Trevor Alexander Brown. 2015. Reclaiming Memory for Lock-Free
Data Structures: There has to be a Better Way. In Proceedings of the
2015 ACM Symposium on Principles of Distributed Computing, PODC
2015, Donostia-San Sebastián, Spain, July 21 - 23, 2015. 261–270. https:
//doi.org/10.1145/2767386.2767436

[19] Bapi Chatterjee, Sathya Peri, Muktikanta Sa, and Nandini Singhal. 2019.
A Simple and Practical Concurrent Non-Blocking Unbounded
Graph with Linearizable Reachability Queries. In Proceedings of the
20th International Conference on Distributed Computing and Networking
(ICDCN ’19). Association for Computing Machinery, New York, NY,
USA, 168–177. https://doi.org/10.1145/3288599.3288617

[20] Damian Dechev and Bjarne Stroustrup. 2009. Scalable Nonblocking
Concurrent Objects for Mission Critical Code. In Proceedings of the 24th
ACM SIGPLAN Conference Companion on Object Oriented Programming
Systems Languages and Applications (OOPSLA ’09). Association for
Computing Machinery, New York, NY, USA, 597–612. https://doi.org/
10.1145/1639950.1639954

[21] Dave Dice, Yossi Lev, and Mark Moir. 2013. Scalable Statistics
Counters. In Proceedings of the Twenty-Fifth Annual ACM Symposium on Parallelism in Algorithms and Architectures (SPAA ’13). Association for Computing Machinery, New York, NY, USA, 43–52.
https://doi.org/10.1145/2486159.2486182

[22] Dana Drachsler, Martin Vechev, and Eran Yahav. 2014. Practical concurrent binary search trees via logical ordering. ACM SIGPLAN Notices
49, 8 (2014), 343–356.

[23] Faith Ellen, Panagiota Fatourou, Eric Ruppert, and Franck van Breugel. 2010.
Non-blocking Binary Search Trees. In Proceedings of the 29th
ACM SIGACT-SIGOPS Symposium on Principles of Distributed Computing (PODC ’10). ACM, New York, NY, USA, 131–140. https://doi.org/10.1145/1835698.1835736

[24] Greg N Frederickson. 1983. Implicit data structures for the dictionary
problem. Journal of the ACM (JACM) 30, 1 (1983), 80–94.

[25] Gaston H Gonnet, Lawrence D Rogers, and J Alan George. 1980. An
algorithmic and complexity analysis of interpolation search. Acta
Informatica 13, 1 (1980), 39–52.

[26] Vincent Gramoli. 2015. More than You Ever Wanted to Know about
Synchronization: Synchrobench, Measuring the Impact of the Synchronization on Concurrent Algorithms. In Proceedings of the 20th ACM
SIGPLAN Symposium on Principles and Practice of Parallel Programming
(PPoPP 2015). Association for Computing Machinery, New York, NY,
USA, 1–10. https://doi.org/10.1145/2688500.2688501

[27] Jim Gray, Prakash Sundaresan, Susanne Englert, Ken Baclawski, and
Peter J. Weinberger. 1994. Quickly Generating Billion-record Synthetic
Databases. In Proceedings of the 1994 ACM SIGMOD International Conference on Management of Data (SIGMOD ’94). ACM, New York, NY,
USA, 243–252. https://doi.org/10.1145/191839.191886

[28] Timothy L. Harris, Keir Fraser, and Ian A. Pratt. 2002. A Practical
Multi-word Compare-and-Swap Operation. In Proceedings of the 16th
International Conference on Distributed Computing (DISC ’02). SpringerVerlag, Berlin, Heidelberg, 265–279. http://dl.acm.org/citation.cfm?
id=645959.676137

[29] Maurice Herlihy, Yossi Lev, Victor Luchangco, and Nir Shavit. 2006. A
Provably Correct Scalable Concurrent Skip List.

[30] Maurice Herlihy, Beng-Hong Lim, and Nir Shavit. 1995. Scalable
Concurrent Counting. ACM Trans. Comput. Syst. 13, 4 (Nov. 1995),
343–364. https://doi.org/10.1145/210223.210225

[31] H. T. Kung and Philip L. Lehman. 1980. Concurrent Manipulation
of Binary Search Trees. ACM Trans. Database Syst. 5, 3 (Sept. 1980),
354–382. https://doi.org/10.1145/320613.320619

[32] Doug Lea. 2018. Doug Lea’s Workstation. http://g.oswego.edu/

[33] Jonathan Lifflander, Sriram Krishnamoorthy, and Laxmikant V. Kale. 2013.
Steal Tree: Low-Overhead Tracing of Work Stealing Schedulers. In Proceedings of the 34th ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI ’13). Association for Computing Machinery, New York, NY, USA, 507–518.
https://doi.org/10.1145/2491956.2462193

[34] Kurt Mehlhorn and Athanasios Tsakalidis. 1993. Dynamic interpolation search. Journal of the ACM (JACM) 40, 3 (1993), 621–634.

[35] Maged M. Michael and Michael L. Scott. 1996. Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms. In
Proceedings of the Fifteenth Annual ACM Symposium on Principles of Distributed Computing (PODC ’96). Association for Computing Machinery,
New York, NY, USA, 267–275. https://doi.org/10.1145/248052.248106

[36] Aravind Natarajan and Neeraj Mittal. 2014. Fast Concurrent Lockfree Binary Search Trees. In Proceedings of the 19th ACM SIGPLAN
Symposium on Principles and Practice of Parallel Programming (PPoPP
’14). 317–328.

[37] Rotem Oshman and Nir Shavit. 2013. The SkipTrie: Low-depth Concurrent Search Without Rebalancing. In Proceedings of the 2013 ACM
Symposium on Principles of Distributed Computing (PODC ’13). ACM,
New York, NY, USA, 23–32. https://doi.org/10.1145/2484239.2484270

[38] Yehoshua Perl, Alon Itai, and Haim Avni. 1978. Interpolation Search – a Log logN Search. Commun. ACM 21, 7 (July 1978), 550–553. https://doi.org/10.1145/359545.359557

[39] Yehoshua Perl and Edward M Reingold. 1977. Understanding the
complexity of interpolation search. Inform. Process. Lett. 6, 6 (1977),
219–222.

[40] W Wesley Peterson. 1957. Addressing for random-access storage. IBM
journal of Research and Development 1, 2 (1957), 130–146.

[41] Kenneth Platz, Neeraj Mittal, and Subbarayan Venkatesan. 2014. Practical Concurrent Unrolled Linked Lists Using Lazy Synchronization.
In Principles of Distributed Systems, Marcos K. Aguilera, Leonardo
Querzoni, and Marc Shapiro (Eds.). Springer International Publishing,
Cham, 388–403.

[42] Kenneth Platz, Neeraj Mittal, and S. Venkatesan. 2019. Concurrent
Unrolled Skiplist. 2019 IEEE 39th International Conference on Distributed
Computing Systems (ICDCS) (2019), 1579–1589.

[43] Aleksandar Prokopec. 2014. Data Structures and Algorithms for DataParallel Computing in a Managed Runtime. (2014).

[44] Aleksandar Prokopec. 2015. SnapQueue: Lock-free Queue with Constant Time Snapshots. In Proceedings of the 6th ACM SIGPLAN Symposium on Scala (SCALA 2015). ACM, New York, NY, USA, 1–12.
https://doi.org/10.1145/2774975.2774976

[45] Aleksandar Prokopec. 2017. Analysis of Concurrent Lock-Free Hash
Tries with Constant-Time Operations. ArXiv e-prints (Dec. 2017). arXiv:cs.DS/1712.09636

[46] Aleksandar Prokopec. 2018. Cache-tries: Concurrent Lock-free Hash
Tries with Constant-time Operations. In Proceedings of the 23rd ACM
SIGPLAN Symposium on Principles and Practice of Parallel Programming
(PPoPP ’18). ACM, New York, NY, USA, 137–151. https://doi.org/10.1145/3178487.3178498

[47] Aleksandar Prokopec. 2018. Efficient Lock-Free Removing and Compaction for the Cache-Trie Data Structure. Springer International Publishing, Cham.

[48] Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. CacheAware Lock-Free Concurrent Hash Tries. Technical Report.

[49] Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. LockFree Resizeable Concurrent Tries. Springer Berlin Heidelberg, Berlin,
Heidelberg, 156–170. https://doi.org/10.1007/978-3-642-36036-7\_11

[50] Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. 2011.
A Generic Parallel Collection Framework. In Proceedings of
the 17th international conference on Parallel processing - Volume Part
II (Euro-Par’11). Springer-Verlag, Berlin, Heidelberg, 136–147. http:
//dl.acm.org/citation.cfm?id=2033408.2033425

[51] Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky. 2012. Concurrent Tries with Efficient Non-blocking
Snapshots. In Proceedings of the 17th ACM SIGPLAN Symposium on
Principles and Practice of Parallel Programming (PPoPP ’12). ACM, New
York, NY, USA, 151–160. https://doi.org/10.1145/2145816.2145836

[52] Aleksandar Prokopec, Trevor Brown, and Dan Alistarh. 2020. Analysis
and Evaluation of Non-Blocking Interpolation Search Trees. (Dec.
2020). arXiv:cs.DS/2001.00413
[53] Aleksandar Prokopec, Heather Miller, Philipp Haller, Tobias Schlatter, and Martin Odersky. 2012. FlowPools: A Lock-Free Deterministic
Concurrent Dataflow Abstraction, Proofs. Technical Report.

[54] Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller,
and Martin Odersky. 2012. FlowPools: A Lock-Free Deterministic
Concurrent Dataflow Abstraction. In LCPC. 158–173.

[55] Aleksandar Prokopec and Martin Odersky. 2014. Near Optimal WorkStealing Tree Scheduler for Highly Irregular Data-Parallel Workloads.
Springer International Publishing, Cham, 55–86. https://doi.org/10.
1007/978-3-319-09967-5\_4

[56] Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. 2014.
On Lock-Free Work-stealing Iterators for Parallel Data Structures.
(2014), 10. http://infoscience.epfl.ch/record/196627

[57] A. Prokopec, D. Petrashko, and M. Odersky. 2015. Efficient LockFree Work-Stealing Iterators for Data-Parallel Collections. In 2015
23rd Euromicro International Conference on Parallel, Distributed, and
Network-Based Processing. 248–252. https://doi.org/10.1109/PDP.2015.
65

[58] William Pugh. 1990. Concurrent Maintenance of Skip Lists. Technical
Report. College Park, MD, USA.

[59] Tobias Schlatter, Aleksandar Prokopec, Heather Miller, Philipp Haller,
and Martin Odersky. 2012. Multi-Lane FlowPools: A Detailed Look.
(2012), 13.

[60] Guy L. Steele and Jean-Baptiste Tristan. 2016. Adding Approximate
Counters. In Proceedings of the 21st ACM SIGPLAN Symposium on
Principles and Practice of Parallel Programming (PPoPP ’16). Association
for Computing Machinery, New York, NY, USA, Article Article 15,
12 pages. https://doi.org/10.1145/2851141.2851147

[61] Martin Thompson, Dave Farley, Michael Barker, Patricia Gee, and
Andrew Stewart. 2011. Disruptor: High performance alternative to
bounded queues for exchanging data between concurrent threads.
http://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf

[62] Andrew C Yao and F Frances Yao. 1976. The complexity of searching
an ordered random table. In Foundations of Computer Science, 1976.,
17th Annual Symposium on. IEEE, 173–177.

[63] Xiangyao Yu, George Bezerra, Andrew Pavlo, Srinivas Devadas, and
Michael Stonebraker. 2014. Staring into the Abyss: An Evaluation
of Concurrency Control with One Thousand Cores. VLDB 8, 3 (Nov. 2014)

