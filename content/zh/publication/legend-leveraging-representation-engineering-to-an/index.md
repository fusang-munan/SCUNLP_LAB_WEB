---
title: "Legend: Leveraging representation engineering to annotate safety margin for preference datasets"
authors:
- Duanyu Feng
date: '2024-12-18'
publication_types:
- "paper-conference"
publication: "*AAAI 2025*"
tags:
- CCF-A
abstract: "奖励模型能否成功区分安全性差异细微的回应，关键在于高质量的偏好数据集，该数据集应能捕捉有害和无害回应之间的细微差别。这就需要开发一个包含偏好间隔的数据集，以准确量化一个回应相对于另一个回应的无害程度。本文迈出了第一步，提出了一种高效且经济的框架来促进基于间隔的偏好数据集的开发。我们的框架 Legend 利用表示工程来标注偏好数据集。它在 LLM 的嵌入空间中构建了一个代表安全性的特定方向。通过利用这个安全方向，Legend 可以利用沿该方向的成对回应的语义距离来自动标注间隔。我们通过实验证明了 Legend 在 LLM 的奖励建模和无害对齐方面的有效性。Legend 的另一个突出特点是其高效性，它只需要推理时间，而无需额外的训练。这种高效性使得 Legend 更易于实现和扩展，因此在将 LLM 与安全对话对齐的实际应用中尤为重要。"
url_pdf: "https://arxiv.org/abs/2406.08124"
---