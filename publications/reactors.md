---
layout: publication
title: Reactors, Channels, and Event Streams for Composable Distributed Programming
authors: Aleksandar Prokopec, Martin Odersky
venue: Onward! 2015
permalink: /publications/reactors/index.html
---


## Abstract

The  actor  model  has  been  a  model  of  choice  for  building
reliable  distributed  systems.  On  one  hand,  it  ensures
that message-processing is serialized within each actor, preserving
the familiar sequential programming model. On the
other hand, programs written in the actor model are location-transparent.
The model is sufficiently low-level to express arbitrary message protocols.
Composing these protocols is the
key to high-level abstractions. Unfortunately, it is difficult to
reuse or compose message protocols with actors.

Reactors,  proposed  in  this  paper,  simplify  protocol
composition with first-class typed channels and event
streams. We compare reactors and the actor model
on concrete programs. We identify obstacles for composition
in the classic actor model, and show how to overcome
them. We then show how to build reusable, composable
distributed computing components in the new model.


## Links

\[[PDF](/resources/docs/reactors.pdf)\]
\[[BibTex](/resources/docs/bibtex/reactive-isolates.bib)\]
\[[ACM](http://dl.acm.org/citation.cfm?id=2814245)\]


## References

Dart programming language, 2011. http://www.dartlang.org/.
    
Akka documentation, 2015. http://akka.io/docs/.
    
Erlang/OTP documentation, 2015. http://www.erlang.org/.
    
Reactive Collections, 2015. https://reactive-collections.com.
    
Gul Agha, Actors: a model of concurrent computation in distributed systems, MIT Press, Cambridge, MA, 1986
    
N. Amin, A. Moors, and M. Odersky. Dependent object types. In 19th Internation Workshop on Foundations of Object-Oriented Languages, 2012.
    
J. Armstrong. Making Reliable Distributed Systems in the Presence of Software Errors. PhD thesis, The Royal Institute of Technology, Stockholm, Sweden, December 2003.
    
Vincent Cremet , François Garillot , Sergueï Lenglet , Martin Odersky, A core calculus for scala type checking, Proceedings of the 31st international conference on Mathematical Foundations of Computer Science, August 28-September 01, 2006, Stará Lesná, Slovakia  [doi>10.1007/11821069_1]
    
Tom Van Cutsem , Stijn Mostinckx , Elisa Gonzalez Boix , Jessie Dedecker , Wolfgang De Meuter, AmbientTalk: Object-oriented Event-driven Programming in Mobile Ad hoc Networks, Proceedings of the XXVI International Conference of the Chilean Society of Computer Science, p.3-12, November 08-09, 2007  [doi>10.1109/SCCC.2007.4]
  
Jeffrey Dean , Sanjay Ghemawat, MapReduce: simplified data processing on large clusters, Communications of the ACM, v.51 n.1, January 2008  [doi>10.1145/1327452.1327492]
  
Edsger W. Dijkstra, Letters to the editor: go to statement considered harmful, Communications of the ACM, v.11 n.3, p.147-148, March 1968  [doi>10.1145/362929.362947]
    
C. J. Fidge. Timestamps in message-passing systems that preserve the partial ordering. Proceedings of the 11th Australian Computer Science Conference, 10(1):56–66, 1988.
    
Rachid Guerraoui , Luís Rodrigues, Introduction to Reliable Distributed Programming, Springer-Verlag New York, Inc., Secaucus, NJ, 2006
    
Philipp Haller , Martin Odersky, Event-Based programming without inversion of control, Proceedings of the 7th joint conference on Modular Programming Languages, p.4-22, September 13-15, 2006, Oxford, UK  [doi>10.1007/11860990_2]
    
P. Haller, A. Prokopec, H. Miller, V. Klang, R. Kuhn, and V. Jovanovic. Scala improvement proposal: Futures and promises (SIP-14). 2012.
    
Shams M. Imam , Vivek Sarkar, Selectors: Actors with Multiple Guarded Mailboxes, Proceedings of the 4th International Workshop on Programming based on Actors Agents & Decentralized Control, October 20-20, 2014, Portland, Oregon, USA  [doi>10.1145/2687357.2687360]
    
J. Kreps, N. Narkhede, and J. Rao. Kafka: A distributed messaging system for log processing. In Proceedings of 6th International Workshop on Networking Meets Databases (NetDB), Athens, Greece, 2011.
  
Leslie Lamport, The part-time parliament, ACM Transactions on Computer Systems (TOCS), v.16 n.2, p.133-169, May 1998  [doi>10.1145/279227.279229]
    
Nancy A. Lynch, Distributed Algorithms, Morgan Kaufmann Publishers Inc., San Francisco, CA, 1996
  
Erik Meijer, Your mouse is a database, Communications of the ACM, v.55 n.5, May 2012  [doi>10.1145/2160718.2160735]
    
Erik Meijer , Maarten M. Fokkinga , Ross Paterson, Functional Programming with Bananas, Lenses, Envelopes and Barbed Wire, Proceedings of the 5th ACM Conference on Functional Programming Languages and Computer Architecture, p.124-144, August 26-30, 1991
    
M. Odersky and al. An overview of the Scala programming language. Technical Report IC/2004/64, EPFL Lausanne, Switzerland, 2004.
    
M. Odersky and A. Moors. Fighting bit rot with types (experience report: Scala collections). In FSTTCS 2009, volume 4 of Leibniz International Proceedings in Informatics (LIPIcs), pages 427–451, Dagstuhl, Germany, 2009.
    
Benjamin C. Pierce, Types and programming languages, MIT Press, Cambridge, MA, 2002
    
K. Pinte, A. Lombide Carreton, E. Gonzalez Boix, and W. Meuter. Ambient Clouds: Reactive asynchronous collections for mobile ad hoc network applications. In J. Dowling and F. Taïani, editors, Distributed Applications and Interoperable Systems, volume 7891 of Lecture Notes in Computer Science, pages 85–98. Springer Berlin Heidelberg, 2013.
    
Nuno Preguica , Joan Manuel Marques , Marc Shapiro , Mihai Letia, A Commutative Replicated Data Type for Cooperative Editing, Proceedings of the 2009 29th IEEE International Conference on Distributed Computing Systems, p.395-403, June 22-26, 2009  [doi>10.1109/ICDCS.2009.20]
  
Aleksandar Prokopec, SnapQueue: lock-free queue with constant time snapshots, Proceedings of the 6th ACM SIGPLAN Symposium on Scala, June 13-13, 2015, Portland, OR, USA  [doi>10.1145/2774975.2774976]
  
Aleksandar Prokopec , Philipp Haller , Martin Odersky, Containers and aggregates, mutators and isolates for reactive programming, Proceedings of the Fifth Annual Scala Workshop, July 28-29, 2014, Uppsala, Sweden  [doi>10.1145/2637647.2637656]
    
A. Prokopec, H. Miller, T. Schlatter, P. Haller, and M. Odersky. Flowpools: A lock-free deterministic concurrent dataflow abstraction. In LCPC, pages 158–173, 2012.
    
R. Schollmeier, [16] A Definition of Peer-to-Peer Networking for the Classification of Peer-to-Peer Architectures and Applications, Proceedings of the First International Conference on Peer-to-Peer Computing, p.101, August 27-29, 2001
    
M. Shapiro, N. Preguiça, C. Baquero, and M. Zawirski. A comprehensive study of Convergent and Commutative Replicated Data Types. Research Report RR-7506, Jan. 2011.
    
Joe Armstrong , Robert Virding , Claes Wikström , Mike Williams, Concurrent programming in ERLANG (2nd ed.), Prentice Hall International (UK) Ltd., Hertfordshire, UK, 1996
    
J. E. White, High-level framework for network-based resource sharing, RFC Editor, 1975
    
Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, Ion Stoica, Resilient distributed datasets: a fault-tolerant abstraction for in-memory cluster computing, Proceedings of the 9th USENIX conference on Networked Systems Design and Implementation, April 25-27, 2012, San Jose, CA 
