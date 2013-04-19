---
layout: default
title: Professional info
permalink: /professional/index.html
---


I am currently working on a doctorate as a research assistant in the School of Computer
and Communication Sciences at the [EPFL](http://www.epfl.ch) in Switzerland,
working in the [LAMP](http://lamp.epfl.ch) laboratory on [Scala](http://www.scala-lang.org)
development under the supervision of [dr. Martin Odersky](http://lampwww.epfl.ch/~odersky/).
I received my Master degree at the [Faculty of Electrical Engineering and Computing](http://www.fer.hr/)
in Zagreb.
My research interests include programming languages, software engineering,
concurrency and parallelism. 


# <a id="publications">Publications</a>

* **Composition and Reuse with Compiled Domain-Specific Languages**<br/>
Arvind K. Sujeeth, Tiark Rompf, Kevin J. Brown, HyoukJoong Lee, Hassan Chafi, Victoria Popic, Michael Wu, Aleksandar Prokopec, Vojin Jovanovic, Martin Odersky, Kunle Olukotun<br/>
[The European Conference on Object-Oriented Programming (ECOOP 2013)](http://www.lirmm.fr/ecoop13/)<br/>
Montpellier, France, July 2013<br/>
\[[PDF]()\]

* **FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction**<br/>
Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, and Martin Odersky<br/>
[The 25th International Workshop on Languages and Compilers for Parallel Computing (LCPC 2012)](http://www.kasahara.cs.waseda.ac.jp/lcpc2012/)<br/>
Tokyo, Japan, September 2012<br/>
\[[PDF](/resources/docs/lcpc2012.pdf)\]

* **Concurrent Tries with Efficient Non-blocking Snapshots**<br/>
Aleksandar Prokopec, Nathan Bronson, Phil Bagwell, Martin Odersky<br/>
[17th ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming (PPOPP 2012)](http://dynopt.org/ppopp-2012)<br/>
New Orleans, Louisiana, February 2012<br/>
\[[PDF](/resources/docs/ctries-snapshot.pdf)\]

* **Lock-Free Resizeable Concurrent Tries**<br/>
Aleksandar Prokopec, Phil Bagwell, Martin Odersky<br/>
[The 24th International Workshop on Languages and Compilers for Parallel Computing (LCPC 2011)](http://lcpc11.cs.colostate.edu/)
Fort Collins, Colorado, September 2011<br/>
*Best Paper Presentation Award*<br/>
\[[PDF](/resources/docs/ctries-techreport.pdf)\]

* **A Generic Parallel Collection Framework**<br/>
Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, Martin Odersky<br/>
[Euro-Par 2011](http://europar2011.bordeaux.inria.fr)<br/>
Bordeaux, France, September 2011<br/>
\[[PDF](/resources/docs/techrep.pdf)\]

* **Adaptive Mutation Operator Cycling**<br/>
Aleksandar Prokopec, Marin Golub<br/>
[The Second International Conference on the Applications of Digital Information and Web Technologies  (ICADIWT 2009)](http://www.dirf.org/diwt2009/)<br/>
London, UK, August 2009<br/>
\[[PDF](/resources/docs/icadiwt_atga.pdf)\]


# <a id="projects">Projects</a>

This section shortly describes some of the projects I've been working on.


## ![scalameter](/resources/images/scalameter-small.png) ScalaMeter

ScalaMeter is a microbenchmarking and performance regression testing framework
for the JVM platform that allows expressing performance tests in a way which is
both simple and concise.

It features quick and easy setup for simple microbenchmarks,
multiple configurable JVM microbenchmarking methodologies,
concise DSL for performance tests and input data generation,
automated regression detection and configurable performance test reporting.

* [Project website](http://axel22.github.com/scalameter/)
* [Source code](https://github.com/axel22/scalameter)


## ![bintree](/resources/images/bintree.png) Concurrent tries

The concurrent trie, or Ctrie, is a trie-based concurrent non-blocking data structure
which supports efficient, scalable insertions, lookups and removals.
It is designed to be cache aware and space efficient.
The worst-case complexity of all operations is logarithmic with a very low constant factor.
It is designed for efficient hash-based element storing and retrieval. Unlike most concurrent hash tables,
there is no global resize phase as the data structure grows or shrinks.

The concurrent tries support an efficient linearizable snapshot operation,
which allows consistent, linearizable concurrent implementations of methods like size,
iterator or removing all the elements.
  
* [Technical report](/resources/docs/ctries-techreport.pdf) -- pseudocode, performance tests and the correctness proof of the operations
* [PPoPP paper](/resources/docs/ctries-snapshot.pdf) describes the snapshot operation in more depth
* [Source code](https://github.com/axel22/Ctries) is also available in this repository and is available for pre-2.10.0 releases of Scala
* [Scala 2.10.x standard library](https://github.com/scala/scala/tree/master/src/library/scala/collection/concurrent) introduced a concurrent tries implementation


## ![scala](/resources/images/scala-logo.png) Scala Parallel Collections

The Scala Parallel Collection framework parallelizes collection operations in
a generic way. This framework is easy to use and straightforward to extend 
to new collections. It implements parallel collections such as parallel arrays,
parallel hash maps, parallel hash tries and parallel vectors. It is integrated
with the regular Scala Collection framework and allows the user to switch between
the parallel and sequential implementation of a collection easily.

* [Technical report](/resources/docs/techrep.pdf)
* [Scala 2.9.x standard library](https://github.com/scala/scala/tree/master/src/library/scala/collection/parallel/) introduced parallel collections



## ![gaide](/resources/images/ga_ide_big.png) Evolutionary Computing IDE

Algorithms in the domain of evolutionary computing often require a large amount of experiments.
Experiments involve tuning a number of parameters to find the optimal set of parameters
for a given problem or a given instance of the problem.
To ease algorithm development, the Evolutionary Computing IDE provides a graphical user interface
which allows tweaking the parameters, testing and visualizing the algorithm, running batch jobs
and producing performance graphs.

* [Source code](http://github.com/axel22/Evolutionary-Computing-IDE)
* [Binaries](https://github.com/axel22/Evolutionary-Computing-IDE/downloads) -- for Windows, Linux, Mac OS X
* [Paper](/resources/docs/icadiwt_atga.pdf) -- an adaptive genetic algorithm variant developed using this framework


## ![vhdllab](/resources/images/vhdllab_main_48.png) VHDLLab

VHDLLab is an online system used for modelling and simulation of digital circuits, whose main components are the VHDL code editor, automaton-to-circuit synthesizer, a circuit schema editor and a circuit simulator.
This system is designed for online use during practical exercises in digital electronics and digital logic courses.
It is used on the Bologna studies on the Faculty of Electrotechnics and Computer Science in Zagreb.
It is devised to soften the learning curve of students who are being introduced to topics such as digital circuits, modelling and simulation.

* [Source code](https://github.com/mbezjak/vhdllab) 
* [Rector Award Writeup](/resources/docs/vhdllab-rad.pdf) (in Croatian) -- VHDLLab report that won the University of Zagreb Rector Award


# <a id="talks">Talks</a>

### ScalaMeter

* [Scala eXchange 2012](http://skillsmatter.com/event/scala/scala-exchange-2012),
London, UK, November 2012
\[[PPT](/resources/docs/scalameter.ppt)\]
\[[Video](http://skillsmatter.com/podcast/scala/scala-performance-regression-testing)\]


### Concurrent Tries

* [ScalaDays 2012](http://days2012.scala-lang.org/),
London, UK, April 2012
\[[Video](http://skillsmatter.com/podcast/scala/parallel-concurrent-hash-tries)\]
\[[Source](https://github.com/axel22/ScalaDays2012-TrieMap)\]
* [Croatian IEEE Computer Chapter](http://www.ieee.hr/ieeesection/odjeli_chapteri/c16),
Zagreb, Croatia, April 2012
* [PPOPP 2012](http://dynopt.org/ppopp-2012/),
New Orleans, Louisiana, February 2012
\[[PPT](/resources/docs/ctries-snapshots.pptx)\]
* [LCPC 2011](http://lcpc11.cs.colostate.edu/),
Fort Collins, Colorado, September 2011
\[[PPT](/resources/docs/lcpc-ctries.ppt)\]


### Scala Parallel Collections

* [Euro-Par 2011](http://europar2011.bordeaux.inria.fr/),
Bordeaux, France, September 2011
* [Scala eXchange 2011](http://skillsmatter.com/event/scala/scala-exchange-2011),
London, UK, June 2011
\[[PPT](/resources/docs/parcolls.ppt)\]
\[[Video](http://skillsmatter.com/podcast/scala/parallel-collections)\]
\[[Source](https://github.com/axel22/ScalaDays2011-PC)\]
* [ScalaDays 2011](http://days2011.scala-lang.org/),
Palo Alto, California, US, June 2011
\[[PPT](/resources/docs/parcolls.ppt)\]
\[[Video](http://days2011.scala-lang.org/node/138/272)\]
\[[Source](https://github.com/axel22/ScalaDays2011-PC)\]
* [ScalaDays 2010](http://days2010.scala-lang.org/),
Lausanne, Switzerland, April 2010


### Introduction To Scala

* Java User Group Grenoble,
France, March 2011
\[[PPT](/resources/docs/introscala.rar)\]


# <a id="articles">Articles and writeups</a>

* [ScalaMeter Introduction](http://axel22.github.com/scalameter/home/gettingstarted/)<br/>
Aleksandar Prokopec<br/>
Lausanne, Switzerland, November 2012

* [Parallel Collections Overview](http://docs.scala-lang.org/overviews/parallel-collections/overview.html)<br/>
Aleksandar Prokopec, Heather Miller<br/>
Lausanne, Switzerland, April 2012

* [SIP-14: Futures and Promises](http://docs.scala-lang.org/sips/pending/futures-promises.html)<br/>
Philipp Haller, Aleksandar Prokopec, Heather Miller, Viktor Klang, Roland Kuhn, and Vojin Jovanovic<br/>
Lausanne, Switzerland, January 2012


# <a id="committees">Conferences and Workshops</a>

* program committees
  * [Scala 2013](http://lampwww.epfl.ch/~hmiller/scala2013/)
  * ...

* reviews
  * [ECOOP 2013 (external)](http://www.lirmm.fr/ecoop13/)
  * [ScalaDays 2010](http://days2010.scala-lang.org/)
  * [ICADIWT 2009](http://www.dirf.org/diwt2009/)


# <a id="teaching">Teaching</a>

I've TA'd on the following courses:

* Programming Principles 2013 (spring) - hosted at [Coursera](https://www.coursera.org/course/progfun)
* [Programming Principles 2012](http://lamp.epfl.ch/teaching/progp) - also hosted at [Coursera](https://www.coursera.org/course/progfun)
* [Advanced Programming 2011](http://lamp.epfl.ch/teaching/proga)
* [Advanced Programming 2010](http://lamp.epfl.ch/teaching/proga)


# <a id="misc">Miscellanous</a>

You can find my [reading journal here](/home/reading/).

{% include technologies.htm %}














