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
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: 川大初雪.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: wdiasda

  - block: hero
    content:
      title: |
        <div style="text-align:center;">
        四川大学<br>自然语言处理实验室
        </div>
      image:
        filename: 实验室合照.jpg
      # text: |
      #   <br>
        
      #   科研氛围浓厚，活力强，能提供即时、有效的并且hands on的科研指导，能在各方面为学生科研提供充足支持。
      #   本组对外合作密切，与大型央国企、头部互联网企业及优质国内外大组有长期实质性合作，学生参与一线实习机会多。优秀博士生几乎都能送往海外高校进行联合培养。
      text: |
        <div style="text-align: center;">
        本实验室主要研究方向：包括大模型、智能体与自然语言处理，重点聚焦面向通用与垂直领域的基础大模型构建及应用、面向复杂场景的主动式智能体构建及应用、面向多模态异构数据的知识工程。<br>
        本实验室科研氛围浓厚，始终为学生提供即时、有效的实践导向型科研指导，在科研项目开展、学术能力提升、资源对接等各方面为学生科研工作提供充足保障。实验室对外合作网络广泛且深入，与大型央国企、头部互联网企业及国内外优质科研团队建立了长期实质性合作关系，为学生搭建了丰富的一线科研实习平台，实习机会充足。在人才培养方面，实验室高度重视国际化培养，优秀博士生有机会被送往海外知名高校开展联合培养，助力拓宽国际学术视野，培育顶尖创新人才。
        </div>
        
  - block: collection
    content:
      title: 动态与公告
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
      title: 论文
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
        {{% cta cta_link="./people/" cta_text="团队 →" %}}
    design:
      columns: '1'
---