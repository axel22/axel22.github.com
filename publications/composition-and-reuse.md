---
layout: publication
title: Composition and Reuse with Compiled Domain-Specific Languages
authors: Arvind K. Sujeeth, Tiark Rompf, Kevin J. Brown, HyoukJoong Lee, Hassan Chafi, Victoria Popic, Michael Wu, Aleksandar Prokopec, Vojin Jovanovic, Martin Odersky, Kunle Olukotun
venue: ECOOP 2013
permalink: /publications/composition-and-reuse/index.html
---


## Abstract

Programmers who need high performance currently rely on low-level, architecture-specific programming models (e.g. OpenMP for CMPs, CUDA for GPUs, MPI for clusters). Performance optimization with these frameworks usually requires expertise in the specific programming model and a deep understanding of the target architecture. Domain-specific languages (DSLs) are a promising alternative, allowing compilers to map problem-specific abstractions directly to low-level architecture-specific programming models. However, developing DSLs is difficult, and using multiple DSLs together in a single application is even harder because existing compiled solutions do not compose together. In this paper, we present four new performance-oriented DSLs developed with Delite, an extensible DSL compilation framework. We demonstrate new techniques to compose compiled DSLs embedded in a common backend together in a single program and show that generic optimizations can be applied across the different DSL sections. Our new DSLs are implemented with a small number of reusable components (less than 9 parallel operators total) and still achieve performance up to 125x better than library implementations and at worst within 30% of optimized stand-alone DSLs. The DSLs retain good performance when composed together, and applying cross-DSL optimizations results in up to an additional 1.82x improvement.


## Links

