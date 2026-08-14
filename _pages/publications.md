---
layout: page
permalink: /publications/
title: publications
description: A selection of peer-reviewed research in protein machine learning and bioinformatics.
years: [2026, 2025, 2024, 2023, 2022]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<div class="publication-intro">
  <div class="eyebrow">RESEARCH OUTPUT</div>
  <p>For a complete and up-to-date record, visit <a href="https://scholar.google.com/citations?user=ZA93LOUAAAAJ&amp;hl=en" target="_blank" rel="noopener">Google Scholar</a> or <a href="https://orcid.org/0000-0002-0168-9730" target="_blank" rel="noopener">ORCID</a>.</p>
</div>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
