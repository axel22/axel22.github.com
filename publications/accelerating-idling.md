---
layout: publication
title: Accelerating by Idling - How Speculative Delays Improve Performance of Message-Oriented Systems
authors: Aleksandar Prokopec
venue: Euro-Par 2017
permalink: /publications/accelerating-idling/index.html
---


## Abstract

We propose a technique called speculative lagging,
which improves performance by dynamically adding
periods of idle execution into the message-oriented system.
The speculation is guided by a statistical model,
which predicts context switches that benefit from delays.
We analytically derive the expected speedup, which,
for a fixed confidence, allows identifying lagging opportunities in O(1) time,
without a performance overhead.
We describe the corresponding speculation algorithm and
use it to extend an existing scheduler.
Comparison with other actor frameworks on standard benchmarks shows
improvements of up to 2.1x.


## Links

\[[PDF](/resources/docs/accelerating-idling.pdf)\]
\[[BibTex](/resources/docs/bibtex/accelerating-idling.bib)\]
\[[Springer](https://link.springer.com/chapter/10.1007/978-3-319-64203-1_13)\]


## References

Akka documentation (2017). http://akka.io/docs/

Reactors.IO website (2017). http://reactors.io/

Ananthanarayanan, G., Hung, M.C.C., Ren, X., Stoica, I., Wierman, A., Yu, M.: GRASS: trimming stragglers in approximation analytics. In: NSDI 2014 (2014)

Bronson, N.G., Casper, J., Chafi, H., Olukotun, K.: A practical concurrent binary search tree. In: PPoPP 2010. ACM, New York (2010)

Cochran, W.: Sampling Techniques. Wiley, Hoboken (1977)

Dice, D.: Biased locking in HotSpot (2006). https://blogs.oracle.com/dave/biased-locking-in-hotspot

Dragos, I., Odersky, M.: Compiling generics through user-directed type specialization. In: ICOOOLPS 2009 (2009)

Duboscq, G., Würthinger, T., Stadler, L., Wimmer, C., Simon, D., Mössenböck, H.: An intermediate representation for speculative optimizations in a dynamic compiler. In: VMIL 2013 (2013)

Fleiss, J.L.: The Teacher’s corner: a note on the expectation of the reciprocal of a random variable (1966)

Georges, A., Buytaert, D., Eeckhout, L.: Statistically rigorous Java performance evaluation. SIGPLAN Not. (2007)

Herlihy, M., Moss, J.E.B.: Transactional memory: architectural support for lock-free data structures. SIGARCH Comput. Archit. News 21(2), 289–300 (1993)

Imam, S.M., Sarkar, V.: Savina - an actor benchmark suite: enabling empirical evaluation of actor libraries. In: AGERE! 2014 (2014)

Kung, H.T., Robinson, J.T.: On optimistic methods for concurrency control. ACM Trans. Database Syst. (1981)

Lucia, B., Devietti, J., Bergan, T., Ceze, L., Grossman, D.: Lock prediction. In: Proceedings of the 2nd USENIX Workshop on Hot Topics in Parallelism (2010)

Martínez, J.F., Torrellas, J.: Speculative synchronization: applying thread-level speculation to explicitly parallel applications. SIGOPS Oper. Syst. Rev. (2002)

Mellor-Crummey, J.M., Scott, M.L.: Algorithms for scalable synchronization on shared-memory multiprocessors. ACM Trans. Comput. Syst. 9(1), 21–65 (1991)

Nakaike, T., Michael, M.M.: Lock elision for read-only critical sections in Java. In: Proceedings of the 31st ACM SIGPLAN Conference on Programming Language Design and Implementation, PLDI 2010. ACM, New York (2010)

Prokopec, A.: Pluggable scheduling for the Reactor programming model. In: AGERE 2016 (2016)

Prokopec, A., Odersky, M.: Isolates, channels, and event streams for composable distributed programming. In: Onward! 2015 (2015)

Rajwar, R., Goodman, J.R.: Speculative lock elision: enabling highly concurrent multithreaded execution. In: Proceedings of 34th ACM/IEEE International Symposium on Microarchitecture, MICRO 34. IEEE Computer Society, Washington, D.C. (2001)

Zaharia, M., Borthakur, D., Sen Sarma, J., Elmeleegy, K., Shenker, S., Stoica, I.: Delay scheduling: a simple technique for achieving locality and fairness in cluster scheduling. In: EuroSys 2010 (2010)