\[[PDF](/resources/docs/ecoop13_sujeeth.pdf)\]
\[[BibTex](/resources/docs/bibtex/composition-reuse.bib)\]
\[[Springer](http://link.springer.com/chapter/10.1007%2F978-3-642-39038-8_3)\]


## References

Chafi, H., Sujeeth, A.K., Brown, K.J., Lee, H., Atreya, A.R., Olukotun, K.: A domain-specific approach to heterogeneous parallelism. In: PPoPP (2011)

DeVito, Z., Joubert, N., Palacios, F., Oakley, S., Medina, M., Barrientos, M., Elsen, E., Ham, F., Aiken, A., Duraisamy, K., Darve, E., Alonso, J., Hanrahan, P.: Liszt: A domain specific language for building portable mesh-based PDE solvers. In: SC (2011)

Hong, S., Chafi, H., Sedlar, E., Olukotun, K.: Green-marl: A DSL for easy and efficient graph analysis. In: ASPLOS (2012)

Elliott, C., Finne, S., de Moor, O.: Compiling embedded languages. In: Taha, W. (ed.) SAIG 2000. LNCS, vol. 1924, pp. 9–26. Springer, Heidelberg (2000)

Leijen, D., Meijer, E.: Domain specific embedded compilers. In: DSL, pp. 109–122. ACM, New York (1999)

Mainland, G., Morrisett, G.: Nikola: embedding compiled GPU functions in haskell. In: Haskell 2010, pp. 67–78. ACM, New York (2010)

Catanzaro, B., Garland, M., Keutzer, K.: Copperhead: compiling an embedded data parallel language. In: PPoPP, pp. 47–56. ACM, New York (2011)

Brown, K.J., Sujeeth, A.K., Lee, H., Rompf, T., Chafi, H., Odersky, M., Olukotun, K.: A heterogeneous parallel framework for domain-specific languages. In: PACT (2011)

Rompf, T., Odersky, M.: Lightweight modular staging: a pragmatic approach to runtime code generation and compiled DSLs. In: GPCE, pp. 127–136. ACM, New York (2010)

Rompf, T., Sujeeth, A.K., Lee, H., Brown, K.J., Chafi, H., Odersky, M., Olukotun, K.: Building-blocks for performance oriented DSLs. In: DSL (2011)

Sujeeth, A.K., Lee, H., Brown, K.J., Rompf, T., Wu, M., Atreya, A.R., Odersky, M., Olukotun, K.: OptiML: an implicitly parallel domain-specific language for machine learning. In: ICML (2011)

Taha, W., Sheard, T.: MetaML and multi-stage programming with explicit annotations. Theor. Comput. Sci. 248(1-2), 211–242 (2000) CrossRef

Moors, A., Rompf, T., Haller, P., Odersky, M.: Scala-virtualized. In: PEPM (2012)

Rompf, T., Sujeeth, A.K., Amin, N., Brown, K., Jovanovic, V., Lee, H., Jonnalagedda, M., Olukotun, K., Odersky, M.: Optimizing data structures in high-level programs. In: POPL (2013)

Meijer, E., Beckman, B., Bierman, G.: LINQ: Reconciling object, relations and XML in the .NET framework. In: SIGMOD, p. 706. ACM, New York (2006)

Page, L., Brin, S., Motwani, R., Winograd, T.: The pagerank citation ranking: Bringing order to the web. Technical Report 1999-66, Stanford InfoLab (November 1999), Previous number = SIDL-WP-1999-0120

Prokopec, A., Bagwell, P., Rompf, T., Odersky, M.: A generic parallel collection framework. In: Jeannot, E., Namyst, R., Roman, J. (eds.) Euro-Par 2011, Part II. LNCS, vol. 6853, pp. 136–147. Springer, Heidelberg (2011) CrossRef

Lea, D.: A java fork/join framework. In: JAVA 2000, pp. 36–43. ACM, New York (2000)

Yang, J., Leskovec, J.: Patterns of temporal variation in online media. In: WSDM 2011, pp. 177–186. ACM, New York (2011)

Axelsson, E., Claessen, K., Sheeran, M., Svenningsson, J., Engdal, D., Persson, A.: The design and implementation of feldspar: An embedded language for digital signal processing. In: Hage, J., Morazán, M.T. (eds.) IFL 2010. LNCS, vol. 6647, pp. 121–136. Springer, Heidelberg (2011) CrossRef

Chiw, C., Kindlmann, G., Reppy, J., Samuels, L., Seltzer, N.: Diderot: a parallel DSL for image analysis and visualization. In: PLDI, pp. 111–120. ACM, New York (2012)

Püschel, M., Moura, J., Johnson, J., Padua, D., Veloso, M., Singer, B., Xiong, J., Franchetti, F., Gacic, A., Voronenko, Y., Chen, K., Johnson, R., Rizzolo, N.: Spiral: Code generation for DSP transforms. Proceedings of the IEEE 93(2), 232–275 (2005) CrossRef

Franchetti, F., Voronenko, Y., Püschel, M.: Formal loop merging for signal transforms. In: PLDI, pp. 315–326 (2005)

Giarrusso, P.G., Ostermann, K., Eichberg, M., Mitschke, R., Rendel, T., Kästner, C.: Reify your collection queries for modularity and speed! In: AOSD (2013)

Estublier, J., Vega, G., Ionita, A.D.: Composing domain-specific languages for wide-scope software engineering applications. In: Briand, L.C., Williams, C. (eds.) MoDELS 2005. LNCS, vol. 3713, pp. 69–83. Springer, Heidelberg (2005) CrossRef

Dinkelaker, T., Eichberg, M., Mezini, M.: An architecture for composing embedded domain-specific languages. In: AOSD, pp. 49–60. ACM (2010)

Qian, Z., Chen, X., Kang, N., Chen, M., Yu, Y., Moscibroda, T., Zhang, Z.: Madlinq: large-scale distributed matrix computation for the cloud. In: EuroSys 2012, pp. 197–210. ACM, New York (2012)

Isard, M., Yu, Y.: Distributed data-parallel computing using a high-level programming language. In: SIGMOD, pp. 987–994. ACM, New York (2009) CrossRef

Flatt, M.: Creating languages in racket. Commun. ACM 55(1), 48–56 (2012) CrossRef

Kats, L.C., Visser, E.: The spoofax language workbench: rules for declarative specification of languages and IDEs. In: OOPSLA 2010, pp. 444–463. ACM, New York (2010)

JetBrains: Meta Programming System (2009)

Kennedy, K., Broom, B., Chauhan, A., Fowler, R., Garvin, J., Koelbel, C., McCosh, C., Mellor-Crummey, J.: Telescoping languages: A system for automatic generation of domain languages. Proceedings of the IEEE 93(3), 387–408 (2005) CrossRef

Nystrom, N., White, D., Das, K.: Firepile: run-time compilation for GPUs in scala. In: GPCE, pp. 107–116. ACM, New York (2011)
