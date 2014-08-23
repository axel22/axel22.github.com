---
layout: publication
title: FlowPools: A Lock-Free Deterministic Concurrent Dataflow Abstraction
authors: Aleksandar Prokopec, Heather Miller, Tobias Schlatter, Philipp Haller, Martin Odersky
venue: LCPC 2012
permalink: /publications/flowpools-lock-free-dataflow/index.html
---


## Abstract

Implementing correct and deterministic parallel programs is challenging. Even
though concurrency constructs exist in popular programming languages to
facilitate the task of deterministic parallel programming, they are often too
low level, or do not compose well due to underlying blocking mechanisms. In
this paper, we present the design and implementation of a fundamental data
structure for composable deterministic parallel dataflow computation through
the use of functional programming abstractions. Additionally, we provide a
correctness proof, showing that the implementation is linearizable,
lock-free, and deterministic. Finally, we show experimental results which
compare our FlowPool against corresponding operations on other 
concurrent data structures, and show that in addition to offering new
capabilities, FlowPools reduce insertion time by 49% -- 54% on a
4-core i7 machine with respect to comparable concurrent queue data
structures in the Java standard library.


## Links

\[[PDF](/resources/docs/lcpc2012.pdf)\]
\[[Springer](http://link.springer.com/chapter/10.1007%2F978-3-642-37658-0_11)\]


## References

Arvind, Nikhil, R.S., Pingali, K.K.: I-structures: Data structures for parallel computing. ACM Trans. Prog. Lang. and Sys. 11(4), 598–632 (1989)

Budimlic, Z., Burke, M.G., Cavé, V., Knobe, K., Lowney, G., Newton, R., Palsberg, J., Peixotto, D.M., Sarkar, V., Schlimbach, F., Tasirlar, S.: Concurrent collections. Scientific Programming 18(3-4), 203–217 (2010)

Budimlic, Z., Cavé, V., Raman, R., Shirako, J., Tasirlar, S., Zhao, J., Sarkar, V.: The design and implementation of the Habanero-Java parallel programming language. In: OOPSLA Companion, pp. 185–186 (2011)

Burke, M.G., Knobe, K., Newton, R., Sarkar, V.: Concurrent collections programming model. In: Encyclopedia of Parallel Computing, pp. 364–371 (2011)

Chambers, C., Raniwala, A., Perry, F., Adams, S., Henry, R.R., Bradshaw, R., Weizenbaum, N.: FlumeJava: easy, efficient data-parallel pipelines. ACM SIGPLAN Notices 45(6), 363–375 (2010) CrossRef

Eriksen, M., Kallen, N.: Twitter Finagle: Futures, http://twitter.github.com/finagle/

Friedman, D., Wise, D.: The impact of applicative programming on multiprocessing. In: International Conference on Parallel Processing (1976)

Gelernter, D.: Generative communication in Linda. ACM Transactions on Programming Languages and Systems 7(1), 80–112 (1985) CrossRef

Haller, P., Prokopec, A., Miller, H., Klang, V., Kuhn, R., Jovanovic, V.: Scala improvement proposal: Futures and promises, SIP-14 (2012), http://docs.scala-lang.org/sips/pending/futures-promises.html

Halstead, J.R.H.: MultiLISP: A language for concurrent symbolic computation. ACM Trans. Prog. Lang. and Sys. 7(4), 501–538 (1985) CrossRef

Henry, J., Baker, C., Hewitt, C.: The incremental garbage collection of processes. In: Proc. Symp. on Art. Int. and Prog. Lang. (1977)

Herlihy, M.: A methodology for implementing highly concurrent data structures. In: PPoPP, pp. 197–206 (1990)

Herlihy, M., Shavit, N.: The Art of Multiprocessor Programming (April 2008)

Scherer III, W.N., Lea, D., Scott, M.L.: Scalable synchronous queues. Commun. ACM 52(5), 100–111 (2009) CrossRef

Bocchino Jr., R.L., Adve, V.S., Dig, D., Adve, S.V., Heumann, S., Komuravelli, R., Overbey, J., Simmons, P., Sung, H., Vakilian, M.: A type and effect system for deterministic parallel Java. In: OOPSLA, pp. 97–116 (2009)

Mellor-Crummey, J.M.: Concurrent queues: Practical fetch-and-Φ algorithms (1987)

Michael, M.M., Scott, M.L.: Simple, fast, and practical non-blocking and blocking concurrent queue algorithms. In: PODC, pp. 267–275 (1996)

Moir, Shavit: Concurrent data structures. In: Mehta, Sahni (eds.) Handbook of Data Structures and Applications, Chapman & Hall/CRC (2005)

Odersky, M., Spoon, L., Venners, B.: Programming in Scala. Artima Press, Mountain View (2010)

Prokopec, A., Miller, H., Schlatter, T., Haller, P., Odersky, M.: Flowpools: A lock-free deterministic concurrent dataflow abstraction– proofs. Technical Report EPFL-REPORT-181098, EPFL, Lausanne (June 2012)

Roy, P.V., Haridi, S.: Concepts, Techniques, and Models of Computer Programming. MIT Press (2004)

Saraswat, V.A., Sarkar, V., von Praun, C.: X10: concurrent programming for modern architectures. In: PPOPP, p. 271 (2007)

Shapiro, E.: The family of concurrent logic programming languages. ACM Computing Surveys 21(3), 412 (1989) CrossRef

Tasirlar, S., Sarkar, V.: Data-driven tasks and their implementation. In: ICPP, pp. 652–661 (2011)

