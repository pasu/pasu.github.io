---
layout: post
title: Streets.GL Meets OSMBuilding
date: 2025-01-11 20:27:00
tags: WebGL GIS
categories: 3DGIS
giscus_comments: true
related_posts: true
pretty_table: true
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3dgis/streets_gl.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Have you ever wondered if you could quickly create a vivid 3D city map on the web using open-source tools? This article introduces two fascinating projects: **Streets.GL** and **OSMBuilding**. Both are based on OpenStreetMap data, transforming abstract map elements into 3D buildings, roads, and trees. **Streets.GL** focuses on advanced rendering effects like dynamic lighting and atmospheric simulation, making it ideal for showcasing detailed 3D map scenes. On the other hand, **OSMBuilding** is more lightweight, designed for simple building visualization and easy integration into various mapping applications. Whether you're looking to present complex urban landscapes or create quick, interactive maps, these two tools each offer unique advantages.

# Streets.GL

Last week, my colleague shared a fascinating web application called [Streets.GL](https://streets.gl/). Intrigued by its unique approach, I explored its features despite having limited time. In today’s push for ultra-realistic graphics, we often overlook the costs and practicality. Streets.GL, however, strikes a balance between rendering quality and global 3D building visualization, offering a practical and efficient alternative.

Streets.GL is an open-source, web-based 3D map renderer that utilizes OpenStreetMap (OSM) data to create dynamic, interactive visualizations of various geographical features, including buildings, roads, paths, and trees. Developed by StrandedKitty, the project was announced on May 2, 2023. It aims to promote open data while providing the mapping community with a tool for visual map validation.

Written in TypeScript, Streets.GL leverages a custom low-level library that wraps the WebGL2 API for rendering. It uses a render graph to manage its rendering pipeline, generating geometry in real time to support complex building shapes, adhering to the Simple 3D Buildings schema. Initially, data was sourced from public Overpass API instances. However, as of June 24, 2023, Streets.GL transitioned to a custom self-hosted vector tileset for improved tile loading speed, reducing strain on public servers. This change introduces a slight lag in map updates as tilesets are refreshed weekly.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3dgis/streets_featuers.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Key Features:

- **OSM Features:** Renders map elements such as buildings, roads, and trees accurately.
- **Dynamic Lighting:** Supports configurable times of day to display lighting effects.
- **Global Map Search:** Powered by Nominatim for worldwide location searches.
- **Live Air Traffic:** Displays real-time air traffic data within the map.
- **Terrain with LOD:** Adjusts terrain detail based on zoom level.
- **Advanced Rendering:** Uses deferred shading, Physically Based Rendering (PBR), Temporal Anti-Aliasing (TAA), and effects like ambient occlusion, depth of field, screen-space reflections, and bloom.
- **Atmosphere Rendering:** Provides realistic aerial perspective and atmospheric effects.

Though the project has seen no updates since September 24, 2023, Streets.GL remains a valuable tool for visualizing OSM data in 3D. Users can explore the application live at streets.gl and review its source code on GitHub.

---

## OSMBuilding

OSM Buildings is an open-source JavaScript library for visualizing OpenStreetMap (OSM) building geometry in 2D and 3D. It enables developers to add rich, interactive urban landscapes to web maps efficiently.

### Key Features:

**1. Compatibility:**

- **Classic 2.5D Version:** Designed for older hardware, integrates with Leaflet and OpenLayers 2, and supports shadow simulation.
- **Modern 3D Version:** Optimized for modern hardware, manages large datasets, and uses GLMap for rendering and event handling.

**2. Customization:**

- Allows developers to modify attributes like color, height, and roof shape to meet specific project needs.

**3. Integration:**

- Compatible with mapping services, supporting custom map tiles and GeoJSON sources.

### Pipeline

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3dgis/streets_roof_property.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

OSMBuilding processes GeoJSON data to create triangle meshes for 3D rendering using the following steps:

1. **Load GeoJSON Data:**

   - Iterate through each feature in the `geojson.features` array.

2. **Process Each Feature:**

   - Pass each feature into the `triangulate` function to generate 3D geometry.

3. **Base Mesh (via `addBuilding`):**

   - **Convert Geometry:** Transform the feature’s 2D latitude and longitude into local 3D coordinates.
   - **Create Base:** Generate a triangle mesh of the building’s ground footprint using a triangulation algorithm like `earcut`.
   - **Extrude Walls:** Create vertical walls by connecting the base to vertices at the building’s specified height.

4. **Roof Mesh (via `createRoof`):**

   - **Interpret Roof Properties:** Use attributes like height, shape, and direction to determine roof vertices.
   - **Generate Roof Shape:** Apply specific logic based on the roof’s shape (e.g., flat or skillion) to build the triangle mesh.

5. **Combine Geometry:**

   - Consolidate vertices and indices from the base, walls, and roof into a shared geometry buffer.

6. **Render 3D Mesh:**

   - Send the combined triangle mesh to a rendering engine like WebGL or Three.js.

### Simple 3D Buildings Schema

The [Simple 3D Buildings](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings) schema standardizes 3D attributes in OSM, enhancing building visualization by defining their three-dimensional properties.

#### Key Components:

1. **Building Outlines (`building=*`):**

   - Represent the building’s footprint.
   - Include attributes like address, name, overall height, and operator.

2. **Building Parts (`building:part=*`):**

   - Specify sections of a building with distinct physical characteristics.
   - Support detailed modeling of complex structures.

3. **Height Attributes:**

   - `height=*`: Total height of the building or part.
   - `min_height=*`: Starting height above the ground.
   - `building:levels=*`: Number of levels above ground.
   - `roof:levels=*`: Number of levels within the roof.

4. **Roof Attributes:**

   - `roof:shape=*`: Specifies the roof shape (e.g., flat, gabled).
   - `roof:height=*`: Vertical height of the roof.
   - `roof:material=*`: Roof material (e.g., tiles, metal).
   - `roof:orientation=*`: Orientation, particularly for asymmetrical roofs.

5. **Material and Color Attributes:**

   - `building:material=*` and `building:colour=*`: Define the facade’s primary material and color.
   - `roof:material=*` and `roof:colour=*`: Specify roof material and color.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3dgis/roof_type.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

By using this schema, OSM contributors improve data quality for richer visualization and urban analysis.

---

### Planet OSM

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3dgis/streets_Planetiler.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Planetiler is a high-performance tool for generating vector tiles from geographic datasets like OSM. Designed for speed and efficiency, it can create global maps in hours on a single machine. The tool outputs data in protobuf format, categorizing it into layers like water, buildings, and transport.

Supporting OSMBuilding in production opens up numerous applications, as evidenced by Cesium’s use of OSM data. However, OSMBuilding raised concerns in 2020 over Cesium’s trademark “Cesium OSM Buildings,” fearing confusion with their own open-source project.

---

## Others

### Instance Objects in Streets.GL

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3dgis/streets_tree.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Streets.GL supports instance objects for commonly occurring features. For example, it can draw trees in regions labeled as "plant" by instancing tree models.

### Terrain

Streets.GL generates detailed 3D terrain using heightmaps sourced from ArcGIS Online services.

### Rendering

The rendering pipeline incorporates advanced techniques, including deferred shading with PBR, Temporal Anti-Aliasing (TAA), realistic atmosphere effects, and aerial perspective rendering.

---

## Conclusion

Streets.GL, OSMBuilding, and related tools exemplify the powerful intersection of open-source technology and geospatial visualization. By leveraging detailed schemas like Simple 3D Buildings, advanced rendering pipelines, and efficient data tools like Planetiler, these projects provide intuitive ways to understand and interact with urban landscapes. Together, they push the boundaries of what is possible in the realm of GIS, making geographic data accessible and visually compelling for diverse applications. As these tools continue to evolve, they promise to drive innovation in fields ranging from urban planning to real-time 3D mapping.
