# Personal “Me” page — portable Codex handoff

Prepared 10 October 2026 for Guowei (Peter) Lu. This file is the handoff to continue the work in another Codex chat or on another computer. The existing template README.md is preserved.

## Ongoing status and illustration updates

Peter requested this workflow on 10 October 2026: when he asks Codex to update his status, save the new information in this file and update the personal illustration to reflect his evolving life and interests.

For each future status update:

1. Read this handoff and the current canonical page. Use the new information Peter supplies; do not invent missing details or infer completed milestones from plans.
2. Update relevant page prose and travel/gallery JSON when applicable. Save a dated status-history entry in this README summarising what changed and its source. Preserve earlier entries as history, while making the current page reflect the latest confirmed status.
3. Review the existing symbolic illustration and its generation prompt. Generate or edit the illustration to reflect meaningful changes in Peter's work, interests, travel, or life priorities. If the update has no meaningful visual consequence, retain the image and record why. Follow the applicable imagegen skill and use the built-in image tool; inspect the current image before editing it.
4. Save a refreshed illustration as a new version, such as `assets/img/me/curiosity-and-journeys-2026-11-01.png`, using the actual update date and a sequence suffix when needed. Preserve previous versions. Update the page's image path, actual dimensions, alt text, and caption. Keep it clearly labelled as an AI-generated symbolic illustration, rather than a likeness or documentary photograph.
5. Record the exact new prompt, generation date, asset path, and brief explanation of the visual changes in this README. The original prompt below remains historical provenance; clearly identify the current image and prompt when a newer version exists.
6. Refresh recovery snapshots, verify referenced files and data, and run available appropriate checks. Save locally; deployment follows the user's publishing instructions for that session.

### Status history

- **10 October 2026 — personal page after blog removal:** Revised the short biography, contributions, music/family prose, and Codex perspective to describe the current research-and-personal site. Past technical notes remain historical background; no wording implies they are still published here. The existing illustration remains appropriate because its subjects—graphics, geometry, running, and travel—are unchanged by removing the blog.

- **10 October 2026 — baseline:** Personal page based on Peter's existing website and writing; travel history for 2024–2026 supplied directly by Peter; three personal 2025 photographs added from Venice, Grindelwald, and Montreux. Current symbolic illustration: `assets/img/me/curiosity-and-journeys.png`; exact original prompt is in the illustration provenance section below.
- **10 October 2026 — maintenance preference:** Peter asked for future status updates to be saved in this file and reflected in updated versions of the personal illustration. No new biographical status was supplied with this preference, so the existing illustration remains current.

## Intent and voice

Peter requested a new page on https://pasu.github.io/ that is more personal than a resume: short and full introductions, hobbies, talents, contributions, travel, and Codex's opinion of him, with imagery and no arbitrary length limit. Write warm, concrete prose. Keep personal life visible alongside professional work. Avoid inflated praise, invented memories, and unsupported achievements.

Earlier discussions were not available in the creation chat. The draft therefore uses the local repository, the live homepage, and clearly labelled impressions. Do not imply access to earlier conversations. First-person prose is a proposed self-description for Peter to edit; the “How Codex sees me” section is explicitly an interpretation.

## Files and integration

**10 October 2026 — blog retirement:** Peter removed the `_posts` content and associated images and requested a clean site without the Blog page. `_pages/blog.md` was removed; homepage latest-posts markup and personal-page/dropdown blog links were removed. Pagination, latest posts, related blog posts, and archives are disabled. `_posts/` and `cn/` are excluded from Jekyll output, preserving any remaining archived material or Chinese source files without publishing pages with missing images. Historical references below to the deleted posts are provenance only; recover them from Git history if needed. Do not restore the blog unless Peter requests it.

- `_pages/me.md`: canonical page source; Jekyll/al-folio page layout, permalink `/me/`, navbar title `Me`, order 6.
- `assets/css/personal-story.css`: scoped styling; uses existing theme variables for light/dark modes, responsive text and imagery, keyboard focus indicators.
- `assets/img/me/curiosity-and-journeys.png`: original AI-generated symbolic illustration, 1774 × 887 pixels. It is not a portrait or a photograph of a completed trip.
- `_pages/about.md`: a link to `/me/` added at the end; existing homepage retained.
- `README_ME.md`: this handoff and recovery snapshots. Keep it excluded from Jekyll output.

The page includes a short biography, full story, research contributions, developing abilities, running/music/reading, travel, family priorities, and an outside perspective. It links to the existing publications and CV. The travel map and gallery use a small vanilla JavaScript file; no additional packages are required.

