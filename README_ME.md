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

- **11 October 2026 — AI disclosure:** Peter requested identifying Me as AI-generated. Added a visible note at the top that the page was generated with AI assistance and edited by Peter, the illustration is AI-generated, and the gallery photographs are his own. Preserve this disclosure during future updates.

- **11 October 2026 — photo memories:** Peter accepted adding short personal memories to photos. Each photo now has an optional `memory` string, initially empty. The gallery displays a nonempty memory beneath its title; empty memories show no placeholder. Peter can write one sentence about why the moment matters. Do not invent those recollections.

- **11 October 2026 — About/Me scope:** Peter clarified that About is for his short introduction, work, and latest news. Removed both “In a few words” and “The longer story”, including their contents and navigation links, from Me. Me now focuses on the symbolic visual depiction, travel map, personal photo gallery, and Codex's personal perspective. Avoid reintroducing a second professional biography here. Possible future additions should be brief and based on Peter's own input, such as a current personal interest or a short memory accompanying a photo; suggestions are not facts to publish.

- **10 October 2026 — visually reviewed gallery captions:** Inspected all 24 local photographs and replaced numbered or generic titles with short place-first titles describing visible subjects. Updated alt descriptions to match the images. Future titles should follow “Place · brief visible detail”, without inventing personal memories or identifying people from appearance.

- **10 October 2026 — family section removed:** Peter requested removing the entire A life with room for other people section. Do not restore it in future page updates unless requested.


- **10 October 2026 — shorter personal page:** Peter requested removing “The abilities I keep developing”, “Running, music, and a different rhythm”, and “Travel: curiosity outside the screen”. Removed those sections and retained only a short introduction under “My travel map”, followed by the existing map and gallery. Keep these topics brief rather than restoring the long prose in future edits.

- **10 October 2026 — modest contribution section:** Peter asked for “What I contribute” to be humble and neat. Shortened it to collaborative rendering work, technical notes as a learning practice, and links to publications/CV. Keep detailed paper descriptions and awards on the About page rather than repeating them in this personal section.

- **10 October 2026 — office photo removed:** Peter removed the Delft office photograph and requested its removal from travel.json. Removed the gallery entry and the public office-photo description. Four local personal travel photos remain. Earlier office-photo references in this history are historical only; do not restore the entry without Peter's request.

- **10 October 2026 — China highlight follow-up:** Combined the CHN and TWN outlines into one CHN MultiPolygon in the local world-countries.geojson so both areas receive the same fill directly. Added the repository's content-hash cache-busting filter to the travel JSON, map geometry, and JavaScript URLs. When rebuilding the map data from Natural Earth, reproduce this geometry grouping before publication. The live site's current asset version could not be verified through the web tool; the local fix requires a successful commit/push/deployment to appear online.

- **10 October 2026 — China map display:** At Peter's request, China's map entry includes Taiwan in its highlighted region. The China object in travel.json uses `mapRegions: ["TWN"]` to include the corresponding Natural Earth geometry. Selecting either geometry shows the China entry; the country count remains 15. This display preference does not assert a separate visit to Taiwan.

- **10 October 2026 — China, Belgium, and personal gallery:** Peter confirmed a return to China in summer 2026 and that Belgium was visited, not only a transit stop. travel.json now records 15 visited countries and no transit-only countries. China has no city details because none were supplied. The map defaults to World so China is visible. Removed all three Wikimedia reference photos. Added the Delft office photo as an undated personal photograph and the locally supplied Vatican City photo as a 2025 travel photograph after visual inspection. Gallery photos are independent of map year filters, and `year` is optional. Keep all five personal images local; do not infer a date or publish the child's name from the office filename. The symbolic illustration is retained: its broad graphics/running/travel themes still fit.

- **10 October 2026 — concise travel section:** Peter requested keeping My travel map without the detailed travel routes. Removed the year-by-year itinerary prose from the Me page, retaining the short travel introduction, interactive map, country/year data, and photo gallery. The route history recorded in this README remains maintenance context, not public page content. The symbolic illustration remains unchanged because the underlying interests are unchanged.

