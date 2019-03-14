---
layout: publication
title: Analysis of Concurrent Lock-Free Hash Tries with Constant-Time Operations
authors: Aleksandar Prokopec
venue: arXiv
permalink: /publications/analysis-cachetries/index.html
---


## Abstract


Ctrie is a scalable concurrent non-blocking dictionary data structure,
with good cache locality, and non-blocking linearizable iterators.

However, operations on most existing concurrent hash tries run in O(log n) time.
In this technical report, we extend the standard concurrent hash-tries
with an auxiliary data structure called a cache.
The cache is essentially an array that stores pointers
to a specific level of the hash trie.
We analyze the performance implications of adding a cache,
and prove that the running time of the basic operations becomes O(1).


## Links

\[[PDF](/resources/docs/analysis-cachetries.pdf)\]
\[[BibTex](/resources/docs/bibtex/analysis-cachetries.bib)\]
\[[arXiv](https://arxiv.org/abs/1712.09636)\]

## References

[1] W.G. Cochran. 1977. Sampling Techniques. Wiley.

[2] Aleksandar Prokopec. 2018. Cache-Tries: Concurrent Lock-Free Hash Tries with Constant Time Operations. (2018)

[3] Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2011. Lock-Free Resizeable Concurrent Tries. Springer Berlin Heidelberg, Berlin,
Heidelberg, 156–170. https://doi.org/10.1007/978-3-642-36036-7_11

[4] Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky. 2012.
Concurrent Tries with Efficient Non-blocking Snapshots. (2012), 151–160.
https://doi.org/10.1145/2145816.2145836