## JSON travel map and photo gallery

Added on 10 October 2026:

- `assets/json/travel.json` is the editable source for countries and gallery photos.
- `assets/js/personal-travel.js` renders the map, year/view filters, accessible country buttons, and gallery.
- `assets/json/world-countries.geojson` stores simplified Natural Earth outlines locally (public domain), so map rendering needs no third-party map service or key. Source: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson. Only `ADM0_A3` (renamed `iso`), `NAME_EN`/`NAME` (renamed `name`), and geometry were retained.
- `purgecss.config.js` safelists `me-` classes because some classes are generated at runtime. Preserve this setting when changing the map.
- There are 13 visited countries, including the Netherlands, and one transit country (Belgium). No unconfirmed China visit or alternate 2026 route was added. Vatican City uses a location marker because the 110m map omits microstates.
- A country's `places` are lifetime entries across the recorded years; the year filter selects countries, rather than individual destinations. The detail panel explains this.
- The gallery opens with Peter's three local 2025 travel photos from Venice, Grindelwald, and Montreux, added on 10 October 2026. Original filenames are preserved exactly, including `italty_venice_01.jpg` and the capital M in `switzerland_Montreux_01.jpg`; do not change JSON casing independently of filenames. JPG is supported and no image conversion is needed. Captions and alt text were written after visually inspecting the photographs.
- Three credited Wikimedia destination reference photos remain after the personal photos, one for each journey year. They are not Peter's photos. Reference images are hosted remotely and require network access; a source link remains if an image fails. Visible captions distinguish personal/reference images and provide photographer, source, license where applicable, and display-crop disclosure.

### Add countries or personal photographs

Add a country object to `countries` in travel.json. Use a three-letter country code, a display name, `status` (`visited` or `transit`), numeric `years`, `places`, and `[longitude, latitude]` coordinates. The Europe/world selector supports countries beyond Europe. Verify that the map feature's code matches; omitted microstates still receive a marker.

To add your own photographs, copy them into `assets/img/me/travel/`, then add entries to `photos` in `assets/json/travel.json`. The folder is tracked using `.gitkeep` until photographs are added.

Use the filename format **`country_city_01.png`**, with lowercase ASCII names and a two-digit sequence number. For multiword names use hyphens within the country or city, reserving underscores for the three fields. Examples:

| Destination | Filename |
| --- | --- |
| Hamburg | `germany_hamburg_01.png` |
| Düsseldorf | `germany_dusseldorf_01.png` |
| Prague | `czechia_prague_01.png` |
| Vienna | `austria_vienna_01.png` |
| Disneyland Paris | `france_disneyland-paris_01.png` |
| Grindelwald | `switzerland_grindelwald_01.png` |
| Venice | `italy_venice_01.png` |
| Vatican City | `vatican-city_vatican-city_01.png` |
| Bergen | `norway_bergen_01.png` |
| Stockholm | `sweden_stockholm_01.png` |
| Copenhagen | `denmark_copenhagen_01.png` |

Continue numbering (`02`, `03`, etc.) for more photos from the same destination. Keep the trip year in the JSON entry. A `.png` file must actually be PNG format; convert JPEG/HEIC photos before using that extension. Adding files alone does not automatically populate the gallery: add a JSON entry for each selected photo with its title, year, alt text, and credit.

Example gallery entry:

```json
{
  "src": "assets/img/me/travel/norway_bergen_01.png",
  "title": "Bergen · my memory of the waterfront",
  "year": 2026,
  "alt": "Describe what is actually visible in this photograph.",
  "kind": "My travel photograph",
  "credit": "Guowei Lu",
  "source": "assets/img/me/travel/norway_bergen_01.png"
}
```

The example is documentation only; the file does not exist yet. Personal photos need no third-party license fields. Resolve local `src` and `source` paths against the site's base URL. For sourced photos, preserve `credit`, `source`, `license`, and `licenseUrl` and verify the license before adding the image. Do not invent personal memories or represent reference photos as Peter's own.

### Deployment answer

Pushing these changes to `main` or `master` triggers the existing Deploy site workflow. A successful Jekyll build creates `_site/me/index.html`; the deploy action publishes `_site` to its configured GitHub Pages deployment branch (default `gh-pages`). If repository Pages settings serve that branch, the public URL is https://pasu.github.io/me/. A push to another branch alone does not trigger this push deployment. Check GitHub Actions for build/deploy success and repository Pages settings if the URL does not appear. No push was performed in the creation task.

