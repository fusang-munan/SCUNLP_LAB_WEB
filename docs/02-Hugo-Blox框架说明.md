# Hugo Blox 框架说明

Hugo Blox（原 Wowchemy）是专为学术网站设计的Hugo主题框架。它提供了丰富的预设组件，特别适合研究组、个人学术主页、会议网站等场景。

## 框架引入方式

本项目通过 Hugo Modules 引入 Hugo Blox：

```yaml
# config/_default/module.yaml
imports:
  - path: github.com/HugoBlox/hugo-blox-builder/modules/blox-plugin-decap-cms
  - path: github.com/HugoBlox/hugo-blox-builder/modules/blox-plugin-netlify
  - path: github.com/HugoBlox/hugo-blox-builder/modules/blox-bootstrap/v5
```

| 模块 | 说明 |
|------|------|
| `blox-bootstrap/v5` | 核心主题，包含所有Block组件和基础样式 |
| `blox-plugin-decap-cms` | Decap CMS集成 |
| `blox-plugin-netlify` | Netlify部署优化 |

## Block 机制

Hugo Blox的核心概念是**Block**——可组合的页面构建单元。

### Landing Page 结构

首页（`_index.md`）使用 `type: landing`，通过 `sections` 数组组合多个Block：

```yaml
---
title: ""
type: landing

sections:
  - block: hero
    content:
      title: 实验室名称
      text: 简介文字
    design:
      background:
        color: '#f8f9fa'

  - block: collection
    content:
      title: 最新论文
      count: 5
      filters:
        folders:
          - publication
    design:
      view: citation
---
```

每个Block由三部分组成：
- **block** — Block类型名
- **content** — Block的内容数据
- **design** — Block的样式配置

### 常用Block类型

#### hero（主视觉）

用于首页大图、标题展示：

```yaml
- block: hero
  content:
    title: |
      四川大学
      自然语言处理实验室
    image:
      filename: lab-photo.jpg
    text: |
      实验室介绍文字...
  design:
    background:
      gradient_start: '#4bb4e6'
      gradient_end: '#2b8bba'
      text_color_light: true
```

#### markdown（富文本）

渲染Markdown内容，可设置背景：

```yaml
- block: markdown
  content:
    title: 关于我们
    text: |
      这里可以写**Markdown**格式的内容。
      
      - 列表项1
      - 列表项2
  design:
    columns: '1'
    background:
      image:
        filename: background.jpg
        parallax: true
```

#### collection（内容集合）

聚合展示某类内容（论文、公告、博客等）：

```yaml
- block: collection
  content:
    title: 最新公告
    count: 5                    # 显示数量
    filters:
      folders:
        - announcement          # 从哪个section取
      exclude_featured: false
    offset: 0                   # 跳过前N条
    order: desc                 # 排序方向
  design:
    view: list                  # 显示视图
    columns: '1'
```

**可用视图（view）：**
| 视图 | 说明 |
|------|------|
| `list` | 简单列表 |
| `compact` | 紧凑列表 |
| `card` | 卡片样式 |
| `citation` | 论文引用格式 |
| `showcase` | 展示样式（带图） |

#### people（人员展示）

展示团队成员：

```yaml
- block: people
  content:
    title: 团队成员
    user_groups:
      - 导师团队
      - 博士生
      - 硕士生
    sort_by: Params.last_name
    sort_ascending: true
  design:
    show_interests: true
    show_role: true
    show_social: false
```

人员数据来自 `content/*/authors/` 目录。

#### contact（联系方式）

显示联系信息和表单：

```yaml
- block: contact
  content:
    title: 联系我们
    email: lab@example.com
    address:
      street: 四川省成都市
      city: 成都
      postcode: '610065'
    coordinates:
      latitude: '30.63'
      longitude: '104.08'
    contact_links:
      - icon: envelope
        icon_pack: fas
        name: 发送邮件
        link: mailto:lab@example.com
  design:
    columns: '2'
```

#### cta（行动按钮）

调用行动按钮：

```yaml
- block: markdown
  content:
    text: |
      {{% cta cta_link="./people/" cta_text="查看团队 →" %}}
```

### Design 配置项

每个Block都可以配置design：

```yaml
design:
  # 列布局
  columns: '1'          # '1' 全宽, '2' 两列
  
  # 背景
  background:
    color: '#f8f9fa'
    image:
      filename: bg.jpg
      filters:
        brightness: 0.8
      parallax: true
      position: center
      size: cover
    gradient_start: '#4bb4e6'
    gradient_end: '#2b8bba'
    text_color_light: true
  
  # 间距
  spacing:
    padding: ['20px', '0', '20px', '0']  # 上右下左
  
  # 自定义CSS类
  css_class: my-custom-class
```

