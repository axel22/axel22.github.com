---
layout: publication
title: Optimization-Aware Compiler-Level Event Profiling
authors: Matteo Basso, Aleksandar Prokopec, Andrea Rosa, Walter Binder
venue: TOPLAS 2023
permalink: /publications/opt-aware-prof/index.html
---


## Abstract

Tracking specific events in a program’s execution, such as object allocation or lock acquisition,
is at the heart of dynamic analysis. Despite the apparent simplicity of this task, quantifying these events
is challenging due to the presence of compiler optimizations.
Profiling perturbs the optimizations that the compiler would normally do—a profiled program usually behaves differently than the original one.

In this article, we propose a novel technique for quantifying compiler-internal events in the optimized code,
reducing the profiling perturbation on compiler optimizations. Our technique achieves this by instrumenting the program from within the compiler,
and by delaying the instrumentation until the point in the compilation pipeline after which no subsequent optimizations can remove the events.
We propose two different implementation strategies of our technique based on path-profiling, and a modification to the standard path-profiling algorithm
that facilitates the use of the proposed strategies in a modern just-in-time (JIT) compiler. We use our technique to analyze the behaviour of the optimizations in Graal,
a state-of-the-art compiler for the Java Virtual Machine, identifying the reasons behind a performance improvement of a specific optimization,
and the causes behind an unexpected slowdown of another. Finally, our evaluation results show that the two proposed implementations result
in a significantly lower execution-time overhead w.r.t. a naive implementation.

## Links