## Evidence and boundaries

| Detail | Source | How to use it |
| --- | --- | --- |
| Guowei Lu / Peter; graphics interests | `_pages/about.md`, `_config.yml`, live homepage | Supported identity and interests |
| MSc with honours, Utrecht, summer 2020 | `_pages/about.md` | Confirmed historical detail |
| Joined TU Delft CGV as PhD candidate June 2022 | `_news/announcement_1.md`, live homepage | Use historical wording; reconfirm current status before updating |
| SuperMap R&D, 3D GIS, virtual earth/maps | `_pages/about.md` | Do not invent employment dates or responsibilities |
| Sheared Polygonal Texture Filtering, GI 2024, collaborators and method | `_bibliography/papers.bib` | Credit collaborative work; do not invent citation metrics |
| GI 2024 Best Computer Graphics Student Paper award | `_news/announcement_3.md`, live homepage | Preserve exact award scope |
| Iterative Lightmap Update for Scene Editing accepted PG 2025 | `_news/announcement_4.md`, live homepage | Acceptance is supported; no unsupported technical outcomes |
| Running with music | Homepage subtitle | Supported hobby; no race records or mileage known |
| Geometry, calculus, rendering, GIS and XAI learning notes | `_posts/` | Evidence of interests and sustained writing, not proof of mastery |
| Music/emotion, learning goals, tools, books, work/life and child's education | `_posts/2025-01-03-2025_Reflection.md` | Books are intended reading; avoid publishing child's name or identifying details |
| Travel history, 2024–2026 | Peter's direct reply on 10 October 2026 with all three itineraries | Use the supplied routes as travel history; 2026 follows the northern route. Optional activities remain unconfirmed |
| Depth, patience, connecting abstract and practical ideas | Codex's reading of the above | Opinion; explicitly identify it as such |

Live source checked: https://pasu.github.io/. Do not republish hotel bookings, exact family itineraries, costs, addresses, or private contact information from planning notes.

## Questions for future refinements

Peter answered the travel question on 10 October 2026 by supplying itineraries for 2024, 2025, and 2026, and later supplied three personal travel photographs. The page now describes those routes as travel history and includes his photographs. He has not yet supplied specific travel memories or further privacy preferences. Invite corrections naturally; do not block routine page maintenance. Useful additions include a favourite travel memory, more photographs with captions, running experiences, music that matters to him, and his current research/employment status. Do not turn suggested topics into asserted facts.

### Travel context to preserve

- **2024, 3–19 August:** Delft → Hamburg → Berlin → Dresden → Prague → Vienna → Salzburg → Cologne → Delft.
- **2025, 9–29 August:** Delft, via Rotterdam/Antwerp/Brussels → Disneyland Paris → Lyon → Geneva → Lausanne → Montreux → GoldenPass/Interlaken → Grindelwald → Milan → Venice → Florence → Pisa → Rome and Vatican City → Amsterdam by air.
- **2026, 17 July–2 August:** Delft → Düsseldorf → Munich, with Garmisch-Partenkirchen day trip → Bratislava → Budapest → Bergen → Oslo → Stockholm → Copenhagen → Delft.
- The older Bucharest/Sofia/Istanbul itinerary is an alternative plan, not the supplied 2026 travel history.
- Do not assert that Peter completed particular hikes, visited every listed attraction, saw The Last Supper, or attended activities labelled optional/conditional. Train times and booking URLs are unnecessary on the biography page.

## Continue on another computer

1. Copy this file and open it in Codex. Ideally clone/copy the full `pasu.github.io` repository as well.
2. Ask: “Read README_ME.md and maintain my personal /me/ page in this Jekyll project. Preserve factual boundaries and my existing work. Review the canonical source before editing.”
3. If only this README is available, recover the page and CSS from the snapshots below into an existing clone. Copy the PNG from the old computer, or regenerate it using the prompt below. A Markdown handoff cannot carry the binary image by itself.
4. Keep `_pages/me.md` canonical. Refresh the recovery snapshots in this handoff after significant revisions.
5. Read any applicable AGENTS.md. Inspect `git status` and preserve unrelated changes. Do not overwrite the template README or travel notes.

## Preview, verify, and publish

This is the existing Jekyll/al-folio GitHub Pages project, not a new Sites-hosted site. Use its Gemfile and INSTALL.md. The repository workflow uses Ruby 3.2.2.

```sh
bundle install
bundle exec jekyll serve
# Open http://localhost:4000/me/ and the homepage.
JEKYLL_ENV=production bundle exec jekyll build --lsi
```