- **10 October 2026 — personal page after blog removal:** Revised the short biography, contributions, music/family prose, and Codex perspective to describe the current research-and-personal site. Past technical notes remain historical background; no wording implies they are still published here. The existing illustration remains appropriate because its subjects—graphics, geometry, running, and travel—are unchanged by removing the blog.

- **10 October 2026 — baseline:** Personal page based on Peter's existing website and writing; travel history for 2024–2026 supplied directly by Peter; three personal 2025 photographs added from Venice, Grindelwald, and Montreux. Current symbolic illustration: `assets/img/me/curiosity-and-journeys.png`; exact original prompt is in the illustration provenance section below.
- **10 October 2026 — maintenance preference:** Peter asked for future status updates to be saved in this file and reflected in updated versions of the personal illustration. No new biographical status was supplied with this preference, so the existing illustration remains current.

## Intent and voice

Peter requested a new page on https://pasu.github.io/ that is more personal than a resume: short and full introductions, hobbies, talents, contributions, travel, and Codex's opinion of him, with imagery and no arbitrary length limit. Write warm, concrete prose. Keep personal life visible alongside professional work. Avoid inflated praise, invented memories, and unsupported achievements.

Earlier discussions were not available in the creation chat. The draft therefore uses the local repository, the live homepage, and clearly labelled impressions. Do not imply access to earlier conversations. First-person prose is a proposed self-description for Peter to edit; the “How Codex sees me” section is explicitly an interpretation.

## Files and integration

**Profile image fix, 10 October 2026:** The homepage uses the existing `assets/img/prof_pic.jpg` directly. `_includes/figure.liquid` accepts `responsive=false` to omit generated WebP srcsets, and `_layouts/about.liquid` passes that option for the profile image. This prevents the browser requesting unavailable `prof_pic-480.webp` variants while leaving responsive-image behaviour unchanged for other figure includes. No duplicate or generated profile asset is required.

**Publication preview size, 10 October 2026:** Homepage publication previews are 120px wide on desktop and capped at 120px on mobile, with their original aspect ratios preserved. Styling is in assets/css/home-publications.css.


**News order and local previews, 10 October 2026:** The homepage renders introduction → News → Publications. Publication markup now lives in `_includes/home_publications.liquid`, included by `_layouts/about.liquid` after the News block when `page.home_publications` is true. `_pages/about.md` contains the introduction and enables both sections. Preview images use local `assets/img/projects/2025_pg-gi.png` and `assets/img/projects/2024_sheared-filtering.gif` through `relative_url`; the GIF remains animated. These files replace the earlier externally hosted previews. Include both images and the new Liquid include when committing or transferring the site.

**2024 publication added, 10 October 2026:** The homepage Publications section lists 2025 followed by 2024. The 2024 entry is Sheared Polygonal Texture Filtering, with Peter's supplied animated GIF, authors, Graphics Interface 2024 venue, Michael A. J. Sweeney Award (Best Student Paper) link, DOI labelled PDF, and project page. Metadata and award were verified against the TU Delft project page and Graphics Interface award page. Preserve these entries when updating the homepage.

**Homepage publications and navigation, 10 October 2026:** Navigation is About → Me → CV. The separate `_pages/publications.md` page was removed. Publications are now a section at `/#publications` on `_pages/about.md`, styled by `assets/css/home-publications.css`. Peter supplied the 2025 Iterative Lightmap Updates for Scene Editing entry, image, authors, DOI link labelled PDF, and project link. The title and authors were checked against the TU Delft project page. Personal-page research links point to this homepage section. Keep navigation orders Me=1 and CV=2; About is added by the header layout. Preview images were subsequently switched to local assets; see the local previews update above.

