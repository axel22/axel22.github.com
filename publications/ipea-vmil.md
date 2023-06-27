---
layout: publication
title: Inlining-Benefit Prediction with Interprocedural Partial Escape Analysis
authors: Matthew Edwin Weingarten, Theodoros Theodoridis, Aleksandar Prokopec
venue: Virtual Machines and Language Implementations 2022 (VMIL 2022)
permalink: /publications/ipea-vmil/index.html
---


## Abstract

Inlining is the primary facilitating mechanism for intraprocedural Partial Escape Analysis (PEA),
which allows for the removal of object allocations on a branch-by-branch basis and is critical for performance in object-oriented languages.
Prior work used interprocedural Escape Analysis to make inlining decisions, but it discarded control-flow-sensitivity when crossing procedure boundaries,
and did not weigh other metrics to model the cost-benefit of inlining, resulting in unpredictable inlining decisions and suboptimal performance.
Our work addresses these issues and introduces a novel Interprocedural Partial Escape Analysis algorithm (IPEA) to predict the inlining benefits,
and improve the cost-benefit model of an existing optimization-driven inliner. We evaluate the implementation of IPEA in GraalVM Native Image,
on industry-standard benchmark suites Dacapo, ScalaBench, and Renaissance. Out of 36 benchmarks with a geometric mean runtime improvement of 1.79%,
6 benchmarks achieve an improvement of over 5% with a geomean of 9.10% and up to 24.62%, while also reducing code size and compilation times compared to existing approaches.

## Links

