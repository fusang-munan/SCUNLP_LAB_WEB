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

  # Github项目（从 content/project/ 读取）
  - block: collection
    content:
      title: Github项目
      filters:
        folders:
          - github     # 从 content/project/ 读取
        # 如果你想只展示打了某个标签的项目，可加：
        # tags: ["featured"]
      sort:
        # 可选：按日期或 title 排序
        # sort_by: 'Date'
        # direction: 'desc'
    design:
      view: card       # 卡片/砖石等：card | showcase | masonry
      columns: 1

  # Demo（从 content/project/ 读取）
  - block: collection
    content:
      title: Demo
      filters:
        folders:
          - demo     # 从 content/project/ 读取
        # 如果你想只展示打了某个标签的项目，可加：
        # tags: ["featured"]
      sort:
        # 可选：按日期或 title 排序
        # sort_by: 'Date'
        # direction: 'desc'
    design:
      view: Masonry         # 卡片/砖石等：card | showcase | masonry
      columns: 1
---