**CV PDF:** Peter supplied `0_resume.pdf` in the repository root on 10 October 2026. `_pages/cv.md` uses the standard page layout with an embedded PDF and an open/download link to `/0_resume.pdf`, resolved through `relative_url`. This PDF is the source of truth for the CV page; replace the root file to update it. The old `assets/pdf/resume.pdf` and JSON resume are not used by this page. The CV PDF has not been used to revise biographical prose or the illustration. Preserve it when moving the project to another computer.

**10 October 2026 — blog retirement:** Peter removed the `_posts` content and associated images and requested a clean site without the Blog page. `_pages/blog.md` was removed; homepage latest-posts markup and personal-page/dropdown blog links were removed. Pagination, latest posts, related blog posts, and archives are disabled. `_posts/` and `cn/` are excluded from Jekyll output, preserving any remaining archived material or Chinese source files without publishing pages with missing images. Historical references below to the deleted posts are provenance only; recover them from Git history if needed. Do not restore the blog unless Peter requests it.

- `_pages/me.md`: canonical page source; Jekyll/al-folio page layout, permalink `/me/`, navbar title `Me`, order 1.
- `assets/css/personal-story.css`: scoped styling; uses existing theme variables for light/dark modes, responsive text and imagery, keyboard focus indicators.
- `assets/img/me/curiosity-and-journeys.png`: original AI-generated symbolic illustration, 1774 × 887 pixels. It is not a portrait or a photograph of a completed trip.
- `_pages/about.md`: a link to `/me/` added at the end; existing homepage retained.
- `README_ME.md`: this handoff and recovery snapshots. Keep it excluded from Jekyll output.

The page includes a short biography, full story, research contributions, developing abilities, running/music/reading, travel, family priorities, and an outside perspective. It links to the existing publications and CV. The travel map and gallery use a small vanilla JavaScript file; no additional packages are required.

## JSON travel map and photo gallery

### Try a photo memory

In `assets/json/travel.json`, find a photo and fill in its `memory` field with one short sentence in your own words. You might describe why you stopped to take the picture, a small detail you noticed, or what you want to remember. English or Chinese text is supported. Leave it as `"memory": ""` to show only the title. Memories appear under the corresponding photo title after deployment; no public editing form is needed. Keep `kind: "travel"` and use `src` for the image path.

**Current photo schema, 10 October 2026:** Peter requested simple `kind: "travel"` for the photo entries, without `credit` or `source` (the image link uses `src` directly). All current gallery photographs are his own local files. New files in `assets/img/me/travel/` have been registered, preserving exact filenames, including spelling/casing. Titles and alt text identify locations without inventing what happened in the photos. Known trip years follow the supplied itineraries; everyday Netherlands photos have no inferred year. Gallery code no longer requires credit/source fields. This schema supersedes earlier descriptions of credit fields and reference photos in the handoff history.

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
  "kind": "travel"

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
```

### _pages/about.md

```liquid
---
layout: about
title: About
permalink: /
subtitle: I imagine things and render🎨. I listen to music while running🏃.

profile:
  align: right
  image: prof_pic.jpg
  address:

news: true # includes a list of news items
home_publications: true # publication entries render after News
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

