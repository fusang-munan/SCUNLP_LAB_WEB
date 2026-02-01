---
title: 开源项目
type: landing

sections:
  - block: markdown
    content:
      title: 开源项目
      text: |
        这里展示一些开源项目。
    design:
      columns: '1'

  # 项目列表（从 content/project/ 读取）
  - block: collection
    content:
      title: 项目列表
      filters:
        folders:
          - project     # 从 content/project/ 读取
        # 如果你想只展示打了某个标签的项目，可加：
        # tags: ["featured"]
      sort:
        # 可选：按日期或 title 排序
        # sort_by: 'Date'
        # direction: 'desc'
    design:
      view: card       # 卡片/砖石等：card | showcase | masonry
      columns: 1
---
