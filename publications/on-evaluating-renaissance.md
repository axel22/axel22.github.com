---
layout: publication
title: On Evaluating the Renaissance Benchmarking Suite: Variety, Performance, and Complexity
authors: Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tůma, Martin Studener, Lubomir Bulej, Yudi Zheng, Alex Villazón, Doug Simon, Thomas Wuerthinger, Walter Binder
venue: arXiv
permalink: /publications/on-evaluating-renaissance/index.html
---


## Abstract

The recently proposed Renaissance suite is composed of modern, real-world, concurrent, and object-oriented workloads
that exercise various concurrency primitives of the JVM.
Renaissance was used to compare performance of two state-of-the-art, production-quality JIT compilers (HotSpot C2
and Graal), and to show that the performance differences are
more significant than on existing suites such as DaCapo and SPECjvm2008.

In this technical report, we give an overview of the experimental setup that we used
to assess the variety and complexity of the Renaissance suite, as well as its amenability to
new compiler optimizations. We then present the obtained measurements in detail.


## Links

\[[PDF](/resources/docs/on-evaluating-renaissance.pdf)\]
\[[BibTex](/resources/docs/bibtex/on-evaluating-renaissance.bib)\]
\[[arXiv](https://arxiv.org/abs/1903.10267)\]


## References

SPECjvm2008. https://www.spec.org/jvm2008/.

SPECjvm2008 User’s Guide. https://www.spec.org/jvm2008/docs/UserGuide.html

AVX 512 Instructions. https://software.intel.com/en-us/blogs/2013/avx-512-instructions.

SPECjbb2015. https://www.spec.org/jbb2015/.

Akka Documentation. http://akka.io/docs/.

Graal JTTTest Source Code. https://github.com/oracle/graal/blob/master/compiler/src/org.graalvm.compiler.jtt/src/org/graalvm/compiler/jtt/JTTTest.java.

GraalVM Website. https://www.graalvm.org/downloads/

Kotlin Coroutines. https://github.com/Kotlin/kotlinx.coroutines/blob/master/coroutines-guide.md. Accessed: 2018-11-15.

Open-Source Jenetics Repository at GitHub. https://github.com/jenetics/jenetics.

Open-Source Neo4J Repository at GitHub. https://github.com/neo4j/neo4j.

Open-Source Netty Repository at GitHub. https://github.com/netty/netty.

Open-Source Twitter Finagle Repository at GitHub. https://github.com/twitter/finagle.

OpenJDK SynchronizedList Source Code. http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/util/Collections.java.

OpenJDK Vector Source Code. http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/util/Vector.java.

ReactiveX project. http://reactivex.io/languages.html.

RxJava repository. https://github.com/ReactiveX/RxJava.

Shoaib Akram, Jennifer B. Sartor, Kathryn S. McKinley, and Lieven Eeckhout. 2018. Write-rationing Garbage Collection for Hybrid Memories. In PLDI. 62ś77.

Dmitry Basin, Edward Bortnikov, Anastasia Braginsky, Guy GolanGueta, Eshcar Hillel, Idit Keidar, and Moshe Sulamy. 2017. KiWi: A Key-Value Map for Scalable Real-Time Analytics. In Proceedings
of the 22Nd ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming (PPoPP ’17). ACM, New York, NY, USA, 357ś369. https://doi.org/10.1145/3018743.3018761

Alan Bateman and Doug Lea. 2011. Java Specification Request 203: More New I/O APIs for the JavaTM Platform ("NIO.2"). https: //jcp.org/en/jsr/detail?id=203.

Swarnendu Biswas, Man Cao, Minjia Zhang, Michael D. Bond, and Benjamin P. Wood. 2017. Lightweight Data Race Detection for Production Runs. In CC. 11ś21.

Stephen M. Blackburn, Robin Garner, Chris Hoffmann, Asjad M. Khang, Kathryn S. McKinley, Rotem Bentzur, Amer Diwan, Daniel Feinberg, Daniel Frampton, Samuel Z. Guyer, Martin Hirzel, Antony Hosking, Maria Jump, Han Lee, J. Eliot B. Moss, Aashish Phansalkar,
Darko Stefanović, Thomas VanDrunen, Daniel von Dincklage, and Ben Wiedermann. 2006. The DaCapo Benchmarks: Java Benchmarking Development and Analysis. SIGPLAN Not. 41, 10 (Oct. 2006), 169ś190.

Nathan Bronson, Jonas Boner, Guy Korland, Aleksandar Prokopec, Krishna Sankar, Daniel Spiewak, and Peter Veentjer. 2011. ScalaSTM Expert Group. https://nbronson.github.io/scala-stm/expert_group.html.

Nathan G. Bronson, Jared Casper, Hassan Chafi, and Kunle Olukotun. 2010. A Practical Concurrent Binary Search Tree. SIGPLAN Not. 45, 5 (Jan. 2010), 257ś268. https://doi.org/10.1145/1837853.1693488

Nathan G. Bronson, Hassan Chafi, and Kunle Olukotun. 2010. CCSTM: A library-based STM for Scala. In The First Annual Scala Workshop at Scala Days.

Rodrigo Bruno and Paulo Ferreira. 2017. POLM2: Automatic Profiling for Object Lifetime-aware Memory Management for Hotspot Big Data Applications. In Middleware. 147ś160.

Irina Calciu, Siddhartha Sen, Mahesh Balakrishnan, and Marcos K. Aguilera. 2017. Black-box Concurrent Data Structures for NUMA Architectures. In Proceedings of the Twenty-Second International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS ’17). ACM, New York, NY, USA, 207ś221.
https://doi.org/10.1145/3037697.3037721

Shyam R Chidamber and Chris F Kemerer. 1994. A Metrics Suite for Object Oriented Design. IEEE Transactions on Software Engineering
20, 6 (1994), 476ś493.

Cliff Click. 2007. Towards a Scalable Non-Blocking Coding Style. http://www.azulsystems.com/events/javaone_2007/2007_LockFreeHash.pdf

Databricks. 2018. Spark Performance Tests. https://github.com/databricks/spark-perf.

Pedro C. Diniz and Martin C. Rinard. 1998. Lock Coarsening: Eliminating Lock Overhead in Automatically Parallelized Object-based Programs. J. Parallel and Distrib. Comput. 49, 2 (1998), 218ś244.

Gilles Duboscq. 2016. Combining Speculative Optimizations with Flexible Scheduling of Side-effects. Ph.D. Dissertation. Johannes Kepler
University, Linz.

Gilles Duboscq, Thomas Würthinger, Lukas Stadler, Christian Wimmer, Doug Simon, and Hanspeter Mössenböck. 2013. An Intermediate Representation for Speculative Optimizations in a Dynamic Compiler.
In VMIL. 1ś10.

Michael Duigou. 2011. Java Enhancement Proposal 107: Bulk Data Operations for Collections. http://openjdk.java.net/jeps/107.

Josef Eisl, Matthias Grimmer, Doug Simon, Thomas Würthinger, and Hanspeter Mössenböck. 2016. Trace-based Register Allocation in a JIT Compiler. In PPPJ. 14:1ś14:11.

Michael Ferdman, Almutaz Adileh, Onur Kocberber, Stavros Volos, Mohammad Alisafaee, Djordje Jevdjic, Cansu Kaynak, Adrian Daniel Popescu, Anastasia Ailamaki, and Babak Falsafi. 2012. Clearing the Clouds: A Study of Emerging Scale-out Workloads on Modern Hardware. SIGPLAN Not. 47, 4 (March 2012), 37ś48.

Rémi Forax, Vladimir Zakharov, Kevin Bourrillion, Dan Heidinga, Srikanth Sankaran, Andrey Breslav, Doug Lea, Bob Lee, Brian Goetz, Daniel Smith, Samuel Pullara, and David Lloyd. 2014. Java Specification Request 335: Lambda Expressions for the JavaTM Programming Language. https://jcp.org/en/jsr/detail?id=335.

Neville Grech, George Fourtounis, Adrian Francalanza, and Yannis Smaragdakis. 2018. Shooting from the Heap: Ultra-scalable Static Analysis with Heap Snapshots. In ISSTA. 198ś208.

Rachid Guerraoui, Michal Kapalka, and Jan Vitek. 2007. STMBench7: A Benchmark for Software Transactional Memory. In EuroSys. 315ś 324.

Philipp Haller and Martin Odersky. 2007. Actors That Unify Threads and Events. In COORDINATION. 171ś190.

Philipp Haller, Aleksandar Prokopec, Heather Miller, Viktor Klang, Roland Kuhn, and Vojin Jovanovic. 2012. Scala Improvement Proposal: Futures and Promises (SIP-14). http://docs.scala-lang.org/sips/pending/futures-promises.html

Tim Harris, Simon Marlow, Simon Peyton-Jones, and Maurice Herlihy. 2005. Composable Memory Transactions. In PPoPP. 48ś60.

Peter Hofer, David Gnedt, Andreas Schörgenhumer, and Hanspeter Mössenböck. 2016. Efficient Tracing and Versatile Analysis of Lock Contention in Java Applications on the Virtual Machine Level. In ICPE. 263ś274.

Shams M. Imam and Vivek Sarkar. 2014. Savina - An Actor Benchmark Suite: Enabling Empirical Evaluation of Actor Libraries. In AGERE! 67ś80.

Intel. Hyper-Threading Technology. https://www. intel.com/content/www/us/en/architecture-and-technology/hyper-threading/hyper-threading-technology.html.

Intel. 2018. Turbo Boost Technology 2.0. https://www.intel.com/content/www/us/en/architecture-and-technology/turbo-boost/turbo-boost-technology.html.

Intel. 2019. Intel 64 and IA-32 Architectures Developer’s Manual, Section 18.18. https://www.intel.com/content/www/us/en/architecture-and-technology/64-ia-32-architectures-software-developer-manual-325462.html.
 
Tomas Kalibera, Jeff Hagelberg, Petr Maj, Filip Pizlo, Ben Titzer, and Jan Vitek. 2010. A Family of Real-time Java Benchmarks. Concurrency and Computation: Practice and Experience 23, 14 (2010), 1679ś1700.

Karl Pearson. 1901. On lines and planes of closest fit to systems of points in space. Philos. Mag. 2, 11 (1901), 559ś572.

Stephen Kell, Danilo Ansaloni, Walter Binder, and Lukáš Marek. 2012. The JVM is Not Observable Enough (and What to Do About It). In VMIL. 33ś38.

Doug Lea. 2000. A Java Fork/Join Framework. In JAVA. 36ś43.

Doug Lea. 2012. Java Enhancement Proposal 155: Concurrency Updates. http://openjdk.java.net/jeps/155.

Doug Lea. 2014. Doug Lea’s Workstation. http://g.oswego.edu/

Doug Lea. 2015. Java Enhancement Proposal 266: More Concurrency Updates. http://openjdk.java.net/jeps/266.

Doug Lea, Joshua Bloch, Sam Midkiff, David Holmes, Joseph Bowbeer, and Tim Peierls. 2004. Java Specification Request 166: Concurrency Utilities. https://jcp.org/ja/jsr/detail?id=166.

Philipp Lengauer, Verena Bitto, Hanspeter Mössenböck, and Markus Weninger. 2017. A Comprehensive Java Benchmark Study on Memory and Garbage Collection Behavior of DaCapo, DaCapo Scala, and SPECjvm2008. In ICPE. 3ś14.

David Leopoldseder, Lukas Stadler, Thomas Würthinger, Josef Eisl, Doug Simon, and Hanspeter Mössenböck. 2018. Dominance-based Duplication Simulation (DBDS): Code Duplication to Enable Compiler Optimizations. In CGO. 126ś137.

Linux man. 2013. top(1). https://linux.die.net/man/1/top.

Bozhen Liu and Jeff Huang. 2018. D4: Fast Concurrency Debugging with Parallel Differential Analysis. In PLDI. 359ś373.

Honghui Lu, Alan L. Cox, and Willy Zwaenepoel. 2001. Contention Elimination by Replication of Sequential Sections in Distributed Shared Memory Programs. In Proceedings of the Eighth ACM SIGPLAN Symposium on Principles and Practices of Parallel Programming (PPoPP ’01). ACM, New York, NY, USA, 53ś61. https://doi.org/10.1145/379539.379568

Lukáš Marek, Stephen Kell, Yudi Zheng, Lubomír Bulej, Walter Binder, Petr Tůma, Danilo Ansaloni, Aibek Sarimbekov, and Andreas Sewe. 2013. ShadowVM: Robust and Comprehensive Dynamic Program Analysis for the Java Platform. In GPCE. 105ś114.

Lukáš Marek, Alex Villazón, Yudi Zheng, Danilo Ansaloni, Walter Binder, and Zhengwei Qi. 2012. DiSL: A Domain-specific Language for Bytecode Instrumentation. In AOSD. 239ś250.

Xiangrui Meng, Joseph Bradley, Burak Yavuz, Evan Sparks, Shivaram Venkataraman, Davies Liu, Jeremy Freeman, DB Tsai, Manish Amde, Sean Owen, Doris Xin, Reynold Xin, Michael J. Franklin, Reza Zadeh, Matei Zaharia, and Ameet Talwalkar. 2016. MLlib: Machine Learning in Apache Spark. Journal of Machine Learning Research 17, 34 (2016), 1ś7.

Khanh Nguyen, Lu Fang, Guoqing Xu, Brian Demsky, Shan Lu, Sanazsadat Alamian, and Onur Mutlu. 2016. Yak: A High-performance Big-data-friendly Garbage Collector. In OSDI. 349ś365.

Martin Odersky. 2011. State of Scala. http://days2011.scala-lang.org/sites/days2011/files/01.%20Martin%20Odersky.pdf.

Oracle. 2018. JVM Tool Interface. https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html.

F. Ortin, P. Conde, D. Fernandez-Lanvin, and R. Izquierdo. 2014. The Runtime Performance of invokedynamic: An Evaluation with a Java Library. IEEE Software 31, 4 (July 2014), 82ś90.

Rotem Oshman and Nir Shavit. 2013. The SkipTrie: Low-depth Concurrent Search Without Rebalancing. In Proceedings of the 2013 ACM Symposium on Principles of Distributed Computing (PODC ’13). ACM, New York, NY, USA, 23ś32. https://doi.org/10.1145/2484239.2484270

Michael Paleczny, Christopher Vick, and Cliff Click. 2001. The Java HotspotTM Server Compiler. In JVM.

José Paumard. 2018. JDK8 Stream/Rx Comparison. https://github.com/JosePaumard/jdk8-stream-rx-comparison.

perf. 2015. Linux profiling with performance counters. https://perf.wiki.kernel.org.

Aleksandar Prokopec. 2015. SnapQueue: Lock-free Queue with Constant Time Snapshots. In Proceedings of the 6th ACM SIGPLAN Symposium on Scala (SCALA 2015). ACM, New York, NY, USA, 1ś12. https://doi.org/10.1145/2774975.2774976

Aleksandar Prokopec. 2016. Pluggable Scheduling for the Reactor Programming Model. In AGERE! 41ś50.

Aleksandar Prokopec. 2017. Accelerating by Idling: How Speculative Delays Improve Performance of Message-Oriented Systems. Springer International Publishing, Cham, 177ś191. https://doi.org/10.1007/978-3-319-64203-1_13

Aleksandar Prokopec. 2017. Analysis of Concurrent Lock-Free Hash Tries with Constant-Time Operations. ArXiv e-prints (Dec. 2017). arXiv:cs.DS/1712.09636

Aleksandar Prokopec. 2017. Encoding the Building Blocks of Communication. In Proceedings of the 2017 ACM SIGPLAN International ymposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! 2017). ACM, New York, NY, USA, 04ś118. https://doi.org/10.1145/3133850.3133865