Hello, I am Guowei, you can also call me Peter. I’m a PhD student at [CGV](https://graphics.tudelft.nl/). My research focuses primarily on real-time rendering, realistic material, global illumination and VR. In addition, I am interested in differentiable/neural rendering.

I got my MSc with honours in Computer Science (Informatica), Game and Media Technology programme from Utrecht University in the summer of 2020.

Next to my studies, I worked as a 3D GIS engineer in R&D department at SuperMap, focusing on productions related to virtual earth and map.

[More about me — my work, interests, and life beyond research]({{ '/me/' | relative_url }}).

```

### _layouts/about.liquid

```liquid
---
layout: default
---
<div class="post">
  <header class="post-header">
    <h1 class="post-title">
      {% if site.title == 'blank' %}
        <span class="font-weight-bold">{{ site.first_name }}</span> {{ site.middle_name }}
        {{ site.last_name }}
      {% else %}
        {{ site.title }}
      {% endif %}
    </h1>
    <p class="desc">{{ page.subtitle }}</p>
  </header>

  <article>
    {% if page.profile %}
      <div class="profile float-{% if page.profile.align == 'left' %}left{% else %}right{% endif %}">
        {% if page.profile.image %}
          {% assign profile_image_path = page.profile.image | prepend: 'assets/img/' %}
          {% if page.profile.image_circular %}
            {% assign profile_image_class = 'img-fluid z-depth-1 rounded-circle' %}
          {% else %}
            {% assign profile_image_class = 'img-fluid z-depth-1
      rounded' %}
          {% endif %}
          {% capture sizes %}(min-width: {{site.max_width}}) {{ site.max_width | minus: 30 | times: 0.3}}px, (min-width: 576px)
      30vw, 95vw"{% endcapture %}
          {%
            include figure.liquid loading="eager" path=profile_image_path class=profile_image_class sizes=sizes alt=page.profile.image
            cache_bust=true responsive=false
          %}
        {% endif %}
        {% if page.profile.more_info %}
          <div class="more-info">{{ page.profile.more_info }}</div>
        {% endif %}
      </div>
    {% endif %}

    <div class="clearfix">{{ content }}</div>

    <!-- News -->
    {% if page.news and site.announcements.enabled %}
      <h2>
        <a href="{{ '/news/' | relative_url }}" style="color: inherit">News</a>
      </h2>
      {% include news.liquid limit=true %}
    {% endif %}

    <!-- Homepage publications follow News -->
    {% if page.home_publications %}
      {% include home_publications.liquid %}
    {% endif %}

    <!-- Selected papers -->
    {% if page.selected_papers %}
      <h2>
        <a href="{{ '/publications/' | relative_url }}" style="color: inherit">selected publications</a>
      </h2>
      {% include selected_papers.liquid %}
    {% endif %}

    <!-- Social -->
    {% if page.social %}
      <div class="social">
        <div class="contact-icons">{% include social.liquid %}</div>

        <div class="contact-note">{{ site.contact_note }}</div>
      </div>
    {% endif %}
  </article>
</div>

```

### _includes/figure.liquid

```liquid
{% assign img_path = include.path | remove: '.jpg' | remove: '.jpeg' | remove: '.png' | remove: '.tiff' | remove: '.gif' %}

<figure
  {% if include.slot %}
    slot="{{ include.slot }}"
  {% endif %}
>
  <picture>
    <!-- Auto scaling with imagemagick -->
    <!--
      See https://www.debugbear.com/blog/responsive-images#w-descriptors-and-the-sizes-attribute and
      https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images for info on defining 'sizes' for responsive images
    -->
    {% if site.imagemagick.enabled and include.responsive != false %}
      <source
        class="responsive-img-srcset"
        srcset="{% for i in site.imagemagick.widths %}{{ img_path | relative_url }}-{{ i }}.webp {{i}}w,{% endfor %}"
        {% if include.sizes %}
          sizes="{{include.sizes}}"
        {% else %}
          sizes="95vw"
        {% endif %}
        type="image/webp"
      >
    {% endif %}
    <img
      src="{% if include.cache_bust %}{{ include.path | relative_url | bust_file_cache }}{% else %}{{ include.path | relative_url }}{% endif %}"
      {% if include.class %}
        class="{{ include.class }}"
      {% endif %}
      {% if include.width %}
        width="{{ include.width }}"
      {% else %}
        width="100%"
      {% endif %}
      {% if include.height %}
        height="{{ include.height }}"
      {% else %}
        height="auto"
      {% endif %}
      {% if include['min-width'] or include['min-height'] or include['max-width'] or include['max-height'] %}
        style="
          {% if include['min-width'] %}
            min-width: {{ include.min-width }};
          {% endif %}
          {% if include['min-height'] %}
            min-height: {{ include.min-height }};
          {% endif %}
          {% if include['max-width'] %}
            max-width: {{ include.max-width }};
          {% endif %}
          {% if include['max-height'] %}
            max-height: {{ include.max-height }};
          {% endif %}
        "
      {% endif %}
      {% if include.alt %}
        alt="{{ include.alt }}"
      {% endif %}
      {% if include.title %}
        title="{{ include.title }}"
      {% endif %}
      {% if include.zoomable %}
        data-zoomable
      {% endif %}
      {% if include.loading %}
        loading="{{ include.loading }}"
      {% elsif site.lazy_loading_images %}
        loading="lazy"
      {% endif %}
      onerror="this.onerror=null; $('.responsive-img-srcset').remove();"
    >
  </picture>

  {% if include.caption %}
    <figcaption class="caption">{{ include.caption }}</figcaption>
  {% endif %}
</figure>

```

### _includes/home_publications.liquid

```liquid
<link rel="stylesheet" href="{{ '/assets/css/home-publications.css' | relative_url }}">

<section class="home-publications" aria-labelledby="publications">
  <h2 id="publications">Publications</h2>
  <h3 class="publication-year">2025</h3>
  <article class="home-publication">
    <a class="publication-preview" href="https://publications.graphics.tudelft.nl/papers/827" aria-label="Project page for Iterative Lightmap Updates for Scene Editing">
      <img src="{{ '/assets/img/projects/2025_pg-gi.png' | relative_url }}" alt="Preview of Iterative Lightmap Updates for Scene Editing" loading="lazy" decoding="async">
    </a>
    <div>
      <h4><a href="https://publications.graphics.tudelft.nl/papers/827">Iterative Lightmap Updates for Scene Editing</a></h4>
      <p class="publication-authors"><em><strong>Guowei Lu</strong>, Christoph Peters, Petr Kellnhofer, Elmar Eisemann</em></p>
      <p>Pacific Graphics 2025</p>
      <div class="publication-links">
        <a href="https://dx.doi.org/10.2312/pg.20251293">PDF</a>
        <a href="https://publications.graphics.tudelft.nl/papers/827">Project Page</a>
      </div>
    </div>
  </article>
  <h3 class="publication-year">2024</h3>
  <article class="home-publication">
    <a class="publication-preview" href="https://publications.graphics.tudelft.nl/papers/25" aria-label="Project page for Sheared Polygonal Texture Filtering">
      <img src="{{ '/assets/img/projects/2024_sheared-filtering.gif' | relative_url }}" alt="Animated preview of Sheared Polygonal Texture Filtering" loading="lazy" decoding="async">
    </a>
    <div>
      <h4><a href="https://publications.graphics.tudelft.nl/papers/25">Sheared Polygonal Texture Filtering</a></h4>
      <p class="publication-authors"><em><strong>Guowei Lu</strong>, Jerry Guo, Petr Kellnhofer, Elmar Eisemann</em></p>
      <p>Graphics Interface 2024</p>
      <p><a href="https://graphicsinterface.org/awards/michael-a-j-sweeney-award/"><strong>Michael A. J. Sweeney Award (Best Student Paper)</strong></a></p>
      <div class="publication-links">
        <a href="https://doi.org/10.1145/3670947.3670952">PDF</a>
        <a href="https://publications.graphics.tudelft.nl/papers/25">Project Page</a>
      </div>
    </div>
  </article>
</section>

```

### _pages/cv.md

```liquid
---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 2
description: Curriculum vitae of Guowei (Peter) Lu.
---

[Open or download my CV (PDF)]({{ '/0_resume.pdf' | relative_url }})

<object data="{{ '/0_resume.pdf' | relative_url }}" type="application/pdf" width="100%" height="1000" style="height: 80vh; min-height: 600px;" aria-label="Curriculum vitae of Guowei Lu">
  <p>Your browser cannot display this PDF inline. <a href="{{ '/0_resume.pdf' | relative_url }}">Open or download my CV</a>.</p>
</object>

```

### assets/css/home-publications.css

```css
.home-publications { clear: both; padding-top: 2rem; }
.home-publications #publications { scroll-margin-top: 6rem; }
.home-publications .publication-year { font-size: 1.15rem; margin: 1.5rem 0 1rem; }
.home-publication { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 1.2rem; padding: 1rem 0; border-top: 1px solid var(--global-divider-color); }
.home-publication img { display: block; width: 100%; height: auto; border-radius: .4rem; }
.home-publication h4 { font-size: 1.2rem; line-height: 1.4; margin: 0 0 .6rem; }
.home-publication p { margin-bottom: .6rem; }
.home-publication .publication-authors { font-size: .95rem; }
.home-publication .publication-links { display: flex; flex-wrap: wrap; gap: .6rem; }
.home-publication .publication-links a { border: 1px solid var(--global-theme-color); border-radius: .3rem; padding: .2rem .6rem; font-size: .85rem; }
@media (max-width: 575px) { .home-publication { grid-template-columns: 1fr; } .home-publication .publication-preview { max-width: 120px; } }

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
.personal-story .me-photo .me-photo-memory { color: var(--global-text-color); font-size: .9rem; line-height: 1.6; }
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
    const visible = photos;
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
        link.append(element('span', 'Photo unavailable. Select to open the image directly.', 'me-photo-unavailable'));
      }, { once: true });
      link.append(image);
      figure.append(link);
      const caption = element('figcaption');
      caption.append(element('strong', photo.title));
      if (photo.memory && photo.memory.trim()) {
        caption.append(element('p', photo.memory.trim(), 'me-photo-memory'));
      }
      caption.append(element('p', `${photo.year ? `${photo.year} · ` : ''}${photo.kind} · displayed crop`));
      figure.append(caption);
      gallery.append(figure);
    });
    if (!visible.length) gallery.append(element('p', 'No personal photographs added yet.'));
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
      detail.textContent = '';
      list.replaceChildren();
      map.replaceChildren();
      const world = view.value === 'world';
      map.setAttribute('viewBox', world ? '0 0 900 450' : '0 0 900 620');
      const project = ([lon, lat]) => world ? [(lon + 180) * 2.5, (90 - lat) * 2.5] : [(lon + 20) * (900 / 60), (73 - lat) * (620 / 39)];
      function select(country) {
        detail.textContent = `${country.name}${country.status === 'transit' ? ' (transit)' : ''} · ${country.years.join(', ')}${country.places.length ? ` — ${country.places.join(', ')}` : ''}`;
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
          const country = countries.find(entry => entry.iso === feature.properties.iso || (entry.mapRegions || []).includes(feature.properties.iso));
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
    {
      "iso": "NLD",
      "name": "Netherlands",
      "status": "visited",
      "years": [
        2024,
        2025,
        2026
      ],
      "places": [
        "Delft",
        "Amsterdam"
      ],
      "coordinates": [
        4.36,
        52.01
      ]
    },
    {
      "iso": "DEU",
      "name": "Germany",
      "status": "visited",
      "years": [
        2024,
        2026
      ],
      "places": [
        "Hamburg",
        "Berlin",
        "Dresden",
        "Cologne",
        "Düsseldorf",
        "Munich",
        "Garmisch-Partenkirchen"
      ],
      "coordinates": [
        10.45,
        51.16
      ]
    },
    {
      "iso": "CZE",
      "name": "Czechia",
      "status": "visited",
      "years": [
        2024
      ],
      "places": [
        "Prague"
      ],
      "coordinates": [
        14.42,
        50.08
      ]
    },
    {
      "iso": "AUT",
      "name": "Austria",
      "status": "visited",
      "years": [
        2024
      ],
      "places": [
        "Vienna",
        "Salzburg"
      ],
      "coordinates": [
        14.55,
        47.52
      ]
    },
    {
      "iso": "FRA",
      "name": "France",
      "status": "visited",
      "years": [
        2025
      ],
      "places": [
        "Disneyland Paris",
        "Lyon"
      ],
      "coordinates": [
        2.21,
        46.23
      ]
    },
    {
      "iso": "CHE",
      "name": "Switzerland",
      "status": "visited",
      "years": [
        2025
      ],
      "places": [
        "Geneva",
        "Lausanne",
        "Montreux",
        "Interlaken",
        "Grindelwald"
      ],
      "coordinates": [
        8.23,
        46.82
      ]
    },
    {
      "iso": "ITA",
      "name": "Italy",
      "status": "visited",
      "years": [
        2025
      ],
      "places": [
        "Milan",
        "Venice",
        "Florence",
        "Pisa",
        "Rome"
      ],
      "coordinates": [
        12.57,
        42.83
      ]
    },
    {
      "iso": "VAT",
      "name": "Vatican City",
      "status": "visited",
      "years": [
        2025
      ],
      "places": [
        "Vatican City"
      ],
      "coordinates": [
        12.45,
        41.9
      ]
    },
    {
      "iso": "SVK",
      "name": "Slovakia",
      "status": "visited",
      "years": [
        2026
      ],
      "places": [
        "Bratislava"
      ],
      "coordinates": [
        17.11,
        48.15
      ]
    },
    {
      "iso": "HUN",
      "name": "Hungary",
      "status": "visited",
      "years": [
        2026
      ],
      "places": [
        "Budapest"
      ],
      "coordinates": [
        19.04,
        47.5
      ]
    },
    {
      "iso": "NOR",
      "name": "Norway",
      "status": "visited",
      "years": [
        2026
      ],
      "places": [
        "Bergen",
        "Oslo"
      ],
      "coordinates": [
        8.47,
        60.47
      ]
    },
    {
      "iso": "SWE",
      "name": "Sweden",
      "status": "visited",
      "years": [
        2026
      ],
      "places": [
        "Stockholm"
      ],
      "coordinates": [
        15,
        62
      ]
    },
    {
      "iso": "DNK",
      "name": "Denmark",
      "status": "visited",
      "years": [
        2026
      ],
      "places": [
        "Copenhagen"
      ],
      "coordinates": [
        10,
        56
      ]
    },
    {
      "iso": "BEL",
      "name": "Belgium",
      "status": "visited",
      "years": [
        2025
      ],
      "places": [
        "Antwerp (transfer)",
        "Brussels (transfer)"
      ],
      "coordinates": [
        4.47,
        50.5
      ]
    },
    {
      "iso": "CHN",
      "name": "China",
      "status": "visited",
      "years": [
        2026
      ],
      "places": [],
      "coordinates": [
        104,
        35
      ],
      "mapRegions": [
        "TWN"
      ]
    }
  ],
  "photos": [
    {
      "src": "assets/img/me/travel/austria_salzburg_01.jpg",
      "title": "Salzburg · palace gardens",
      "alt": "Formal flower beds and a fountain in a palace garden, with buildings and a hilltop fortress beyond.",
      "kind": "travel",
      "year": 2024,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/china_beijing_forestry_university.jpg",
      "title": "Beijing · a tree-lined campus",
      "alt": "A person sitting on a broad campus avenue shaded by tall green trees.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/czech_prague_charles_bridge.jpg",
      "title": "Prague · Charles Bridge at sunset",
      "alt": "An elevated view of Charles Bridge filled with pedestrians, with sunlight over the river.",
      "kind": "travel",
      "year": 2024,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/france_paris_01.jpg",
      "title": "Paris · Notre-Dame by the Seine",
      "alt": "Notre-Dame cathedral beside the Seine, beneath a textured cloudy sky.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/france_paris_02.jpg",
      "title": "Paris · a moment with art",
      "alt": "A visitor standing in a museum gallery beside framed paintings.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/germany_koln_01.jpg",
      "title": "Cologne · beneath the cathedral",
      "alt": "Visitors on the steps below the towering Gothic facade of Cologne Cathedral.",
      "kind": "travel",
      "year": 2024,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/germany_munich_eibsee.jpg",
      "title": "Eibsee · clear water, cloudy skies",
      "alt": "Turquoise lake water with wooded shores and mountains beneath large white clouds.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/hungary_budapest_01.jpg",
      "title": "Budapest · Parliament after dark",
      "alt": "The illuminated Hungarian Parliament building reflected in dark river water.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/italty_florence_01.jpg",
      "title": "Florence · rooftops beside the Duomo",
      "alt": "The dome and marble exterior of Florence Cathedral above red-roofed city buildings.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/italty_milan_01.jpg",
      "title": "Milan · the cathedral square",
      "alt": "The ornate facade of Milan Cathedral overlooking a busy square.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/italty_venice_01.jpg",
      "title": "Venice · golden light on the water",
      "year": 2025,
      "alt": "A motorboat crossing the water beneath golden sunset clouds in Venice.",
      "kind": "travel",
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/italty_venice_02.jpg",
      "title": "Venice · a gondola on the lagoon",
      "alt": "A gondola and its passengers on open water, with waterfront buildings in the distance.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/netherlands_delft_compus.jpg",
      "title": "Delft · campus from above",
      "alt": "An elevated view across campus buildings, green spaces, and the city under an overcast sky.",
      "kind": "travel",
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/netherlands_delft_office.jpg",
      "title": "Delft · small desk companions",
      "alt": "A hand holding small animal figurines beside a window overlooking green trees.",
      "kind": "travel",
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/netherlands_hague_circus.jpg",
      "title": "The Hague · circus in the spotlight",
      "alt": "Acrobatic performers on an ornate stage beneath bright beams of theatre light.",
      "kind": "travel",
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/norway_bergen_01.jpg",
      "title": "Bergen · colourful waterfront",
      "alt": "Colourful waterfront buildings and boats below a misty wooded hillside.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/norway_oslo_01.jpg",
      "title": "Oslo · sculpture under summer skies",
      "alt": "A tall carved stone column surrounded by sculptures and visitors beneath a blue sky.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/slovakia_bratislava_01.jpg",
      "title": "Bratislava · river beyond the ruins",
      "alt": "A broad river and wooded landscape viewed over weathered stone ruins.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/sweden_stockholm_01.jpg",
      "title": "Stockholm · evening by the water",
      "alt": "People silhouetted on a waterfront platform beneath a softly coloured evening sky.",
      "kind": "travel",
      "year": 2026,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/switzerland_grindelwald_01.jpg",
      "title": "Grindelwald · a cow in the Alps",
      "year": 2025,
      "alt": "A brown-and-white cow in a grassy Alpine pasture, with mountains and clouds behind it.",
      "kind": "travel",
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/switzerland_grindelwald_02.jpg",
      "title": "Grindelwald · peaks above the valley",
      "alt": "Snow-covered mountain peaks above green slopes and an Alpine valley.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/switzerland_Montreux_01.jpg",
      "title": "Montreux · a sailboat on the lake",
      "year": 2025,
      "alt": "A sailboat on blue lake water, with a mountain range in the distance.",
      "kind": "travel",
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/vatican_city_01.jpg",
      "title": "Vatican City · the museum entrance",
      "alt": "The Vatican Museums entrance with sculpted figures and the inscription Musei Vaticani.",
      "kind": "travel",
      "year": 2025,
      "memory": ""
    },
    {
      "src": "assets/img/me/travel/vatican_city_saint_peter_01.jpg",
      "title": "Vatican City · marble and mosaics",
      "year": 2025,
      "alt": "An ornate doorway framed by marble columns, with a religious mosaic above and patterned marble flooring below.",
      "kind": "travel",
      "memory": ""
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
