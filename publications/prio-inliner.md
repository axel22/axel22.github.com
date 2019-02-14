---
layout: publication
title: An Optimization-Driven Incremental Inline Substitution Algorithm for Just-in-Time Compilers
authors: Aleksandar Prokopec, Gilles Duboscq, David Leopoldseder, Thomas Würthinger
venue: CGO 2019
permalink: /publications/prio-inliner/index.html
---


## Abstract

Inlining is one of the most important compiler optimizations.
It reduces call overheads and widens the scope of other optimizations.
But, inlining is somewhat of a black art of an optimizing compiler,
and was characterized as a computationally intractable problem.
Intricate heuristics, tuned during countless hours of compiler engineering,
are often at the core of an inliner implementation. And despite decades of research,
well-established inlining heuristics are still missing.

In this paper, we describe a novel inlining algorithm for JIT compilers
that incrementally explores a program’s call graph, and alternates between inlining and optimizations.
We devise three novel heuristics that guide our inliner: adaptive decision thresholds, callsite clustering,
and deep inlining trials. We implement the algorithm inside Graal, a dynamic JIT compiler for the HotSpot JVM.
We evaluate our algorithm on a set of industry-standard benchmarks, including Java DaCapo, Scalabench, Spark-Perf, STMBench7
and other benchmarks, and we conclude that it significantly improves performance,
surpassing state-of-the-art inlining approaches with speedups ranging from 5% up to 3×.


## Links

\[[PDF](/resources/docs/prio-inliner-final.pdf)\]
\[[BibTex](/resources/docs/bibtex/prio-inliner.bib)\]
\[[ACM]()\]


LLVM Cost-Benefit Estimation Implementation at GitHub. (2018).
https://github.com/llvm-mirror/llvm/blob/
88ab6705571782fa664ecfa71b2f959a0daf2d78/lib/Analysis/InlineCost.cpp

LLVM Inliner Implementation at GitHub. (2018).
https://github.com/llvm-mirror/llvm/blob/
6f1d64eb934e12ca5e8dcd378f88d1e6b80e8c55/lib/Transforms/IPO/Inliner.cpp

Open-source Graal Repository at GitHub. (2018).
http://github.com/graalvm/graal

Pär Andersson. 2009. Evaluation of Inlining Heuristics
in Industrial Strength Compilers for Embedded Systems.
(2009).

Matthew Arnold, Stephen Fink, Vivek Sarkar, and Peter F.
Sweeney. 2000. A Comparative Study of Static and
Profile-based Heuristics for Inlining. In Proceedings of
the ACM SIGPLAN Workshop on Dynamic and Adaptive
Compilation and Optimization (DYNAMO ’00). ACM,
New York, NY, USA, 52–64. https://doi.org/10.1145/
351397.351416

Andrew Ayers, Richard Schooler, and Robert Gottlieb.
Aggressive Inlining. In Proceedings of the ACM
SIGPLAN 1997 Conference on Programming Language
Design and Implementation (PLDI ’97). ACM, New York,
NY, USA, 134–145. https://doi.org/10.1145/258915.
258928

J. Eugene Ball. 1979. Predicting the Effects of Optimization
on a Procedure Body. In Proceedings of the
1979 SIGPLAN Symposium on Compiler Construction
(SIGPLAN ’79). ACM, New York, NY, USA, 214–220.
https://doi.org/10.1145/800229.806972

Yosi Ben Asher, Omer Boehm, Daniel Citron, Gadi Haber,
Moshe Klausner, Roy Levin, and Yousef Shajrawi. 2008.
Aggressive Function Inlining: Preventing Loop Blockings
in the Instruction Cache. Springer Berlin Heidelberg,
Berlin, Heidelberg, 384–397. https://doi.org/10.1007/
978-3-540-77560-7_26

Stephen M. Blackburn, Robin Garner, Chris Hoffmann,
Asjad M. Khang, Kathryn S. McKinley, Rotem
Bentzur, Amer Diwan, Daniel Feinberg, Daniel Frampton,
Samuel Z. Guyer, Martin Hirzel, Antony Hosking, Maria
Jump, Han Lee, J. Eliot B. Moss, Aashish Phansalkar,
Darko Stefanovic, Thomas VanDrunen, Daniel von Dinck- ´
lage, and Ben Wiedermann. 2006. The DaCapo Benchmarks:
Java Benchmarking Development and Analysis.
In Proceedings of the 21st Annual ACM SIGPLAN
Conference on Object-oriented Programming Systems,
Languages, and Applications (OOPSLA ’06). ACM, New
York, NY, USA, 169–190. https://doi.org/10.1145/
1167473.1167488

