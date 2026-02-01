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
                <img src="/media/川大初雪.jpg" alt="First Snow at SCU" loading="eager">
              </div>
              <div class="carousel-slide" data-position="center 35%">
                <img src="/media/川大的秋.png" alt="Autumn at SCU" loading="lazy">
              </div>
              <div class="carousel-slide" data-position="center 35%">
                <img src="/media/明德楼.jpg" alt="Mingde Building" loading="lazy">
              </div>
              <div class="carousel-slide" data-position="center 30%">
                <img src="/media/实验室合照.jpg" alt="Lab Group Photo" loading="lazy">
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
              <span style="color: #ffffff;">Sichuan University</span><br>
              <span style="color: #ffffff;">Natural Language Processing Laboratory</span><br>
              <span style="color: #fbb957;">SCUNLP</span>
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
            <div class="info-card leader-card" onclick="window.location.href='/en/author/wenqiang-lei/'">
              <div class="card-header">
                <div class="card-icon">
                  <img src="/media/leiwenqiang.png" alt="Wenqiang Lei">
                </div>
                <div class="card-title-section">
                  <div class="card-label">SCUNLP ACADEMIC LEADER</div>
                  <h2 class="card-main-title">Academic Leader <span class="dropdown-icon"></span></h2>
                </div>
              </div>
              <div class="card-content">
                <div class="leader-name">Wenqiang Lei</div>
                <div class="leader-title">Full Professor / Doctoral Supervisor, Sichuan University<br>National Youth Talent, Ph.D. from National University of Singapore</div>
                <p style="margin-top: 15px;">Research interests include Natural Language Processing, Information Retrieval, Human-AI Collaboration, Computational Music, and Computational Social Sciences & Humanities.</p>
              </div>
              <div class="card-footer">
                <div class="card-meta">Click for more details</div>
                <a href="/en/author/wenqiang-lei/" class="card-link" onclick="event.stopPropagation();">Learn More</a>
              </div>
            </div>
            <div class="info-card group-card" onclick="window.location.href='/en/people/'">
              <div class="card-header">
                <div class="card-icon">
                  <img src="/media/实验室合照.jpg" alt="Research Group">
                </div>
                <div class="card-title-section">
                  <div class="card-label">SCUNLP GROUP INTRODUCTION</div>
                  <h2 class="card-main-title">Group Introduction <span class="dropdown-icon"></span></h2>
                </div>
              </div>
              <div class="card-content">
                <p>The Natural Language Processing Laboratory at Sichuan University's main research directions include large models, intelligent agents, and natural language processing, with focus on foundational large model construction/application, active intelligent agent development for complex scenarios, and knowledge engineering for multimodal heterogeneous data.</p>
                <p>The lab features a strong research atmosphere and provides comprehensive support and international training opportunities for students.</p>
              </div>
              <div class="card-footer">
                <div class="card-meta">Explore our research team</div>
                <a href="/en/people/" class="card-link" onclick="event.stopPropagation();">View Team</a>
              </div>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      css_class: dual-cards-block
        
  - block: collection
    content:
      title: News & Announcements
      subtitle:
      text:
      count: 8
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: announcement
    design:
      view: list
      columns: '1'

  - block: collection
    content:
      title: Publications
      text: ""
      count: 10
      filters:
        folders:
          - publication
        publication_type: ''
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---