\[[PDF](/resources/docs/ipea-vmil.pdf)\]
\[[BibTex](/resources/docs/bibtex/ipea-vmil.bib)\]
\[[ACM](https://dl.acm.org/doi/10.1145/3563838.3567677)\]

## References

[1] V8 Engine Documentation. https://v8.dev/docs. Accessed:
2022-08-26.

[2] Matthew Arnold, Stephen Fink, Vivek Sarkar, and Peter F Sweeney. 2000.
A comparative study of static and profile-based heuristics for
inlining. In Proceedings of the ACM SIGPLAN workshop on Dynamic
and adaptive compilation and optimization. 52–64.

[3] Andrew Ayers, Richard Schooler, and Robert Gottlieb. 1997. Aggressive Inlining. In Proceedings of the ACM SIGPLAN 1997 Conference on
Programming Language Design and Implementation (Las Vegas, Nevada,
USA) (PLDI ’97). Association for Computing Machinery, New York,
NY, USA, 134–145. https://doi.org/10.1145/258915.258928

[4] J Eugene Ball. 1979. Predicting the effects of optimization on a procedure body. ACM SIGPLAN Notices 14, 8 (1979), 214–220.

[5] Carl E Baum, William L Baker, William D Prather, Jane M Lehr, James P
O’Loughlin, DV Giri, Ian D Smith, Robert Altes, James Fockler, Donald M McLemore, et al. 2004. JOLT: A highly directive, very intensive,
impulse-like radiator. Proc. IEEE 92, 7 (2004), 1096–1109.

[6] Stephen M Blackburn, Robin Garner, Chris Hoffmann, Asjad M Khang,
Kathryn S McKinley, Rotem Bentzur, Amer Diwan, Daniel Feinberg,
Daniel Frampton, Samuel Z Guyer, et al. 2006. The DaCapo benchmarks: Java benchmarking development and analysis. In Proceedings
of the 21st annual ACM SIGPLAN conference on Object-oriented programming systems, languages, and applications. 169–190.

[7] Bruno Blanchet. 1998. Escape analysis: Correctness proof, implementation and experimental results. In Proceedings of the 25th ACM
SIGPLAN-SIGACT symposium on Principles of programming languages.
25–37.

[8] Bruno Blanchet. 1999. Escape analysis for object-oriented languages:
application to Java. Acm Sigplan Notices 34, 10 (1999), 20–34.

[9] Bruno Blanchet. 2003. Escape analysis for JavaTM: Theory and practice.
ACM Transactions on Programming Languages and Systems (TOPLAS)
25, 6 (2003), 713–775.

[10] Gilad Bracha, Norman Cohen, Christian Kemper, Inprise Martin Odersky, EPFL David Stoutamire, Kresten Thorup, and Philip Wadler. 2003.
Adding Generics to the Java Programming Language: Public Draft
Specification Version 2.0. Java Community Process, http://www. jcp.
org/en/jsr/detail (2003).

[11] Jong-Deok Choi, Manish Gupta, Mauricio Serrano, Vugranam C Sreedhar, and Sam Midkiff. 1999. Escape analysis for Java. Acm Sigplan
Notices 34, 10 (1999), 1–19.

[12] Jong-Deok Choi, Manish Gupta, Mauricio J Serrano, Vugranam C
Sreedhar, and Samuel P Midkiff. 2003. Stack allocation and synchronization optimizations for Java using escape analysis. ACM Transactions on Programming Languages and Systems (TOPLAS) 25, 6 (2003),
876–910.

[13] Jeffrey Dean and Craig Chambers. 1994. Towards better inlining decisions using inlining trials. In Proceedings of the 1994 ACM Conference
on LISP and Functional Programming. 273–282.

[14] David Detlefs and Ole Agesen. 1999. Inlining of virtual methods. In
European Conference on Object-Oriented Programming. Springer, 258–
277.

[15] Gilles Duboscq, Lukas Stadler, Thomas Würthinger, Doug Simon,
Christian Wimmer, and Hanspeter Mössenböck. 2013. Graal IR: An
extensible declarative intermediate representation. In Proceedings of
the Asia-Pacific Programming Languages and Compilers Workshop.

[16] Gilles Duboscq, Thomas Würthinger, and Hanspeter Mössenböck. 2014.
Speculation without regret: reducing deoptimization meta-data in the
Graal compiler. In Proceedings of the 2014 International Conference on
Principles and Practices of Programming on the Java platform: Virtual
machines, Languages, and Tools. 187–193.

[17] Bruno Dufour, Barbara G Ryder, and Gary Sevitsky. 2007. Blended
analysis for performance understanding of framework-based applications. In Proceedings of the 2007 international symposium on Software
testing and analysis. 118–128.

[18] David Gay and Bjarne Steensgaard. 2000. Fast escape analysis and
stack allocation for object-based programs. In International Conference
on Compiler Construction. Springer, 82–93.

[19] Groovy. [n.d.]. Groovy-core/listhashmap.java at master ·
groovy/groovy-core. https://github.com/groovy/groovy-core/
blob/master/src/main/org/codehaus/groovy/util/ListHashMap.java
Accessed: 2022-09-09.

[20] Christian Häubl, Christian Wimmer, and Hanspeter Mössenböck. 2013.
Context-sensitive trace inlining for Java. Computer Languages, Systems
& Structures 39, 4 (2013), 123–141.

[21] Kim Hazelwood and David Grove. 2003. Adaptive online contextsensitive inlining. In International Symposium on Code Generation and
Optimization, 2003. CGO 2003. IEEE, 253–264.

[22] Gérard Huet. 1997. The Zipper. J. Funct. Program. 7, 5 (sep 1997),
549–554. https://doi.org/10.1017/S0956796897002864

[23] Kazuaki Ishizaki, Motohiro Kawahito, Toshiaki Yasue, Hideaki Komatsu, and Toshio Nakatani. 2000. A study of devirtualization techniques for a Java Just-In-Time compiler. In Proceedings of the 15th
ACM SIGPLAN conference on Object-oriented programming, systems,
languages, and applications. 294–310.

[24] Asterios Katsifodimos and Sebastian Schelter. 2016. Apache Flink:
Stream Analytics at Scale. In 2016 IEEE International Conference on
Cloud Engineering Workshop (IC2EW). 193–193. https://doi.org/10.
1109/IC2EW.2016.56

[25] Thomas Kotzmann and Hanspeter Mössenböck. 2005. Escape Analysis in the Context of Dynamic Compilation and Deoptimization.
In Proceedings of the 1st ACM/USENIX International Conference on
Virtual Execution Environments (Chicago, IL, USA) (VEE ’05). Association for Computing Machinery, New York, NY, USA, 111–120.
https://doi.org/10.1145/1064979.1064996

[26] Thomas Kotzmann and Hanspeter Mossenbock. 2007. Run-time support for optimizations based on escape analysis. In International Symposium on Code Generation and Optimization (CGO’07). IEEE, 49–60.

[27] C. Lattner and V. Adve. 2004. LLVM: a compilation framework for
lifelong program analysis & transformation. In International Symposium on Code Generation and Optimization, 2004. CGO 2004. 75–86.
https://doi.org/10.1109/CGO.2004.1281665

[28] Conor Mcbride and Ross Paterson. 2008. Applicative Programming
with Effects. J. Funct. Program. 18, 1 (jan 2008), 1–13. https://doi.org/
10.1017/S0956796807006326

[29] Erik Meijer. 2012. Your Mouse is a Database: Web and Mobile Applications Are Increasingly Composed of Asynchronous and Realtime
Streaming Services and Push Notifications. Queue 10, 3 (mar 2012),
20–33. https://doi.org/10.1145/2168796.2169076

[30] Erik Meijer, Brian Beckman, and Gavin Bierman. 2006. LINQ: Reconciling Object, Relations and XML in the .NET Framework. In Proceedings
of the 2006 ACM SIGMOD International Conference on Management of
Data (Chicago, IL, USA) (SIGMOD ’06). Association for Computing
Machinery, New York, NY, USA, 706. https://doi.org/10.1145/1142473.
1142552

[31] Erik Meijer, Maarten Fokkinga, and Ross Paterson. 1991. Functional
programming with bananas, lenses, envelopes and barbed wire. In
Functional Programming Languages and Computer Architecture, John
Hughes (Ed.). Springer Berlin Heidelberg, Berlin, Heidelberg, 124–144.

[32] Michael Paleczny, Christopher Vick, and Cliff Click. 2001. The Java
HotspotTM Server Compiler. In Proceedings of the 2001 Symposium on
JavaTM Virtual Machine Research and Technology Symposium - Volume
1 (Monterey, California) (JVM’01). USENIX Association, USA, 1.

[33] Simon Peyton Jones and Simon Marlow. 2002. Secrets of the Glasgow
Haskell Compiler Inliner. J. Funct. Program. 12, 5 (jul 2002), 393–434.
https://doi.org/10.1017/S0956796802004331

[34] Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. 2011.
A Generic Parallel Collection Framework. In Proceedings of the
17th International Conference on Parallel Processing - Volume Part II
(Bordeaux, France) (Euro-Par’11). Springer-Verlag, Berlin, Heidelberg,
136–147.

[35] Aleksandar Prokopec, Gilles Duboscq, David Leopoldseder, and
Thomas Wïrthinger. 2019. An Optimization-Driven Incremental Inline
Substitution Algorithm for Just-in-Time Compilers. In 2019 IEEE/ACM
International Symposium on Code Generation and Optimization (CGO).
164–179. https://doi.org/10.1109/CGO.2019.8661171

[36] Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq, and
Thomas Würthinger. 2017. Making Collection Operations Optimal
with Aggressive JIT Compilation. In Proceedings of the 8th ACM SIGPLAN International Symposium on Scala (Vancouver, BC, Canada)
(SCALA 2017). Association for Computing Machinery, New York, NY,
USA, 29–40. https://doi.org/10.1145/3136000.3136002

[37] Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller,
and Martin Odersky. 2013. FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction. In Languages and Compilers for Parallel
Computing, Hironori Kasahara and Keiji Kimura (Eds.). Springer Berlin
Heidelberg, Berlin, Heidelberg, 158–173.

[38] Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. 2015. Efficient Lock-Free Work-Stealing Iterators for Data-Parallel Collections.
In 2015 23rd Euromicro International Conference on Parallel, Distributed,
and Network-Based Processing. 248–252. https://doi.org/10.1109/PDP.
2015.65

[39] Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tůma, Martin Studener, Lubomír Bulej, Yudi Zheng, Alex
Villazón, Doug Simon, Thomas Würthinger, and Walter Binder. 2019.
On Evaluating the Renaissance Benchmarking Suite: Variety, Performance, and Complexity. CoRR abs/1903.10267 (2019). arXiv:1903.10267
http://arxiv.org/abs/1903.10267

[40] Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tůma, Martin Studener, Lubomír Bulej, Yudi Zheng, Alex
Villazón, Doug Simon, et al. 2019. Renaissance: benchmarking suite
for parallel applications on the JVM. In Proceedings of the 40th ACM
SIGPLAN Conference on Programming Language Design and Implementation. 31–47.

[41] Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tůma, Martin Studener, Lubomír Bulej, Yudi Zheng, Alex
Villazón, Doug Simon, Thomas Würthinger, and Walter Binder. 2019.
Renaissance: A Modern Benchmark Suite for Parallel Applications
on the JVM. In Proceedings Companion of the 2019 ACM SIGPLAN
International Conference on Systems, Programming, Languages, and
Applications: Software for Humanity (Athens, Greece) (SPLASH Companion 2019). Association for Computing Machinery, New York, NY,
USA, 11–12. https://doi.org/10.1145/3359061.3362778

[42] Aleksandar Prokopec and Thomas Wuerthinger. 2019. Enhancing
program execution using optimization-driven inlining. http://www.
freepatentsonline.com/10261765.html

[43] Fabrice Rastello. 2016. SSA-Based Compiler Design (1st ed.). Springer
Publishing Company, Incorporated.

[44] Alexandru Salcianu and Martin Rinard. 2001. Pointer and escape
analysis for multithreaded programs. ACM SIGPLAN Notices 36, 7
(2001), 12–23.

[45] Robert W Scheifler. 1977. An analysis of inline substitution for a
structured programming language. Commun. ACM 20, 9 (1977), 647–654.

[46] Andreas Sewe, Jannik Jochem, and Mira Mezini. 2011. Next in line,
please! exploiting the indirect benefits of inlining by accurately predicting further inlining. In Proceedings of the compilation of the co-located
workshops on DSM’11, TMC’11, AGERE! 2011, AOOPES’11, NEAT’11, &
VMIL’11. 317–328.

[47] Andreas Sewe, Mira Mezini, Aibek Sarimbekov, and Walter Binder. 2011.
Da Capo Con Scala: Design and Analysis of a Scala Benchmark Suite for the Java Virtual Machine. In Proceedings of the 2011
ACM International Conference on Object Oriented Programming Systems
Languages and Applications (Portland, Oregon, USA) (OOPSLA ’11).
Association for Computing Machinery, New York, NY, USA, 657–676.
https://doi.org/10.1145/2048066.2048118

[48] Denys Shabalin and Martin Odersky. 2018. Interflow: interprocedural
flow-sensitive type inference and method duplication. In Proceedings
of the 9th ACM SIGPLAN International Symposium on Scala. 61–71.

[49] M Šipek, D Muharemagić, B Mihaljević, and A Radovan. 2020. Enhancing Performance of Cloud-based Software Applications with GraalVM
and Quarkus. In 2020 43rd International Convention on Information,
Communication and Electronic Technology (MIPRO). IEEE, 1746–1751.

[50] Lukas Stadler, Thomas Würthinger, and Hanspeter Mössenböck. 2014.
Partial Escape Analysis and Scalar Replacement for Java. In Proceedings
of Annual IEEE/ACM International Symposium on Code Generation and
Optimization (Orlando, FL, USA) (CGO ’14). Association for Computing
Machinery, New York, NY, USA, 165–174. https://doi.org/10.1145/
2581122.2544157

[51] Edwin Steiner, Andreas Krall, and Christian Thalinger. 2007. Adaptive
inlining and on-stack replacement in the CACAO virtual machine.
In Proceedings of the 5th international symposium on Principles and
practice of programming in Java. 221–226.

[52] Philip Wadler. 1993. Monads for functional programming. In Program
Design Calculi, Manfred Broy (Ed.). Springer Berlin Heidelberg, Berlin,
Heidelberg, 233–264.

[53] Sutao Wang. 2021. Thin Serverless Functions with GraalVM Native
Image. Master’s thesis. ETH Zurich.

[54] Matthew Edwin Weingarten, Theodoros Theodoridis, and Aleksandar Prokopec. 2022. Inlining-Benefit Prediction with Interprocedural
Partial Escape Analysis – Appendix. https://doi.org/10.5281/zenodo.7308640

[55] John Whaley and Martin Rinard. 1999. Compositional pointer and
escape analysis for Java programs. In Proceedings of the 14th ACM SIGPLAN conference on Object-oriented programming, systems, languages,
and applications. 187–206.

[56] Christian Wimmer, Vojin Jovanovic, Erik Eckstein, and Thomas
Würthinger. 2017. One Compiler: Deoptimization to Optimized Code.
In Proceedings of the 26th International Conference on Compiler Construction (Austin, TX, USA) (CC 2017). Association for Computing Machinery, New York, NY, USA, 55–64. https://doi.org/10.1145/3033019.3033025

[57] Christian Wimmer, Codrut Stancu, Peter Hofer, Vojin Jovanovic, Paul
Wögerer, Peter B. Kessler, Oleg Pliss, and Thomas Würthinger. 2019.
Initialize Once, Start Fast: Application Initialization at Build Time.
Proc. ACM Program. Lang. 3, OOPSLA, Article 184 (oct 2019), 29 pages.
https://doi.org/10.1145/3360610

[58] Matei Zaharia, Reynold S. Xin, Patrick Wendell, Tathagata Das,
Michael Armbrust, Ankur Dave, Xiangrui Meng, Josh Rosen, Shivaram Venkataraman, Michael J. Franklin, Ali Ghodsi, Joseph Gonzalez,
Scott Shenker, and Ion Stoica. 2016. Apache Spark: A Unified Engine for Big Data Processing. Commun. ACM 59, 11 (oct 2016), 56–65.
https://doi.org/10.1145/2934664

