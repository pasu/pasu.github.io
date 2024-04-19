---
layout: page
permalink: /publications/
title: Publications
description:
paper_years: [2024]
thesis_years: [2020]
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">

<h2>Peer-reviewed</h2>

{% for y in page.paper_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<div class="publications">
<h2>Theses</h2>

{% for y in page.thesis_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f thesis -q @*[year={{y}}]* %}
{% endfor %}

</div>
