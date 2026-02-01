# Hugo 开发常见问题 FAQ

本文档记录开发过程中遇到的常见问题及解决方案。

---

## 目录

- [URL 路径问题](#url-路径问题)
- [内容不显示](#内容不显示)
- [样式与布局问题](#样式与布局问题)
- [多语言问题](#多语言问题)
- [构建与部署问题](#构建与部署问题)

---

## URL 路径问题

### Q1: 链接 `/authors/xxx/` 无法访问，显示 404

**问题描述：**
在页面中写了链接 `/en/authors/wenqiang-lei/`，但点击后显示页面不存在。

**原因：**
Hugo 的 taxonomy（分类系统）会自动将复数形式的内容目录映射到单数形式的 URL：

| 内容文件夹 | 生成的 URL |
|-----------|-----------|
| `content/*/authors/` | `/author/xxx/` |
| `content/*/tags/` | `/tag/xxx/` |
| `content/*/categories/` | `/category/xxx/` |

**解决方案：**
在写链接时使用**单数形式**的路径：

```html
<!-- ❌ 错误 -->
<a href="/en/authors/wenqiang-lei/">Learn More</a>

<!-- ✅ 正确 -->
<a href="/en/author/wenqiang-lei/">Learn More</a>
```

**注意：** 不需要修改 `content/*/authors/` 文件夹名称，保持原样即可。

---

### Q2: 中英文页面 URL 路径差异

**问题描述：**
同一个作者，中英文 URL 不一致。

**原因：**
URL 路径由文件夹名决定：

| 文件位置 | 生成的 URL |
|---------|-----------|
| `content/en/authors/wenqiang-lei/` | `/en/author/wenqiang-lei/` |
| `content/zh/authors/雷文强/` | `/author/雷文强/` |

**解决方案：**
根据实际文件夹名称写对应的链接：

```html
<!-- 英文页面 -->
<a href="/en/author/wenqiang-lei/">Learn More</a>

<!-- 中文页面 -->
<a href="/author/雷文强/">了解更多</a>
```

---

### Q3: 如何查看实际生成的 URL

**方法 1：查看 `public/` 目录结构**

运行 `hugo` 命令后，检查 `public/` 目录：

```bash
ls public/en/author/
ls public/author/
```

**方法 2：使用 Hugo 开发服务器**

```bash
hugo server
```

然后在浏览器中直接访问测试。

---

## 内容不显示

### Q4: 新建的 Markdown 文件不显示

**可能原因：**

1. **Front Matter 缺失或格式错误**
   ```yaml
   ---
   title: "页面标题"
   date: 2024-01-01
   ---
   ```

2. **`draft: true` 设置**
   ```yaml
   draft: true  # 草稿状态，不会发布
   ```
   解决：改为 `draft: false` 或删除该行

3. **文件名错误**
   - Section 页面必须命名为 `_index.md`
   - 单页内容使用 `index.md`

4. **日期设置在未来**
   Hugo 默认不显示日期在未来的内容，使用 `--buildFuture` 参数可以预览：
   ```bash
   hugo server --buildFuture
   ```

---

### Q5: 作者信息不显示在论文/文章页面

**可能原因：**

1. **authors 字段不匹配**
   ```yaml
   # 论文 front matter
   authors:
     - Wenqiang Lei    # 必须与 authors 文件夹名或 title 完全匹配
   ```

2. **作者文件夹结构错误**
   ```
   content/en/authors/
   └── wenqiang-lei/
       └── _index.md    # 必须是 _index.md，不是 index.md
   ```

---

## 样式与布局问题

### Q6: 修改 CSS 后没有效果

**可能原因：**

1. **浏览器缓存**
   - 强制刷新：`Cmd + Shift + R` (Mac) 或 `Ctrl + Shift + R` (Windows)
   - 或打开开发者工具，勾选"禁用缓存"

2. **CSS 选择器优先级不够**
   ```scss
   // 使用更具体的选择器或 !important
   .my-class {
     color: red !important;
   }
   ```

3. **文件位置错误**
   自定义样式应放在 `assets/scss/custom.scss`

---

### Q7: 自定义模板不生效

**检查顺序（Hugo 查找模板的优先级）：**

1. `layouts/` — 项目根目录（最高优先级）
2. `themes/[theme]/layouts/` — 主题目录

**常见问题：**
- 模板文件名或路径不正确
- 模板语法错误（检查 Hugo 控制台输出）

---

## 多语言问题

### Q8: 语言切换后页面 404

**可能原因：**
对应语言版本的内容文件不存在。

**解决方案：**
确保 `content/en/` 和 `content/zh/` 下有相同结构的内容文件。

---

### Q9: 如何添加/修改菜单项

菜单配置文件位置：

```
config/_default/
├── menus.en.yaml    # 英文菜单
└── menus.zh.yaml    # 中文菜单
```

示例：

```yaml
main:
  - name: 首页
    url: /
    weight: 10
  - name: 团队
    url: /people/
    weight: 20
```

---

## 构建与部署问题

### Q10: `hugo` 命令报错 "module not found"

**解决方案：**

```bash
# 清除模块缓存并重新下载
hugo mod clean
hugo mod get -u
```

---

### Q11: Netlify 部署失败

**常见原因：**

1. **Hugo 版本不匹配**
   检查 `netlify.toml`：
   ```toml
   [build.environment]
     HUGO_VERSION = "0.139.0"  # 确保与本地版本一致
   ```

2. **Go 版本问题**
   ```toml
   [build.environment]
     GO_VERSION = "1.21"
   ```

---

### Q12: 本地预览正常，部署后样式丢失

**可能原因：**
`baseURL` 配置错误。

检查 `config/_default/hugo.yaml`：

```yaml
baseURL: 'https://your-domain.com/'  # 必须以 / 结尾
```

---

## 实用命令速查

```bash
# 启动开发服务器
hugo server

# 启动并显示草稿和未来日期内容
hugo server -D --buildFuture

# 构建生产版本
hugo --minify

# 清除缓存
hugo mod clean
rm -rf public/ resources/

# 更新主题模块
hugo mod get -u
```

---

## 参考资源

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [Hugo Blox 文档](https://docs.hugoblox.com/)
- [本项目架构详解](./03-项目架构详解.md)
