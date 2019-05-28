---
layout: publication
title: Enhancing Program Execution Using Optimization-Driven Inlining
authors: Aleksandar Prokopec, Thomas Würthinger
venue: US Patent
permalink: /publications/patent-prio-inliner/index.html
---


## Abstract

When a computer program is written, the computer program is written as source code.
A compiler is a software program that translates the source code into object code or byte code.
During compilation, the compiler may perform various optimizations.
For example, optimizations may reduce the number of instructions executed by a computer processor.
By performing the optimizations, the compiler is able to provide more efficient use of the computer processor. 
One way to benefit from the information spread across a call graph data structure and to apply
additional optimizations to the computer program is to replace the function calls with the respective function bodies,
a transformation called inline expansion or inlining. Most compilers rely heavily on inlining,
since inlining a function body is fast, enables other optimizations, and does not require a whole-program analysis.
Although replacing a call-site (e.g., the location, or line of code, where the function is called)
with the body of the callee function is a simple transformation,
deciding which functions to inline is in practice difficult.
Consequently, in many compilers, inlining is based on hand-tuned heuristics and proverbial rules of thumb.
In the past, inlining was, for these reasons, called a black art by several researchers.

Embodiments of the inventions relate to an inlining procedure based on several concepts.
One is that the call graph exploration is incremental. The procedure partially explores the call graph
during the expansion stage, then switches to the inlining stage. These two stages alternate
until a termination condition is met. Further, embodiments of the invention relate to call graph
exploration being prioritized using a ratio of the inlining benefit and the inlining cost of the candidate call-sites.
Embodiments of the invention relate to inlining benefit, which is estimated by performing optimizations speculatively
throughout the call graph, after replacing the function parameters with the concrete call-site arguments.

In one or more embodiments of the invention, cost-benefit analysis identifies call graph subcomponents
that should be inlined together using a greedy procedure. Cost-benefit analysis does so by analyzing
if inlining the call-site increases the benefit-per-cost ration of the caller.
In one or more embodiments of the invention, inlining is budget-driven:
the minimum benefit-per-cost ratio required for inlining grows dynamically
with the amount of work performed by the invention.


## Links

\[[PDF](/resources/docs/patent-US10261765B1.pdf)\]
\[[BibTex](/resources/docs/bibtex/patent-prio-inliner.bib)\]
\[[FPO](http://www.freepatentsonline.com/10261765.html)\]

