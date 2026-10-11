---
layout: page
title: Me
permalink: /me/
description: Guowei (Peter) Lu — graphics researcher, engineer, runner, and curious traveller.
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/personal-story.css' | relative_url }}">

<div class="personal-story" markdown="1">

*This page was generated with AI assistance and edited by me. The illustration is AI-generated; the gallery photographs are my own.*

<div class="me-intro">
  <p class="me-eyebrow">A personal introduction · Guowei / Peter</p>
  <h2 class="me-headline">I imagine things.<br>I try to understand them.<br>Then I build.</h2>
  <p class="me-deck">Light, geometry, code, music, and the world outside the screen.</p>
</div>

<figure class="me-hero">
  <img src="{{ '/assets/img/me/curiosity-and-journeys.png' | relative_url }}" alt="An illustrated canal path connecting a runner, geometric surfaces, light, a train, and distant mountains." width="1774" height="887" fetchpriority="high">
  <figcaption>An AI-generated illustration of the interests that meet here: rendering, geometry, running, and travel.</figcaption>
</figure>

<nav class="me-contents" aria-label="On this page">
  <a href="#my-travel-map">Travel map</a>
  <a href="#photo-gallery">Photo gallery</a>
  <a href="#how-codex-sees-me">An outside perspective</a>
</nav>

## My travel map

I enjoy exploring new places. This map shows my visits across Europe and my return to China in summer 2026. Select a year or country to see more.

<div id="me-travel" data-travel-url="{{ '/assets/json/travel.json' | relative_url | bust_file_cache }}" data-map-url="{{ '/assets/json/world-countries.geojson' | relative_url | bust_file_cache }}" data-base-url="{{ '/' | relative_url }}">
  <div class="me-map-controls">
    <label for="me-travel-year">Journey <select id="me-travel-year"><option value="all">All years</option></select></label>
    <label for="me-map-view">Map <select id="me-map-view"><option value="world">World</option><option value="europe">Europe</option></select></label>
  </div>
  <p id="me-travel-summary" aria-live="polite">Loading travel history…</p>
  <svg id="me-travel-map" viewBox="0 0 900 620" role="group" aria-label="Visited countries map"></svg>
  <p class="me-map-legend"><span class="me-legend-visited"></span> Visited <span class="me-legend-transit"></span> Transit · Small countries use location markers.</p>
  <div id="me-country-list" class="me-country-list" aria-label="Countries in the selected journey"></div>
  <p id="me-country-detail" class="me-country-detail" aria-live="polite"></p>
  <p class="me-map-credit">Country outlines: <a href="https://www.naturalearthdata.com/">Natural Earth</a>, public domain. Overview boundaries are simplified.</p>
</div>

#### Photo gallery

My photographs capture travel and everyday moments—from European cities and Alpine landscapes to Beijing and life in the Netherlands. This gallery is independent of the map’s year filter. Select a photo to open the full image.

<div id="me-photo-gallery" class="me-photo-gallery"></div>
<noscript>The interactive map and gallery require JavaScript. My travels have taken me through central Europe, the Swiss Alps and Italy, and Scandinavia.</noscript>
<script src="{{ '/assets/js/personal-travel.js' | relative_url | bust_file_cache }}" defer></script>

## How Codex sees me

<aside class="me-perspective" markdown="1">

**An outside perspective, based on Peter’s research, earlier writing, and the personal details he has shared.**

My impression of Peter is of someone who wants to look beneath the surface. The technical notes he previously wrote suggest patience with difficult ideas, and his rendering research and engineering background connect that curiosity with implementation.

The strength that stands out to me is his movement between abstract and concrete thinking: equations and images, research and tools, technical questions and personal reflections. His interest in music and the photographs from his travels also give a sense of the life beyond his technical work.

He has acknowledged limited time, unfinished learning, and the pull between work and family. To me, that makes the portrait more human. The most useful thing to remember is the combination: a researcher and builder who also wants to remain a curious person, a runner, a listener, a traveller, and a parent.

These are interpretations of the available material, rather than verified personality traits or a complete account of his life.

</aside>

<div class="me-closing" markdown="1">

**What I hope you remember:** I care about understanding, making, and sharing—and about staying curious enough to keep growing outside my work.

[See my research]({{ '/' | relative_url }}#publications) · [View my CV]({{ '/cv/' | relative_url }})

</div>

</div>