Nathan Bronson, Jonas Boner, Guy Korland, Aleksandar
Prokopec, Krishna Sankar, Daniel Spiewak, and Peter
Veentjer. 2011. ScalaSTM Expert Group. (2011).
https://nbronson.github.io/scala-stm/expert_group.html.

Rosario Cammarota, Alexandru Nicolau, Alexander V.
Veidenbaum, Arun Kejariwal, Debora Donato, and
Mukund Madhugiri. 2013. On the Determination of
Inlining Vectors for Program Optimization. In Proceedings
of the 22Nd International Conference on Compiler Construction
(CC’13). Springer-Verlag, Berlin, Heidelberg,
164–183. https://doi.org/10.1007/978-3-642-37051-9_9
[12] P. P. Chang and W.-W. Hwu. 1989. Inline Function
Expansion for Compiling C Programs. SIGPLAN Not. 24,
7 (June 1989), 246–257. https://doi.org/10.1145/74818.
74840

Pohua P. Chang, Scott A. Mahlke, William Y. Chen,
and Wen-mei W. Hwu. 1992. Profile-guided Automatic
Inline Expansion for C Programs. Softw. Pract. Exper.
22, 5 (May 1992), 349–369. https://doi.org/10.1002/spe.
4380220502

Arun Chauhan and Ken Kennedy. 2001. Optimizing
Strategies for Telescoping Languages: Procedure Strength
Reduction and Procedure Vectorization. In Proceedings
of the 15th International Conference on Supercomputing
(ICS ’01). ACM, New York, NY, USA, 92–101. https:
//doi.org/10.1145/377792.377812

Cliff Click. 1995. Global Code Motion/Global Value
Numbering. In Proceedings of the ACM SIGPLAN 1995
Conference on Programming Language Design and Implementation
(PLDI ’95). ACM, New York, NY, USA,
246–257. https://doi.org/10.1145/207110.207154

John Cocke and Ken Kennedy. 1977. An Algorithm for
Reduction of Operator Strength. Commun. ACM 20, 11
(Nov. 1977), 850–856. https://doi.org/10.1145/359863.
359888

Keith D. Cooper, Timothy J. Harvey, and Todd Waterman.
An Adaptive Strategy for Inline Substitution. In
Proceedings of the Joint European Conferences on Theory
and Practice of Software 17th International Conference
on Compiler Construction (CC’08/ETAPS’08). SpringerVerlag,
Berlin, Heidelberg, 69–84. http://dl.acm.org/
citation.cfm?id=1788374.1788381

Jeffrey Dean and Craig Chambers. 1994. Towards Better
Inlining Decisions Using Inlining Trials. In Proceedings
of the 1994 ACM Conference on LISP and Functional
Programming (LFP ’94). ACM, New York, NY, USA,
273–282. https://doi.org/10.1145/182409.182489

David Detlefs and Ole Agesen. 1999. Inlining of Virtual
Methods. Springer Berlin Heidelberg, Berlin, Heidelberg,
258–277. https://doi.org/10.1007/3-540-48743-3_12

Gilles Duboscq, Thomas Würthinger, Lukas Stadler, Christian
Wimmer, Doug Simon, and Hanspeter Mössenböck.
An Intermediate Representation for Speculative
Optimizations in a Dynamic Compiler. In Proceedings of
the 7th ACM Workshop on Virtual Machines and Intermediate
Languages (VMIL ’13). ACM, New York, NY,
USA, 1–10. https://doi.org/10.1145/2542142.2542143

Michael Duigou. 2011. Java Enhancement Proposal
107: Bulk Data Operations for Collections. (2011).
http://openjdk.java.net/jeps/107.

Josef Eisl, Stefan Marr, Thomas Würthinger, and
Hanspeter Mössenböck. 2017. Trace Register Allocation
Policies: Compile-time vs. Performance Trade-offs. In
Proceedings of the 14th International Conference on
Managed Languages and Runtimes (ManLang 2017).
ACM, New York, NY, USA, 92–104. https://doi.org/10.
1145/3132190.3132209

