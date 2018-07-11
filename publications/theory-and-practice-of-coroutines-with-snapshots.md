---
layout: publication
title: Theory and Practice of Coroutines with Snapshots
authors: Aleksandar Prokopec, Fengyun Liu
venue: ECOOP 2018
permalink: /publications/theory-and-practice-of-coroutines-with-snapshots/index.html
---

![Coroutines](https://github.com/axel22/axel22.github.com/blob/master/resources/images/coroutines-64.png)

## Abstract

While event-driven programming is a widespread model for asynchronous computing,
its inherent control flow fragmentation makes event-driven programs notoriously
difficult to understand and maintain. Coroutines are a general control flow construct
that can eliminate control flow fragmentation. However, coroutines are still missing
in many popular languages. This gap is partly caused by the difficulties of supporting
suspendable computations in the language runtime.

We introduce first-class, type-safe, stackful coroutines with snapshots,
which unify many variants of suspendable computing. Our design relies solely
on the static metaprogramming support of the host language, without modifying
the language implementation or the runtime. We also develop a formal model for type-safe,
stackful and delimited coroutines, and we prove the respective safety properties.
We show that the model is sufficiently general to express iterators, single-assignment variables,
async-await, actors and event streams without inversion of control, backtracking,
symmetric coroutines and continuations. Performance evaluations reveal that
the proposed metaprogramming-based approach has a decent performance,
with workload-dependent overheads of 1.03-2.11x compared to equivalent manually written code,
and improvements of up to 6x compared to other approaches.


## Links

\[[PDF](/resources/docs/coroutines-ecoop.pdf)\]
\[[BibTex](/resources/docs/bibtex/theory-and-practice-of-coroutines-with-snapshots.bib)\]

## References

Akka. Akka documentation, 2011. http://akka.io/docs/.

Konrad Anton and Peter Thiemann. Towards Deriving Type Systems and Implementations for Coroutines, pages 63–79. Springer Berlin Heidelberg, Berlin, Heidelberg, 2010. doi:10.1007/978-3-642-17164-2_6.

Kenichi Asai and Chihiro Uehara. Selective CPS transformation for shift and reset. In Proceedings of the ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation, PEPM ’18, pages 40–52, New York, NY, USA, 2018. ACM. doi:10.1145/3162069.

V. Beltran, D. Carrera, J. Torres, and E. Ayguade. Evaluating the scalability of Java event-driven web servers. In International Conference on Parallel Processing, 2004. ICPP 2004., pages 134–142 vol.1, Aug 2004. doi:10.1109/ICPP.2004.1327913.

Gérard Berry and Georges Gonthier. The ESTEREL Synchronous Programming Language: Design, Semantics, Implementation. Sci. Comput. Program., 19(2):87–152, 1992. doi:10.1016/0167-6423(92)90005-V.

G.M. Birtwhistle, O.J. Dahl, B. Myhrhaug, and K. Nygaard. Simula Begin. Chartwell-Bratt Ltd, 1979.

Andrey Breslav. Coroutines for kotlin (revision 3.2), 2017. https://github.com/Kotlin/kotlin-coroutines/blob/master/kotlin-coroutines-informal.md.

Carl Bruggeman, Oscar Waddell, and R. Kent Dybvig. Representing control in the presence of one-shot continuations. In Proceedings of the ACM SIGPLAN 1996 Conference on Programming Language Design and Implementation, PLDI ’96, pages 99–107, New York, NY, USA, 1996. ACM. doi:10.1145/231379.231395.

Eugene Burmako. Scala Macros: Let Our Powers Combine!: On How Rich Syntax and Static Types Work with Metaprogramming. In Proceedings of the 4th Workshop on Scala, SCALA ’13, pages 3:1–3:10, New York, NY, USA, 2013. ACM. doi:10.1145/2489837.2489840.

Mike Cantelon, Marc Harter, TJ Holowaychuk, and Nathan Rajlich. Node.Js in Action. Manning Publications Co., Greenwich, CT, USA, 1st edition, 2013.

Melvin E. Conway. Design of a Separable Transition-Diagram Compiler. Commun. ACM, 6(7):396–408, 1963. doi:10.1145/366663.366704.

Olivier Danvy and Andrzej Filinski. Abstracting Control. In Proceedings of the 1990 ACM Conference on LISP and Functional Programming, LFP ’90, pages 151–160, New York, NY, USA, 1990. ACM. doi:10.1145/91556.91622.

A. Lúcia de Moura, N. Rodriguez, and R. Ierusalimschy. Coroutines in Lua. Journal of Universal Computer Science, 10(7):910–925, July 2004.

Iulian Dragos, Antonio Cunei, and Jan Vitek. Continuations in the Java Virtual Machine. In Second ECOOP Workshop on Implementation, Compilation, Optimization of Object-Oriented Languages, Programs and Systems (ICOOOLPS’2007), Berlin, 2007. Technische Universität Berlin.

Gregory Ewing. PEP 380 - Syntax for Delegating to a Subgenerator, 2009. https://www.python.org/dev/peps/pep-0380/.

Mattias Felleisen. The theory and practice of first-class prompts. In Proceedings of the 15th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages, POPL ’88, pages 180–190, New York, NY, USA, 1988. ACM. doi:10.1145/73560.73576.

Jeffrey Fischer, Rupak Majumdar, and Todd Millstein. Tasks: Language support for event-driven programming. In Proceedings of the 2007 ACM SIGPLAN Symposium on Partial Evaluation and Semantics-based Program Manipulation, PEPM ’07, pages 134–143, New York, NY, USA, 2007. ACM. doi:10.1145/1244381.1244403.

Richard P. Gabriel. The Design of Parallel Programming Languages. In Vladimir Lifschitz, editor, Artificial Intelligence and Mathematical Theory of Computation, pages 91–108. Academic Press Professional, Inc., San Diego, CA, USA, 1991. URL: http://dl.acm.org/citation.cfm?id=132218.132225.

Andy Georges, Dries Buytaert, and Lieven Eeckhout. Statistically rigorous Java performance evaluation. In Proceedings of the 22Nd Annual ACM SIGPLAN Conference on Object-Oriented Programming Systems and Applications, OOPSLA ’07, pages 57–76, New York, NY, USA, 2007. ACM. doi:10.1145/1297027.1297033.

Philipp Haller and Heather Miller. RAY: Integrating Rx and Async for Direct-Style Reactive Streams. In Workshop on Reactivity, Events and Modularity, 2013.

Philipp Haller and Martin Odersky. Scala actors: Unifying thread-based and event-based programming. Theor. Comput. Sci., 410(2-3):202–220, feb 2009. doi:10.1016/j.tcs.2008.09.019.

Philipp Haller, Aleksandar Prokopec, Heather Miller, Viktor Klang, Roland Kuhn, and Vojin Jovanovic. Scala improvement proposal: Futures and promises. In SIP-14, 2012. URL: http://docs.scala-lang.org/sips/pending/futures-promises.html.

Philipp Haller and Jason Zaugg. Scala Async Repository, 2013. https://github.com/scala/async.

Shams M. Imam and Vivek Sarkar. Savina - An Actor Benchmark Suite: Enabling Empirical Evaluation of Actor Libraries. In Proceedings of the 4th International Workshop on Programming Based on Actors Agents & Decentralized Control, AGERE! ’14, pages 67–80, New York, NY, USA, 2014. ACM. doi:10.1145/2687357.2687368.

Jamboree. Co2: A c++ await/yield emulation library for stackless coroutine, 2017. URL: https://github.com/jamboree/co2.

Ralph E. Johnson and Brian Foote. Designing reusable classes. Journal of Object-Oriented Programming, 1(2):22–35, June/July 1988. URL: http://www.laputan.org/drc.html.

Oliver Kowalke. Coroutine2, 2017. URL: http://www.boost.org/doc/libs/1_66_0/libs/coroutine2.

Charles E. Leiserson. Programming irregular parallel applications in Cilk, pages 61–71. Springer Berlin Heidelberg, Berlin, Heidelberg, 1997. doi:10.1007/3-540-63138-0_6.

Barbara Liskov, Alan Snyder, Russell Atkinson, and Craig Schaffert. Abstraction Mechanisms in CLU. Commun. ACM, 20(8):564–576, aug 1977. doi:10.1145/359763.359789.

Ingo Maier and Martin Odersky. Deprecating the Observer Pattern with Scala.react. Technical report, EPFL, 2012.

A. Marzinotto, M. Colledanchise, C. Smith, and P. Ögren. Towards a Unified Behavior Trees Framework for Robot Control. In 2014 IEEE International Conference on Robotics and Automation (ICRA), pages 5420–5427, May 2014. doi:10.1109/ICRA.2014.6907656.

Erik Meijer. Your Mouse is a Database. Commun. ACM, 55(5):66–73, may 2012. doi:10.1145/2160718.2160735.

Ken Moody and Martin Richards. A coroutine mechanism for bcpl. Softw., Pract. Exper., 10(10):765–771, 1980. doi:10.1002/spe.4380101002.

Ana Lúcia De Moura and Roberto Ierusalimschy. Revisiting Coroutines. ACM Trans. Program. Lang. Syst., 31(2):6:1–6:31, 2009. doi:10.1145/1462166.1462167.

Lasse R. Nielsen and BRICS. A selective cps transformation. Electronic Notes in Theoretical Computer Science, 45:311–331, 2001. MFPS 2001,Seventeenth Conference on the Mathematical Foundations of Programming Semantics. doi:10.1016/S1571-0661(04)80969-1.

Rickard Nilsson. ScalaCheck Website, 2010. https://www.scalacheck.org/.

Martin Odersky, Philippe Altherr, Vincent Cremet, Burak Emir, Sebastian Maneth, Stéphane Micheloud, Nikolay Mihaylov, Michel Schinz, Erik Stenman, and Matthias Zenger. An Overview of the Scala Programming Language. Technical report, EPFL, 2004.

Greg Pettyjohn, John Clements, Joe Marshall, Shriram Krishnamurthi, and Matthias Felleisen. Continuations from Generalized Stack Inspection. SIGPLAN Not., 40(9):216–227, sep 2005. doi:10.1145/1090189.1086393.

Benjamin C. Pierce. Types and Programming Languages. MIT Press, Cambridge, MA, USA, 2002.

A. Prokopec, D. Petrashko, and M. Odersky. Efficient lock-free work-stealing iterators for data-parallel collections. In 2015 23rd Euromicro International Conference on Parallel, Distributed, and Network-Based Processing, pages 248–252, March 2015. doi:10.1109/PDP.2015.65.

Aleksandar Prokopec. Data Structures and Algorithms for Data-Parallel Computing in a Managed Runtime. PhD thesis, IC, Lausanne, 2014. doi:10.5075/epfl-thesis-6264.

Aleksandar Prokopec. Scalameter website, 2014. URL: http://scalameter.github.io.

Aleksandar Prokopec. Pluggable scheduling for the reactor programming model. In Proceedings of the 6th International Workshop on Programming Based on Actors, Agents, and Decentralized Control, AGERE 2016, pages 41–50, New York, NY, USA, 2016. ACM. doi:10.1145/3001886.3001891.

Aleksandar Prokopec. Scala Coroutines Website, 2016. https://storm-enroute/coroutines.

Aleksandar Prokopec. Accelerating by idling: How speculative delays improve performance of message-oriented systems. In Francisco F. Rivera, Tomás F. Pena, and José C. Cabaleiro, editors, Euro-Par 2017: Parallel Processing, pages 177–191, Cham, 2017. Springer International Publishing.

Aleksandar Prokopec. Encoding the building blocks of communication. In Proceedings of the 2017 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software, Onward! 2017, pages 104–118, New York, NY, USA, 2017. ACM. doi:10.1145/3133850.3133865.

Aleksandar Prokopec. Reactors.io website, 2018. URL: http://reactors.io.

Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. A generic parallel collection framework. In Proceedings of the 17th international conference on Parallel processing - Volume Part II, Euro-Par’11, pages 136–147, Berlin, Heidelberg, 2011. SpringerVerlag. URL: http://dl.acm.org/citation.cfm?id=2033408.2033425.

Aleksandar Prokopec, Philipp Haller, and Martin Odersky. Containers and aggregates, mutators and isolates for reactive programming. In Proceedings of the Fifth Annual Scala Workshop, SCALA ’14, pages 51–61, New York, NY, USA, 2014. ACM. doi:10.1145/ 2637647.2637656.

Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq, and Thomas Würthinger. Making collection operations optimal with aggressive JIT compilation. In Proceedings of the 8th ACM SIGPLAN International Symposium on Scala, SCALA 2017, pages 29–40, New York, NY, USA, 2017. ACM. doi:10.1145/3136000.3136002.

Aleksandar Prokopec and Fengyun Liu. On the soundness of coroutines with snapshots. CoRR, abs/1806.01405, 2018. arXiv:1806.01405.

Aleksandar Prokopec, Heather Miller, Philipp Haller, Tobias Schlatter, and Martin Odersky. FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction, Proofs. Technical report, EPFL, 2012.

Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and Martin Odersky. Flowpools: A lock-free deterministic concurrent dataflow abstraction. In LCPC, pages 158– 173, 2012. doi:10.1007/978-3-642-37658-0_11.

Aleksandar Prokopec and Martin Odersky. Isolates, Channels, and Event Streams for Composable Distributed Programming. In 2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!), Onward! 2015, pages 171–182, New York, NY, USA, 2015. ACM. doi:10.1145/2814228.2814245.

