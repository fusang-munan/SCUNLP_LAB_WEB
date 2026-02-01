---
title: Open Source Projects
type: landing

sections:
  - block: markdown
    content:
      title: Open Source Projects
      text: |
        Here are some open source projects.
    design:
      columns: '1'

  # 项目列表（从 content/project/ 读取）
  - block: collection
    content:
      title: Projects
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
