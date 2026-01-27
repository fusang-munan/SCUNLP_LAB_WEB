---
title: "GraphOTTER: Evolving LLM-based Graph Reasoning for Complex Table Question Answering"
authors:
- Qianlong Li
date: '2025-12-02'
publication_types:
- "paper-conference"
publication: "*COLING 2025*"
tags:
- CCF-B
abstract: "复杂表格问答是指基于布局复杂、表头位置灵活的复杂表格，为特定问题提供准确答案。尽管在逻辑学习（LLM）时代取得了显著进展，但现有方法的推理过程通常是隐式的，会将整个表格直接输入到提示中，难以有效过滤掉表格中的无关信息。为此，我们提出了 GraphOTTER，它显式地构建了推理过程以精确定位正确答案。具体而言，GraphOTTER 利用基于图的表示方法，将复杂表格转换为无向图。然后，它对该图进行逐步推理，每一步都由一组预定义的中间推理操作指导。因此，它构建了清晰的推理路径，并有效地识别给定问题的答案。在两个基准数据集和两个 LLM 骨干网络上进行的全面实验证明了 GraphOTTER 的有效性。进一步的分析表明，其成功可能归功于其能够有效地过滤掉无关信息，从而使推理过程集中在最相关的数据上。"
url_pdf: "https://arxiv.org/abs/2412.01230"
---