A. Feldthaus, M. Schäfer, M. Sridharan, J. Dolby, and
F. Tip. 2013. Efficient construction of approximate
call graphs for JavaScript IDE services. In 2013 35th
175
International Conference on Software Engineering (ICSE).
752–761. https://doi.org/10.1109/ICSE.2013.6606621

Rémi Forax, Vladimir Zakharov, Kevin Bourrillion, Dan
Heidinga, Srikanth Sankaran, Andrey Breslav, Doug Lea,
Bob Lee, Brian Goetz, Daniel Smith, Samuel Pullara,
and David Lloyd. 2014. Java Specification Request
335: Lambda Expressions for the JavaTM Programming
Language. (2014). https://jcp.org/en/jsr/detail?id=335.

Erich Gamma, Richard Helm, Ralph Johnson, and John
Vlissides. 1995. Design Patterns: Elements of Reusable
Object-oriented Software. Addison-Wesley Longman
Publishing Co., Inc., Boston, MA, USA.


Andy Georges, Dries Buytaert, and Lieven Eeckhout.
Statistically Rigorous Java Performance Evaluation.
In Proceedings of the 22Nd Annual ACM SIGPLAN
Conference on Object-oriented Programming Systems and
Applications (OOPSLA ’07). ACM, New York, NY, USA,
57–76. https://doi.org/10.1145/1297027.1297033

David Grove and Craig Chambers. 2001. A Framework
for Call Graph Construction Algorithms. ACM Trans.
Program. Lang. Syst. 23, 6 (Nov. 2001), 685–746. https:
//doi.org/10.1145/506315.506316

Rachid Guerraoui, Michal Kapalka, and Jan Vitek. 2007.
STMBench7: A Benchmark for Software Transactional
Memory. In Proceedings of the 2Nd ACM SIGOPS/EuroSys
European Conference on Computer Systems 2007
(EuroSys ’07). ACM, New York, NY, USA, 315–324.
https://doi.org/10.1145/1272996.1273029

Philipp Haller, Simon Geries, Michael Eichberg, and
Guido Salvaneschi. 2016. Reactive Async: Expressive
Deterministic Concurrency. In Proceedings of the 2016
7th ACM SIGPLAN Symposium on Scala (SCALA 2016).
ACM, New York, NY, USA, 11–20. https://doi.org/10.
1145/2998392.2998396

Philipp Haller and Martin Odersky. 2007. Actors
That Unify Threads and Events. In Proceedings of the
9th International Conference on Coordination Models
and Languages (COORDINATION’07). Springer-Verlag,
Berlin, Heidelberg, 171–190. http://dl.acm.org/citation.
cfm?id=1764606.1764620

Philipp Haller, Aleksandar Prokopec, Heather Miller,
Viktor Klang, Roland Kuhn, and Vojin Jovanovic.
Scala Improvement Proposal: Futures and
Promises (SIP-14). http://docs.scala-lang.org/sips/
pending/futures-promises.html

Christian Häubl, Christian Wimmer, and Hanspeter
Mössenböck. 2013. Context-sensitive Trace Inlining for
Java. Comput. Lang. Syst. Struct. 39, 4 (Dec. 2013),
123–141. https://doi.org/10.1016/j.cl.2013.04.002

Kim Hazelwood and David Grove. 2003. Adaptive Online
Context-sensitive Inlining. In Proceedings of the International
Symposium on Code Generation and Optimization:
Feedback-directed and Runtime Optimization (CGO ’03).
IEEE Computer Society, Washington, DC, USA, 253–264.
http://dl.acm.org/citation.cfm?id=776261.776289

Urs Hölzle and David Ungar. 1994. Optimizing
Dynamically-dispatched Calls with Run-time Type Feedback.
In Proceedings of the ACM SIGPLAN 1994 Conference
on Programming Language Design and Implementation
(PLDI ’94). ACM, New York, NY, USA, 326–336.
https://doi.org/10.1145/178243.178478

Jan Hubicka. 2004. The GCC call graph module: a framework
for inter-procedural optimization. In Proceedings of
the 2004 GCC Developers’ Summit. 65–78.

