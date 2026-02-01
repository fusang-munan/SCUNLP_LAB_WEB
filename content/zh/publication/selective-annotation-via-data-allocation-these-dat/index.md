---
title: "Selective Annotation via Data Allocation: These Data Should Be Triaged to Experts for Annotation Rather Than the Model"
authors:
- Chen Huang, Yang Deng, Wenqiang Lei, Jiancheng Lv, Ido Dagan
date: '2024-09-22'
publication_types:
- "paper-conference"
publication: "*EMNLP 2024*"
tags:
- CCF-B
abstract: "为了在预算有限的情况下获得高质量的标注，通常采用半自动标注方法。在这种方法中，一部分数据由专家标注，然后训练模型来完成剩余数据的标注。然而，这些方法主要侧重于选择信息量大的数据进行专家标注以提高模型的预测能力（即，专家标注数据），而其余数据则被不加区分地分配给模型进行标注（即，专家标注数据）。这可能导致标注预算分配效率低下，因为模型能够准确标注的简单数据可能被不必要地分配给专家，而复杂数据则可能被模型错误分类。因此，整体标注质量可能会受到影响。为了解决这个问题，我们提出了一种名为SANT的选择性标注框架。它通过提出的错误感知分类和双权重机制，有效地利用了专家标注数据和模型标注数据。因此，信息量大或难度高的数据分配给专家进行标注，而简单的数据则由模型处理。实验结果表明，SANT 的性能始终优于其他基线方法，其通过合理地将数据分配给专家和模型工作者，从而实现了更高质量的标注。我们在预算限制下开展了数据标注方面的开创性工作，为未来基于分类的标注研究树立了里程碑。"
url_pdf: "https://arxiv.org/abs/2405.12081"
---