Aleksandar Prokopec. 2018. Cache-tries: Concurrent Lock-free Hash Tries with Constant-time Operations. In Proceedings of the 3rd ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming (PPoPP ’18). ACM, New York, NY, USA, 137ś151. https://doi.org/10.1145/3178487.3178498

Aleksandar Prokopec. 2018. Efficient Lock-Free Removing and Compaction for the Cache-Trie Data Structure. Springer International Publishing, Cham.

Aleksandar Prokopec. 2018. Efficient Lock-Free Removing and Compaction for the Cache-Trie Data Structure. https://doi.org/10.6084/m9.figshare.6369134.

Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. CacheAware Lock-Free Concurrent Hash Tries. Technical Report.

Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. LockFree Resizeable Concurrent Tries. Springer Berlin Heidelberg, Berlin, Heidelberg, 156ś170. https://doi.org/10.1007/978-3-642-36036-7_11

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. 2011. A Generic Parallel Collection Framework. In Euro-Par. 136ś147.

Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky. 2012. Concurrent Tries with Efficient Non-blocking Snapshots. In Proceedings of the 17th ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming (PPoPP ’12). ACM, New York, NY, USA, 151ś160. https://doi.org/10.1145/2145816.2145836

Aleksandar Prokopec, Gilles Duboscq, David Leopoldseder, and Thomas Würthinger. 2019. An Optimization-driven Incremental Inline Substitution Algorithm for Just-in-time Compilers. In Proceedings of the 2019 IEEE/ACM International Symposium on Code Generation and Optimization (CGO 2019). IEEE Press, Piscataway, NJ, USA, 164ś179. http://dl.acm.org/citation.cfm?id=3314872.3314893