## 内容类型

Hugo Blox预定义了多种内容类型，每种有特定的Front Matter字段。

### Publication（论文）

```yaml
---
title: "论文标题"
authors:
  - 张三
  - 李四
date: 2024-01-15
publication: "ACL 2024"
publication_types: ['paper-conference']
abstract: "摘要内容..."

# 链接
url_pdf: ''
url_code: 'https://github.com/...'
url_dataset: ''
url_poster: ''
url_slides: ''
url_video: ''

# 特色图片
image:
  caption: ''
  focal_point: ''
  preview_only: false

# 标签
tags:
  - NLP
  - LLM
---
```

**publication_types 可选值：**
| 值 | 说明 |
|------|------|
| `paper-conference` | 会议论文 |
| `article-journal` | 期刊论文 |
| `preprint` | 预印本 |
| `thesis` | 学位论文 |
| `book` | 专著 |

### Author（作者）

位于 `content/*/authors/<Name>/_index.md`：

```yaml
---
title: 张三
first_name: San
last_name: Zhang

authors:
  - San Zhang        # 用于关联论文

superuser: false     # 是否为站点主用户
role: 博士研究生

organizations:
  - name: 四川大学
    url: 'https://scu.edu.cn'

bio: 研究方向为自然语言处理

interests:
  - 自然语言处理
  - 大语言模型
  - 对话系统

education:
  courses:
    - course: 博士
      institution: 四川大学
      year: 2025

social:
  - icon: envelope
    icon_pack: fas
    link: 'mailto:xxx@example.com'
  - icon: google-scholar
    icon_pack: ai
    link: https://scholar.google.com/...

user_groups:
  - 博士生            # 用于people block分组
---

个人简介正文...
```

### Event（活动）

```yaml
---
title: 学术报告：XXX
event: 学术讲座
event_url: ''
location: 四川大学
date: 2024-03-15T14:00:00
date_end: 2024-03-15T16:00:00
all_day: false
authors: []
tags: []
featured: false
---
```

## 主题配置

### 配色主题

在 `data/themes/` 创建 `.toml` 文件：

```toml
# data/themes/scu.toml
name = "SCU"

[light]
  primary = "#3f51b5"
  menu_primary = "#3f51b5"
  menu_text = "#fff"
  menu_text_active = "#ffeb3b"
  menu_title = "#fff"
  home_section_odd = "rgb(255, 255, 255)"
  home_section_even = "rgb(247, 247, 247)"

[dark]
  primary = "hsl(339, 90%, 68%)"
  menu_primary = "rgb(20, 22, 34)"
  menu_text = "rgba(255,255,255,0.6)"
  menu_text_active = "rgba(255,255,255,1)"
  menu_title = "#fff"
  home_section_odd = "hsla(231, 15%, 18%, 1)"
  home_section_even = "hsla(231, 15%, 16%, 1)"
```

在 `params.yaml` 中启用：

```yaml
appearance:
  theme_day: scu
  theme_night: scu
  font: native
  font_size: L
```

### 功能开关

```yaml
# config/_default/params.yaml
features:
  syntax_highlighter:
    enable: false
  math:
    enable: false
  search:
    provider: wowchemy
  avatar:
    gravatar: false
    shape: circle

header:
  navbar:
    enable: true
    show_logo: true
    show_language: false
    show_day_night: true
    show_search: true

footer:
  copyright:
    notice: '© {year} 团队名称'
```

## Shortcodes

Hugo Blox提供了一些实用的Shortcodes：

```markdown
<!-- 引用 -->
{{< cite page="publication/my-paper" >}}

<!-- 图片画廊 -->
{{< gallery album="photos" >}}

<!-- 图标 -->
{{< icon name="download" pack="fas" >}}

<!-- CTA按钮 -->
{{% cta cta_link="./people/" cta_text="查看团队" %}}

<!-- 统计数字 -->
{{< statistic value="50+" label="发表论文" >}}

<!-- 视频嵌入 -->
{{< youtube id="xxx" autoplay="false" >}}
```

## 国际化

### 翻译文件

在 `i18n/` 目录创建语言文件：

```yaml
# i18n/zh.yaml
- id: team
  translation: "团队"
- id: homepage
  translation: "主页"
```

### 在模板中使用

```html
{{ i18n "team" }}
```

### 在配置中使用

```yaml
# params.yaml
footer:
  copyright:
    notice: '{team} © {year}'  # 会自动替换
```

## 下一步

了解了Hugo Blox后，继续阅读 [03-项目架构详解](./03-项目架构详解.md) 了解本项目的具体实现。
