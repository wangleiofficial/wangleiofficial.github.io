---
layout: page
permalink: /notes/
title: research notes
description: Short notes, tutorials, and practical examples from my research.
language: en
english_url: /notes/
chinese_url: /zh/notes/
nav: true
nav_order: 4
---

<div class="notes-intro">
  <div class="eyebrow">RESEARCH NOTES</div>
  <p>Short notes, tutorials, and practical examples on protein AI, bioinformatics methods, and research software.</p>
</div>

{%- assign note_items = site.notes | sort: "date" | reverse -%}
{% if note_items.size > 0 %}
<div class="notes-list">
  {% for item in note_items %}
  <article class="notes-list-item">
    <a href="{{ item.url | relative_url }}">
      <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%Y.%m.%d" }}</time>
      <div>
        <span>{{ item.note_type | default: "Research note" }}</span>
        <h2>{{ item.title }}</h2>
        {% if item.description %}<p>{{ item.description }}</p>{% endif %}
      </div>
      <i aria-hidden="true">↗</i>
    </a>
  </article>
  {% endfor %}
</div>
{% else %}
<div class="notes-empty">
  <p>Notes will appear here soon.</p>
</div>
{% endif %}