Aleksandar Prokopec, Philipp Haller, and Martin Odersky. 2014. Containers and Aggregates, Mutators and Isolates for Reactive Programming. In Proceedings of the Fifth Annual Scala Workshop (SCALA ’14). ACM, New York, NY, USA, 51ś61. https://doi.org/10.1145/2637647.2637656

Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq, and Thomas Würthinger. 2017. Making Collection Operations Optimal with Aggressive JIT Compilation. In SCALA. 29ś40.

Aleksandar Prokopec and Fengyun Liu. 2018. On the Soundness of Coroutines with Snapshots. CoRR abs/1806.01405 (2018). arXiv:1806.01405 https://arxiv.org/abs/1806.01405

Aleksandar Prokopec and Fengyun Liu. 2018. Theory and Practice of Coroutines with Snapshots. In 32nd European Conference on ObjectOriented Programming, ECOOP 2018, July 16-21, 2018, Amsterdam, The Netherlands. 3:1ś3:32. https://doi.org/10.4230/LIPIcs.ECOOP.2018.3

Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and Martin Odersky. 2012. FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction. In LCPC. 158ś173.

Aleksandar Prokopec and Martin Odersky. 2014. Near Optimal WorkStealing Tree Scheduler for Highly Irregular Data-Parallel Workloads. In Languages and Compilers for Parallel Computing, Călin Cascaval and Pablo Montesinos (Eds.). Springer International Publishing, Cham, 55ś86.

