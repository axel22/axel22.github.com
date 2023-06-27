---
layout: publication
title: Implicit State Machines
authors: Fengyun Liu, Aleksandar Prokopec
venue: Languages, Compilers, Tools and Theory of Embedded Systems 2022 (LCTES 2022)
permalink: /publications/ism/index.html
---


## Abstract

Finite-state machines (FSM) are a simple yet powerful abstraction widely used for modeling,
programming and verifying real-time and reactive systems that control modern
factories, power plants, transportation systems and medical equipment.

However, traditionally finite-state machines are either encoded indirectly in an imperative language, such as C and
Verilog, or embedded as an imperative extension of a declarative language, such as Lustre. Given the widely accepted
advantage of declarative programming, can we have a declarative design of finite-state machines to facilitate design,
construction, and verification of embedded programs?

By sticking to the design principle of declarativeness, we
show that a novel abstraction emerges, implicit state machines, which is declarative in nature and at the same time
supports recursive composition. Given its simplicity and universality, we believe it may serve as a new foundation for
programming embedded systems.

## Links

\[[PDF](/resources/docs/ism.pdf)\]
\[[BibTex](/resources/docs/bibtex/ism.bib)\]
\[[ACM](https://dl.acm.org/doi/10.1145/3519941.3535065)\]

## References

[1] Charles André and Marie-Agnès Peraldi-Frati. 2000. Behavioral Specification of a Circuit Using SyncCharts: A Case Study. In 26th EUROMICRO 2000 Conference, Informatics: Inventing the Future, 5-7 September 2000, Maastricht, The Netherlands. IEEE Computer Society, 1091.
https://doi.org/10.1109/EURMIC.2000.874620

[2] Jonathan Bachrach, Huy Vo, Brian C. Richards, Yunsup Lee, Andrew
Waterman, Rimas Avizienis, John Wawrzynek, and Krste Asanovic.
2012. Chisel: Constructing hardware in a Scala embedded language.
DAC Design Automation Conference 2012 (2012), 1212ś1221.

[3] Hendrik Pieter Barendregt. 1985. The lambda calculus - its syntax
and semantics. Studies in logic and the foundations of mathematics,
Vol. 103. North-Holland.

[4] A. Benveniste and G. Berry. 1991. The synchronous approach to
reactive and real-time systems. Proc. IEEE 79, 9 (Sept. 1991). https:
//doi.org/10.1109/5.97297

[5] Albert Benveniste, Paul Caspi, Stephen A. Edwards, Nicolas Halbwachs, Paul Le Guernic, and Robert de Simone. 2003. The synchronous languages 12 years later. Proc. IEEE 91, 1 (2003), 64ś83.
https://doi.org/10.1109/JPROC.2002.805826

[6] Albert Benveniste, Paul Le Guernic, and Christian Jacquemot. 1991.
Synchronous programming with events and relations: the SIGNAL
language and its semantics. Science of Computer Programming 16, 2
(Sept. 1991). https://doi.org/10.1016/0167-6423(91)90001-E

[7] Gérard Berry and Georges Gonthier. 1992. The Esterel Synchronous
Programming Language: Design, Semantics, Implementation. Sci. Comput. Program. 19, 2 (1992), 87-152. https://doi.org/10.1016/0167-6423(92)90005-V

[8] Per Bjesse, Koen Claessen, Mary Sheeran, and Satnam Singh. 1998.
Lava: Hardware Design in Haskell. In Proceedings of the third ACM SIGPLAN International Conference on Functional Programming (ICFP ’98),
Baltimore, Maryland, USA, September 27-29, 1998, Matthias Felleisen,
Paul Hudak, and Christian Queinnec (Eds.). ACM, 174ś184. https:
//doi.org/10.1145/289423.289440

[9] Thomas Bourgeat, Clément Pit-Claudel, Adam Chlipala, and Arvind.
2020. The essence of Bluespec: a core language for rule-based hardware
design. In Proceedings of the 41st ACM SIGPLAN International Conference on Programming Language Design and Implementation, PLDI 2020,
London, UK, June 15-20, 2020, Alastair F. Donaldson and Emina Torlak
(Eds.). ACM, 243ś257. https://doi.org/10.1145/3385412.3385965

[10] Timothy Bourke, Lélio Brun, Pierre-Évariste Dagand, Xavier Leroy,
Marc Pouzet, and Lionel Rieg. 2017. A Formally Verified Compiler for
Lustre. (2017).

[11] P. Caspi, D. Pilaud, N. Halbwachs, and J. A. Plaice. 1987. LUSTRE: A
Declarative Language for Real-time Programming. In Proceedings of the
14th ACM SIGACT-SIGPLAN Symposium on Principles of Programming
Languages (POPL ’87). ACM, New York, NY, USA. https://doi.org/10.
1145/41625.41641 event-place: Munich, West Germany.

[12] Paul Caspi and Marc Pouzet. 2008. Synchronous Functional Programming : The Lucid Synchrone Experiment.

[13] Joonwon Choi, Muralidaran Vijayaraghavan, Benjamin Sherman,
Adam Chlipala, and Arvind. 2017. Kami: a platform for high-level
parametric hardware specification and its modular verification. Proc.
ACM Program. Lang. 1, ICFP (2017), 24:1ś24:30. https://doi.org/10.
1145/3110268

[14] Jean-Louis Colaço, Bruno Pagano, and Marc Pouzet. 2005. A conservative extension of synchronous data-flow with state machines.
In Proceedings of the 5th ACM international conference on Embedded
software - EMSOFT ’05. ACM Press, Jersey City, NJ, USA. https:
//doi.org/10.1145/1086228.1086261

[15] Mary F. Fernández, Daniela Florescu, Alon Y. Halevy, and Dan Suciu.
2000. Declarative specification of Web sites with Strudel. The VLDB
Journal 9 (2000), 38ś55.

[16] Spencer P. Florence, Shu-Hung You, Jesse A. Tov, and Robert Bruce
Findler. 2019. A calculus for Esterel: if can, can. if no can, no can.
Proceedings of the ACM on Programming Languages 3, POPL (Jan. 2019).
https://doi.org/10.1145/3290374

[17] Andy Gill, Tristan Bull, Garrin Kimmell, Erik Perrins, Ed Komp, and
Brett Werling. 2009. Introducing Kansas Lava. In Implementation and
Application of Functional Languages - 21st International Symposium,
IFL 2009, South Orange, NJ, USA, September 23-25, 2009, Revised Selected
Papers (Lecture Notes in Computer Science, Vol. 6041), Marco T. Morazán
and Sven-Bodo Scholz (Eds.). Springer, 18ś35. https://doi.org/10.1007/
978-3-642-16478-1\_2

[18] Nicolas Halbwachs, Daniel Pilaud, Farid Ouabdesselam, and AnneCecile Glory. 1989. Specifying, Programming and Verifying RealTime Systems Using a Synchronous Declarative Language. In Automatic Verification Methods for Finite State Systems, International Workshop, Grenoble, France, June 12-14, 1989, Proceedings (Lecture Notes in
Computer Science, Vol. 407), Joseph Sifakis (Ed.). Springer, 213ś231.
https://doi.org/10.1007/3-540-52148-8\_18

[19] Grégoire Hamon and John M. Rushby. 2007. An operational semantics
for Stateflow. Int. J. Softw. Tools Technol. Transf. 9, 5-6 (2007), 447ś456.
https://doi.org/10.1007/s10009-007-0049-7

[20] Michael Hanus and Christof Kluß. 2009. Declarative Programming of
User Interfaces. In PADL.

[21] David Harel. 1987. Statecharts: a visual formalism for complex systems.
Science of Computer Programming 8, 3 (June 1987). https://doi.org/10.
1016/0167-6423(87)90035-9

[22] Timothy L. Hinrichs. 2011. Plato: A Compiler for Interactive Web
Forms. In PADL.

[23] IEEE. 2005. IEEE Standard for Verilog Hardware Description Language.
IEEE.

[24] Adam M. Izraelevitz, Jack Koenig, Patrick Li, Richard Lin, Angie Wang,
Albert Magyar, Donggyu Kim, Colin Schmidt, Chick Markley, Jim
Lawson, and Jonathan Bachrach. 2017. Reusability is FIRRTL ground:
Hardware construction languages, compiler frameworks, and transformations. In 2017 IEEE/ACM International Conference on ComputerAided Design, ICCAD 2017, Irvine, CA, USA, November 13-16, 2017, Sri
Parameswaran (Ed.). IEEE, 209ś216. https://doi.org/10.1109/ICCAD.
2017.8203780

[25] Daniel Kroening and Wolfgang J. Paul. 2001. Automated Pipeline
Design. In Proceedings of the 38th Design Automation Conference, DAC
2001, Las Vegas, NV, USA, June 18-22, 2001. ACM, 810ś815. https:
//doi.org/10.1145/378239.379071

[26] Michael Leuschel. 2008. Declarative programming for verification:
lessons and outlook. In PPDP ’08.

[27] Xun Li, Mohit Tiwari, Jason Oberg, Vineeth Kashyap, Frederic T.
Chong, Timothy Sherwood, and Ben Hardekopf. 2011. Caisson: a
hardware description language for secure information flow. In Proceedings of the 32nd ACM SIGPLAN Conference on Programming Language Design and Implementation, PLDI 2011, San Jose, CA, USA, June
4-8, 2011, Mary W. Hall and David A. Padua (Eds.). ACM, 109ś120.
https://doi.org/10.1145/1993498.1993512

[28] Rachit Nigam, Samuel Thomas, Zhijing Li, and Adrian Sampson. 2021.
A compiler infrastructure for accelerator generators. In ASPLOS ’21:
26th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Virtual Event, USA, April
19-23, 2021, Tim Sherwood, Emery D. Berger, and Christos Kozyrakis
(Eds.). ACM, 804ś817. https://doi.org/10.1145/3445814.3446712

[29] Rishiyur S. Nikhil. 2004. Bluespec System Verilog: efficient, correct
RTL from high level specifications. In 2nd ACM & IEEE International
Conference on Formal Methods and Models for Co-Design (MEMOCODE
2004), 23-25 June 2004, San Diego, California, USA, Proceedings. IEEE
Computer Society, 69ś70. https://doi.org/10.1109/MEMCOD.2004.
1459818

[30] Martin Odersky. 2019. Scala Language Specification. https://scalalang.org/files/archive/spec/2.13/.

[31] Martin Schoeberl. 2011. Leros: A Tiny Microcontroller for FPGAs. In
International Conference on Field Programmable Logic and Applications,
FPL 2011, September 5-7, Chania, Crete, Greece. IEEE Computer Society,
10ś14. https://doi.org/10.1109/FPL.2011.13

[32] Fabian Schuiki, Andreas Kurth, Tobias Grosser, and Luca Benini. 2020.
LLHD: a multi-level intermediate representation for hardware description languages. In Proceedings of the 41st ACM SIGPLAN International
Conference on Programming Language Design and Implementation, PLDI
2020, London, UK, June 15-20, 2020, Alastair F. Donaldson and Emina
Torlak (Eds.). ACM, 258ś271. https://doi.org/10.1145/3385412.3386024

[33] Harald Sùndergaard and Peter Sestoft. 1990. Referential transparency,
definiteness and unfoldability. Acta Informatica 27 (1990), 505ś517.

[34] Yahui Song and Wei-Ngan Chin. 2021. A Synchronous Effects Logic for
Temporal Verification of Pure Esterel. In Verification, Model Checking,
and Abstract Interpretation - 22nd International Conference, VMCAI
2021, Copenhagen, Denmark, January 17-19, 2021, Proceedings (Lecture
Notes in Computer Science, Vol. 12597), Fritz Henglein, Sharon Shoham,
and Yakir Vizel (Eds.). Springer, 417ś440. https://doi.org/10.1007/978-
3-030-67067-2\_19

[35] Lenny Truong and Pat Hanrahan. 2019. A Golden Age of Hardware
Description Languages: Applying Programming Language Techniques
to Improve Design Productivity. In 3rd Summit on Advances in Programming Languages, SNAPL 2019, May 16-17, 2019, Providence, RI,
USA (LIPIcs, Vol. 136), Benjamin S. Lerner, Rastislav Bodík, and Shriram Krishnamurthi (Eds.). Schloss Dagstuhl - Leibniz-Zentrum für
Informatik, 7:1ś7:21. https://doi.org/10.4230/LIPIcs.SNAPL.2019.7

[36] Philip Wadler. 1992. Monads for functional programming. In Program
Design Calculi, Proceedings of the NATO Advanced Study Institute on
Program Design Calculi, Marktoberdorf, Germany, July 28 - August 9,
1992 (NATO ASI Series, Vol. 118), Manfred Broy (Ed.). Springer, 233ś264

