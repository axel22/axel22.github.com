---
layout: publication
title: On the Soundness of Coroutines with Snapshots
authors: Aleksandar Prokopec, Fengyun Liu
venue: arXiv
permalink: /publications/soundness-of-coroutines-with-snapshots/index.html
---


## Abstract

Coroutines are a general control flow construct that can eliminate
control flow fragmentation inherent in event-driven programs,
and are still missing in many popular languages.
Coroutines with snapshots are a first-class, type-safe, stackful coroutine model,
which unifies many variants of suspendable computing,
and is sufficiently general to express iterators, single-assignment variables,
async-await, actors, event streams, backtracking, symmetric coroutines and continuations.
In this paper, we develop a formal model called λ⇝ (lambda-squiggly)
that captures the essence of type-safe, stackful, delimited coroutines with snapshots.
We prove the standard progress and preservation safety properties.
Finally, we show a formal transformation from the λ⇝ calculus
to the simply-typed lambda calculus with references.


## Links

\[[PDF](/resources/docs/soundness-coroutines.pdf)\]
\[[BibTex](/resources/docs/bibtex/soundness-coroutines.bib)\]


## References

[1] Akka. Akka documentation, 2011. http://akka.io/docs/

[2] Konrad Anton and Peter Thiemann. Towards Deriving Type Systems and Implementations
for Coroutines, pages 63–79. Springer Berlin Heidelberg, Berlin, Heidelberg, 2010.
URL: http://dx.doi.org/10.1007/978-3-642-17164-2_6, doi:10.1007/978-3-642-17164-2_6

[3] Kenichi Asai and Chihiro Uehara. Selective cps transformation for shift and reset. In
Proceedings of the ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation,
PEPM ’18, pages 40–52, New York, NY, USA, 2018. ACM. URL: http://doi.acm.org/10.1145/3162069, doi:10.1145/3162069

[4] V. Beltran, D. Carrera, J. Torres, and E. Ayguade. Evaluating the scalability of java eventdriven
web servers. In International Conference on Parallel Processing, 2004. ICPP 2004.,
pages 134–142 vol.1, Aug 2004. doi:10.1109/ICPP.2004.1327913

[5] Gérard Berry and Georges Gonthier. The ESTEREL Synchronous Programming Language:
Design, Semantics, Implementation. Sci. Comput. Program., 19(2):87–152, November 1992.
URL: http://dx.doi.org/10.1016/0167-6423(92)90005-V, doi:10.1016/0167-6423(92)90005-V

[6] G.M. Birtwhistle, O.J. Dahl, B. Myhrhaug, and K. Nygaard. Simula Begin. Chartwell-Bratt
Ltd, 1979.

[7] Carl Bruggeman, Oscar Waddell, and R. Kent Dybvig. Representing control in the presence
of one-shot continuations. In Proceedings of the ACM SIGPLAN 1996 Conference on
Programming Language Design and Implementation, PLDI ’96, pages 99–107, New York,
NY, USA, 1996. ACM. URL: http://doi.acm.org/10.1145/231379.231395, doi:10.1145/231379.231395

[8] Mike Cantelon, Marc Harter, TJ Holowaychuk, and Nathan Rajlich. Node.Js in Action.
Manning Publications Co., Greenwich, CT, USA, 1st edition, 2013.

[9] Melvin E. Conway. Design of a Separable Transition-Diagram Compiler. Commun. ACM,
6(7):396–408, July 1963. URL: http://doi.acm.org/10.1145/366663.366704, doi:10.1145/366663.366704

[10] Olivier Danvy and Andrzej Filinski. Abstracting Control. In Proceedings of the 1990
ACM Conference on LISP and Functional Programming, LFP ’90, pages 151–160, New
York, NY, USA, 1990. ACM. URL: http://doi.acm.org/10.1145/91556.91622, doi:10.1145/91556.91622

[11] Iulian Dragos, Antonio Cunei, and Jan Vitek. Continuations in the Java Virtual Machine.
In Second ECOOP Workshop on Implementation, Compilation, Optimization of ObjectOriented
Languages, Programs and Systems (ICOOOLPS’2007), Berlin, 2007. Technische
Universität Berlin

[12] Jeffrey Fischer, Rupak Majumdar, and Todd Millstein. Tasks: Language support for eventdriven
programming. In Proceedings of the 2007 ACM SIGPLAN Symposium on Partial
Evaluation and Semantics-based Program Manipulation, PEPM ’07, pages 134–143, New
York, NY, USA, 2007. ACM. URL: http://doi.acm.org/10.1145/1244381.1244403, doi:10.1145/1244381.1244403

[13] Philipp Haller and Heather Miller. RAY: Integrating Rx and Async for Direct-Style Reactive
Streams. In Workshop on Reactivity, Events and Modularity, 2013.

[14] Philipp Haller and Martin Odersky. Scala actors: Unifying thread-based and event-based
programming. Theor. Comput. Sci., 410(2-3):202–220, February 2009. URL: http://dx.doi.org/10.1016/j.tcs.2008.09.019, doi:10.1016/j.tcs.2008.09.019

