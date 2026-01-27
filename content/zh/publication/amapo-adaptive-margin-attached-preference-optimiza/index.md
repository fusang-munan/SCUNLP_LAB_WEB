---
title: "AMaPO: Adaptive Margin-attached Preference Optimization for Language Model Alignment"
authors:
- Ruibo Deng
date: '2025-12-15'
publication_types:
- "paper-conference"
publication: "*AAAI 2026*"
tags:
- CCF-A
abstract: "本文提出了AMaPO（自适应边界附加偏好优化）方法，用于语言模型对齐。该方法通过自适应调整边界参数，提高了模型在偏好优化任务上的性能。离线偏好优化为语言模型对齐提供了一种比RLHF更简单、更稳定的替代方案。然而，其有效性高度依赖于排序准确率，而排序准确率的提升对结果影响巨大。这一局限性源于一个我们称之为过拟合-欠拟合困境的根本问题：当前的间隔设计导致模型对排序正确的样本应用过多的、浪费的梯度（过拟合），而对排序错误的样本提供的校正信号不足（欠拟合）。为了解决这一困境，我们提出了一种简单而有效的算法——自适应间隔附加偏好优化（AMaPO）。AMaPO采用实例自适应间隔，并通过Z-归一化和指数缩放进行优化，动态地重新分配学习资源，增强排序错误样本的梯度，抑制排序正确样本的梯度。在广泛使用的基准数据集上进行的大量实验表明，AMaPO不仅实现了更高的排序准确率和更优异的下游对齐性能，而且针对性的分析也证实，它成功地缓解了过拟合和欠拟合的核心问题。"
url_pdf: "https://arxiv.org/abs/2511.09385"
---