On PowerShell, set `$env:JEKYLL_ENV = 'production'` before the build command. Use the normal project dependency setup on the destination computer.

Verify desktop/mobile layouts, light/dark modes, the Me navbar link, homepage link, section anchors, local image, and publications/CV links. Inspect all prose with Peter when adding new biographical details.

The configured `.github/workflows/deploy.yml` builds on pushes to main/master and deploys `_site`. The creation task makes local source changes only; it does not claim the new page is already online. Review the intended diff before committing/pushing. Preserve unrelated uncommitted work.

Initial verification: source and asset checks plus `git diff --check`. Full Jekyll build and browser rendering require a Ruby/Bundler environment; neither Ruby nor Bundler was available on the creation host. Do not treat source checks as a successful rendered build.

## Illustration provenance and exact generation prompt

Generated using the built-in image_gen tool on 10 October 2026; saved in the repository at `assets/img/me/curiosity-and-journeys.png`. No reference portrait was used. Preserve the visible AI-illustration caption and descriptive alt text. An authentic existing profile photo is available at `assets/img/prof_pic.jpg`; no new likeness of Peter was invented.

> Use case: illustration-story. Asset type: wide editorial illustration for Guowei (Peter) Lu's personal About Me webpage. Primary request: a thoughtful visual metaphor connecting computer graphics research, geometry, running with music, and travel. Scene: a continuous gently winding path beside a Dutch canal becomes a luminous ray passing through a translucent prism and a wireframe surface; a small anonymous runner with headphones moves along the path, with a distant train, mountains and city silhouettes suggesting journeys. Style: refined contemporary editorial illustration, subtle paper texture, precise geometric linework blended with soft painted light, warm cream, deep teal, muted coral and golden sunlight. Wide landscape composition, visually coherent and calm, no text, no lettering, no logos, no watermark. No recognizable face; this is a symbolic illustration, not a portrait or documentary photograph. Avoid clutter and travel destination claims.

## Recovery snapshots

The following snapshots reproduce the source updated with Peter's travel history on 10 October 2026. In an existing checkout, the actual page and CSS take precedence if newer.

### _pages/me.md

```liquid
---
layout: page
title: Me
permalink: /me/
description: Guowei (Peter) Lu — graphics researcher, engineer, runner, and curious traveller.
nav: true
nav_order: 6
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

For the formal record, see my [publications]({{ '/publications/' | relative_url }}) and [CV]({{ '/cv/' | relative_url }}).

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

#### 2024 · A summer through central Europe

In August 2024, I travelled from **Delft to Hamburg, Berlin, Dresden, Prague, Vienna, Salzburg, and Cologne**, before returning to Delft. The journey connected Germany, Czechia, and Austria over a little more than two weeks.

**The route:** Delft → Hamburg → Berlin → Dresden → Prague → Vienna → Salzburg → Cologne → Delft.

#### 2025 · From Disneyland to the Alps and Italy

In August 2025, my journey began with **Disneyland Paris**, then continued through **Lyon, Geneva, Lausanne, and Montreux**. From Montreux, the route followed the **GoldenPass to Interlaken**, then continued to **Grindelwald** in the Swiss Alps.

The second half took me through **Milan, Venice, Florence, and Pisa**, ending in **Rome and Vatican City** before a flight back to Amsterdam. This trip brought very different settings into one journey: a theme park, lakes and mountains, and Italian cities.

**The route:** Delft → Disneyland Paris → Lyon → Geneva → Lausanne → Montreux → Interlaken → Grindelwald → Milan → Venice → Florence → Pisa → Rome and Vatican City → Amsterdam.

#### 2026 · Central Europe, then north

In July and August 2026, I travelled from **Delft through Düsseldorf, Munich, Bratislava, and Budapest**, including a day trip to **Garmisch-Partenkirchen**. From Budapest, the journey turned north to **Bergen, Oslo, Stockholm, and Copenhagen**, before returning to Delft.

**The route:** Delft → Düsseldorf → Munich, with Garmisch-Partenkirchen → Bratislava → Budapest → Bergen → Oslo → Stockholm → Copenhagen → Delft.

These routes tell you where I have been. I also want this space to hold what I remember: a place, a conversation, an unexpected moment, or a photograph with a story behind it. Those details will make the travel story more personal than a list of stops.

#### My travel map

The countries in my 2024–2026 travel history, including the Netherlands as my starting point. Belgium is shown separately as a transit stop. Choose a year, then select a highlighted country or its name to explore the destinations.

<div id="me-travel" data-travel-url="{{ '/assets/json/travel.json' | relative_url }}" data-map-url="{{ '/assets/json/world-countries.geojson' | relative_url }}" data-base-url="{{ '/' | relative_url }}">
  <div class="me-map-controls">
    <label for="me-travel-year">Journey <select id="me-travel-year"><option value="all">All years</option></select></label>
    <label for="me-map-view">Map <select id="me-map-view"><option value="europe">Europe</option><option value="world">World</option></select></label>
  </div>
  <p id="me-travel-summary" aria-live="polite">Loading travel history…</p>
  <svg id="me-travel-map" viewBox="0 0 900 620" role="group" aria-label="Visited countries map"></svg>
  <p class="me-map-legend"><span class="me-legend-visited"></span> Visited <span class="me-legend-transit"></span> Transit · Small countries use location markers.</p>
  <div id="me-country-list" class="me-country-list" aria-label="Countries in the selected journey"></div>
  <p id="me-country-detail" class="me-country-detail" aria-live="polite">Select a country to see its destinations.</p>
  <p class="me-map-credit">Country outlines: <a href="https://www.naturalearthdata.com/">Natural Earth</a>, public domain. Overview boundaries are simplified.</p>
</div>

#### Photo gallery

My photographs from Venice, Grindelwald, and Montreux bring a few moments from my 2025 journey into this page. The gallery also includes credited destination reference images, labelled separately. Select a photo to open the full image.

<div id="me-photo-gallery" class="me-photo-gallery"></div>
<noscript>The interactive map and gallery require JavaScript. My travel routes are listed above.</noscript>
<script src="{{ '/assets/js/personal-travel.js' | relative_url }}" defer></script>

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

[See my research]({{ '/publications/' | relative_url }}) · [View my CV]({{ '/cv/' | relative_url }})

</div>

</div>

```

