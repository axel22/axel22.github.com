---
layout: publication
title: Duet Benchmarking, Improving Measurement Accuracy in the Cloud (Extended Version)
authors: Lubomír Bulej, Vojtěch Horký, Petr Tůma, François Farquet, Aleksandar Prokopec
venue: arXiv
permalink: /publications/duet-benchmarking-tech-report/index.html
---


## Abstract

We investigate the duet measurement procedure, which helps improve the accuracy of performance comparison experiments conducted on shared machines
by executing the measured artifacts in parallel and evaluating their relative performance together, rather than individually.
Specifically, we analyze the behavior of the procedure in multiple cloud environments and use experimental evidence to answer
multiple research questions concerning the assumption underlying the procedure. We demonstrate improvements in accuracy
ranging from 2.3x to 12.5x (5.03x on average) for the tested ScalaBench (and DaCapo) workloads, and from 23.8x to 82.4x (37.4x on average)
for the SPEC CPU 2017 workloads.

## Links

\[[PDF](/resources/docs/duet-benchmarking-arxiv.pdf)\]
\[[BibTex](/resources/docs/bibtex/duet-benchmarking-arxiv.bib)\]
\[[arXiv](https://arxiv.org/abs/2001.05811)\]

## References

[1] A. Abedi and T. Brecht. Conducting Repeatable Experiments in Highly Variable Cloud Computing
Environments. In ICPE, pages 287–292. ACM, 2017.

[2] S. M. Blackburn, R. Garner, C. Hoffmann, A. M. Khang, K. S. McKinley, R. Bentzur, A. Diwan,
D. Feinberg, D. Frampton, S. Z. Guyer, M. Hirzel, A. Hosking, M. Jump, H. Lee, J. E. B. Moss,
A. Phansalkar, D. Stefanovi´c, T. VanDrunen, D. von Dincklage, and B. Wiedermann. The DaCapo
Benchmarks: Java Benchmarking Development and Analysis. In OOPSLA, pages 169–190. ACM, 2006.

[3] L. Bulej, T. Bureˇs, V. Hork´y, J. Kotrˇc, L. Marek, T. Troj´anek, and P. T˚uma. Unit Testing Performance
with Stochastic Performance Logic. Automated Software Engineering, pages 1–49, 2016.

[4] L. Bulej, V. Hork´y, and P. T˚uma. Initial experiments with Duet benchmarking: Performance testing
interference in the cloud. In MASCOTS, pages 249–255, Oct 2019.

[5] D. Cerotti, M. Gribaudo, P. Piazzolla, and G. Serazzi. Flexible CPU Provisioning in Clouds: A New
Source of Performance Unpredictability. In QEST, pages 230–237, 2012.

[6] J. Ericson, M. Mohammadian, and F. Santana. Analysis of Performance Variability in Public Cloud
Computing. In IRI, pages 308–314, 2017.

[7] B. Farley, A. Juels, V. Varadarajan, T. Ristenpart, K. D. Bowers, and M. M. Swift. More for Your
Money: Exploiting Performance Heterogeneity in Public Clouds. In SoCC, pages 20:1–20:14. ACM,
2012.

[8] A. Georges, D. Buytaert, and L. Eeckhout. Statistically Rigorous Java Performance Evaluation. In
OOPSLA, 2007.

[9] GitLab Inc. GitLab Runner. https://about.gitlab.com, 2019.

[10] S. He, G. Manns, J. Saunders, W. Wang, L. Pollock, and M. L. Soffa. A Statistics-Based Performance
Testing Methodology for Cloud Applications. In ESEC/FSE, pages 188–199, New York, NY, USA, 2019. ACM.

[11] C. Heger, J. Happe, and R. Farahbod. Automated Root Cause Isolation of Performance Regressions
During Software Development. In ICPE, pages 27–38. ACM, 2013.

[12] T. Hesterberg. What Teachers Should Know about the Bootstrap: Resampling in the Undergraduate
Statistics Curriculum. arXiv:1411.5279 [stat], 2014.

[13] P. Huang, X. Ma, D. Shen, and Y. Zhou. Performance Regression Testing Target Prioritization via
Performance Risk Analysis. In ICSE, pages 60–71. ACM, 2014.

[14] A. Iosup, N. Yigitbasi, and D. Epema. On the Performance Variability of Production Cloud Services.
In CCGRID, pages 104–113, 2011.

[15] K. Joshi, A. Raj, and D. Janakiram. Sherlock: Lightweight Detection of Performance Interference in
Containerized Cloud Services. In HPCC, pages 522–530, 2017.

[16] C. Laaber, J. Scheuner, and P. Leitner. Software Microbenchmarking in the Cloud. How Bad is it
Really? Empirical Software Engineering, 2019.

[17] P. Leitner and J. Cito. Patterns in the Chaos—A Study of Performance Variation and Predictability
in Public IaaS Clouds. ACM Trans. Internet Technol., 16(3):15:1–15:23, 2016.

[18] A. Lenk, M. Menzel, J. Lipsky, S. Tai, and P. Offermann. What Are You Paying For? Performance
Benchmarking for Infrastructure-as-a-Service Offerings. In CLOUD, pages 484–491, 2011.

[19] A. Maricq, D. Duplyakin, I. Jimenez, C. Maltzahn, R. Stutsman, and R. Ricci. Taming Performance
Variability. In OSDI, pages 409–425, Berkeley, CA, USA, 2018. USENIX Association.

[20] J. Mukherjee, D. Krishnamurthy, and M. Wang. Subscriber-Driven Interference Detection for CloudBased Web Services. IEEE Trans. on Network and Service Management, 14(1):48–62, 2017.

[21] A. B. D. Oliveira, S. Fischmeister, A. Diwan, M. Hauswirth, and P. F. Sweeney. Perphecy: Performance
Regression Test Selection Made Simple but Effective. In ICST, pages 103–113, 2017.

[22] Oracle. GraalVM Repository at GitHub. https://github.com/oracle/graal, 2019.

[23] Z. Ou, H. Zhuang, A. Lukyanenko, J. K. Nurminen, P. Hui, V. Mazalov, and A. Yl¨a-J¨a¨aski. Is the
Same Instance Type Created Equal? Exploiting Heterogeneity of Public Clouds. IEEE Trans. on
Cloud Computing, 1(2):201–214, 2013.

[24] S. Ristov, R. Math´a, and R. Prodan. Analysing the Performance Instability Correlation with Various
Workflow and Cloud Parameters. In PDP, pages 446–453, 2017.

[25] J. Schad, J. Dittrich, and J.-A. Quian´e-Ruiz. Runtime Measurements in the Cloud: Observing,
Analyzing, and Reducing Variance. VLDB Endow., 3(1-2):460–471, 2010.

[26] A. Sewe, M. Mezini, A. Sarimbekov, and W. Binder. Da Capo Con Scala: Design and Analysis of a
Scala Benchmark Suite for the Java Virtual Machine. In OOPSLA, pages 657–676. ACM, 2011.

[27] S. Shankar, J. M. Acken, and N. K. Sehgal. Measuring Performance Variability in the Clouds. IETE
Technical Review, 35(6):656–660, 2018.

[28] Standard Performance Evaluation Corporation. SPEC CPU 2017. https://www.spec.org/cpu2017, 2017.

[29] Travis CI, GmbH. Travis CI. https://travis-ci.com, 2019.