\[[PDF](/resources/docs/opt-aware-prof.pdf)\]
\[[BibTex](/resources/docs/bibtex/opt-aware-prof.bib)\]
\[[ACM](https://dl.acm.org/doi/10.1145/3591473)\]

## References

[1] 2023. Akka Website. https://akka.io/.

[2] 2023. Twitter Finagle. https://twitter.github.io/finagle/guide/Quickstart.html.

[3] Bowen Alpern, Steve Augart, Stephen Blackburn, Maria Butrico, Anthony Cocchi, Perry Cheng, Julian Dolby,
Stephen Fink, David Grove, Michael Hind, Kathryn McKinley, Mark Mergen, Eliot Moss, Ton Ngo, Vivek Sarkar,
and Martin Trapp. 2005. The Jikes Research Virtual Machine project: Building an open-source research community.
IBM Systems Journal 44 (2005), 399–418.

[4] Glenn Ammons, Thomas Ball, and James R. Larus. 1997. Exploiting hardware performance counters with flow and
context sensitive profiling (PLDI’97). 85–96.

[5] Matthew Arnold, Stephen Fink, Vivek Sarkar, and Peter Sweeney. 2000. A comparative study of static and profilebased heuristics for inlining (DYNAMO’00). 52–64.

[6] Phil Bagwell. 2001. Ideal Hash Trees. (2001). Technical report, October 2001. http://infoscience.epfl.ch/record/64398.

[7] Thomas Ball. 1994. Efficiently counting program events with support for on-line queries. ACM Trans. Program. Lang.
Syst. 16, 5 (1994), 1399–1410.

[8] Thomas Ball and James Larus. 1994. Optimally profiling and tracing programs. ACM Trans. Program. Lang. Syst. 16,
4 (1994), 1319–1360.

[9] Thomas Ball and James Larus. 1996. Efficient path profiling (MICRO’96). 46–57.

[10] Matteo Basso, Andrea Rosà, Luca Omini, and Walter Binder. 2023. Java vector API: Benchmarking and performance
analysis (CC’23). 1–12.

[11] Matteo Basso, Eduardo Rosales, Filippo Schiavio, Andrea Rosà, and Walter Binder. 2022. Accurate fork-join profiling
on the Java virtual machine (Euro-Par’22). 35–50.

[12] Dean Michael Berris, Alistair Veitch, Nevin Heintze, Eric Anderson, and Ning Wang. 2016. XRay: A Function Call
Tracing System. Technical Report. 1–8 pages.

[13] Stephen M. Blackburn, Robin Garner, Chris Hoffmann, Asjad M. Khang, Kathryn S. McKinley, Rotem Bentzur, Amer
Diwan, Daniel Feinberg, Daniel Frampton, Samuel Z. Guyer, Martin Hirzel, Antony Hosking, Maria Jump, Han Lee,
J. Eliot B. Moss, Aashish Phansalkar, Darko Stefanović, Thomas VanDrunen, Daniel von Dincklage, and Ben Wiedermann. 2006. The DaCapo benchmarks: Java benchmarking development and analysis (OOPSLA’06). 169–190.

[14] Michael David Bond and Kathryn McKinley. 2005. Continuous path and edge profiling (MICRO’05). 11–140.

[15] Rodrigo Bruno, Luís Picciochi Oliveira, and Paulo Ferreira. 2017. NG2C: Pretenuring garbage collection with dynamic
generations for HotSpot big data applications (ISMM’17). 2–13.

[16] Michael Burke, Jong-Deok Choi, Stephen Fink, David Grove, Michael Hind, Vivek Sarkar, Mauricio Jose Serrano,
Vugranam Sreedhar, Harini Srinivasan, and John Whaley. 1999. The Jalapeño dynamic optimizing compiler for Java
(JAVA’99). 129–141.

[17] William Chen, Pohua Chang, Thomas Conte, and Wen-Mei Hwu. 1993. The effect of code expanding optimizations
on instruction cache design. IEEE Trans. Comput. 42, 9 (1993), 1045–1057.

[18] Cliff Click. 1995. Global code motion/global value numbering (PLDI’95). 246–257.

[19] Cliff Click and Michael Paleczny. 1995. A simple graph-based intermediate representation (IR’95). 35–49.

[20] Cliff Click and John Rose. 2002. Fast subtype checking in the HotSpot JVM (JGI’02). 96–107.

[21] Ron Cytron, Jeanne Ferrante, Barry Rosen, Mark Wegman, and Frank Kenneth Zadeck. 1991. Efficiently computing
static single assignment form and the control dependence graph. ACM Trans. Program. Lang. Syst. 13 (1991), 451–490.

[22] DaCapo Project. 2018. The DaCapo Benchmark Suite. http://dacapobench.sourceforge.net/.

[23] Benoit Daloze, Chris Seaton, Daniele Bonetta, and Hanspeter Mössenböck. 2015. Techniques and applications for
guest-language safepoints (ICOOOLPS’15). 8:1–8:10.

[24] David Detlefs and Ole Agesen. 1999. Inlining of virtual methods (ECOOP’99). 258–278

[25] David Dice. 2001. Implementing fast Java monitors with relaxed-locks (USENIX JVM’01). 79–90.

[26] Dave Dice. 2006. Biased Locking in HotSpot. https://blogs.oracle.com/dave/biased-locking-in-hotspot.

[27] David Dice, Mark Moir, and William Scherer III. 2003. Quickly reacquirable locks (patent). US7814488B1 (2003), 1–19.
https://patents.google.com/patent/US7814488B1/en.

[28] Gilles Duboscq, Lukas Stadler, Thomas Wuerthinger, Doug Simon, Christian Wimmer, and Hanspeter Mössenböck. 2013. Graal IR: An extensible declarative intermediate representation (APPLC’13). 1–9.

[29] Gilles Duboscq, Thomas Würthinger, Lukas Stadler, Christian Wimmer, Doug Simon, and Hanspeter Mössenböck. 2013. An intermediate representation for speculative optimizations in a dynamic compiler (VMIL’13). 1–10.

[30] Gilles Marie Duboscq. 2016. Combining Speculative Optimizations with Flexible Scheduling of Side-Effects. https:
//resolver.obvsg.at/urn:nbn:at:at-ubl:1-9708.

[31] Alexis Engelke and Martin Schulz. 2020. Instrew: Leveraging LLVM for high performance dynamic binary instrumentation (VEE’20). 172–184.

[32] Stijn Eyerman, Lieven Eeckhout, Tejas Karkhanis, and James Smith. 2006. A performance counter architecture for
computing accurate CPI components (ASPLOS XII). 175–184.

[33] Stijn Eyerman, Lieven Eeckhout, and James Smith. 2008. Studying compiler optimizations on superscalar processors
through interval analysis (HiPEAC’08’). 114–129.

[34] Stijn Eyerman, James Smith, and Lieven Eeckhout. 2006. Characterizing the branch miss prediction penalty
(ISPASS’06). 48–58.

[35] R. A. Fisher. 1925. Statistical Methods for Research Workers. Oliver & Boyd (Edinburgh).

[36] Free Software Foundation. 2021. GCC, the GNU Compiler Collection. https://gcc.gnu.org/.

[37] Free Software Foundation. 2021. Passes and Files of the Compiler. https://gcc.gnu.org/onlinedocs/gccint/Passes.html.

[38] Free Software Foundation. 2021. Plugin Pass (GNU Compiler Collection (GCC) Internals). https://gcc.gnu.org/
onlinedocs/gccint/Plugins-pass.html#Plugins-pass.

[39] Alex Garthwaite, David Dice, and Derek White. 2005. Supporting per-processor local-allocation buffers using lightweight user-level preemption notification (VEE’05). 24–34.

[40] Giorgis Georgakoudis, Ignacio Laguna, Dimitrios Nikolopoulos, and Martin Schulz. 2017. REFINE: Realistic fault
injection via compiler-based instrumentation for accuracy, portability and speed (SC’17). 29:1–29:14.

[41] Andy Georges, Lieven Eeckhout, and Dries Buytaert. 2008. Java performance evaluation through rigorous replay
compilation (OOPSLA’08). 1–18.

[42] GitHub. 2019. Graal Issue 1541. https://github.com/oracle/graal/issues/1541.

[43] GitHub. 2021. JikesRVM OptimizationPlanner. https://github.com/JikesRVM/JikesRVM/blob/38b21f5a663016dbf
43771cb2d231f74db0a01c6/rvm/src/org/jikesrvm/compilers/opt/driver/OptimizationPlanner.java#L285.

[44] Google. 2021. An Overview of the TurboFan Compiler. https://docs.google.com/presentation/d/1H1lLsbclvzyOF3IUR
05ZUaZcqDxo7_-8f4yJoxdMooU/edit#slide=id.g18ceb14729_0_135.

[45] Google. 2022. TurboFan. https://v8.dev/docs/turbofan.

[46] Susan Lois Graham, Peter Bernard Kessler, and Marshall Kirk Mckusick. 1982. Gprof: A call graph execution profiler
(SIGPLAN’82). 120–126.

[47] Nikola Grcevski, Allan Kielstra, Kevin Stoodley, Mark Stoodley, and Vijay Sundaresan. 2004. Java just-in-time compiler and virtual machine improvements for server and middleware applications (VM’04). 1–12.

[48] Rachid Guerraoui, Michal Kapalka, and Jan Vitek. 2007. STMBench7: A benchmark for software transactional memory (EuroSys’07). 315–324.

[49] Ahmad Hazimeh, Adrian Herrera, and Mathias Payer. 2020. Magma: A ground-truth fuzzing benchmark. Proc. ACM
Meas. Anal. Comput. Syst. 4, 3 (2020), 49:1–49:29.

[50] Urs Hölzle, Craig Chambers, and David Ungar. 1992. Debugging optimized code with dynamic deoptimization
(PLDI’92). 32–43.

[51] Urs Hölzle and David Ungar. 1994. Optimizing dynamically-dispatched calls with run-time type feedback (PLDI’94).
326–336.

[52] Urs Hölzle. 1993. A fast write barrier for generational garbage collectors. OOPSLA/ECOOP’93 Workshop on Garbage
Collection in Object-Oriented Systems. 1–6.

[53] Jikes™ RVM project. 2021. Profiling Applications with Jikes RVM. https://www.jikesrvm.org/UserGuide/Profiling
ApplicationsWithJikesRVM/index.html#x10-990008.

[54] John Rose. 2011. Java Enhancement Proposal 243: Java-Level JVM Compiler Interface. https://openjdk.java.net/jeps/243

[55] Tejas Karkhanis and James Smith. 2004. A first-order superscalar processor model (ISCA’04). 338.

[56] Tanvir Ahmed Khan, Akshitha Sriraman, Joseph Devietti, Gilles Pokam, Heiner Litz, and Baris Kasikci. 2020. I-SPY:
Context-driven conditional instruction prefetching with coalescing (MICRO’20). 146–159.

[57] Thomas Kotzmann, Christian Wimmer, Hanspeter Mössenböck, Thomas Rodriguez, Kenneth Russell, and David Cox. 2008.
Design of the Java HotSpot client compiler for Java 6. ACM Trans. Archit. Code Optim. 5, 1 (2008), 7:1–7:32.

[58] Chris Lattner and Vikram Adve. 2004. LLVM: A compilation framework for lifelong program analysis & transformation (CGO’04). 75–87.

[59] Doug Lea. 2000. A Java fork/join framework. In Java Grande. 36–43.

[60] Jan-Patrick Lehr. 2016. Counting performance: Hardware performance counter and compiler instrumentation
(IWOMP’16). 2187–2198.

[61] David Leopoldseder, Roland Schatz, Lukas Stadler, Manuel Rigger, Thomas Würthinger, and Hanspeter Mössenböck. 2018.
Fast-path loop unrolling of non-counted loops to enable subsequent compiler optimizations (ManLang’18). 1–13.

[62] David Leopoldseder, Lukas Stadler, Manuel Rigger, Thomas Würthinger, and Hanspeter Mössenböck. 2018. A cost
model for a graph-based intermediate-representation in a dynamic compiler (VMIL’18). 26–35.

[63] David Leopoldseder, Lukas Stadler, Thomas Würthinger, Josef Eisl, Doug Simon, and Hanspeter Mössenböck. 2018.
Dominance-based duplication simulation (DBDS): Code duplication to enable compiler optimizations (CGO’18).
126–137.

[64] LLVM Project. 2018. Writing an LLVM Pass. https://releases.llvm.org/5.0.2/docs/WritingAnLLVMPass.html.

[65] LLVM Project. 2021. LLVM’s Analysis and Transform Passes. https://llvm.org/docs/Passes.html#transform-passes.

[66] Allen Malony, Daniel Reed, and Harry Wijshoff. 1992. Performance measurement intrusion and perturbation analysis.
IEEE Transactions on Parallel and Distributed Systems 3, 4 (1992), 433–450.

[67] Luis Mastrangelo, Luca Ponzanelli, Andrea Mocci, Michele Lanza, Matthias Hauswirth, and Nathaniel Nystrom. 2015.
Use at your own risk: The Java unsafe API in the wild (OOPSLA’15). 695–710.

[68] Raphael Mosaner. 2020. Machine learning to ease understanding of data driven compiler optimizations (SPLASH
Companion 2020). 4–6.

[69] Todd Mytkowicz, Amer Diwan, Matthias Hauswirth, and Peter Sweeney. 2007. Understanding measurement perturbation in trace-based data (IPDPS’07). 1–6.

[70] Tobias Nießen, Michael Dawson, Panos Patros, and Kenneth Kent. 2020. Insights into WebAssembly: Compilation
performance and shared code caching in node.Js (CASCON’20). 163–172.

[71] Martin Odersky and Adriaan Moors. 2009. Fighting bit rot with types (experience report: Scala collections) (LIPIcs).
427–451.

[72] Kazunori Ogata, Tamiya Onodera, Kiyokuni Kawachiya, Hideaki Komatsu, and Toshio Nakatani. 2006. Replay compilation: Improving debuggability of a just-in-time compiler (OOPSLA’06). 241–252.

[73] Oracle. 2022. GraalVM Repository at GitHub. https://github.com/oracle/graal.

[74] Oracle. 2022. Ideal Graph Visualizer. https://docs.oracle.com/en/graalvm/enterprise/20/docs/tools/igv/.

[75] Oracle. 2022. Java Platform, Standard Edition Java Flight Recorder Runtime Guide. https://docs.oracle.com/
javacomponents/jmc-5-4/jfr-runtime-guide/toc.htm.

[76] Oracle. 2022. JVMCI JDK 8 Repository at GitHub. https://github.com/usi-dag/graal-jvmci-8.

[77] Oracle. 2022. Oracle Developer Studio. https://www.oracle.com/tools/developerstudio/.

[78] Michael Paleczny, Christopher Vick, and Cliff Click. 2001. The Java Hotspot server compiler (JVM’01). 1–13.

[79] Orion Papadakis, Foivos Zakkak, Nikos Foutris, and Christos Kotselidis. 2020. You can’t hide you can’t run: A performance assessment of managed applications on a NUMA machine (MPLR’20). 80–88.

[80] Simon Peyton Jones and Simon Marlow. 2002. Secrets of the Glasgow Haskell Compiler inliner. J. Funct. Program. 12,
5 (2002), 393–434.

[81] Adam Preuss. 2021. Implementation of Path Profiling in the Low-Level Virtual-Machine (LLVM) Compiler Infrastructure. https://llvm.org/pubs/2010-12-Preuss-PathProfiling.pdf.

[82] Aleksandar Prokopec. 2016. Pluggable scheduling for the reactor programming model (AGERE’16). 41–50.

[83] Aleksandar Prokopec. 2017. Analysis of concurrent lock-free hash tries with constant-time operations. ArXiv e-prints
(2017). arXiv:1712.09636.

[84] Aleksandar Prokopec. 2017. Encoding the building blocks of communication (Onward! 2017). 104–118.

[85] Aleksandar Prokopec. 2018. Cache-tries: Concurrent lock-free hash tries with constant-time operations (PPoPP’18).
137–151.

[86] Aleksandar Prokopec. 2018. Efficient lock-free removing and compaction for the cache-trie data structure (EuroPar’18). 575–589.

[87] Aleksandar Prokopec, Phil Bagwell, and Martin Odersky. 2013. Lock-free resizeable concurrent tries (LCPC’13).
156–170.

[88] Aleksandar Prokopec, Phil Bagwell, Tiark Rompf, and Martin Odersky. 2011. A generic parallel collection framework
(Euro-Par’11). 136–147.

[89] Aleksandar Prokopec, Nathan Grasso Bronson, Phil Bagwell, and Martin Odersky. 2012. Concurrent tries with efficient non-blocking snapshots (PPoPP’12). 151–160.

[90] Aleksandar Prokopec, Gilles Duboscq, David Leopoldseder, and Thomas Würthinger. 2019. An optimization-driven
incremental inline substitution algorithm for just-in-time compilers (CGO’19). 164–179.

[91] Aleksandar Prokopec, David Leopoldseder, Gilles Duboscq, and Thomas Würthinger. 2017. Making collection operations optimal with aggressive JIT compilation (SCALA’17). 29–40.

[92] Aleksandar Prokopec and Martin Odersky. 2015. Isolates, channels, and event streams for composable distributed
programming (Onward!’15). 171–182.

[93] Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tůma, Martin Studener, Lubomír Bulej,
Yudi Zheng, Alex Villazón, Doug Simon, Thomas Würthinger, and Walter Binder. 2019. Renaissance: Benchmarking
suite for parallel applications on the JVM (PLDI’19). 31–47.

[94] Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tůma, Martin Studener, Lubomír Bulej,
Yudi Zheng, Alex Villazón, Doug Simon, Thomas Würthinger, and Walter Binder. 2019. Renaissance: A modern
benchmark suite for parallel applications on the JVM (SPLASH Companion’19). 11–12.

[95] Aleksandar Prokopec, Andrea Rosà, David Leopoldseder, Gilles Duboscq, Petr Tuma, Martin Studener, Lubomír Bulej,
Yudi Zheng, Alex Villazón, Doug Simon, Thomas Würthinger, and Walter Binder. 2019. On evaluating the renaissance
benchmarking suite: Variety, performance, and complexity. CoRR abs/1903.10267 (2019).

[96] Andrea Rosà and Walter Binder. 2018. Optimizing type-specific instrumentation on the JVM with reflective supertype
information. Journal of Visual Languages & Computing 49 (2018), 29–45.

[97] Andrea Rosà, Eduardo Rosales, and Walter Binder. 2017. Accurate reification of complete supertype information for
dynamic analysis on the JVM (GPCE’17). 1–13.

[98] Andrea Rosà, Eduardo Rosales, and Walter Binder. 2018. Analyzing and optimizing task granularity on the JVM
(CGO’18). 27–37.

[99] Andrea Rosà, Eduardo Rosales, and Walter Binder. 2019. Analysis and optimization of task granularity on the Java
virtual machine. ACM Trans. Program. Lang. Syst. 41, 3, Article 19 (2019), 47 pages.

[100] Eduardo Rosales, Matteo Basso, Andrea Rosà, and Walter Binder. 2023. Profiling and optimizing Java streams. The
Art, Science, and Engineering of Programming 7, 3 (2023), 1–43.

[101] Kenneth Russell and David Detlefs. 2006. Eliminating synchronization-related atomic operations with biased locking
and bulk rebiasing (OOPSLA’06). 263–272.

[102] Tao Schardl, Tyler Denniston, Damon Doucet, Bradley Kuszmaul, I-Ting Angelina Lee, and Charles Leiserson. 2017.
The CSI framework for compiler-inserted program instrumentation. Proc. ACM Meas. Anal. Comput. Syst. 1, 2 (2017),
43:1–43:25.

[103] Robert William Scheifler. 1977. An analysis of inline substitution for a structured programming language. Commun.
ACM 20, 9 (1977), 647–654.

[104] Konstantin Serebryany, Derek Bruening, Alexander Potapenko, and Dmitry Vyukov. 2012. AddressSanitizer: A fast
address sanity checker (USENIX ATC’12). 1–28.

[105] Konstantin Serebryany and Timur Iskhodzhanov. 2009. ThreadSanitizer: Data race detection in practice (WBIA’09).
62–71.

[106] Konstantin Serebryany, Alexander Potapenko, Timur Iskhodzhanov, and Dmitriy Vyukov. 2012. Dynamic race detection with LLVM compiler (RV’11). 110–114.

[107] Jaroslav Sevcik. 2016. Turbofan IR. https://docs.google.com/presentation/d/1Z9iIHojKDrXvZ27gRX51UxHDbKf1QcPzSijntpMJBM/edit#slide=id.p.

[108] Doug Simon, Christian Wimmer, Bernhard Urban, Gilles Duboscq, Lukas Stadler, and Thomas Würthinger. 2015.
Snippets: Taking the high road to a low level. ACM Trans. Archit. Code Optim. 12, 2 (2015), 20:1–20:25.

[109] Lukas Stadler, Gilles Duboscq, Hanspeter Mössenböck, Thomas Würthinger, and Doug Simon. 2013. An experimental
study of the influence of dynamic compiler optimizations on scala performance (SCALA’13). 9:1–9:8.

[110] Lukas Stadler, Thomas Würthinger, and Hanspeter Mössenböck. 2014. Partial escape analysis and scalar replacement
for Java (CGO’14). 165–174.

[111] Steve Blackburn. 2018. DaCapo Issue 68. http://sf.net/p/dacapobench/bugs/68/.

[112] Steve Blackburn. 2020. DaCapo Issue 70. http://sf.net/p/dacapobench/bugs/70/.

[113] Tarek M. Taha and Scott Wills. 2008. An instruction throughput model of superscalar processors. IEEE Trans. Comput.
57, 3 (2008), 389–403.

[114] Nathan Tallent, John Mellor-Crummey, and Michael Fagan. 2009. Binary analysis for measurement and attribution
of program performance. SIGPLAN Not. 44, 6 (2009), 441–452.

[115] Ronny Tschüter, Johannes Ziegenbalg, Bert Wesarg, Matthias Weber, Christian Herold, Sebastian Döbel, and Ronny
Brendel. 2017. An LLVM instrumentation plug-in for score-P (LLVM-HPC’17). 2:1–2:8.

[116] David Ungar. 1984. Generation scavenging: A non-disruptive high performance storage reclamation algorithm. SIGSOFT Softw. Eng. Notes 9, 3 (1984), 157–167.

[117] Mark Wegman and Frank Kenneth Zadeck. 1991. Constant propagation with conditional branches. ACM Trans. Program. Lang. Syst. 13, 2 (1991), 181–210.

[118] Matthew Edwin Weingarten, Theodoros Theodoridis, and Aleksandar Prokopec. 2022. Inlining-benefit prediction
with interprocedural partial escape analysis (VMIL’22). 13–24.

[119] Christian Wimmer, Codrut Stancu, Peter Hofer, Vojin Jovanovic, Paul Wögerer, Peter Bernard Kessler, Oleg Pliss,
and Thomas Würthinger. 2019. Initialize once, start fast: Application initialization at build time. Proc. ACM Program.
Lang. 3, OOPSLA (2019), 184:1–184:29.

[120] Thomas Würthinger. 2014. Graal and Truffle: Modularity and separation of concerns as cornerstones for building a
multipurpose runtime (MODULARITY’14). 3–4.

[121] Thomas Würthinger, Christian Wimmer, and Hanspeter Mössenböck. 2008. Visualization of program dependence
graphs (CC’08). 193–196.

[122] Matei Zaharia, Reynold S. Xin, Patrick Wendell, Tathagata Das, Michael Armbrust, Ankur Dave, Xiangrui Meng, Josh
Rosen, Shivaram Venkataraman, Michael J. Franklin, Ali Ghodsi, Joseph Gonzalez, Scott Shenker, and Ion Stoica. 2016.
Apache Spark: A unified engine for big data processing. Commun. ACM 59, 11 (2016), 56–65.

[123] Peng Zhao and José Nelson Amaral. 2004. To inline or not to inline? Enhanced inlining decisions (LCPC’04). 405–419.

[124] Yudi Zheng. 2017. Observable Dynamic Compilation (Doctoral dissertation). 1–111.

[125] Yudi Zheng, Lubomír Bulej, and Walter Binder. 2015. Accurate profiling in the presence of dynamic compilation
(OOPSLA’15). 433–450.

[126] Yudi Zheng, Lubomír Bulej, and Walter Binder. 2017. An empirical study on deoptimization in the Graal compiler.
In ECOOP’17 (LIPIcs, Vol. 74). 30:1–30:30.

[127] Matija Šipek, Dino Muharemagić, Branko Mihaljević, and Aleksander Radovan. 2020. Enhancing performance of
cloud-based software applications with GraalVM and Quarkus (MIPRO’20). 1746–1751.