[15] Philipp Haller, Aleksandar Prokopec, Heather Miller, Viktor Klang, Roland Kuhn, and
Vojin Jovanovic. Scala improvement proposal: Futures and promises (SIP-14). 2012. URL: http://docs.scala-lang.org/sips/pending/futures-promises.html

[16] Philipp Haller and Jason Zaugg. Scala Async Repository, 2013. https://github.com/scala/async.

[17] Robert Harper. A simplified account of polymorphic references. In INFORMATION PROCESSING LETTERS, pages 201–206, 1994.

[18] Ralph E. Johnson and Brian Foote. Designing reusable classes. Journal of Object-Oriented
Programming, 1(2):22–35, June/July 1988. URL: http://www.laputan.org/drc.html

[19] Charles E. Leiserson. Programming irregular parallel applications in Cilk, pages 61–71.
Springer Berlin Heidelberg, Berlin, Heidelberg, 1997. URL: https://doi.org/10.1007/3-540-63138-0_6, doi:10.1007/3-540-63138-0_6

[20] Barbara Liskov, Alan Snyder, Russell Atkinson, and Craig Schaffert. Abstraction Mechanisms
in CLU. Commun. ACM, 20(8):564–576, August 1977. URL: http://doi.acm.org/10.1145/359763.359789, doi:10.1145/359763.359789

[21] Ingo Maier and Martin Odersky. Deprecating the Observer Pattern with Scala.react. Technical report, 2012.

[22] A. Marzinotto, M. Colledanchise, C. Smith, and P. Ögren. Towards a Unified Behavior
Trees Framework for Robot Control. In 2014 IEEE International Conference on Robotics
and Automation (ICRA), pages 5420–5427, May 2014. doi:10.1109/ICRA.2014.6907656

[23] Erik Meijer. Your Mouse is a Database. Commun. ACM, 55(5):66–73, May 2012. URL:
http://doi.acm.org/10.1145/2160718.2160735, doi:10.1145/2160718.2160735

[24] Ken Moody and Martin Richards. A coroutine mechanism for bcpl. Softw., Pract. Exper., 10(10):765–771, 1980.

[25] Ana Lúcia De Moura and Roberto Ierusalimschy. Revisiting Coroutines. ACM Trans. Program.
Lang. Syst., 31(2):6:1–6:31, February 2009. URL: http://doi.acm.org/10.1145/1462166.1462167, doi:10.1145/1462166.1462167

[26] Greg Pettyjohn, John Clements, Joe Marshall, Shriram Krishnamurthi, and Matthias
Felleisen. Continuations from Generalized Stack Inspection. SIGPLAN Not., 40(9):216–227,
September 2005. URL: http://doi.acm.org/10.1145/1090189.1086393, doi:10.1145/1090189.1086393

[27] Benjamin C. Pierce. Types and Programming Languages. MIT Press, Cambridge, MA, USA, 2002.

[28] A. Prokopec, D. Petrashko, and M. Odersky. Efficient lock-free work-stealing iterators for
data-parallel collections. In 2015 23rd Euromicro International Conference on Parallel,
Distributed, and Network-Based Processing, pages 248–252, March 2015. doi:10.1109/PDP.2015.65

[29] Aleksandar Prokopec. Data Structures and Algorithms for Data-Parallel Computing in a
Managed Runtime. PhD thesis, IC, Lausanne, 2014. doi:10.5075/epfl-thesis-6264

[30] Aleksandar Prokopec. Pluggable scheduling for the reactor programming model. In Proceedings
of the 6th International Workshop on Programming Based on Actors, Agents, and
Decentralized Control, AGERE 2016, pages 41–50, New York, NY, USA, 2016. ACM. URL:
http://doi.acm.org/10.1145/3001886.3001891, doi:10.1145/3001886.3001891

[31] Aleksandar Prokopec. Scala Coroutines Website, 2016. https://storm-enroute/coroutines

[32] Aleksandar Prokopec. Accelerating by idling: How speculative delays improve performance
of message-oriented systems. In Francisco F. Rivera, Tomás F. Pena, and José C. Cabaleiro,
editors, Euro-Par 2017: Parallel Processing, pages 177–191, Cham, 2017. Springer International
Publishing

[33] Aleksandar Prokopec. Encoding the building blocks of communication. In Proceedings of
the 2017 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and
Reflections on Programming and Software, Onward! 2017, pages 104–118, New York, NY,
USA, 2017. ACM. URL: http://doi.acm.org/10.1145/3133850.3133865, doi:10.1145/
3133850.3133865

[34] Aleksandar Prokopec. Reactors.io website, 2018. URL: http://reactors.io

[35] Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. A generic parallel
collection framework. In Proceedings of the 17th international conference on Parallel processing - Volume Part II,
Euro-Par’11, pages 136–147, Berlin, Heidelberg, 2011. SpringerVerlag.
URL: http://dl.acm.org/citation.cfm?id=2033408.2033425

[36] Aleksandar Prokopec, Philipp Haller, and Martin Odersky. Containers and aggregates,
mutators and isolates for reactive programming. In Proceedings of the Fifth Annual Scala
Workshop, SCALA ’14, pages 51–61, New York, NY, USA, 2014. ACM. URL: http://doi.acm.org/10.1145/2637647.2637656, doi:10.1145/2637647.2637656

