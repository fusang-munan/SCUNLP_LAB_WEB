# Hugo 基础入门

本文介绍Hugo的核心概念，帮助你理解这个静态站点生成器是如何工作的。

## 什么是Hugo

Hugo是一个用Go语言编写的静态站点生成器（Static Site Generator，SSG）。它的工作流程是：

```
内容文件（Markdown） + 模板（HTML） + 配置（YAML） → 编译 → 静态HTML网站
```

与WordPress等动态网站不同，Hugo生成的是纯静态HTML文件，不需要数据库和后端服务器，可以部署到任何静态文件托管服务。

**优势：**
- 编译速度极快（毫秒级）
- 部署简单，无需服务器运维
- 安全性高（无数据库注入风险）
- SEO友好

## 核心概念

### 1. 内容（Content）

所有内容存放在 `content/` 目录，以Markdown文件形式存在。

```
content/
├── zh/                    # 中文内容
│   ├── _index.md          # 首页
│   ├── publication/       # 论文section
│   │   ├── _index.md      # 论文列表页
│   │   └── paper-1/       # 单篇论文
│   │       └── index.md
│   └── authors/           # 作者信息
│       └── Zhang-San/
│           └── _index.md
└── en/                    # 英文内容（结构相同）
```

**文件命名规则：**
- `_index.md` — Section列表页（如论文列表）
- `index.md` — 单页内容（如单篇论文详情）
- 文件夹名 = URL路径

### 2. Front Matter

每个Markdown文件开头的YAML块，用于定义页面元数据：

```yaml
---
title: "论文标题"
date: 2024-01-15
authors:
  - "张三"
  - "李四"
tags:
  - NLP
  - LLM
draft: false
---

正文内容从这里开始...
```

**常用字段：**
| 字段 | 说明 |
|------|------|
| `title` | 页面标题 |
| `date` | 发布日期 |
| `draft` | 是否为草稿（true则不会发布） |
| `type` | 内容类型（影响使用哪个模板） |
| `layout` | 指定使用的布局模板 |
| `weight` | 排序权重（数字越小越靠前） |

### 3. Section与Taxonomy

**Section（内容分区）：**
`content/` 下的每个子目录就是一个Section。例如：
- `content/zh/publication/` → publication section
- `content/zh/announcement/` → announcement section

Section决定了：
- URL结构：`/zh/publication/paper-1/`
- 使用的模板：`layouts/publication/`

**Taxonomy（分类法）：**
用于内容的交叉分类，如标签、分类、作者等。在`hugo.yaml`中定义：

```yaml
taxonomies:
  tag: tags
  category: categories
  author: authors
```

### 4. 模板（Templates）

Hugo使用Go Template语法。模板文件存放在 `layouts/` 目录。

**模板类型：**
| 类型 | 文件 | 用途 |
|------|------|------|
| 基础模板 | `baseof.html` | 所有页面的骨架（head、body等） |
| 列表模板 | `list.html` / `section.html` | 渲染内容列表 |
| 单页模板 | `single.html` | 渲染单个内容页 |
| Partial | `partials/*.html` | 可复用的模板片段 |

**模板查找顺序（以publication为例）：**
```
layouts/publication/single.html    ← 最优先（项目自定义）
layouts/_default/single.html       ← 其次（项目默认）
themes/xxx/layouts/.../single.html ← 最后（主题提供）
```

### 5. 配置（Configuration）

配置文件在 `config/_default/` 目录：

```
config/_default/
├── hugo.yaml       # 主配置（站点名、URL、语言等）
├── params.yaml     # 站点参数（主题、功能开关等）
├── module.yaml     # 模块依赖
├── languages.yaml  # 多语言设置
└── menus.*.yaml    # 导航菜单
```

**配置合并规则：**
Hugo会按环境合并配置。例如生产环境可以有 `config/production/hugo.yaml` 覆盖默认值。

## Go Template 语法速查

Hugo模板使用Go Template语法，用双大括号 `{{ }}` 包裹。

