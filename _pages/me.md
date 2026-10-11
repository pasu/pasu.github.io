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

<div class="me-intro">
  <p class="me-eyebrow">Guowei / Peter · Beyond work</p>
  <h2 class="me-headline">Footprints &amp; memories.</h2>
  <p class="me-deck">Places I’ve been. Moments I’ve kept. A little of my life in this world.</p>
</div>

<p class="me-ai-note">This page was written and arranged with AI assistance. The illustration is AI-generated; the gallery photographs are my own.</p>

<figure class="me-hero">
  <img src="{{ '/assets/img/me/curiosity-and-journeys.png' | relative_url }}" alt="An illustrated canal path connecting a runner, geometric surfaces, light, a train, and distant mountains." width="1774" height="887" fetchpriority="high">
  <figcaption>An imagined landscape of light, geometry, running, and journeys.</figcaption>
</figure>

<nav class="me-contents" aria-label="On this page">
  <a href="#my-travel-map">Travel map</a>
  <a href="#photo-gallery">Photo gallery</a>
  <a href="#how-codex-sees-me">An outside perspective</a>
</nav>

## My travel map

From Delft, across Europe, and back to China. These are my recorded footprints—a way to remember where I’ve been, with room for the places still to come.

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

## Photo gallery

Some memories belong to a journey; others are close to home. Here are the moments I’ve chosen to keep. Hover over a photograph to read its memory in English, or use “Read memory” on touch screens. Select a photograph to see it in full.

<div id="me-photo-gallery" class="me-photo-gallery"></div>
<noscript>The interactive map and gallery require JavaScript. My recorded travels include Europe and China.</noscript>
<script src="{{ '/assets/js/personal-travel.js' | relative_url | bust_file_cache }}" defer></script>

## How Codex sees me

<aside class="me-perspective" markdown="1">

**A small portrait in words, written by AI.**

From Peter’s research and the details he has shared, I see curiosity expressed through both understanding and making. He works with light and geometry; his photographs leave room for landscapes, cities, and small everyday things.

This is my impression, based on the material available to me. Peter’s own memories—and whatever he chooses to add next—will tell more than I can.

</aside>

<div class="me-closing" markdown="1">

An ongoing collection, with room for more.

[See my research]({{ '/' | relative_url }}#publications) · [View my CV]({{ '/cv/' | relative_url }})

</div>

</div>