Suresh Jagannathan and Andrew Wright. 1996. Flowdirected
Inlining. In Proceedings of the ACM SIGPLAN
1996 Conference on Programming Language Design and
Implementation (PLDI ’96). ACM, New York, NY, USA,
193–205. https://doi.org/10.1145/231379.231417

Michael R. Jantz and Prasad A. Kulkarni. 2013. Performance
Potential of Optimization Phase Selection During
Dynamic JIT Compilation. In Proceedings of the 9th ACM
SIGPLAN/SIGOPS International Conference on Virtual
Execution Environments (VEE ’13). ACM, New York,
NY, USA, 131–142. https://doi.org/10.1145/2451512.
2451539

Thomas Kotzmann, Christian Wimmer, Hanspeter Mössenböck,
Thomas Rodriguez, Kenneth Russell, and David
Cox. 2008. Design of the Java HotSpot&Trade; Client
Compiler for Java 6. ACM Trans. Archit. Code Optim. 5,
1, Article 7 (May 2008), 32 pages. https://doi.org/10.
1145/1369396.1370017

Chris Lattner and Vikram Adve. 2004. LLVM: A
Compilation Framework for Lifelong Program Analysis
& Transformation. In Proceedings of the International
Symposium on Code Generation and Optimization:
Feedback-directed and Runtime Optimization (CGO ’04).
IEEE Computer Society, Washington, DC, USA, 75–.
http://dl.acm.org/citation.cfm?id=977395.977673

David Leopoldseder, Lukas Stadler, Thomas Würthinger,
Josef Eisl, Doug Simon, and Hanspeter Mössenböck.
Dominance-based Duplication Simulation (DBDS):
Code Duplication to Enable Compiler Optimizations. In
Proceedings of the 2018 International Symposium on
Code Generation and Optimization (CGO 2018). ACM,
New York, NY, USA, 126–137. https://doi.org/10.1145/
3168811

Sheng Liang and Gilad Bracha. 1998. Dynamic Class
Loading in the Java Virtual Machine. In Proceedings of
the 13th ACM SIGPLAN Conference on Object-oriented
Programming, Systems, Languages, and Applications
(OOPSLA ’98). ACM, New York, NY, USA, 36–44.
https://doi.org/10.1145/286936.286945

Paul Lokuciejewski and Peter Marwedel. 2011. WorstCase
Execution Time Aware Compilation Techniques for
Real-Time Systems. Springer Netherlands. https://doi.
org/10.1007/978-90-481-9929-7_4

Conor Mcbride and Ross Paterson. 2008. Applicative
Programming with Effects. J. Funct. Program.
18, 1 (Jan. 2008), 1–13. https://doi.org/10.1017/
S0956796807006326

Scott McFarling. 1991. Procedure Merging with In176
struction Caches. In Proceedings of the ACM SIGPLAN
1991 Conference on Programming Language Design and
Implementation (PLDI ’91). ACM, New York, NY, USA,
71–79. https://doi.org/10.1145/113445.113452

Erik Meijer. 2012. Your Mouse is a Database. Commun.
ACM 55, 5 (May 2012), 66–73. https://doi.org/10.1145/
2160718.2160735

Michael Paleczny, Christopher Vick, and Cliff Click.
The Java hotspotTM Server Compiler. In Proceedings
of the 2001 Symposium on JavaTM Virtual
Machine Research and Technology Symposium - Volume
1 (JVM’01). USENIX Association, Berkeley, CA, USA,
1–1. http://dl.acm.org/citation.cfm?id=1267847.1267848

Simon Peyton Jones and Simon Marlow. 2002. Secrets of
the Glasgow Haskell Compiler Inliner. J. Funct. Program.
12, 5 (July 2002), 393–434. https://doi.org/10.1017/
S0956796802004331

Aleksandar Prokopec. 2014. Data Structures and Algorithms
for Data-Parallel Computing in a Managed
Runtime. Ph.D. Dissertation. IC, Lausanne. https:
//doi.org/10.5075/epfl-thesis-6264

Aleksandar Prokopec. 2015. SnapQueue: Lock-free Queue
with Constant Time Snapshots. In Proceedings of the
6th ACM SIGPLAN Symposium on Scala (SCALA 2015).
ACM, New York, NY, USA, 1–12. https://doi.org/10.
1145/2774975.2774976