### 变量输出

```html
<!-- 输出页面标题 -->
{{ .Title }}

<!-- 带默认值 -->
{{ .Params.subtitle | default "无副标题" }}

<!-- 原始HTML输出（不转义） -->
{{ .Content | safeHTML }}
```

### 条件判断

```html
{{ if .Params.featured }}
  <span class="badge">精选</span>
{{ else if .Draft }}
  <span class="badge">草稿</span>
{{ else }}
  <span class="badge">普通</span>
{{ end }}
```

### 循环

```html
{{ range .Pages }}
  <li>
    <a href="{{ .Permalink }}">{{ .Title }}</a>
  </li>
{{ end }}

<!-- 带索引 -->
{{ range $index, $page := .Pages }}
  <li>{{ $index }}. {{ $page.Title }}</li>
{{ end }}
```

### 变量定义

```html
<!-- 定义变量 -->
{{ $title := .Title }}

<!-- 使用scratch存储（可跨作用域） -->
{{ $scratch := newScratch }}
{{ $scratch.Set "count" 0 }}
{{ $scratch.Get "count" }}
```

### Partial调用

```html
<!-- 调用 layouts/partials/header.html -->
{{ partial "header.html" . }}

<!-- 传递自定义数据 -->
{{ partial "card.html" (dict "title" "标题" "page" .) }}
```

### 常用函数

```html
<!-- 字符串处理 -->
{{ .Title | lower }}              <!-- 转小写 -->
{{ .Title | truncate 50 }}        <!-- 截断 -->
{{ printf "Hello %s" .Title }}    <!-- 格式化 -->

<!-- 日期格式化 -->
{{ .Date.Format "2006-01-02" }}

<!-- 切片操作 -->
{{ first 5 .Pages }}              <!-- 前5个 -->
{{ last 3 .Pages }}               <!-- 后3个 -->
{{ sort .Pages "Date" "desc" }}   <!-- 排序 -->

<!-- 条件函数 -->
{{ if in .Tags "NLP" }}           <!-- 包含检查 -->
{{ if isset .Params "author" }}   <!-- 存在检查 -->
```

## 常用命令

```bash
# 本地开发服务器
hugo server -D                    # -D 显示草稿

# 构建
hugo                              # 输出到 public/
hugo --minify                     # 压缩输出

# 创建内容
hugo new publication/my-paper/index.md

# 模块管理
hugo mod get -u                   # 更新依赖
hugo mod clean                    # 清理缓存
hugo mod graph                    # 查看依赖图

# 调试
hugo --templateMetrics            # 模板性能分析
hugo --printPathWarnings          # 路径警告
```

## 目录结构约定

```
project/
├── archetypes/          # 内容模板（hugo new 使用）
├── assets/              # 需要处理的资源（SCSS、JS等）
├── config/              # 配置文件
├── content/             # 内容文件
├── data/                # 数据文件（YAML、JSON、TOML）
├── i18n/                # 国际化翻译
├── layouts/             # 模板文件
├── static/              # 静态资源（直接复制到输出）
├── themes/              # 主题目录
└── public/              # 构建输出
```

**assets vs static 的区别：**
- `assets/` — Hugo会处理（SCSS编译、图片处理等）
- `static/` — 直接复制到输出目录，不做处理

## 多语言支持

本项目使用子目录方式组织多语言内容：

```yaml
# config/_default/languages.yaml
zh:
  languageName: 中文
  contentDir: content/zh
  weight: 1
en:
  languageName: English
  contentDir: content/en
  weight: 2
```

对应的内容结构：
```
content/
├── zh/
│   └── publication/
│       └── paper-1/index.md    # 中文版
└── en/
    └── publication/
        └── paper-1/index.md    # 英文版
```

## 下一步

了解了Hugo基础后，继续阅读 [02-Hugo-Blox框架说明](./02-Hugo-Blox框架说明.md) 了解本项目使用的主题框架。