### assets/css/personal-story.css

```css
.personal-story { --me-accent: var(--global-theme-color); line-height: 1.8; }
.personal-story .me-intro { padding: 1.2rem 0 1.6rem; }
.personal-story .me-eyebrow { font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; color: var(--me-accent); }
.personal-story .me-headline { font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.16; letter-spacing: -.035em; margin: .7rem 0 1rem; font-weight: 700; }
.personal-story .me-deck { font-size: 1.12rem; color: var(--global-text-color-light); }
.personal-story .me-hero { margin: 0 0 1.7rem; }
.personal-story .me-hero img { width: 100%; height: auto; display: block; border-radius: 1rem; }
.personal-story figcaption { margin-top: .7rem; color: var(--global-text-color-light); font-size: .8rem; line-height: 1.5; }
.personal-story .me-contents { display: flex; flex-wrap: wrap; gap: .6rem 1.3rem; padding: 1rem 0; border-top: 1px solid var(--global-divider-color); border-bottom: 1px solid var(--global-divider-color); font-size: .9rem; }
.personal-story h2 { margin-top: 2.8rem; scroll-margin-top: 6rem; }
.personal-story h3 { margin-top: 2rem; font-size: 1.35rem; }
.personal-story .me-perspective { border-left: 3px solid var(--me-accent); padding: .4rem 0 .4rem 1.4rem; margin: 1.5rem 0 2rem; }
.personal-story .me-perspective p:last-child { font-size: .85rem; color: var(--global-text-color-light); }
.personal-story .me-closing { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--global-divider-color); }
.personal-story a:focus-visible { outline: 2px solid var(--me-accent); outline-offset: 4px; }
@media (max-width: 480px) { .personal-story .me-perspective { padding-left: 1rem; } .personal-story .me-contents { flex-direction: column; } }
.personal-story .me-map-controls { display: flex; flex-wrap: wrap; gap: 1rem; }
.personal-story .me-map-controls select { margin-left: .4rem; padding: .35rem .5rem; border: 1px solid var(--global-divider-color); border-radius: .4rem; background: var(--global-bg-color); color: var(--global-text-color); }
.personal-story #me-travel-map { width: 100%; height: auto; display: block; overflow: hidden; border-radius: .7rem; background: var(--global-code-bg-color); }
.personal-story .me-land { fill: var(--global-divider-color); stroke: var(--global-bg-color); stroke-width: .7; vector-effect: non-scaling-stroke; }
.personal-story .me-land.me-visited { fill: var(--global-theme-color); }
.personal-story .me-land.me-transit { fill: var(--global-text-color-light); }
.personal-story .me-marker { fill: var(--global-bg-color); stroke: var(--global-theme-color); stroke-width: 2; }
.personal-story .me-marker.me-transit { stroke: var(--global-text-color-light); }
.personal-story svg [role="button"] { cursor: pointer; }
.personal-story svg [role="button"]:focus { stroke: var(--global-text-color); stroke-width: 3; outline: none; }
.personal-story .me-map-warning { fill: var(--global-text-color); font-size: 16px; }
.personal-story .me-map-legend, .personal-story .me-map-credit { font-size: .8rem; color: var(--global-text-color-light); }
.personal-story .me-legend-visited, .personal-story .me-legend-transit { display: inline-block; width: .7rem; height: .7rem; border-radius: 50%; margin-left: .4rem; background: var(--global-theme-color); }
.personal-story .me-legend-transit { background: var(--global-text-color-light); }
.personal-story .me-country-list { display: flex; flex-wrap: wrap; gap: .5rem; margin: 1rem 0; }
.personal-story .me-country-button { background: var(--global-bg-color); color: var(--global-theme-color); border: 1px solid var(--global-divider-color); padding: .3rem .65rem; border-radius: .5rem; cursor: pointer; font: inherit; font-size: .85rem; }
.personal-story .me-country-button.me-transit { color: var(--global-text-color-light); }
.personal-story button:focus-visible, .personal-story select:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 3px; }
.personal-story .me-country-detail { min-height: 4rem; font-size: .9rem; }
.personal-story .me-photo-gallery { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.personal-story .me-photo { margin: 0; min-width: 0; }
.personal-story .me-photo img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: .6rem; }
.personal-story .me-photo strong { color: var(--global-text-color); display: block; }
.personal-story .me-photo p { margin: .3rem 0; }
.personal-story .me-photo-unavailable { display: block; padding: 2rem 1rem; background: var(--global-code-bg-color); }
@media (max-width: 640px) { .personal-story .me-photo-gallery { grid-template-columns: 1fr; } }

```