Aleksandar Prokopec and Martin Odersky. 2015. Isolates, Channels, and Event Streams for Composable Distributed Programming. In Onward! 171ś182.

Aleksandar Prokopec and Martin Odersky. 2016. Conc-Trees for Functional and Parallel Programming. Springer International Publishing, Cham, 254ś268. https://doi.org/10.1007/978-3-319-29778-1_16

Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. 2014. On Lock-Free Work-stealing Iterators for Parallel Data Structures. (2014), 10.

A. Prokopec, D. Petrashko, and M. Odersky. 2015. Efficient LockFree Work-Stealing Iterators for Data-Parallel Collections. In 2015 23rd Euromicro International Conference on Parallel, Distributed, and Network-Based Processing. 248ś252. https://doi.org/10.1109/PDP.2015.65

William Pugh, Sarita Adve, and Doug Lea. 2004. Java Specification Request 133: JavaTM Memory Model and Thread Specification Revision. https://jcp.org/ja/jsr/detail?id=133.

Paruj Ratanaworabhan, Benjamin Livshits, and Benjamin G. Zorn. 2010. JSMeter: Comparing the Behavior of JavaScript Benchmarks with Real Web Applications. In WebApps. 3ś3.

John Rose. 2014. Java Enhancement Proposal 243: Java-Level JVM Compiler Interface. http://openjdk.java.net/jeps/243.

