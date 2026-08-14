---
layout: page
permalink: /zh/notes/
title: 科研笔记
description: 蛋白质人工智能、生物信息学方法与科研软件的简短笔记和教程。
language: zh
english_url: /notes/
chinese_url: /zh/notes/
---

<div class="notes-intro">
  <div class="eyebrow">科研笔记</div>
  <p>记录蛋白质人工智能、生物信息学方法及科研软件的简短笔记、教程和实践示例。</p>
</div>

{%- assign note_items = site.notes | sort: "date" | reverse -%}
{% if note_items.size > 0 %}
<div class="notes-list">
  {% for item in note_items %}
  <article class="notes-list-item">
    <a href="{{ item.url | relative_url }}">
      <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%Y.%m.%d" }}</time>
      <div>
        <span>{{ item.zh_type | default: item.note_type | default: "科研笔记" }}</span>
        <h2>{{ item.zh_title | default: item.title }}</h2>
        {% if item.zh_description %}<p>{{ item.zh_description }}</p>{% elsif item.description %}<p>{{ item.description }}</p>{% endif %}
      </div>
      <i aria-hidden="true">↗</i>
    </a>
  </article>
  {% endfor %}
</div>
{% else %}
<div class="notes-empty">
  <p>科研笔记将在这里发布。</p>
</div>
{% endif %}
