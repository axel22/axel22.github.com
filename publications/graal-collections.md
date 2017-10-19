---
layout: publication
title: Making Collection Operations Optimal with Aggressive JIT Compilation
authors: Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq, Thomas Wuerthinger
venue: Scala Symposium 2017
permalink: /publications/graal-collections/index.html
---


## Abstract

Functional collection combinators are a neat and widely accepted
data processing abstraction. However, their generic
nature results in high abstraction overheads – Scala collections
are known to be notoriously slow for typical tasks. We
show that proper optimizations in a JIT compiler can widely
eliminate overheads imposed by these abstractions. Using
the open-source Graal JIT compiler, we achieve speedups of
up to 20x on collection workloads compared to the standard
HotSpot C2 compiler. Consequently, a sufficiently aggressive
JIT compiler allows the language compiler, such as Scalac,
to focus on other concerns.

In this paper, we show how optimizations, such as inlining,
polymorphic inlining, and partial escape analysis, are
combined in Graal to produce collections code that is optimal
with respect to manually written code, or close to optimal.
We argue why some of these optimizations are more effectively
done by a JIT compiler. We then identify specific usecases
that most current JIT compilers do not optimize well,
warranting special treatment from the language compiler.

## Links

\[[PDF](/resources/docs/graal-collections.pdf)\]
\[[BibTex](/resources/docs/bibtex/graal-collections.bib)\]
\[[ACM](https://dl.acm.org/citation.cfm?id=3136002)\]


## References

Matthew Arnold, Stephen Fink, Vivek Sarkar, and Peter F. Sweeney. 2000.
A Comparative Study of Static and Profile-based Heuristics for Inlining.
In Proceedings of the ACM SIGPLAN Workshop on Dynamic and Adaptive
Compilation and Optimization (DYNAMO ’00). ACM, New York, NY, USA,
52–64. https://doi.org/10.1145/351397.351416

Andrew Ayers, Richard Schooler, and Robert Gottlieb. 1997. Aggressive
Inlining. In Proceedings of the ACM SIGPLAN 1997 Conference on Programming
Language Design and Implementation (PLDI ’97). ACM, New
York, NY, USA, 134–145. https://doi.org/10.1145/258915.258928

Yosi Ben Asher, Omer Boehm, Daniel Citron, Gadi Haber, Moshe Klausner,
Roy Levin, and Yousef Shajrawi. 2008. Aggressive Function Inlining:
Preventing Loop Blockings in the Instruction Cache. Springer
Berlin Heidelberg, Berlin, Heidelberg, 384–397. https://doi.org/10.1007/
978-3-540-77560-7_26

Aggelos Biboudis and Eugene Burmako. 2014. MorphScala: Safe Class
Morphing with Macros. In Proceedings of the Fifth Annual Scala Workshop
(SCALA ’14). ACM, New York, NY, USA, 18–22. https://doi.org/10.1145/
2637647.2637650

Aggelos Biboudis, Nick Palladinos, and Yannis Smaragdakis. 2014. Clash of
the Lambdas. CoRR abs/1406.6631 (2014). http://arxiv.org/abs/1406.6631
Richard Bird and Philip Wadler. 1988. An Introduction to Functional Programming.
Prentice Hall International (UK) Ltd., Hertfordshire, UK,
UK.

Regis Blanc. 2015. CafeSAT. (2015). https://github.com/regb/cafesat.

Gilad Bracha, Sun Microsystems, Norman Cohen Ibm, Christian Kemper
Inprise, Martin Odersky Epfl, David Stoutamire, and Sun Microsystems.
2003. Adding generics to the java programming language: Public draft
specification, version 2.0. Technical Report.

Eugene Burmako. 2013. Scala Macros: Let Our Powers Combine!: On How
Rich Syntax and Static Types Work with Metaprogramming. In Proceedings
of the 4th Workshop on Scala (SCALA ’13). ACM, New York, NY, USA,
Article 3, 10 pages. https://doi.org/10.1145/2489837.2489840

Pohua P. Chang, Scott A. Mahlke, William Y. Chen, and Wen-mei W. Hwu.
1992. Profile-guided Automatic Inline Expansion for C Programs. Softw.
Pract. Exper. 22, 5 (May 1992), 349–369. https://doi.org/10.1002/spe.
4380220502

Cliff Click. 1995. Global Code Motion/Global Value Numbering. In Proceedings
of the ACM SIGPLAN 1995 Conference on Programming Language
Design and Implementation (PLDI ’95). ACM, New York, NY, USA, 246–
257. https://doi.org/10.1145/207110.207154

Cliff Click and Michael Paleczny. 1995. A Simple Graph-based Intermediate
Representation. In Papers from the 1995 ACM SIGPLAN Workshop on
Intermediate Representations (IR ’95). ACM, New York, NY, USA, 35–49.
https://doi.org/10.1145/202529.202534

L. Peter Deutsch and Allan M. Schiffman. 1984. Efficient Implementation
of the Smalltalk-80 System. In Proceedings of the 11th ACM SIGACTSIGPLAN
Symposium on Principles of Programming Languages (POPL
’84). ACM, New York, NY, USA, 297–302. https://doi.org/10.1145/800017.
800542

Iulian Dragos and Martin Odersky. 2009. Compiling Generics Through Userdirected
Type Specialization. In Proceedings of the 4th Workshop on the
Implementation, Compilation, Optimization of Object-Oriented Languages
and Programming Systems (ICOOOLPS ’09). ACM, New York, NY, USA,
42–47. https://doi.org/10.1145/1565824.1565830

Gilles Duboscq, Thomas Würthinger, and Hanspeter Mössenböck. 2014.
Speculation Without Regret: Reducing Deoptimization Meta-data in the
Graal Compiler. In Proceedings of the 2014 International Conference on
Principles and Practices of Programming on the Java Platform: Virtual
Machines, Languages, and Tools (PPPJ ’14). ACM, New York, NY, USA,
187–193. https://doi.org/10.1145/2647508.2647521

Gilles Duboscq, Thomas Würthinger, Lukas Stadler, Christian Wimmer,
Doug Simon, and Hanspeter Mössenböck. 2013. An Intermediate Representation
for Speculative Optimizations in a Dynamic Compiler. In
Proceedings of the 7th ACM Workshop on Virtual Machines and Intermediate
Languages (VMIL ’13). ACM, New York, NY, USA, 1–10. https:
//doi.org/10.1145/2542142.2542143

Andy Georges, Dries Buytaert, and Lieven Eeckhout. 2007. Statistically
Rigorous Java Performance Evaluation. In Proceedings of the 22Nd Annual
ACM SIGPLAN Conference on Object-oriented Programming Systems and
Applications (OOPSLA ’07). ACM, New York, NY, USA, 57–76. https:
//doi.org/10.1145/1297027.1297033

Thomas Kotzmann and Hanspeter Mössenböck. 2005. Escape Analysis in
the Context of Dynamic Compilation and Deoptimization. In Proceedings
of the 1st ACM/USENIX International Conference on Virtual Execution
Environments (VEE ’05). ACM, New York, NY, USA, 111–120. https:
//doi.org/10.1145/1064979.1064996

Martin Odersky and Adriaan Moors. 2009. Fighting bit Rot with Types
(Experience Report: Scala Collections). In IARCS Annual Conference on
Foundations of Software Technology and Theoretical Computer Science
SCALA’17, October 22–23, 2017, Vancouver, Canada A.
(FSTTCS 2009) (Leibniz International Proceedings in Informatics (LIPIcs)),
Ravi Kannan and K Narayan Kumar (Eds.), Vol. 4. Schloss Dagstuhl–
Leibniz-Zentrum fuer Informatik, Dagstuhl, Germany, 427–451. https:
//doi.org/10.4230/LIPIcs.FSTTCS.2009.2338

Simon Peyton Jones and Simon Marlow. 2002. Secrets of the Glasgow
Haskell Compiler Inliner. J. Funct. Program. 12, 5 (July 2002), 393–434.
https://doi.org/10.1017/S0956796802004331

Aleksandar Prokopec. 2015. SnapQueue: Lock-Free Queue with Constant
Time Snapshots (Scala ’15). https://doi.org/10.1145/2774975.2774976

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. 2011.
A Generic Parallel Collection Framework. In Proceedings of the 17th
International Conference on Parallel Processing - Volume Part II (EuroPar’11).
Springer-Verlag, Berlin, Heidelberg, 136–147. http://dl.acm.org/
citation.cfm?id=2033408.2033425

Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin
Odersky. 2012. Concurrent Tries with Efficient Non-blocking Snapshots.
(2012), 151–160. https://doi.org/10.1145/2145816.2145836

Aleksandar Prokopec, Philipp Haller, and Martin Odersky. 2014. Containers
and Aggregates, Mutators and Isolates for Reactive Programming. In
Proceedings of the Fifth Annual Scala Workshop (SCALA ’14). ACM, 51–61.
https://doi.org/10.1145/2637647.2637656

Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and
Martin Odersky. 2012. FlowPools: A Lock-Free Deterministic Concurrent
Dataflow Abstraction. In LCPC. 158–173.

Aleksandar Prokopec and Martin Odersky. 2016. Conc-Trees for Functional
and Parallel Programming. Springer International Publishing, Cham,
254–268. https://doi.org/10.1007/978-3-319-29778-1_16

Aleksandar Prokopec and Dmitry Petrashko. 2013. ScalaBlitz Documentation.
(2013). http://scala-blitz.github.io/home/documentation/

Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. 2014. On
Lock-Free Work-stealing Iterators for Parallel Data Structures. Technical
Report.

Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. 2015. Efficient
Lock-Free Work-Stealing Iterators for Data-Parallel Collections. In
2015 23rd Euromicro International Conference on Parallel, Distributed, and
Network-Based Processing. 248–252. https://doi.org/10.1109/PDP.2015.65

Lukas Stadler, Gilles Duboscq, Hanspeter Mössenböck, Thomas Würthinger,
and Doug Simon. 2013. An Experimental Study of the Influence of
Dynamic Compiler Optimizations on Scala Performance. In Proceedings
of the 4th Workshop on Scala (SCALA ’13). ACM, New York, NY, USA,
Article 9, 8 pages. https://doi.org/10.1145/2489837.2489846

Lukas Stadler, Thomas Würthinger, and Hanspeter Mössenböck. 2014. Partial
Escape Analysis and Scalar Replacement for Java. In Proceedings
of Annual IEEE/ACM International Symposium on Code Generation and
Optimization (CGO ’14). ACM, New York, NY, USA, Article 165, 10 pages.
https://doi.org/10.1145/2544137.2544157

Nicolas Stucki, Tiark Rompf, Vlad Ureche, and Phil Bagwell. 2015. RRB
Vector: A Practical General Purpose Immutable Sequence. SIGPLAN Not.
50, 9 (Aug. 2015), 342–354. https://doi.org/10.1145/2858949.2784739

Bjorn De Sutter, Frank Tip, and Julian Dolby. 2004. Customization of
Java Library Classes Using Type Constraints and Profile Information.
In ECOOP 2004 - Object-Oriented Programming, 18th European Conference,
Oslo, Norway, June 14-18, 2004, Proceedings. 585–610. https:
//doi.org/10.1007/978-3-540-24851-4_27

Vlad Ureche, Cristian Talau, and Martin Odersky. 2013. Miniboxing:
Improving the Speed to Code Size Tradeoff in Parametric Polymorphism
Translations. In Proceedings of the 2013 ACM SIGPLAN International
Conference on Object Oriented Programming Systems Languages
&#38; Applications (OOPSLA ’13). ACM, New York, NY, USA, 73–92.
https://doi.org/10.1145/2509136.2509537

Christian Wimmer. 2008. Automatic Object Inlining in a Java Virtual Machine.
Trauner.

Thomas Würthinger, Andreas Wöß, Lukas Stadler, Gilles Duboscq, Doug
Simon, and Christian Wimmer. 2012. Self-optimizing AST Interpreters. In
Proceedings of the 8th Symposium on Dynamic Languages (DLS ’12). ACM,
New York, NY, USA, 73–82. https://doi.org/10.1145/2384577.2384587

Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin
Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, and Ion Stoica.
2012. Resilient Distributed Datasets: A Fault-tolerant Abstraction for Inmemory
Cluster Computing. In Proceedings of the 9th USENIX Conference
on Networked Systems Design and Implementation (NSDI’12). USENIX
Association, Berkeley, CA, USA, 2–2