Aleksandar Prokopec. 2016. Pluggable Scheduling for
the Reactor Programming Model. In AGERE! 41–50.

Aleksandar Prokopec. 2017. Accelerating by Idling: How
Speculative Delays Improve Performance of MessageOriented
Systems. In Euro-Par 2017: Parallel Processing,
Francisco F. Rivera, Tomás F. Pena, and José C. Cabaleiro
(Eds.). Springer International Publishing, Cham, 177–
191.

Aleksandar Prokopec. 2017. Analysis of Concurrent LockFree
Hash Tries with Constant-Time Operations. ArXiv
e-prints (Dec. 2017). arXiv:cs.DS/1712.09636

Aleksandar Prokopec. 2017. Encoding the Building
Blocks of Communication. In Proceedings of the 2017
ACM SIGPLAN International Symposium on New Ideas,
New Paradigms, and Reflections on Programming and
Software (Onward! 2017). ACM, New York, NY, USA,
104–118. https://doi.org/10.1145/3133850.3133865

Aleksandar Prokopec. 2018. Artifact Evaluation for
the Optimization-Driven Incremental Inline Substitution
Algorithm for Just-In-Time Compilers. (Dec. 2018).
https://doi.org/10.5281/zenodo.2328430

Aleksandar Prokopec. 2018. Cache-Tries: Concurrent
Lock-Free Hash Tries with Constant-Time Operations. In
Proceedings of the 23rd ACM SIGPLAN Symposium on
Principles and Practice of Parallel Programming (PPoPP
’18). ACM, New York, NY, USA, 15. https://doi.org/10.
1145/3178487.3178498

Aleksandar Prokopec. 2018. Efficient Lock-Free Removing
and Compaction for the Cache-Trie Data Structure.
In Euro-Par 2018: Parallel Processing - 24th International
Conference on Parallel and Distributed Computing,
Turin, Italy, August 27-31, 2018, Proceedings. 575–589.
https://doi.org/10.1007/978-3-319-96983-1_41

Aleksandar Prokopec. 2018. Efficient Lock-Free Removing
and Compaction for the Cache-Trie Data Structure.
https://doi.org/10.6084/m9.figshare.6369134. (2018).

Aleksandar Prokopec. 2018. Reactors.IO Website. (2018).
http://reactors.io

Aleksandar Prokopec, Phil Bagwell, and Martin Odersky.
Cache-Aware Lock-Free Concurrent Hash Tries.
Technical Report.

Aleksandar Prokopec, Phil Bagwell, and Martin Odersky.
Lock-Free Resizeable Concurrent Tries. Springer
Berlin Heidelberg, Berlin, Heidelberg, 156–170. https:
//doi.org/10.1007/978-3-642-36036-7_11

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and
Martin Odersky. 2011. A Generic Parallel Collection
Framework. In Proceedings of the 17th international
conference on Parallel processing - Volume Part II (EuroPar’11).
Springer-Verlag, Berlin, Heidelberg, 136–147.
http://dl.acm.org/citation.cfm?id=2033408.2033425

Aleksandar Prokopec, Nathan Grasso Bronson, Phil
Bagwell, and Martin Odersky. 2012. Concurrent Tries
with Efficient Non-blocking Snapshots. In Proceedings of
the 17th ACM SIGPLAN Symposium on Principles and
Practice of Parallel Programming (PPoPP ’12). ACM,
New York, NY, USA, 151–160. https://doi.org/10.1145/
2145816.2145836

Aleksandar Prokopec, Philipp Haller, and Martin Odersky.
Containers and Aggregates, Mutators and Isolates
for Reactive Programming. In Proceedings of the Fifth Annual
Scala Workshop (SCALA ’14). ACM, New York, NY,
USA, 51–61. https://doi.org/10.1145/2637647.2637656

Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq,
and Thomas Würthinger. 2017. Making Collection
Operations Optimal with Aggressive JIT Compilation.
In Proceedings of the 8th ACM SIGPLAN International
Symposium on Scala (SCALA 2017). ACM, New York, NY,
USA, 29–40. https://doi.org/10.1145/3136000.3136002

Aleksandar Prokopec and Fengyun Liu. 2018. On
the Soundness of Coroutines with Snapshots. CoRR
abs/1806.01405 (2018). arXiv:1806.01405 http://arxiv.
org/abs/1806.01405