John Rose, Bini Ola, William Cook, Rémi Forax, Samuele Pedroni, and Jochen Theodorou. 2011. Java Specification Request 292: Supporting Dynamically Typed Languages on the JavaTM Platform. https://jcp.org/en/jsr/detail?id=292.

Andreas Schörgenhumer, Peter Hofer, David Gnedt, and Hanspeter Mössenböck. 2017. Efficient Sampling-based Lock Contention Profiling for Java. In ICPE. 331ś334.

Andreas Sewe, Mira Mezini, Aibek Sarimbekov, Danilo Ansaloni, Walter Binder, Nathan Ricci, and Samuel Z. Guyer. 2012. new Scala() instanceof Java: A Comparison of the Memory Behaviour of Java and Scala Programs. In ISMM. 97ś108.

Andreas Sewe, Mira Mezini, Aibek Sarimbekov, and Walter Binder. 2011. Da Capo Con Scala: Design and Analysis of a Scala Benchmark Suite for the Java Virtual Machine. In OOPSLA. 657ś676.

Nir Shavit and Dan Touitou. 1995. Software Transactional Memory.In PODC. 204ś213.

Aleksei Shipilev. 2018. Code Tools: jmh. http://openjdk.java.net/projects/code-tools/jmh/.

L. A. Smith, J. M. Bull, and J. Obdrizalek. 2001. A Parallel Java Grande Benchmark Suite. In SC.

