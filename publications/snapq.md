---
layout: publication
title: SnapQueue -- Lock-Free Queue with Constant Time Snapshots
authors: Aleksandar Prokopec
venue: Scala Symposium 2015
permalink: /publications/snapqueue/index.html
---


## Abstract

We introduce SnapQueues - concurrent, lock-free queues
with a linearizable, lock-free global-state transition operation.
This transition operation can atomically switch between arbitrary SnapQueue states,
and is used by enqueue, dequeue, snapshot and concatenation operations.
We show that implementing these operations efficiently
depends on the persistent data structure at the core of the SnapQueue.

This immutable support data structure is an interchangeable kernel of the SnapQueue,
and drives its performance characteristics.
The design allows reasoning about concurrent operation running time in a functional way,
absent from concurrency considerations.
We present a support data structure that enables
O(1) queue operations, O(1) snapshot and O(\log n) atomic concurrent concatenation.
We show that the SnapQueue enqueue operation achieves up to 25% higher performance,
while the dequeue operation has performance identical
to standard lock-free concurrent queues.



## Links

\[[PDF]()\]
\[[BibTex](/resources/docs/bibtex/snapq.bib)\]
\[[ACM DL]()\]


## References

Akka documentation, 2015. http://akka.io/docs/.

SnapQueue Implementation, 2015. https://github.com/storm-
enroute/reactive-collections/tree/master/reactive-collections-
core.

G. M. Adelson-Velsky and E. M. Landis. An algorithm for the
organization of information. Doklady Akademii Nauk SSSR,
146:263–266, 1962.

Y. Afek, N. Shavit, and M. Tzafrir. Interrupting snapshots
and the JavaTM size method. J. Parallel Distrib. Comput.,
72(7):880–888, July 2012.

E. Allen, D. Chase, J. Hallett, V. Luchangco, J.-W. Maessen,
S. Ryu, G. Steele, and S. Tobin-Hochstadt. The Fortress
Language Specification. Technical report, Sun Microsystems,
Inc., 2007.

N. G.Bronson, J. Casper,H. Chafi, andK. Olukotun. A practi-
cal concurrent binary search tree. SIGPLAN Not., 45(5):257–
268, Jan. 2010.

C. Click. Towards a scalable non-blocking coding style, 2007.

A. Georges, D. Buytaert, and L. Eeckhout. Statistically rigor-
ous java performance evaluation. SIGPLAN Not., 42(10):57–
76, Oct. 2007.

P. Haller, A. Prokopec, H. Miller, V. Klang, R. Kuhn, and
V. Jovanovic. Scala Improvement Proposal: Futures and
Promises (SIP-14). 2012.

M. Herlihy and N. Shavit. The Art of Multiprocessor Pro-
gramming. Morgan Kaufmann Publishers Inc., San Francisco,
CA, USA, 2008.

R. Hinze and R. Paterson. Finger trees: A simple general-
purpose data structure. J. Funct. Program., 16(2):197–217,
Mar. 2006.

H. Kaplan and R. E. Tarjan. Purely functional representa-
tions of catenable sorted lists. In Proceedings of the Twenty-
Eighth Annual ACM Symposium on the Theory of Computing,
Philadelphia, Pennsylvania, USA, May 22-24, 1996, pages
202–211, 1996.

D. Lea. Doug Lea’s workstation, 2014.

M. M. Michael and M. L. Scott. Simple, fast, and practical
non-blocking and blocking concurrent queue algorithms. In
PODC, pages 267–275, 1996.

M. Moir and N. Shavit. Concurrent data structures. In
Handbook of Data Structures and Applications, D. Metha and
S. Sahni Editors, pages 47–14 — 47–30, 2007. Chapman and
Hall/CRC Press.

C. Okasaki. Purely Functional Data Structures. Cambridge
University Press, New York, NY, USA, 1998.

A. Prokopec. Data Structures and Algorithms for Data-
Parallel Computing in a Managed Runtime. PhD thesis, IC,
EPFL, Lausanne, 2014.

A. Prokopec. ScalaMeter Website, 2014.

A. Prokopec, N. G. Bronson, P. Bagwell, and M. Odersky.
Concurrent tries with efficient non-blocking snapshots. pages
151–160, 2012.

A. Prokopec, H. Miller, T. Schlatter, P. Haller, and M. Oder-
sky. FlowPools: A lock-free deterministic concurrent dataflow
abstraction. In LCPC, pages 158–173, 2012.

W. Pugh. Concurrent maintenance of skip lists. Technical
report, College Park, MD, USA, 1990.

W. N. Scherer, D. Lea, and M. L. Scott. Scalable synchronous
queues. Commun. ACM, 52(5):100–111, 2009.

T. Schlatter, A. Prokopec, H. Miller, P. Haller, and M. Oder-
sky. Multi-lane flowpools: A detailed look. Technical report,
EPFL, Lausanne, September 2012.

R. Soulé, M. I. Gordon, S. Amarasinghe, R. Grimm, and
M. Hirzel. Dynamic expressivity with static optimization for
streaming languages. In Proceedings of the 7th ACM Interna-
tional Conference on Distributed Event-based Systems, DEBS
’13, pages 159–170, New York, NY, USA, 2013. ACM.

G. Steele. Organizing functional code for parallel execution;
or, foldl and foldr considered slightly harmful. International
Conference on Functional Programming (ICFP), 2009.

S. Tasharofi. Efficient testing of actor programs with non-
deterministic behaviors. PhD thesis, University of Illinois at
Urbana-Champaign, 2014.

M. Thompson, D. Farley, M. Barker, P. Gee, and A. Stewart.
Disruptor: High performance alternative to bounded queues
for exchanging data between concurrent threads. May 2011