### assets/js/personal-travel.js

```javascript
/* Travel history and gallery are maintained in assets/json/travel.json. */
(() => {
  const root = document.getElementById('me-travel');
  if (!root) return;
  const map = document.getElementById('me-travel-map');
  const year = document.getElementById('me-travel-year');
  const view = document.getElementById('me-map-view');
  const summary = document.getElementById('me-travel-summary');
  const list = document.getElementById('me-country-list');
  const detail = document.getElementById('me-country-detail');
  const gallery = document.getElementById('me-photo-gallery');
  const svgNS = 'http://www.w3.org/2000/svg';
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const svgElement = (tag, attributes) => {
    const node = document.createElementNS(svgNS, tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  const assetURL = (path) => new URL(path, new URL(root.dataset.baseUrl, location.origin)).href;
  const safeLink = (label, url) => {
    const link = element('a', label);
    const parsed = new URL(url, location.origin);
    if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('Unsupported link');
    link.href = parsed.href;
    return link;
  };
  async function readJSON(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not load ${url}`);
    return response.json();
  }
  function renderGallery(photos) {
    gallery.replaceChildren();
    const visible = photos.filter(photo => year.value === 'all' || photo.year === Number(year.value));
    visible.forEach(photo => {
      const figure = element('figure', '', 'me-photo');
      const link = safeLink('', assetURL(photo.src));
      const image = element('img');
      image.src = assetURL(photo.src);
      image.alt = photo.alt;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.addEventListener('error', () => {
        image.hidden = true;
        link.append(element('span', 'Photo unavailable. Open the source below.', 'me-photo-unavailable'));
      }, { once: true });
      link.append(image);
      figure.append(link);
      const caption = element('figcaption');
      caption.append(element('strong', photo.title));
      caption.append(element('p', `${photo.year} journey · ${photo.kind} · displayed crop`));
      const credit = element('p');
      credit.append(safeLink(photo.credit, assetURL(photo.source)));
      if (photo.license && photo.licenseUrl) {
        credit.append(document.createTextNode(' · '), safeLink(photo.license, photo.licenseUrl));
      }
      caption.append(credit);
      figure.append(caption);
      gallery.append(figure);
    });
    if (!visible.length) gallery.append(element('p', 'No photographs added for this journey yet.'));
  }
  readJSON(root.dataset.travelUrl).then(async travel => {
    const years = [...new Set(travel.countries.flatMap(country => country.years))].sort();
    years.forEach(value => {
      const option = element('option', String(value));
      option.value = String(value);
      year.append(option);
    });
    let geography;
    try { geography = await readJSON(root.dataset.mapUrl); }
    catch (error) { console.warn(error); }
    function render() {
      const countries = travel.countries.filter(country => year.value === 'all' || country.years.includes(Number(year.value)));
      const visited = countries.filter(country => country.status === 'visited');
      const transit = countries.filter(country => country.status === 'transit');
      summary.textContent = `${visited.length} visited countries${transit.length ? ` · ${transit.length} transit country` : ''} · ${year.value === 'all' ? '2024–2026' : year.value}`;
      detail.textContent = 'Select a country to see its destinations. Destinations are listed across all recorded years.';
      list.replaceChildren();
      map.replaceChildren();
      const world = view.value === 'world';
      map.setAttribute('viewBox', world ? '0 0 900 450' : '0 0 900 620');
      const project = ([lon, lat]) => world ? [(lon + 180) * 2.5, (90 - lat) * 2.5] : [(lon + 20) * (900 / 60), (73 - lat) * (620 / 39)];
      function select(country) {
        detail.textContent = `${country.name}${country.status === 'transit' ? ' (transit)' : ''} · ${country.years.join(', ')} — ${country.places.join(', ')}`;
      }
      function interactive(node, country) {
        node.setAttribute('tabindex', '0');
        node.setAttribute('role', 'button');
        node.setAttribute('aria-label', `${country.name}, ${country.status}. Show destinations.`);
        const title = svgElement('title', {});
        title.textContent = country.name;
        node.append(title);
        node.addEventListener('click', () => select(country));
        node.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(country); }
        });
      }
      if (geography) {
        geography.features.forEach(feature => {
          const country = countries.find(entry => entry.iso === feature.properties.iso);
          const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
          const pathData = polygons.map(polygon => polygon.map(ring => ring.map((point, index) => {
            const [x, y] = project(point);
            return `${index ? 'L' : 'M'}${x.toFixed(2)},${y.toFixed(2)}`;
          }).join(' ') + 'Z').join(' ')).join(' ');
          const path = svgElement('path', { d: pathData, class: country ? `me-land me-${country.status}` : 'me-land', 'fill-rule': 'evenodd' });
          if (country) interactive(path, country);
          map.append(path);
        });
      } else {
        const warning = svgElement('text', { x: 20, y: 30, class: 'me-map-warning' });
        warning.textContent = 'Country outlines unavailable; locations and country list remain available.';
        map.append(warning);
      }
      countries.forEach(country => {
        const [cx, cy] = project(country.coordinates);
        const dot = svgElement('circle', { cx, cy, r: country.iso === 'VAT' ? 7 : 4, class: `me-marker me-${country.status}` });
        interactive(dot, country);
        map.append(dot);
        const button = element('button', `${country.name}${country.status === 'transit' ? ' · transit' : ''}`, `me-country-button me-${country.status}`);
        button.type = 'button';
        button.addEventListener('click', () => select(country));
        list.append(button);
      });
      renderGallery(travel.photos);
    }
    year.addEventListener('change', render);
    view.addEventListener('change', render);
    render();
  }).catch(error => {
    summary.textContent = 'Travel map unavailable. The journeys are listed in the text above.';
    gallery.append(element('p', 'Photo gallery unavailable. Please try again later.'));
    console.warn(error);
  });
})();