[37] Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq, and Thomas Würthinger. Making
collection operations optimal with aggressive JIT compilation. In Proceedings of the
8th ACM SIGPLAN International Symposium on Scala, SCALA 2017, pages 29–40, New
York, NY, USA, 2017. ACM. URL: http://doi.acm.org/10.1145/3136000.3136002, doi:10.1145/3136000.3136002

[38] Aleksandar Prokopec and Fengyun Liu. Theory and practice of coroutines with snapshots.
In European Conference on Object-Oriented Programming, 2018.

[39] Aleksandar Prokopec, Heather Miller, Philipp Haller, Tobias Schlatter, and Martin Odersky.
FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction, Proofs. Technical report, 2012.

[40] Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and Martin Odersky.
Flowpools: A lock-free deterministic concurrent dataflow abstraction. In LCPC, pages 158–
173, 2012.

[41] Aleksandar Prokopec and Martin Odersky. Isolates, Channels, and Event Streams for
Composable Distributed Programming. In 2015 ACM International Symposium on New
Ideas, New Paradigms, and Reflections on Programming and Software (Onward!), Onward!
2015, pages 171–182, New York, NY, USA, 2015. ACM. URL: http://doi.acm.org/10.1145/2814228.2814245, doi:10.1145/2814228.2814245

[42] Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. On lock-free work-stealing
iterators for parallel data structures. 2014.

[43] John C. Reynolds. The discoveries of continuations. LISP and Symbolic Computation,
6(3):233–247, Nov 1993. URL: https://doi.org/10.1007/BF01019459, doi:10.1007/BF01019459

[44] Tiark Rompf, Ingo Maier, and Martin Odersky. Implementing First-Class Polymorphic
Delimited Continuations by a Type-Directed Selective CPS-Transform. SIGPLAN Not.,
44(9):317–328, August 2009. URL: http://doi.acm.org/10.1145/1631687.1596596, doi:10.1145/1631687.1596596

[45] P. James Roshan and Amr Sabry. Yield: Mainstream delimited continuations. 1994.

[46] Amr Sabry and Matthias Felleisen. Reasoning About Programs in Continuation-Passing
Style. SIGPLAN Lisp Pointers, V(1):288–298, January 1992. URL: http://doi.acm.org/
10.1145/141478.141563, doi:10.1145/141478.141563

[47] Tobias Schlatter, Aleksandar Prokopec, Heather Miller, Philipp Haller, and Martin Odersky.
Multi-lane flowpools: A detailed look. Tech Report, 2012.

[48] Tatsurou Sekiguchi, Takahiro Sakamoto, and Akinori Yonezawa. Portable implementation
of continuation operators in imperative languages by exception handling. In Advances in
Exception Handling Techniques (the Book Grow out of a ECOOP 2000 Workshop), pages
217–233, London, UK, UK, 2001. Springer-Verlag. URL: http://dl.acm.org/citation.
cfm?id=647332.722736.

[49] Lukas Stadler, Christian Wimmer, Thomas Würthinger, Hanspeter Mössenböck, and John
Rose. Lazy continuations for java virtual machines. In Proceedings of the 7th International
Conference on Principles and Practice of Programming in Java, PPPJ ’09, pages 143–
152, New York, NY, USA, 2009. ACM. URL: http://doi.acm.org/10.1145/1596655.1596679, doi:10.1145/1596655.1596679

[50] Arvind K. Sujeeth, Tiark Rompf, Kevin J. Brown, HyoukJoong Lee, Hassan Chafi, Victoria
Popic, Michael Wu, Aleksandar Prokopec, Vojin Jovanovic, Martin Odersky, and Kunle
Olukotun. Composition and reuse with compiled domain-specific languages. In Proceedings
of the 27th European Conference on Object-Oriented Programming, ECOOP’13, pages
52–78, Berlin, Heidelberg, 2013. Springer-Verlag. URL: http://dx.doi.org/10.1007/978-3-642-39038-8_3, doi:10.1007/978-3-642-39038-8\_3

[51] Gerald Jay Sussman and Guy L. Steele, Jr. Scheme: A interpreter for extended lambda
calculus. Higher Order Symbol. Comput., 11(4):405–439, December 1998. URL: http://dx.doi.org/10.1023/A:1010035624696, doi:10.1023/A:1010035624696

[52] Robert Virding, Claes Wikström, and Mike Williams. Concurrent Programming in ERLANG
(2nd Ed.). Prentice Hall International (UK) Ltd., Hertfordshire, UK, UK, 1996.

[53] Philip Wadler. Monads for Functional Programming. In Advanced Functional Programming,
First International Spring School on Advanced Functional Programming TechniquesTutorial
Text, pages 24–52, London, UK, UK, 1995. Springer-Verlag. URL: http://dl.acm.org/citation.cfm?id=647698.734146.

[54] N. Wirth. Programming in Modula-2. Texts and Monographs in Computer Science.
Springer-Verlag, 1985. URL: https://books.google.ch/books?id=ZVaRXPrD1AoC



