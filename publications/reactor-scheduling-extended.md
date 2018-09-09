---
layout: publication
title: Pluggable Scheduling for the Reactor Programming Model
authors: Aleksandar Prokopec
venue: Programming with Actors: State-of-the-Art and Research Perspectives, 2018
permalink: /publications/reactor-scheduling-extended/index.html
---


## Abstract

The reactor model is a foundational programming model for
distributed computing, whose focus is modularizing and composing computations
and message protocols. Previous work on reactors dealt mainly
with the programming model and its composability properties, but did
not show how to schedule computations in reactor-based programs.
In this paper, we propose a pluggable scheduling algorithm for the reactor
model. The algorithm is customizable with user-defined scheduling
policies. We define and prove safety and progress properties. We compare
our implementation against the Akka actor framework, and show up to
3× performance improvements on standard actor benchmarks.


## Links

\[[PDF](/resources/docs/reactor-scheduler-special-issue.pdf)\]
\[[BibTex](/resources/docs/bibtex/cachetries.bib)\]
\[[Springer](https://www.springer.com/us/book/9783030003012)\]


## References

Akka Documentation (2015), http://akka.io/docs/

Erlang/OTP documentation (2015), http://www.erlang.org/

Reactors.IO Website (2016), https://reactors.io

Agha, G.: Actors: A Model of Concurrent Computation in Distributed Systems. MIT Press (1986)

Astley, M., Agha, G.A.: Customization and composition of distributed objects: Middleware abstractions for policy management. In: Proceedings of the 6th ACM SIGSOFT International Symposium on Foundations of Software Engineering. pp. 1–9. SIGSOFT ’98/FSE-6, ACM, New York, NY, USA (1998), http://doi.acm.org/10.1145/288195.288206

Blumofe, R.D., Leiserson, C.E.: Scheduling Multithreaded Computations by Work Stealing. J. ACM 46(5), 720–748 (Sep 1999), http://doi.acm.org/10.1145/324133.324234

Dragos, I., Odersky, M.: Compiling generics through user-directed type specialization. In: Proceedings of the 4th Workshop on the Implementation, Compilation, Optimization of Object-Oriented Languages and Programming Systems. pp. 42–47. ICOOOLPS ’09, ACM, New York, NY, USA (2009), http://doi.acm.org/10.1145/1565824.1565830

Fournet, C., Gonthier, G.: The Join Calculus: a Language for Distributed Mobile Programming (September 2000), https://www.microsoft.com/enus/research/publication/join-calculus-language-distributed-mobile-programming/

Georges, A., Buytaert, D., Eeckhout, L.: Statistically Rigorous Java Performance Evaluation. SIGPLAN Not. 42(10), 57–76 (Oct 2007), http://doi.acm.org/10.1145/1297105.1297033

Guerraoui, R., Rodrigues, L.: Introduction to Reliable Distributed Programming. Springer (2006)

Haller, P., Odersky, M.: Event-Based Programming without Inversion of Control. In: Proc. Joint Modular Languages Conference. Springer LNCS (2006)

Haller, P., Prokopec, A., Miller, H., Klang, V., Kuhn, R., Jovanovic, V.: Scala Improvement Proposal: Futures and Promises (SIP-14) (2012), http://docs.scala-lang.org/sips/pending/futures-promises.html

Herlihy, M., Shavit, N.: The Art of Multiprocessor Programming. Morgan Kaufmann Publishers Inc., San Francisco, CA, USA (2008)

Hindman, B., Konwinski, A., Zaharia, M., Ghodsi, A., Joseph, A.D., Katz, R., Shenker, S., Stoica, I.: Mesos: A Platform for Fine-grained Resource Sharing in the Data Center. In: Proceedings of the 8th USENIX Conference on Networked Systems Design and Implementation. pp. 295–308. NSDI’11, USENIX Association, Berkeley, CA, USA (2011), http://dl.acm.org/citation.cfm?id=1972457.1972488

Imam, S.M., Sarkar, V.: Savina - An Actor Benchmark Suite: Enabling Empirical Evaluation of Actor Libraries. In: Proceedings of the 4th International Workshop on Programming Based on Actors Agents and Decentralized Control. pp. 67–80. AGERE! ’14, ACM, New York, NY, USA (2014), http://doi.acm.org/10.1145/2687357.2687368

Imam, S.M., Sarkar, V.: Selectors: Actors with Multiple Guarded Mailboxes. In: Proceedings of the 4th International Workshop on Programming Based on Actors Agents and Decentralized Control. pp. 1–14. AGERE! ’14, ACM, New York, NY, USA (2014), http://doi.acm.org/10.1145/2687357.2687360

Lea, D.: A Java Fork/Join Framework. In: Proceedings of the ACM 2000 Conference on Java Grande. pp. 36–43. JAVA ’00, ACM, New York, NY, USA (2000), http://doi.acm.org/10.1145/337449.337465

Lynch, N.A.: Distributed Algorithms. MK Publishers Inc., San Francisco, CA, USA (1996)

Milner, R., Parrow, J., Walker, D.: A calculus of mobile processes, i. Inf. Comput. 100(1), 1–40 (Sep 1992), http://dx.doi.org/10.1016/0890-5401(92)90008-4

Odersky, M., al.: An Overview of the Scala Programming Language. Tech. Rep. IC/2004/64, EPFL Lausanne, Switzerland (2004)

Pinte, K., Lombide Carreton, A., Gonzalez Boix, E., Meuter, W.: Ambient Clouds: Reactive Asynchronous Collections for Mobile Ad Hoc Network Applications. In: Dowling, J., Taïani, F. (eds.) Distributed Applications and Interoperable Systems, Lecture Notes in Computer Science, vol. 7891, pp. 85–98. Springer Berlin Heidelberg (2013)

Prokopec, A.: ScalaMeter Website (2014), http://scalameter.github.io

Prokopec, A.: Snapqueue: lock-free queue with constant time snapshots. In: Proceedings of the 6th ACM SIGPLAN Symposium on Scala, Scala 2015, Portland, OR, USA, June 15-17, 2015. pp. 1–12 (2015), http://doi.acm.org/10.1145/2774975.2774976

Prokopec, A.: Pluggable scheduling for the reactor programming model. In: Proceedings of the 6th International Workshop on Programming Based on Actors, Agents, and Decentralized Control. pp. 41–50. AGERE 2016, ACM, New York, NY, USA (2016), http://doi.acm.org/10.1145/3001886.3001891

Prokopec, A.: Accelerating by Idling: How Speculative Delays Improve Performance of Message-Oriented Systems, pp. 177–191. Springer International Publishing, Cham (2017)

Prokopec, A.: Encoding the building blocks of communication. In: accepted at Onward 2017, to appear (2017)

Prokopec, A., Bagwell, P., Rompf, T., Odersky, M.: A generic parallel collection framework. In: Proceedings of the 17th international conference on Parallel processing - Volume Part II. pp. 136–147. Euro-Par’11, Springer-Verlag, Berlin, Heidelberg (2011), http://dl.acm.org/citation.cfm?id=2033408.2033425

Prokopec, A., Haller, P., Odersky, M.: Containers and Aggregates, Mutators and Isolates for Reactive Programming. In: Fifth Annual Scala Workshop. pp. 51–61. SCALA ’14, ACM (2014), http://doi.acm.org/10.1145/2637647.2637656

Prokopec, A., Miller, H., Schlatter, T., Haller, P., Odersky, M.: Flowpools: A lockfree deterministic concurrent dataflow abstraction. In: LCPC. pp. 158–173 (2012)

Prokopec, A., Odersky, M.: Near Optimal Work-Stealing Tree Scheduler for Highly Irregular Data-Parallel Workloads, pp. 55–86. Springer International Publishing, Cham (2014)

Prokopec, A., Odersky, M.: Isolates, Channels, and Event Streams for Composable Distributed Programming. In: 2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!). pp. 171–182. Onward! 2015, ACM, New York, NY, USA (2015), http://doi.acm.org/10.1145/2814228.2814245

Prokopec, A., Odersky, M.: Conc-Trees for Functional and Parallel Programming, pp. 254–268. Springer International Publishing, Cham (2016)

Scholliers, C., Tanter, E., De Meuter, W.: Parallel Actor Monitors: Disentangling Task-level Parallelism from Data Partitioning in the Actor Model. Sci. Comput. Program. 80, 52–64 (Feb 2014)

Shapiro, M., Preguiça, N., Baquero, C., Zawirski, M.: A Comprehensive Study of Convergent and Commutative Replicated Data Types. Research Report RR-7506 (Jan 2011), https://hal.inria.fr/inria-00555588

Silberschatz, A., Galvin, P.B., Gagne, G.: Operating System Concepts. Wiley Publishing, 8th edn. (2008)

Srinivasan, S., Mycroft, A.: Kilim: Isolation-Typed Actors for Java, pp. 104–128. Springer Berlin Heidelberg, Berlin, Heidelberg (2008)

Sturman, D.C., Agha, G.A.: A protocol description language for customizing failure semantics. In: Proceedings of IEEE 13th Symposium on Reliable Distributed Systems. pp. 148–157 (Oct 1994)

Verma, A., Pedrosa, L., Korupolu, M.R., Oppenheimer, D., Tune, E., Wilkes, J.: Large-Scale Cluster Management at Google with Borg. In: Proceedings of the Eu