Aleksandar Prokopec and Fengyun Liu. 2018. Theory and
Practice of Coroutines with Snapshots. In 32nd European
Conference on Object-Oriented Programming, ECOOP
2018, July 16-21, 2018, Amsterdam, The Netherlands.
3:1–3:32. https://doi.org/10.4230/LIPIcs.ECOOP.2018.3

Aleksandar Prokopec, Heather Miller, Philipp Haller,
Tobias Schlatter, and Martin Odersky. 2012. FlowPools: A
Lock-Free Deterministic Concurrent Dataflow Abstraction,
Proofs. Technical Report.

Aleksandar Prokopec, Heather Miller, Tobias Schlatter,
Philipp Haller, and Martin Odersky. 2012. FlowPools: A
Lock-Free Deterministic Concurrent Dataflow Abstraction.
In LCPC. 158–173.
177

Aleksandar Prokopec and Martin Odersky. 2014. Near Optimal
Work-Stealing Tree Scheduler for Highly Irregular
Data-Parallel Workloads. In Languages and Compilers for
Parallel Computing, Calin Cascaval and Pablo Montesinos ˘
(Eds.). Springer International Publishing, Cham, 55–86.

Aleksandar Prokopec and Martin Odersky. 2015. Isolates,
Channels, and Event Streams for Composable Distributed
Programming. In 2015 ACM International Symposium
on New Ideas, New Paradigms, and Reflections on
Programming and Software (Onward!) (Onward! 2015).
ACM, New York, NY, USA, 171–182. https://doi.org/
10.1145/2814228.2814245

Aleksandar Prokopec and Martin Odersky. 2016. ConcTrees
for Functional and Parallel Programming. Springer
International Publishing, Cham, 254–268. https://doi.
org/10.1007/978-3-319-29778-1_16

Aleksandar Prokopec, Dmitry Petrashko, and Martin
Odersky. 2014. On Lock-Free Work-stealing Iterators
for Parallel Data Structures. (2014), 10.

B. G. Ryder. 1979. Constructing the Call Graph of a
Program. IEEE Trans. Softw. Eng. 5, 3 (May 1979),
216–226. https://doi.org/10.1109/TSE.1979.234183

Robert W. Scheifler. 1977. An Analysis of Inline
Substitution for a Structured Programming Language.
Commun. ACM 20, 9 (Sept. 1977), 647–654. https:
//doi.org/10.1145/359810.359830

Tobias Schlatter, Aleksandar Prokopec, Heather Miller,
Philipp Haller, and Martin Odersky. 2012. Multi-Lane
FlowPools: A Detailed Look. (2012), 13.

Manuel Serrano. 1997. Inline expansion: When and how?
Springer Berlin Heidelberg, Berlin, Heidelberg, 143–157.
https://doi.org/10.1007/BFb0033842

Andreas Sewe, Jannik Jochem, and Mira Mezini. 2011.
Next in Line, Please!: Exploiting the Indirect Benefits
of Inlining by Accurately Predicting Further Inlining. In
Proceedings of the Compilation of the Co-located Workshops
on DSM’11, TMC’11, AGERE! 2011, AOOPES’11,
NEAT’11, & VMIL’11 (SPLASH ’11 Workshops). ACM,
New York, NY, USA, 317–328. https://doi.org/10.1145/
2095050.2095102

Andreas Sewe, Mira Mezini, Aibek Sarimbekov, and
Walter Binder. 2011. Da Capo Con Scala: Design and
Analysis of a Scala Benchmark Suite for the Java Virtual
Machine. SIGPLAN Not. 46, 10 (Oct. 2011), 657–676.
https://doi.org/10.1145/2076021.2048118

Douglas Simon, John Cavazos, Christian Wimmer, and
Sameer Kulkarni. 2013. Automatic Construction of Inlining
Heuristics Using Machine Learning. In Proceedings
of the 2013 IEEE/ACM International Symposium on
Code Generation and Optimization (CGO) (CGO ’13).
IEEE Computer Society, Washington, DC, USA, 1–12.
https://doi.org/10.1109/CGO.2013.6495004

