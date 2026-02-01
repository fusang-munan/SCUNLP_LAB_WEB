# SCUNLP_LAB_WEB 开发文档

四川大学自然语言处理实验室官网项目。

## 技术栈

| 组件 | 技术 | 说明 |
|------|------|------|
| 静态站点生成器 | Hugo | Go语言生态，编译速度极快 |
| 主题框架 | Hugo Blox (原Wowchemy) | 学术网站专用框架，提供丰富的Block组件 |
| 模块管理 | Hugo Modules | 类似Go Modules的依赖管理 |
| 样式 | SCSS | 支持变量、嵌套、混入等特性 |
| CMS | Decap CMS | 可选的可视化内容管理后台 |
| 部署 | Netlify / 静态服务器 | 编译输出纯静态HTML |

## 快速启动

### 1. 环境要求

- Go >= 1.19
- Hugo Extended >= 0.110.0（必须是Extended版本，支持SCSS编译）

安装Hugo（macOS）：
```bash
brew install hugo
```

验证安装：
```bash
hugo version
# 输出应包含 "extended"
```

### 2. 克隆与初始化

```bash
git clone <仓库地址>
cd SCUNLP_LAB_WEB

# 下载Hugo模块依赖
hugo mod get -u
```

### 3. 本地开发

```bash
hugo server -D
```

访问 `http://localhost:1313` 查看效果。`-D` 参数会显示草稿内容。

### 4. 构建发布

```bash
hugo
```

静态文件输出到 `public/` 目录。

## 项目结构概览

```
SCUNLP_LAB_WEB/
├── config/_default/     # 站点配置
│   ├── hugo.yaml        # Hugo主配置
│   ├── params.yaml      # 站点参数（主题、功能开关等）
│   ├── module.yaml      # Hugo模块依赖
│   ├── languages.yaml   # 多语言配置
│   └── menus.*.yaml     # 导航菜单
├── content/             # 内容目录
│   ├── zh/              # 中文内容
│   └── en/              # 英文内容
├── layouts/             # 自定义模板（覆盖默认）
├── assets/scss/         # 自定义样式
├── data/themes/         # 主题配色
├── static/              # 静态资源
└── public/              # 构建输出（gitignore）
```

## 文档索引

按照学习顺序阅读：

| 文档 | 内容 | 适用场景 |
|------|------|----------|
| [01-Hugo基础入门](./01-Hugo基础入门.md) | Hugo核心概念、目录结构、模板引擎 | 没用过Hugo的开发者 |
| [02-Hugo-Blox框架说明](./02-Hugo-Blox框架说明.md) | Block机制、内置组件、Landing Page | 想了解Blox如何工作 |
| [03-项目架构详解](./03-项目架构详解.md) | 本项目的具体实现、渲染链路 | 需要修改现有功能 |
| [04-模板与布局定制](./04-模板与布局定制.md) | 模板覆盖、Partial编写、变量 | 需要改页面结构 |
| [05-样式与主题定制](./05-样式与主题定制.md) | SCSS结构、主题配色、样式覆盖 | 需要改视觉样式 |

## 常用命令

```bash
# 本地开发（含草稿）
hugo server -D

# 本地开发（指定端口）
hugo server -p 8080

# 构建生产版本
hugo --minify

# 更新模块依赖
hugo mod get -u

# 清理缓存
hugo mod clean
```

## 相关链接

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [Hugo Blox 文档](https://docs.hugoblox.com/)
- [Hugo Blox GitHub](https://github.com/HugoBlox/hugo-blox-builder)
