---
layout: publication
title: Concurrent Tries with Efficient Non-blocking Snapshots
authors: Aleksandar Prokopec, Nathan Bronson, Phil Bagwell, Martin Odersky
venue: PPoPP 2012
permalink: /publications/concurrent-tries-with-snapshots/index.html
---


## Abstract

We describe a non-blocking concurrent hash trie based on shared-memory single-word compare-and-swap instructions. The hash trie supports standard mutable lock-free operations such as insertion, removal, lookup and their conditional variants. To ensure space-efficiency, removal operations compress the trie when necessary.

We show how to implement an efficient lock-free snapshot operation for concurrent hash tries. The snapshot operation uses a single-word compare-and-swap and avoids copying the data structure eagerly. Snapshots are used to implement consistent iterators and a linearizable size retrieval. We compare concurrent hash trie performance with other concurrent data structures and evaluate the performance of the snapshot operation.


## Links

\[[PDF](/resources/docs/ctries-snapshot.pdf)\]
\[[ACM DL](http://dl.acm.org/citation.cfm?id=2145836)\]


## References


  
Ole Agesen, David L. Detlefs, Christine H. Flood, Alexander T. Garthwaite, Paul A. Martin, Nir N. Shavit, Guy L. Steele, Jr.: DCAS-based concurrent deques, Proceedings of the twelfth annual ACM symposium on Parallel algorithms and architectures, p.137-146, July 09-13, 2000, Bar Harbor, Maine, USA 

P. Bagwell: Ideal Hash Trees. EPFL Technical Report, 2001.
  
Rene De La Briandais: File searching using variable length keys, Papers presented at the the March 3-5, 1959, western joint computer conference, p.295-298, March 03-05, 1959, San Francisco, California 
  
Nathan G. Bronson, Jared Casper, Hassan Chafi, Kunle Olukotun: A practical concurrent binary search tree, Proceedings of the 15th ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming, January 09-14, 2010, Bangalore, India 
  
C. Click: Towards a Scalable Non-Blocking Coding Style. http://www.azulsystems.com/events/javaone_2007/2007_LockFreeHash.pdf
  
Thomas H. Cormen, Clifford Stein, Ronald L. Rivest, Charles E. Leiserson: Introduction to Algorithms, McGraw-Hill Higher Education, 2001
  
Faith Ellen, Panagiota Fatourou, Eric Ruppert, Franck van Breugel: Non-blocking binary search trees, Proceedings of the 29th ACM SIGACT-SIGOPS symposium on Principles of distributed computing, July 25-28, 2010, Zurich, Switzerland 
  
Edward Fredkin: Trie memory, Communications of the ACM, v.3 n.9, p.490-499, September 1960
  
Andy Georges, Dries Buytaert, Lieven Eeckhout: Statistically rigorous java performance evaluation, Proceedings of the 22nd annual ACM SIGPLAN conference on Object-oriented programming systems and applications, October 21-25, 2007, Montreal, Quebec, Canada 
  
Timothy L. Harris, Keir Fraser, Ian A. Pratt: A Practical Multi-word Compare-and-Swap Operation, Proceedings of the 16th International Conference on Distributed Computing, p.265-279, October 28-30, 2002
  
M. Herlihy: A methodology for implementing highly concurrent data structures, Proceedings of the second ACM SIGPLAN symposium on Principles & practice of parallel programming, p.197-206, March 14-16, 1990, Seattle, Washington, USA
  
M. Herlihy, Y. Lev, V. Luchangco, N. Shavit: A Provably Correct Scalable Concurrent Skip List. OPODIS, 2006.
  
H. T. Kung , Philip L. Lehman: Concurrent manipulation of binary search trees, ACM Transactions on Database Systems (TODS), v.5 n.3, p.354-382, Sept. 1980
  
Doug Lea's Home Page: http://gee.cs.oswego.edu/
  
Witold Litwin: Trie hashing, Proceedings of the 1981 ACM SIGMOD international conference on Management of data, April 29-May 01, 1981, Ann Arbor, Michigan
  
W. Litwin, Y. Sagiv, K. Vidyasankar: Concurrency and trie hashing, Acta Informatica, v.26 n.7, p.597-614, Sep. 1989
  
Maged M. Michael: High performance dynamic lock-free hash tables and list-based sets, Proceedings of the fourteenth annual ACM symposium on Parallel algorithms and architectures, August 10-13, 2002, Winnipeg, Manitoba, Canada 
  
M. Moir, N. Shavit: Concurrent data structures. Handbook of Data Structures and Applications, Chapman and Hall, 2004.
  
Chris Okasaki: Purely Functional Data Structures, Cambridge University Press, New York, NY, 1999
  
A. Prokopec, P. Bagwell, M. Odersky: Cache-Aware Lock-Free Concurrent Hash Tries. EPFL Technical Report, 2011.
  
Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, Martin Odersky: A generic parallel collection framework, Proceedings of the 17th international conference on Parallel processing, August 29-September 02, 2011, Bordeaux, France
  
William Pugh: Concurrent maintenance of skip lists, University of Maryland at College Park, College Park, MD, 1990
  
William Pugh: Skip lists: a probabilistic alternative to balanced trees, Communications of the ACM, v.33 n.6, p.668-676, June 1990 
  
The Scala Programming Language Homepage. http://www.scalalang.org/
  
Ori Shalev, Nir Shavit: Split-ordered lists: Lock-free extensible hash tables, Journal of the ACM (JACM), v.53 n.3, p.379-405, May 2006 
