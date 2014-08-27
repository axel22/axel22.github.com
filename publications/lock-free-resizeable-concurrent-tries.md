---
layout: publication
title: Lock-Free Resizeable Concurrent Tries
authors: Aleksandar Prokopec, Phil Bagwell, Martin Odersky
venue: LCPC 2011
permalink: /publications/lock-free-resizeable-concurrent-tries/index.html
---


## Abstract

This paper describes an implementation of a non-blocking concurrent hash trie based on single-word compare-and-swap instructions in a shared-memory system. Insert, lookup and remove operations modifying different parts of the hash trie can be run completely independently. Remove operations ensure that the unneeded memory is freed and that the trie is kept compact. A pseudocode for these operations is presented and a proof of correctness is given -- we show that the implementation is linearizable and lock-free. Finally, benchmarks are presented that compare concurrent hash trie operations against the corresponding operations on other concurrent data structures.


## Links

\[[PDF](/resources/docs/lcpc-ctries.pdf)\]
\[[BibTex](/resources/docs/bibtex/ctries.bib)\]
\[[Springer](http://link.springer.com/chapter/10.1007%2F978-3-642-36036-7_11)\]


## References

Bagwell, P.: Ideal Hash Trees (2002)

Georges, A., Buytaert, D., Eeckhout, L.: Statistically Rigorous Java Performance Evaluation. In: OOPSLA (2007)

Doug Lea’s Home Page, http://gee.cs.oswego.edu/

Michael, M.M.: High Performance Dynamic Lock-Free Hash Tables and List-Based Sets. In: SPAA (2002)

Harris, T.L.: A Pragmatic Implementation of Non-Blocking Linked-Lists. In: IEEE Symposium on Distributed Computing (2001)

Brandais, R.: File searching using variable length keys. In: Proceedings of Western Joint Computer Conference (1959)

Fredkin, E.: Trie memory. Communications of the ACM (1960)

Silverstein, A.: Judy IV Shop Manual (2002)

Shavit, N., Herlihy, M.: The Art of Multiprocessor Programming. Morgan Kaufmann (2008)

Moir, M., Shavit, N.: Concurrent data structures. In: Handbook of Data Structures and Applications. Chapman and Hall (2004)

Herlihy, M., Wing, J.: Linearizability: A Correctness Condition for Concurrent Objects. ACM Transactions on Programming Languages and Systems (1990)

Litwin, W.: Trie Hashing. ACM (1981)

Litwin, W., Sagiv, Y., Vidyasankar, K.: Concurrency and Trie Hashing. ACM (1981)

Cormen, T.H., Leiserson, C.E., Rivest, R.L., Stein, C.: Introduction to Algorithms, 2nd edn. The MIT Press (2001)

Shalev, O., Shavit, N.: Split-Ordered Lists: Lock-Free Extensible Hash Tables. Journal of the ACM 53(3) (2006)

Pugh, W.: Skip Lists: A Probabilistic Alternative to Balanced Trees. Communications ACM 33 (1990)

Pugh, W.: Concurrent Maintenance of Skip Lists (1990)

Herlihy, M., Lev, Y., Luchangco, V., Shavit, N.: A Provably Correct Scalable Concurrent Skip List. In: OPODIS (2006)

Kung, H., Lehman, P.: Concurrent manipulation of binary search trees. ACM (1980)

Bronson, N.G., Casper, J., Chafi, H., Olukotun, K.: A Practical Concurrent Binary Search Tree. ACM (2009)

Ellen, F., Fatourou, P., Ruppert, E., van Breugel, F.: Non-blocking binary search trees. In: PODC (2010)

