---
layout: publication
title: Pluggable Scheduling for the Reactor Programming Model
authors: Aleksandar Prokopec
venue: AGERE 2016
permalink: /publications/reactor-scheduler/index.html
---


## Abstract

The reactor model is a foundational programming model for distributed computing,
whose focus is modularizing and composing computations and message protocols.
Previous work on reactors dealt mainly with
the programming model and its composability properties,
but did not show how to schedule computations in reactor-based programs.

In this paper,
we propose a pluggable scheduling algorithm for the reactor model.
The algorithm is customizable with user-defined scheduling policies.
We define and prove safety and progress properties.
We compare our implementation against the Akka actor framework,
and show up to 3x performance improvements
on standard actor benchmarks.


## Links

\[[PDF](/resources/docs/reactor-scheduler.pdf)\]
\[[BibTex]()\]
\[[ACM]()\]


## References

Akka Documentation, 2015. http://akka.io/docs/.

Erlang/OTP documentation, 2015.
http://www.erlang.org/.

Reactors.IO Website, 2016. https://reactors.io.

G. Agha. Actors: A Model of Concurrent Computation
in Distributed Systems. MIT Press, 1986.

A. Georges, D. Buytaert, and L. Eeckhout.
Statistically Rigorous Java Performance Evaluation.
SIGPLAN Not., 42(10):57–76, Oct. 2007.

R. Guerraoui and L. Rodrigues. Introduction to
Reliable Distributed Programming. Springer, 2006.

P. Haller and M. Odersky. Event-Based Programming
without Inversion of Control. In Proc. Joint Modular
Languages Conference, Springer LNCS, 2006.

M. Herlihy and N. Shavit. The Art of Multiprocessor
Programming. Morgan Kaufmann Publishers Inc., San
Francisco, CA, USA, 2008.

B. Hindman, A. Konwinski, M. Zaharia, A. Ghodsi,
A. D. Joseph, R. Katz, S. Shenker, and I. Stoica.
Mesos: A Platform for Fine-grained Resource Sharing
in the Data Center. In Proceedings of the 8th USENIX
Conference on Networked Systems Design and
Implementation, NSDI’11, pages 295–308, Berkeley,
CA, USA, 2011. USENIX Association.

S. M. Imam and V. Sarkar. Savina - An Actor
Benchmark Suite: Enabling Empirical Evaluation of
Actor Libraries. In Proceedings of the 4th
International Workshop on Programming Based on
Actors Agents and Decentralized Control, AGERE!
’14, pages 67–80, New York, NY, USA, 2014. ACM.

S. M. Imam and V. Sarkar. Selectors: Actors with
Multiple Guarded Mailboxes. In Proceedings of the 4th
International Workshop on Programming Based on
Actors Agents and Decentralized Control, AGERE!
’14, pages 1–14, New York, NY, USA, 2014. ACM.

D. Lea. A Java Fork/Join Framework. In Proceedings
of the ACM 2000 Conference on Java Grande, JAVA
’00, pages 36–43, New York, NY, USA, 2000. ACM.

N. A. Lynch. Distributed Algorithms. MK Publishers
Inc., San Francisco, CA, USA, 1996.

M. Odersky and al. An Overview of the Scala
Programming Language. Technical Report
IC/2004/64, EPFL Lausanne, Switzerland, 2004.

K. Pinte, A. Lombide Carreton, E. Gonzalez Boix,
and W. Meuter. Ambient Clouds: Reactive
Asynchronous Collections for Mobile Ad Hoc Network
Applications. In J. Dowling and F. Ta ̈ıani, editors,
Distributed Applications and Interoperable Systems,
volume 7891 of Lecture Notes in Computer Science,
pages 85–98. Springer Berlin Heidelberg, 2013.

A. Prokopec. ScalaMeter Website, 2014.

A. Prokopec, P. Haller, and M. Odersky. Containers
and Aggregates, Mutators and Isolates for Reactive
Programming. In Fifth Annual Scala Workshop,
SCALA ’14, pages 51–61. ACM, 2014.

A. Prokopec and M. Odersky. Isolates, Channels, and
Event Streams for Composable Distributed
Programming. In 2015 ACM International Symposium
on New Ideas, New Paradigms, and Reflections on
Programming and Software (Onward!), Onward! 2015,
pages 171–182, New York, NY, USA, 2015. ACM.

C. Scholliers, E. Tanter, and W. De Meuter. Parallel
Actor Monitors: Disentangling Task-level Parallelism
from Data Partitioning in the Actor Model. Sci.
Comput. Program., 80:52–64, Feb. 2014.

M. Shapiro, N. Pregui ̧ca, C. Baquero, and
M. Zawirski. A Comprehensive Study of Convergent
and Commutative Replicated Data Types. Research
Report RR-7506, Jan. 2011.

A. Silberschatz, P. B. Galvin, and G. Gagne. Operating
System Concepts. Wiley Publishing, 8th edition, 2008.

S. Srinivasan and A. Mycroft. Kilim: Isolation-Typed
Actors for Java, pages 104–128. Springer Berlin
Heidelberg, Berlin, Heidelberg, 2008.

A. Verma, L. Pedrosa, M. R. Korupolu,
D. Oppenheimer, E. Tune, and J. Wilkes. Large-Scale
Cluster Management at Google with Borg. In
Proceedings of the European Conference on Computer
Systems (EuroSys), Bordeaux, France, 2015
