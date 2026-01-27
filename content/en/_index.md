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
      css_class: "wdiasda"

  - block: hero
    content:
      title: |
        SCUNLP
      image:
        filename: 实验室合照.jpg
      text: |
        Main Research Directions of the LaboratoryFocuses on large models, intelligent agents, and natural language processing, with key efforts on foundational large model construction/application (general/vertical domains), active intelligent agent development for complex scenarios, and knowledge engineering for multimodal heterogeneous data.<br>
        The laboratory features a strong research atmosphere, providing timely, effective practical-oriented guidance and comprehensive research support for students. It maintains in-depth external cooperation with large central SOEs, leading Internet firms and top domestic/international research teams, offering abundant frontline internships. For talent cultivation, outstanding doctoral students have access to joint training at renowned overseas universities to broaden international academic horizons.
        
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