Aleksandar Prokopec, Dmitry Petrashko, and Martin Odersky. On lock-free work-stealing iterators for parallel data structures. Technical report, EPFL, 2014.

Tiark Rompf, Ingo Maier, and Martin Odersky. Implementing First-Class Polymorphic Delimited Continuations by a Type-Directed Selective CPS-Transform. SIGPLAN Not., 44(9):317–328, 2009. doi:10.1145/1631687.1596596.

P. James Roshan and Amr Sabry. Yield: Mainstream delimited continuations, 2011.

Neil Schemenauer, Tim Peters, and Magnus Hetland. PEP 255 - Simple Generators, 2001. https://www.python.org/dev/peps/pep-0255/.

Tobias Schlatter, Aleksandar Prokopec, Heather Miller, Philipp Haller, and Martin Odersky. Multi-lane flowpools: A detailed look. Tech Report, 2012.

Tatsurou Sekiguchi, Takahiro Sakamoto, and Akinori Yonezawa. Portable implementation of continuation operators in imperative languages by exception handling. In Advances in Exception Handling Techniques (the Book Grow out of a ECOOP 2000 Workshop), pages 217–233, London, UK, UK, 2001. Springer-Verlag. URL: http://dl.acm.org/citation.cfm?id=647332.722736.

Denys Shabalin, Eugene Burmako, and Martin Odersky. Quasiquotes for Scala. Technical report, EPFL, 2013.