Diomidis Spinellis. 2005. Tool Writing: A Forgotten Art? IEEE Software 4 (2005), 9ś11.

Sriram Srinivasan and Alan Mycroft. 2008. Kilim: Isolation-Typed Actors for Java. In ECOOP. 104ś128.

Lukas Stadler, Thomas Würthinger, and Hanspeter Mössenböck. 2014. Partial Escape Analysis and Scalar Replacement for Java. In CGO. 165:165ś165:174.

Rei Thiessen and Ondřej Lhoták. 2017. Context Transformations for Pointer Analysis. In PLDI. 263ś277.

Jaroslav Ševčík. 2011. Safe Optimisations for Shared-memory Concurrent Programs. In Proceedings of the 32Nd ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI ’11). ACM, New York, NY, USA, 306ś316. https://doi.org/10.1145/1993498.1993534

Markus Weninger and Hanspeter Mössenböck. 2018. User-defined Classification and Multi-level Grouping of Objects in Memory Monitoring. In ICPE. 115ś126.

Benjamin P. Wood, Man Cao, Michael D. Bond, and Dan Grossman. 2017. Instrumentation Bias for Dynamic Data Race Detection. Proc. ACM Program. Lang. 1, OOPSLA (Oct. 2017), 69:1ś69:31.

Matei Zaharia, Mosharaf Chowdhury, Michael J. Franklin, Scott Shenker, and Ion Stoica. 2010. Spark: Cluster Computing with Working Sets. In HotCloud. 10ś10.

Xinghui Zhao and Nadeem Jamali. 2013. Load Balancing Non-uniform Parallel Computations. In AGERE! 97ś108.

Yudi Zheng, Andrea Rosà, Luca Salucci, Yao Li, Haiyang Sun, Omar Javed, Lubomír Bulej, Lydia Y. Chen, Zhengwei Qi, and Walter Binder. 2016. AutoBench: Finding Workloads That You Need Using Pluggable Hybrid Analyses.. In SANER. 639ś643.














