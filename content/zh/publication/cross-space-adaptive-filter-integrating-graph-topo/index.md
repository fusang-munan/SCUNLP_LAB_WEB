---
title: "Cross-Space Adaptive Filter: Integrating Graph Topology and Node Attributes for Alleviating the Over-smoothing Problem"
authors:
- Chen Huang, Haoyang Li, Yifan Zhang, Wenqiang Lei, Jiancheng Lv
date: '2024-02-10'
publication_types:
- "paper-conference"
publication: "*WWW 2024*"
tags:
- CCF-A
abstract: "传统的图卷积网络（GCN）使用低通滤波器从图拓扑结构中提取低频信号，这可能导致GCN深度增加时出现过度平滑问题。为此，人们提出了多种方法，通过引入从图拓扑结构中提取的额外滤波器（例如高通滤波器）来创建自适应滤波器。然而，这些方法严重依赖拓扑信息而忽略了节点属性空间，这极大地牺牲了深度GCN的表达能力，尤其是在处理异配图时。本文提出了一种跨空间自适应滤波器，称为CSF，用于生成从拓扑空间和属性空间中提取的自适应频率信息。具体而言，我们首先推导出一个定制的基于属性的高通滤波器，该滤波器在理论上可以解释为半监督核岭回归的最小化器。然后，我们将基于拓扑结构的低通滤波器转化为GCN中的Mercer核。这为将其与基于属性的滤波器相结合以捕获自适应频率信息奠定了基础。最后，我们通过一种有效的多核学习策略推导出跨空间滤波器，该策略统一了基于属性的高通滤波器和基于拓扑的低通滤波器。这有助于在保持有效性的同时解决过平滑问题。大量实验表明，CSF不仅成功缓解了过平滑问题，而且提高了节点分类任务的有效性。"
url_pdf: "https://arxiv.org/abs/2401.14876"
---