Lukas Stadler, Christian Wimmer, Thomas Würthinger, Hanspeter Mössenböck, and John Rose. Lazy continuations for java virtual machines. In Proceedings of the 7th International Conference on Principles and Practice of Programming in Java, PPPJ ’09, pages 143–152, New York, NY, USA, 2009. ACM. doi:10.1145/1596655.1596679.

Arvind K. Sujeeth, Tiark Rompf, Kevin J. Brown, HyoukJoong Lee, Hassan Chafi, Victoria Popic, Michael Wu, Aleksandar Prokopec, Vojin Jovanovic, Martin Odersky, and Kunle Olukotun. Composition and reuse with compiled domain-specific languages. In Proceedings of the 27th European Conference on Object-Oriented Programming, ECOOP’13, pages 52–78, Berlin, Heidelberg, 2013. Springer-Verlag. doi:10.1007/978-3-642-39038-8\_3.

Gerald Jay Sussman and Guy L. Steele, Jr. Scheme: A interpreter for extended lambda calculus. Higher Order Symbol. Comput., 11(4):405–439, 1998. doi:10.1023/A: 1010035624696.

Peter Van Roy and Seif Haridi. Concepts, Techniques, and Models of Computer Programming. The MIT Press, 1st edition, 2004.

Robert Virding, Claes Wikström, and Mike Williams. Concurrent Programming in ERLANG (2nd Ed.). Prentice Hall International (UK) Ltd., Hertfordshire, UK, UK, 1996.

Philip Wadler. Monads for Functional Programming. In Advanced Functional Programming, First International Spring School on Advanced Functional Programming TechniquesTutorial Text, pages 24–52, London, UK, UK, 1995. Springer-Verlag. URL: http://dl.acm.org/citation.cfm?id=647698.734146.

N. Wirth. Programming in Modula-2. Texts and Monographs in Computer Science. Springer-Verlag, 1985. URL: https://books.google.ch/books?id=ZVaRXPrD1AoC.
