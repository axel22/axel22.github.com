---
layout: publication
title: Containers and Aggregates, Mutators and Isolates for Reactive Programming 
authors: Aleksandar Prokopec, Philipp Haller, Martin Odersky
venue: The 5th Annual Scala Workshop (Scala 2014)
permalink: /publications/containers-and-aggregates-mutators-and-isolates/index.html
---


## Abstract

Many programs have an inherently reactive nature
imposed by the functional dependencies between their data
and external events.
Classically, these dependencies are dealt with using callbacks.
Reactive programming with first-class reactive values is a paradigm
that aims to encode callback logic in declarative statements.
Reactive values concisely define dependencies between singular data elements,
but cannot efficiently express dependencies in larger datasets.
Orthogonally, embedding reactive values in a shared-memory concurrency model
convolutes their semantics and requires synchronization.
This paper presents a generic framework for reactive programming
that extends first-class reactive values
with the concept of lazy *reactive containers*,
backed by several concrete implementations.
Our framework addresses concurrency by introducing *reactive isolates*.
We show examples that our programming model is efficient and convenient to use.


## Links

\[[PDF](/resources/docs/reactives-and-isolates.pdf)\]


## References

E. Czaplicki and S. Chong. Asynchronous functional reactive programming for GUIs. In PLDI, 2013.

C. Elliott and P. Hudak. Functional reactive animation. In ICFP, 1997.

I. Maier and M. Odersky. Deprecating the Observer Pattern with Scala.react. Technical report, 2012.

I. Maier and M. Odersky. Higher-order reactive programming with incremental lists. In ECOOP, 2013.

E. Meijer. Your mouse is a database. CACM, 55(5), 2012.

E. Meijer, M. M. Fokkinga, and R. Paterson. Functional programming with bananas, lenses, envelopes and barbed wire. In FPCA, 1991.

M. Odersky and A. Moors. Fighting bit rot with types (experience report: Scala collections). In FSTTCS, 2009.

K. Pinte, A. Lombide Carreton, E. Gonzalez Boix, and W. Meuter. Ambient clouds: Reactive asynchronous collections for mobile ad hoc network applications. In J. Dowling and F. Taïani, editors, Distributed Applications and Interoperable Systems, volume 7891 of Lecture Notes in Computer Science, pages 85–98. Springer Berlin Heidelberg, 2013. ISBN 978-3-642-38540-7. . URL http://dx.doi.org/10. 1007/978-3-642-38541-4_7.

A. Prokopec, P. Bagwell, T. Rompf, and M. Odersky. A generic parallel collection framework. In EuroPar, 2011.

A. Prokopec, H. Miller, T. Schlatter, P. Haller, and M. Odersky. FlowPools: A lock-free deterministic concurrent dataflow abstraction. In LCPC, 2012.
