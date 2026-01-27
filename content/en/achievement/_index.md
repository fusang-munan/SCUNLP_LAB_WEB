---
# Leave the homepage title empty to use the site title
title: Achievement
date: 2022-10-24
type: landing

sections:
  - block: collection
    content:
      title: Paper
      text: ""
      count: 100
      filters:
        folders:
          - publication
      offset: 0
      order: desc
    design:
      view: citation
      columns: '1'
  
  # - block: collection
  #   id: section-1
  #   content:
  #     title: Section 1
  #     subtitle: A subtitle
  #     text: Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code!
  #     # Display content from the `content/post/` folder
  #     filters:
  #       folders:
  #         - post
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     # Choose your content listing view - here we use the `showcase` view
  #     view: showcase
  #     # For the Showcase view, do you want to flip alternate rows?
  #     flip_alt_rows: true

  # - block: collection
  #   content:
  #     title: Horizontal Project
  #     text: ""
  #     count: 5
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     view: card
  #     columns: '1'

---