```

### assets/json/travel.json

```json
{
  "updated": "2026-10-10",
  "source": "Travel history supplied by Peter: summers 2024, 2025 and 2026.",
  "countries": [
    { "iso": "NLD", "name": "Netherlands", "status": "visited", "years": [2024, 2025, 2026], "places": ["Delft", "Amsterdam"], "coordinates": [4.36, 52.01] },
    { "iso": "DEU", "name": "Germany", "status": "visited", "years": [2024, 2026], "places": ["Hamburg", "Berlin", "Dresden", "Cologne", "Düsseldorf", "Munich", "Garmisch-Partenkirchen"], "coordinates": [10.45, 51.16] },
    { "iso": "CZE", "name": "Czechia", "status": "visited", "years": [2024], "places": ["Prague"], "coordinates": [14.42, 50.08] },
    { "iso": "AUT", "name": "Austria", "status": "visited", "years": [2024], "places": ["Vienna", "Salzburg"], "coordinates": [14.55, 47.52] },
    { "iso": "FRA", "name": "France", "status": "visited", "years": [2025], "places": ["Disneyland Paris", "Lyon"], "coordinates": [2.21, 46.23] },
    { "iso": "CHE", "name": "Switzerland", "status": "visited", "years": [2025], "places": ["Geneva", "Lausanne", "Montreux", "Interlaken", "Grindelwald"], "coordinates": [8.23, 46.82] },
    { "iso": "ITA", "name": "Italy", "status": "visited", "years": [2025], "places": ["Milan", "Venice", "Florence", "Pisa", "Rome"], "coordinates": [12.57, 42.83] },
    { "iso": "VAT", "name": "Vatican City", "status": "visited", "years": [2025], "places": ["Vatican City"], "coordinates": [12.45, 41.90] },
    { "iso": "SVK", "name": "Slovakia", "status": "visited", "years": [2026], "places": ["Bratislava"], "coordinates": [17.11, 48.15] },
    { "iso": "HUN", "name": "Hungary", "status": "visited", "years": [2026], "places": ["Budapest"], "coordinates": [19.04, 47.50] },
    { "iso": "NOR", "name": "Norway", "status": "visited", "years": [2026], "places": ["Bergen", "Oslo"], "coordinates": [8.47, 60.47] },
    { "iso": "SWE", "name": "Sweden", "status": "visited", "years": [2026], "places": ["Stockholm"], "coordinates": [15.0, 62.0] },
    { "iso": "DNK", "name": "Denmark", "status": "visited", "years": [2026], "places": ["Copenhagen"], "coordinates": [10.0, 56.0] },
    { "iso": "BEL", "name": "Belgium", "status": "transit", "years": [2025], "places": ["Antwerp (transfer)", "Brussels (transfer)"], "coordinates": [4.47, 50.50] }
  ],
  "photos": [
    {
      "src": "assets/img/me/travel/italty_venice_01.jpg",
      "title": "Venice · sunset on the water",
      "year": 2025,
      "alt": "A motorboat crossing the water beneath golden sunset clouds in Venice.",
      "kind": "My travel photograph",
      "credit": "Guowei Lu",
      "source": "assets/img/me/travel/italty_venice_01.jpg"
    },
    {
      "src": "assets/img/me/travel/switzerland_grindelwald_01.jpg",
      "title": "Grindelwald · an Alpine pasture",
      "year": 2025,
      "alt": "A brown-and-white cow standing in a grassy Alpine pasture with mountains and clouds behind it.",
      "kind": "My travel photograph",
      "credit": "Guowei Lu",
      "source": "assets/img/me/travel/switzerland_grindelwald_01.jpg"
    },
    {
      "src": "assets/img/me/travel/switzerland_Montreux_01.jpg",
      "title": "Montreux · a sailboat on the lake",
      "year": 2025,
      "alt": "A sailboat on blue lake water near Montreux, with a mountain range in the distance.",
      "kind": "My travel photograph",
      "credit": "Guowei Lu",
      "source": "assets/img/me/travel/switzerland_Montreux_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kehrwieder_Speicherstadt_Hamburg_Germany_2013-05-24_10-35-17.jpg/960px-Kehrwieder_Speicherstadt_Hamburg_Germany_2013-05-24_10-35-17.jpg",
      "title": "Hamburg · waterways and warehouses",
      "year": 2024,
      "alt": "Canal and brick warehouses in Hamburg's Speicherstadt.",
      "kind": "Destination reference photo",
      "credit": "Hansueli Krapf",
      "source": "https://commons.wikimedia.org/wiki/File:Kehrwieder_Speicherstadt_Hamburg_Germany_2013-05-24_10-35-17.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Grindelwald_from_Eiger.jpg",
      "title": "Grindelwald · the Alpine landscape",
      "year": 2025,
      "alt": "View over the Grindelwald valley from the Eiger.",
      "kind": "Destination reference photo",
      "credit": "Stan Shebs",
      "source": "https://commons.wikimedia.org/wiki/File:Grindelwald_from_Eiger.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    {
      "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Bergen_bryggen_panorama.jpg/960px-Bergen_bryggen_panorama.jpg",
      "title": "Bergen · a northern waterfront",
      "year": 2026,
      "alt": "Panoramic view of colourful Bryggen waterfront buildings in Bergen.",
      "kind": "Destination reference photo",
      "credit": "Pål S. Schaathun",
      "source": "https://commons.wikimedia.org/wiki/File:Bergen_bryggen_panorama.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  ]
}

```

### purgecss.config.js

```javascript
module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: [/^me-/], // Travel map and gallery classes are created from JSON at runtime.
  skippedContentGlobs: ["_site/assets/**/*.html"],
};

```