Lukas Stadler, Gilles Duboscq, Hanspeter Mössenböck,
Thomas Würthinger, and Doug Simon. 2013. An Experimental
Study of the Influence of Dynamic Compiler
Optimizations on Scala Performance. In Proceedings of
the 4th Workshop on Scala (SCALA ’13). ACM, New
York, NY, USA, Article 9, 8 pages. https://doi.org/10.
1145/2489837.2489846

Lukas Stadler, Thomas Würthinger, and Hanspeter
Mössenböck. 2014. Partial Escape Analysis and Scalar Replacement
for Java. In Proceedings of Annual IEEE/ACM
International Symposium on Code Generation and Optimization
(CGO ’14). ACM, New York, NY, USA, Article
165, 10 pages. https://doi.org/10.1145/2544137.2544157

Edwin Steiner, Andreas Krall, and Christian Thalinger.
Adaptive Inlining and On-stack Replacement in
the CACAO Virtual Machine. In Proceedings of the 5th
International Symposium on Principles and Practice of
Programming in Java (PPPJ ’07). ACM, New York,
NY, USA, 221–226. https://doi.org/10.1145/1294325.
1294356

Arvind K. Sujeeth, Tiark Rompf, Kevin J. Brown, HyoukJoong
Lee, Hassan Chafi, Victoria Popic, Michael Wu,
Aleksandar Prokopec, Vojin Jovanovic, Martin Odersky,
and Kunle Olukotun. 2013. Composition and Reuse with
Compiled Domain-Specific Languages. In ECOOP 2013 –
Object-Oriented Programming, Giuseppe Castagna (Ed.).
Springer Berlin Heidelberg, Berlin, Heidelberg, 52–78.

Spyridon Triantafyllis, Matthew J. Bridges, Easwaran
Raman, Guilherme Ottoni, and David I. August. 2006. A
Framework for Unrestricted Whole-program Optimization.
In Proceedings of the 27th ACM SIGPLAN Conference
on Programming Language Design and Implementation
(PLDI ’06). ACM, New York, NY, USA, 61–71. https:
//doi.org/10.1145/1133981.1133989

Oscar Waddell and R. Kent Dybvig. 1997. Fast and
effective procedure inlining. Springer Berlin Heidelberg,
Berlin, Heidelberg, 35–52. https://doi.org/10.1007/
BFb0032732

Philip Wadler. 1995. Monads for Functional Programming.
In Advanced Functional Programming, First International
Spring School on Advanced Functional Programming
Techniques-Tutorial Text. Springer-Verlag, Berlin, Heidelberg,
24–52. http://dl.acm.org/citation.cfm?id=647698.
734146

Mark N. Wegman and F. Kenneth Zadeck. 1991. Constant
Propagation with Conditional Branches. ACM Trans.
Program. Lang. Syst. 13, 2 (April 1991), 181–210. https:
//doi.org/10.1145/103135.103136

Christian Wimmer and Hanspeter Mössenböck. 2005.
Optimized Interval Splitting in a Linear Scan Register
Allocator. In Proceedings of the 1st ACM/USENIX
International Conference on Virtual Execution Environments
(VEE ’05). ACM, New York, NY, USA, 132–141.
https://doi.org/10.1145/1064979.1064998

Thomas Würthinger, Christian Wimmer, Christian Humer,
Andreas Wöß, Lukas Stadler, Chris Seaton, Gilles Duboscq,
Doug Simon, and Matthias Grimmer. 2017. Practical
Partial Evaluation for High-performance Dynamic
Language Runtimes. In Proceedings of the 38th ACM SIGPLAN
Conference on Programming Language Design and
178
Implementation (PLDI 2017). ACM, New York, NY, USA,
662–676. https://doi.org/10.1145/3062341.3062381

Graham Yiu. 2017. Partial Inlining with multi-region
outlining based on PGO information. (2017). https:
//reviews.llvm.org/D38190 LLVM Pull Request.

Graham Yiu. 2017.  [RFC] Enhance Partial Inliner by
using a general outlining scheme for cold blocks. (2017).
https://reviews.llvm.org/D38190 LLVM Mailing List.

Peng Zhao and José Nelson Amaral. 2004. To Inline or
Not to Inline? Enhanced Inlining Decisions. Springer
Berlin Heidelberg, Berlin, Heidelberg, 405–419. https:
//doi.org/10.1007/978-3-540-24644-2_26
