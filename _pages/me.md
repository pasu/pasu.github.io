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
  <p class="me-eyebrow">A personal introduction · Guowei / Peter</p>
  <h2 class="me-headline">I imagine things.<br>I try to understand them.<br>Then I build.</h2>
  <p class="me-deck">Light, geometry, code, music, and the world outside the screen.</p>
</div>

<figure class="me-hero">
  <img src="{{ '/assets/img/me/curiosity-and-journeys.png' | relative_url }}" alt="An illustrated canal path connecting a runner, geometric surfaces, light, a train, and distant mountains." width="1774" height="887" fetchpriority="high">
  <figcaption>An AI-generated illustration of the interests that meet here: rendering, geometry, running, and travel.</figcaption>
</figure>

<nav class="me-contents" aria-label="On this page">
  <a href="#in-a-few-words">The short version</a>
  <a href="#the-longer-story">The longer story</a>
  <a href="#my-travel-map">Travel map</a>
  <a href="#photo-gallery">Photo gallery</a>
  <a href="#how-codex-sees-me">An outside perspective</a>
</nav>

## In a few words

I’m **Guowei Lu**, also known as **Peter**. I work in computer graphics, with a background in research and 3D GIS engineering. I’m drawn to the meeting point of mathematics, code, and images: how light behaves, how surfaces are represented, and how an idea becomes something we can see.

Outside that work, I run while listening to music and make room for travel and family. I want to understand difficult things deeply, build things that are useful, and keep enough curiosity for the world beyond my work.

## The longer story

### Light, geometry, and making ideas visible

My academic path brought me to Utrecht University, where I completed an MSc with honours in Computer Science, in the Game and Media Technology programme, in summer 2020. In June 2022, I joined the Computer Graphics and Visualization group at TU Delft as a PhD candidate.

My research interests include real-time rendering, realistic materials, global illumination, and virtual reality. Differentiable and neural rendering are also areas I want to understand better. A recurring question behind these interests is how to make a convincing image while respecting the practical limits of computation.

My professional background also includes working in SuperMap’s R&D department as a 3D GIS engineer, on virtual-earth and mapping products. That experience gives a practical dimension to my interest in graphics: images and spatial models can help people explore and understand real places.

### What I contribute

Research is collaborative. Two milestones in my work with colleagues are **Sheared Polygonal Texture Filtering**, presented at Graphics Interface 2024, and **Iterative Lightmap Update for Scene Editing**, accepted to Pacific Graphics 2025.

The texture-filtering work explores how to filter textures accurately over quadrilateral footprints while keeping computation efficient. Its applications include normal filtering, soft shadow mapping, and glint rendering. Our paper received the **Best Computer Graphics Student Paper award at GI 2024**. I value this as a concrete result of careful work with other people.

My learning has also taken me through discrete differential geometry, exterior calculus, rendering, 3D GIS, and explainable AI. I have explored these subjects through technical notes, using explanation as a way to check my own understanding. That work is part of my background, even as this website now focuses on my research and personal story.

For the formal record, see my [publications]({{ '/' | relative_url }}#publications) and [CV]({{ '/cv/' | relative_url }}).

### The abilities I keep developing

My work sits across several kinds of thinking: mathematical reasoning, implementation, visual judgement, and explanation. I enjoy the process of moving between them. A mathematical expression can become an algorithm; an image can reveal a problem in that algorithm; writing can expose something I have not yet understood.

I also like connections that reach outside the immediate technical task. Ideas about dimensions, frequency, and representation have given me ways to think about music, emotion, and difficult questions. Those connections are ways to explore rather than proofs that everything has a mathematical answer.

I want to keep improving my foundations in mathematics, physics, and optimisation. I’m interested in AI as something that can become useful in a real workflow: a tool that helps people learn, create, or solve a problem. There is plenty I still want to learn.

### Running, music, and a different rhythm

“I imagine things and render. I listen to music while running.” That small line on my homepage captures two sides of me surprisingly well.

Running and music belong together in my life. Music also gives me a way to recognise feelings that are difficult to explain directly. I wonder whether a song can translate something complicated inside us into a form we can hear and share.

I want room for reading beyond technical subjects, too. Books I have wanted to explore include *Other Rivers*, *A Brief History of Intelligence*, and *A Biography of the Pixel*. They are reading interests, not a list of books I claim to have finished.

### Travel: curiosity outside the screen

Travel is part of my life beyond research. Over three summers, my journeys have taken me from Delft through cities in central Europe, into the Swiss Alps and Italy, and north to Scandinavia. Trains connect much of this story: a trip becomes a sequence of places rather than a single destination.

In summer 2026, I also went back to China.

#### My travel map

The countries in my 2024–2026 travel history, including Belgium and my return to China in summer 2026. Choose a year, then select a highlighted country or its name to explore the destinations. Switch to the Europe view for a closer look at my European visits.

<div id="me-travel" data-travel-url="{{ '/assets/json/travel.json' | relative_url | bust_file_cache }}" data-map-url="{{ '/assets/json/world-countries.geojson' | relative_url | bust_file_cache }}" data-base-url="{{ '/' | relative_url }}">
  <div class="me-map-controls">
    <label for="me-travel-year">Journey <select id="me-travel-year"><option value="all">All years</option></select></label>
    <label for="me-map-view">Map <select id="me-map-view"><option value="world">World</option><option value="europe">Europe</option></select></label>
  </div>
  <p id="me-travel-summary" aria-live="polite">Loading travel history…</p>
  <svg id="me-travel-map" viewBox="0 0 900 620" role="group" aria-label="Visited countries map"></svg>
  <p class="me-map-legend"><span class="me-legend-visited"></span> Visited <span class="me-legend-transit"></span> Transit · Small countries use location markers.</p>
  <div id="me-country-list" class="me-country-list" aria-label="Countries in the selected journey"></div>
  <p id="me-country-detail" class="me-country-detail" aria-live="polite">Select a country to see its destinations.</p>
  <p class="me-map-credit">Country outlines: <a href="https://www.naturalearthdata.com/">Natural Earth</a>, public domain. Overview boundaries are simplified.</p>
</div>

#### Photo gallery

My photographs capture travel and everyday moments—from European cities and Alpine landscapes to Beijing and life in the Netherlands. This gallery is independent of the map’s year filter. Select a photo to open the full image.

<div id="me-photo-gallery" class="me-photo-gallery"></div>
<noscript>The interactive map and gallery require JavaScript. My travels have taken me through central Europe, the Swiss Alps and Italy, and Scandinavia.</noscript>
<script src="{{ '/assets/js/personal-travel.js' | relative_url | bust_file_cache }}" defer></script>

### A life with room for other people

I want a better balance between work and life, and more time for my child’s education. That matters to the picture of who I am. Research takes a lot of attention, but so do the people and experiences I want to be present for.

I care about useful work, learning, and creativity. I also want a life in which travel, running, music, reading, and family are given real time. This page is a way of keeping those priorities visible alongside academic milestones.

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
