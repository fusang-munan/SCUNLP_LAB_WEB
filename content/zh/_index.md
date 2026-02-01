---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  
  # - block: collection
  #   content:
  #     title: Latest News
  #     subtitle:
  #     text:
  #     count: 5
  #     filters:
  #       author: ''
  #       category: ''
  #       exclude_featured: false
  #       publication_type: ''
  #       tag: ''
  #     offset: 0
  #     order: desc
  #     page_type: post
  #   design:
  #     view: card
  #     columns: '1'
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <div class="home-carousel-section">
          <div class="carousel-container">
            <div class="carousel-slides">
              <div class="carousel-slide active" data-position="center 40%">
                <img src="/media/川大初雪.jpg" alt="川大初雪" loading="eager">
              </div>
              <div class="carousel-slide" data-position="center 35%">
                <img src="/media/川大的秋.png" alt="川大的秋" loading="lazy">
              </div>
              <div class="carousel-slide" data-position="center 35%">
                <img src="/media/明德楼.jpg" alt="明德楼" loading="lazy">
              </div>
              <div class="carousel-slide" data-position="center 30%">
                <img src="/media/实验室合照.jpg" alt="实验室合照" loading="lazy">
              </div>
            </div>
            <div class="carousel-indicators">
              <button class="carousel-indicator active" data-slide="0" aria-label="Slide 1"></button>
              <button class="carousel-indicator" data-slide="1" aria-label="Slide 2"></button>
              <button class="carousel-indicator" data-slide="2" aria-label="Slide 3"></button>
              <button class="carousel-indicator" data-slide="3" aria-label="Slide 4"></button>
            </div>
            <button class="carousel-nav carousel-prev" aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button class="carousel-nav carousel-next" aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div class="carousel-overlay-content">
            <h1 class="carousel-title">
              <span style="color: #ffffff;">四川大学</span><br>
              <span style="color: #ffffff;">自然语言处理实验室</span><br>
              <span style="color: #fbb957">SCUNLP</span>
            </h1>
          </div>
        </div>
    design:
      columns: '1'
      css_class: carousel-block

  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <div class="dual-cards-section">
          <div class="dual-cards-container">
            <!-- 学术带头人卡片 -->
            <div class="info-card leader-card">
              <div class="card-left">
                <div class="card-image">
                  <img src="/media/leiwenqiang.png" alt="雷文强">
                </div>
                <a href="/author/雷文强/" class="card-link">了解更多</a>
              </div>
              <div class="card-right">
                <div class="card-label">SCUNLP ACADEMIC LEADER</div>
                <h2 class="card-title">学术带头人</h2>
                <div class="card-intro">
                  <p><strong>雷文强</strong>，正高级/博士生导师，国家级青年人才，新加坡国立大学博士。</p>
                  <p>研究方向包括自然语言处理、信息检索、人机协同、计算音乐、计算人文社科等领域。</p>
                  <p>在国际顶级会议和期刊上发表多篇高水平论文，担任 ACL 2023 对话领域主席。</p>
                </div>
              </div>
            </div>
            <!-- 课题组简介卡片 -->
            <div class="info-card group-card">
              <div class="card-left">
                <div class="card-image">
                  <img src="/media/实验室合照.jpg" alt="课题组">
                </div>
                <a href="/people/" class="card-link">查看团队</a>
              </div>
              <div class="card-right">
                <div class="card-label">SCUNLP GROUP INTRODUCTION</div>
                <h2 class="card-title">课题组简介</h2>
                <div class="card-intro">
                  <p>四川大学自然语言处理实验室主要研究方向包括大模型、智能体与自然语言处理，重点聚焦基础大模型构建及应用、主动式智能体构建及应用、多模态知识工程。</p>
                  <p>实验室科研氛围浓厚，为学生提供充足的科研支持和国际化培养机会。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      css_class: dual-cards-block
        
  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <div class="opensource-section">
          <div class="opensource-header">
            <span class="opensource-label">HIGHLIGHT DEMO</span>
            <h2 class="opensource-title">亮点工作</h2>
          </div>
          <div class="opensource-container">
            <!-- 项目1 -->
            <div class="opensource-card">
              <div class="opensource-image">
                <img src="/media/project-placeholder-1.svg" alt="项目1">
              </div>
              <div class="opensource-content">
                <h3 class="opensource-name">项目名称1</h3>
                <p class="opensource-desc">这是项目1的简介描述，包含项目的主要功能和特点。支持xxxx功能，采用xxxx技术实现。</p>
                <a href="#" class="opensource-link">More &gt;</a>
              </div>
            </div>
            <!-- 项目2 -->
            <div class="opensource-card">
              <div class="opensource-image">
                <img src="/media/project-placeholder-2.svg" alt="项目2">
              </div>
              <div class="opensource-content">
                <h3 class="opensource-name">项目名称2</h3>
                <p class="opensource-desc">这是项目2的简介描述，包含项目的主要功能和特点。支持xxxx功能，采用xxxx技术实现。</p>
                <a href="#" class="opensource-link">More &gt;</a>
              </div>
            </div>
            <!-- 项目3 -->
            <div class="opensource-card">
              <div class="opensource-image">
                <img src="/media/project-placeholder-3.svg" alt="项目3">
              </div>
              <div class="opensource-content">
                <h3 class="opensource-name">项目名称3</h3>
                <p class="opensource-desc">这是项目3的简介描述，包含项目的主要功能和特点。支持xxxx功能，采用xxxx技术实现。</p>
                <a href="#" class="opensource-link">More &gt;</a>
              </div>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      css_class: opensource-block

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="团队 →" %}}
    design:
      columns: '1'
---