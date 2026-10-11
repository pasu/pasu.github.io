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
    const visible = [...photos];
    // Shuffle a copy so the maintained JSON order stays intact.
    for (let index = visible.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1));
      [visible[index], visible[other]] = [visible[other], visible[index]];
    }
    visible.forEach((photo, index) => {
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
      const frame = element('div', '', 'me-photo-frame');
      frame.append(link);
      if (photo.memory_en && photo.memory_en.trim()) {
        const memory = element('div', photo.memory_en.trim(), 'me-photo-memory');
        memory.id = `me-memory-${index}`;
        memory.lang = 'en';
        memory.tabIndex = 0;
        memory.hidden = true;
        link.setAttribute('aria-describedby', memory.id);
        const show = () => {
          frame.classList.remove('me-memory-dismissed');
          memory.hidden = false;
        };
        const close = () => {
          memory.hidden = true;
          frame.classList.add('me-memory-dismissed');
        };
        frame.addEventListener('mouseenter', show);
        frame.addEventListener('focusin', show);
        frame.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
        frame.addEventListener('mouseleave', () => {
          if (!frame.contains(document.activeElement)) close();
        });
        frame.addEventListener('focusout', event => {
          if (!frame.contains(event.relatedTarget)) {
            close();
          }
        });
        frame.append(memory);
      }
      figure.append(frame);
      const caption = element('figcaption');
      caption.append(element('strong', photo.title));
      if (photo.year) caption.append(element('p', String(photo.year)));
      figure.append(caption);
      gallery.append(figure);
    });
    if (!visible.length) gallery.append(element('p', 'No personal photographs added yet.'));
  }
  readJSON(root.dataset.travelUrl).then(async travel => {
    renderGallery(travel.photos);
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
    }
    year.addEventListener('change', render);
    view.addEventListener('change', render);
    render();
  }).catch(error => {
    summary.textContent = 'Travel map unavailable. Please try again later.';
    gallery.append(element('p', 'Photo gallery unavailable. Please try again later.'));
    console.warn(error);
  });
})();
