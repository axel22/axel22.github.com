---
layout: publication
title: Encoding the Building Blocks of Communication
authors: Aleksandar Prokopec
venue: Onward! 2017
permalink: /publications/encoding-communication/index.html
---


## Abstract

Distributed systems are often built from the simplest building blocks such as message
sends and RPCs. Since many communication patterns have to be reinvented every time a
distributed system is created, implementing a high-level system is usually expensive.
The recently proposed reactor model alleviates this cost by expressing distributed
computations as reusable components, however, encodings for various communication
patterns in this model are missing.

This paper investigates how to encode the router, client-server, scatter-gather, 
rendezvous, two-way communication, reliable communication and the backpressure protocol
in the reactor model. These protocols are used to implement the core of a distributed
streaming framework, and the performance of these implementations is evaluated.


## Links

\[[PDF](/resources/docs/encoding-communication.pdf)\]
\[[BibTex](/resources/docs/bibtex/encoding-communication.bib)\]
\[[ACM](https://dl.acm.org/citation.cfm?id=3133865)\]


## References

Erlang/OTP Documentation. (2015). http://www.erlang.org/

Akka Documentation. (2016). http://akka.io/docs/

Akka Streams Documentation. (2016). http://doc.akka.io/docs/akka/2.4.3/scala/stream/index.html

Reactive Streams. (2016). http://www.reactive-streams.org/

Reactors.IO website. (2016). http://reactors.io/ Aleksandar Prokopec

Gul Agha. 1986. Actors: A Model of Concurrent Computation in Distributed Systems. MIT Press, Cambridge, MA, USA.

Nir Ailon, Ragesh Jaiswal, and Claire Monteleoni. 2009. Streaming k-means approximation. In NIPS.

Cosmin Arad, Jim Dowling, and Seif Haridi. 2012. Message-passing
Concurrency for Scalable, Stateful, Reconfigurable Middleware. In Pro-
ceedings of the 13th International Middleware Conference (Middleware
’12). Springer-Verlag New York, Inc., New York, NY, USA, 208–228.

J.-P. Briot. 1988. From Objects to Actors: Study of a Limited Symbiosis
in Smalltalk-80. In Proceedings of the 1988 ACM SIGPLAN Workshop
on Object-based Concurrent Programming (OOPSLA/ECOOP ’88). ACM,
New York, NY, USA, 69–72. DOI:http://dx.doi.org/10.1145/67386.67403

Paris Carbone, Asterios Katsifodimos, Stephan Ewen, Volker Markl,
Seif Haridi, and Kostas Tzoumas. 2015. Apache FlinkTM: Stream and
Batch Processing in a Single Engine. IEEE Data Eng. Bull. 38, 4 (2015),
28–38. http://sites.computer.org/debull/A15dec/p28.pdf

Graham Cormode and S. Muthukrishnan. 2005. An Improved Data
Stream Summary: The Count-min Sketch and Its Applications. J.
Algorithms 55, 1 (April 2005), 58–75. DOI:http://dx.doi.org/10.1016/j.
jalgor.2003.12.001

Tom Van Cutsem, Elisa Gonzalez Boix, Christophe Scholliers, An-
doni Lombide Carreton, Dries Harnie, Kevin Pinte, and Wolfgang De
Meuter. 2014. AmbientTalk: programming responsive mobile peer-
to-peer applications with actors. Computer Languages, Systems and
Structures, SCI Impact factor in 2013: 0.296, 5 year impact factor 0.329
(to appear) (2014).

Iulian Dragos and Martin Odersky. 2009. Compiling generics through
user-directed type specialization. In Proceedings of the 4th workshop
on the Implementation, Compilation, Optimization of Object-Oriented
Languages and Programming Systems (ICOOOLPS ’09). ACM, New York,
NY, USA, 42–47. DOI:http://dx.doi.org/10.1145/1565824.1565830

Patrick Th. Eugster, Pascal A. Felber, Rachid Guerraoui, and Anne-
Marie Kermarrec. 2003. The Many Faces of Publish/Subscribe. ACM
Comput. Surv. 35, 2 (June 2003), 114–131. DOI:http://dx.doi.org/10.1145/857076.857078

Philippe Flajolet, ÃĽric Fusy, Olivier Gandouet, and et al. 2007. Hyper-
loglog: The analysis of a near-optimal cardinality estimation algorithm.
In IN AOFA âĂŹ07: PROCEEDINGS OF THE 2007 INTERNATIONAL
CONFERENCE ON ANALYSIS OF ALGORITHMS.

Message Passing Interface Forum. 2012. MPI: A Message-Passing
Interface Standard Version 3.0. (09 2012). Chapter author for Collective
Communication, Process Topologies, and One Sided Communications.

Cédric Fournet and Georges Gonthier. 2002. The Join Calculus: A
Language for Distributed Mobile Programming. Springer Berlin Hei-
delberg, Berlin, Heidelberg, 268–332. DOI:http://dx.doi.org/10.1007/3-540-45699-6_6

Andy Georges, Dries Buytaert, and Lieven Eeckhout. 2007. Statistically
Rigorous Java Performance Evaluation. SIGPLAN Not. 42, 10 (Oct. 2007), 57–76.
DOI:http://dx.doi.org/10.1145/1297105.1297033

J.Y. Girard. 1972. Interprétation fonctionnelle et élimination des coupures
de l’arithmétique d’ordre supérieur. https://books.google.hr/books?id=IRcVHAAACAAJ

Rachid Guerraoui and Luís Rodrigues. 2006. Introduction to reliable
distributed programming. Springer.

Philipp Haller and Martin Odersky. 2006. Event-Based Programming
without Inversion of Control. In Proc. Joint Modular Languages Con-
ference (Springer LNCS).

Philipp Haller, Aleksandar Prokopec, Heather Miller, Viktor Klang,
Roland Kuhn, and Vojin Jovanovic. 2012. Scala Improvement Proposal:
Futures and Promises (SIP-14). http://docs.scala-lang.org/sips/pending/futures-promises.html

Benjamin Hindman, Andy Konwinski, Matei Zaharia, Ali Ghodsi, An-
thony D. Joseph, Randy Katz, Scott Shenker, and Ion Stoica. 2011.
Mesos: A Platform for Fine-grained Resource Sharing in the Data Center.
In Proceedings of the 8th USENIX Conference on Networked Systems
Design and Implementation (NSDI’11). USENIX Association, Berkeley,
CA, USA, 295–308. http://dl.acm.org/citation.cfm?id=1972457.1972488

C. A. R. Hoare. 1978. Communicating Sequential Processes. Commun. ACM 21, 8 (Aug. 1978), 666–677.
DOI:http://dx.doi.org/10.1145/359576.359585

Shams M. Imam and Vivek Sarkar. 2014. Selectors: Actors with Multiple
Guarded Mailboxes. In Proceedings of the 4th International Workshop
on Programming Based on Actors Agents and Decentralized Control
(AGERE! ’14). ACM, New York, NY, USA, 1–14. DOI:http://dx.doi.org/10.1145/2687357.2687360

Nancy A. Lynch. 1996. Distributed Algorithms. MK Publishers Inc.,
San Francisco, CA, USA.

Erik Meijer. 2012. Your Mouse is a Database. Commun. ACM 55, 5
(May 2012), 66–73. DOI:http://dx.doi.org/10.1145/2160718.2160735

Robin Milner, Joachim Parrow, and David Walker. 1992. A Calculus
of Mobile Processes, I. Inf. Comput. 100, 1 (Sept. 1992), 1–40. DOI:
http://dx.doi.org/10.1016/0890-5401(92)90008-4

Thomas D. Newton. 1987. An implementation of Ada tasking. (1987).

Martin Odersky. 2002. An Introduction to Functional Nets. Springer
Berlin Heidelberg, Berlin, Heidelberg, 333–377. DOI:http://dx.doi.org/10.1007/3-540-45699-6_7

Martin Odersky and al. 2004. An Overview of the Scala Programming
Language. Technical Report IC/2004/64. EPFL Lausanne, Switzerland.

Benjamin C. Pierce. 2002. Types and Programming Languages. MIT
Press, Cambridge, MA, USA.

Rob Pike, Dave Presotto, Ken Thompson, and Gerard Holzmann. 1991.
Process Sleep and Wakeup on a Shared-memory Multiprocessor.
(1991).

Aleksandar Prokopec. 2014. ScalaMeter Website. (2014). http://scalameter.github.io

Aleksandar Prokopec. 2016. Pluggable Scheduling for the Reactor
Programming Model. In Proceedings of the 6th International Workshop
on Programming Based on Actors, Agents, and Decentralized Control
(AGERE 2016). ACM, New York, NY, USA, 41–50. DOI:http://dx.doi.org/10.1145/3001886.3001891
Onward!’17, October 25–27, 2017, Vancouver, Canada

Aleksandar Prokopec, Philipp Haller, and Martin Odersky. 2014. Con-
tainers and Aggregates, Mutators and Isolates for Reactive Program-
ming. In Proceedings of the Fifth Annual Scala Workshop (SCALA ’14).
ACM, 51–61. DOI:http://dx.doi.org/10.1145/2637647.2637656

Aleksandar Prokopec and Martin Odersky. 2015. Isolates, Channels,
and Event Streams for Composable Distributed Programming. In 2015
ACM International Symposium on New Ideas, New Paradigms, and Re-
flections on Programming and Software (Onward!) (Onward! 2015). ACM,
New York, NY, USA, 171–182.

M. Shreedhar and George Varghese. 1995. Efficient Fair Queueing
Using Deficit Round Robin. SIGCOMM Comput. Commun. Rev. 25, 4
(Oct. 1995), 231–242. DOI:http://dx.doi.org/10.1145/217391.217453

Sriram Srinivasan and Alan Mycroft. 2008. Kilim: Isolation-Typed
Actors for Java. Springer Berlin Heidelberg, Berlin, Heidelberg, 104–128.
DOI:http://dx.doi.org/10.1007/978-3-540-70592-5_6

Robert Virding, Claes Wikström, and Mike Williams. 1996. Concurrent
Programming in ERLANG (2nd Ed.). Prentice Hall International (UK)
Ltd., Hertfordshire, UK, UK.

Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave,
Justin Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, and
Ion Stoica. 2012. Resilient Distributed Datasets: A Fault-tolerant
Abstraction for In-memory Cluster Computing. In Proceedings of
the 9th USENIX Conference on Networked Systems Design and Imple-
mentation (NSDI’12). USENIX Association, Berkeley, CA, USA, 2–2.
http://dl.acm.org/citation.cfm?id=2228298.2228301

Matei Zaharia, Mosharaf Chowdhury, Michael J. Franklin, Scott
Shenker, and Ion Stoica. 2010. Spark: Cluster Computing with Working Sets.
In Proceedings of the 2nd USENIX Conference on Hot Topics in
Cloud Computing (HotCloud’10). USENIX Association, Berkeley, CA,
USA, 10–10. http://dl.acm.org/citation.cfm?id=1863103.1863113

Matei Zaharia, Tathagata Das, Haoyuan Li, Timothy Hunter, Scott
Shenker, and Ion Stoica. 2013. Discretized Streams: Fault-tolerant
Streaming Computation at Scale. In Proceedings of the Twenty-Fourth
ACM Symposium on Operating Systems Principles (SOSP ’13). ACM,
New York, NY, USA, 423–438. DOI:http://dx.doi.org/10.1145/2517349.2522737
