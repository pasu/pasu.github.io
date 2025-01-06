---
layout: post
title: DDG Curvature
date: 2025-01-04 20:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

### Exploring Curvature

A **continuous curve** is a fundamental concept in mathematics, appearing in fields ranging from physics to computer graphics. Understanding its properties, such as the tangent, normal, and curvature, provides valuable insights into its geometry and behavior. Let’s delve into these ideas in detail.

---

### What Is a Continuous Curve?

A **parameterized curve** in the 2D plane can be defined as a mapping:

$$
\gamma(s): [0, L] \to \mathbb{R}^2
$$

where:

- **s** is the parameter, often representing arc length, defined in the interval $$[0, L]$$.
- $$\gamma(s) = (x(s), y(s))$$ specifies the position of a point on the curve.

---

### Tangent Vector of a Curve

The **tangent vector** gives the direction of the curve at a specific point $$\gamma(s)$$. It is defined as the derivative of the curve with respect to the parameter $$s$$:

$$
T(s) = \frac{d}{ds} \gamma(s) = \left(\frac{dx}{ds}, \frac{dy}{ds}\right)
$$

If the curve is **arc-length parameterized** (where $$s$$ directly measures the distance along the curve).

The tangent vector points in the direction in which the curve is moving at $$\gamma(s)$$, making it an essential tool for understanding the geometry of the curve.

---

### Normal Vector of a Curve

The **normal vector** is perpendicular to the tangent vector and provides the “sideways” direction of the curve at a given point. In 2D, the normal vector is obtained by performing a quarter-turn rotation (90° counter-clockwise) on the tangent vector. This is achieved using the **rotation operator**:

$$
\mathcal{R}(x, y) = (-y, x)
$$

Thus, for a tangent vector $$T(s) = (T_x(s), T_y(s))$$, the normal vector $$N(s)$$ is:

$$
N(s) = (-T_y(s), T_x(s))
$$

The tangent and normal vectors satisfy the following:

- They are orthogonal: $$T(s) \cdot N(s) = 0$$.
- $$T(s)$$ represents the direction of the curve’s motion, while $$N(s)$$ represents the direction perpendicular to it.

---

### Curvature of a Curve

The **curvature** quantifies how sharply a curve bends at a given point. It is defined as the rate of change of the tangent vector $$T(s)$$ with respect to the arc-length parameter $$s$$:

$$
\kappa(s) = \left\|\frac{dT(s)}{ds}\right\|
$$

In simple terms, curvature measures how quickly the direction of the tangent vector changes as you move along the curve.

#### Geometric Interpretation

- **High Curvature**: The curve bends sharply.
- **Low Curvature**: The curve is almost straight.
- For a **circle** of radius $$r$$, the curvature is constant everywhere: $$\kappa = \frac{1}{r}$$.

#### Signed Curvature

In 2D, curvature can also carry a **sign** to indicate the direction of bending:

- **Positive curvature**: The curve bends counter-clockwise.
- **Negative curvature**: The curve bends clockwise.

The signed curvature is often computed as:

$$
\kappa(s) = \frac{\det(\gamma'(s), \gamma''(s))}{\|\gamma'(s)\|^3}
$$

where $$\det(\gamma'(s), \gamma''(s))$$ is the determinant of the tangent and second derivative vectors, capturing the orientation of the bend.

---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/smooth_curve.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Summary of Relationships

1. **Tangent Vector $$T(s)$$**: Indicates the direction of motion.
2. **Normal Vector $$N(s)$$**: Points perpendicular to $$T(s)$$, describing the sideways direction.
3. **Curvature $$\kappa(s)$$**: Measures the rate of bending of the curve.

These elements together form the core tools for studying and analyzing the geometry of curves, enabling applications from path planning in robotics to the study of dynamic systems.

---

### Discrete Curvature

A **discrete curve** is a piecewise linear parameterized curve, defined as a sequence of vertices $$\{\gamma_i\}$$, connected by straight line segments. Unlike smooth curves, discrete curves do not have a continuous tangent or curvature, which poses challenges in defining curvature. Direct application of curvature definitions from smooth curves results in values that are either zero (for straight segments) or infinite (at sharp corners).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/discrete_curve.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To address this, we use **approximations of curvature** based on discrete geometry concepts.

#### Turning Angle

One approach to defining discrete curvature is through the **turning angle** at each vertex of the curve. For a vertex $$\gamma_i$$, the turning angle is defined as the angle between the vectors $$(\gamma_i - \gamma_{i-1})$$ and $$(\gamma_{i+1} - \gamma_i)$$:

$$
\theta_i = \text{angle}(\gamma_i - \gamma_{i-1}, \gamma_{i+1} - \gamma_i).
$$

The curvature at vertex $$i$$ can then be approximated as the turning angle normalized by some measure, such as the arc length between the vertices. For simplicity:

$$
\kappa_i = \theta_i,
$$

This mathematical formulation expresses the **variation of the curve length** due to a perturbation $$\eta(s)$$. Let’s improve the explanation around this concept to clarify its significance and provide proper context.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/turning_angle.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

#### Length Variation of a Curve

Given a smooth parameterized curve $$\gamma(s)$$, we consider a perturbation of the curve by a smooth function $$\eta(s)$$, which modifies the original curve as:

$$
\gamma_\epsilon(s) = \gamma(s) + \epsilon \eta(s),
$$

where $$\epsilon$$ is a small parameter. The goal is to evaluate how the length of the curve changes under this perturbation at $$\epsilon = 0$$.

##### Length Functional

The length of the perturbed curve $$\gamma_\epsilon(s)$$ is given by:

$$
\text{Length}(\gamma_\epsilon) = \int_0^{L} \|\gamma_\epsilon'(s)\| \, ds.
$$

Differentiating the length functional with respect to $$\epsilon$$ and evaluating at $$\epsilon = 0$$, we get the length variation:

$$
\frac{d}{d\epsilon}\Big|_{\epsilon=0} \text{Length}(\gamma_\epsilon) = -\int_0^L \langle \eta(s), \kappa(s)N(s) \rangle \, ds,
$$

where:

- $$\eta(s)$$ is the perturbation function, representing the deformation of the curve.
- $$\kappa(s)$$ is the curvature of the curve at each point.
- $$N(s)$$ is the unit normal vector to the curve.
- $$\langle \cdot, \cdot \rangle$$ denotes the dot product in $$\mathbb{R}^2$$.

##### Geometric Interpretation

This formula reveals that the change in length depends on:

1. The **projection of the perturbation** $$\eta(s)$$ onto the normal direction $$N(s)$$.
2. The **curvature** $$\kappa(s)$$ of the curve.

Therefore, the motion that most quickly decreases length is $$\eta = \kappa N$$. And it becomes much easier in the discrete setting: just take the gradient of length with respect to vertex positions.

In the discrete setting, the motion that minimizes the length of a curve at each vertex can be expressed in terms of the **turning angle** at that vertex. Specifically, the gradient of the curve length becomes proportional to $$ 2 \sin(\theta_i / 2) N_i $$, where $$ \theta_i $$ is the angle between the adjacent edges at vertex $$ i $$, and $$ N_i $$ is the normal direction at that vertex. Let’s break this down:

##### Discrete Length and Turning Angle

For a discrete curve, the total length is:

$$
\text{Length}(\gamma) = \sum_{i=1}^n \|\gamma_i - \gamma_{i-1}\|,
$$

The turning angle $$\theta_i$$ at a vertex is the angle between the two adjacent edges:

$$
\theta_i = \text{angle}(\gamma_i - \gamma_{i-1}, \gamma_{i+1} - \gamma_i).
$$

##### Gradient of Length

At each vertex, the gradient of the length $$\nabla_{\gamma_i} \text{Length}(\gamma)$$ (from earlier) is derived as:

$$
\nabla_{\gamma_i} \text{Length}(\gamma) = \frac{\gamma_i - \gamma_{i-1}}{\|\gamma_i - \gamma_{i-1}\|} + \frac{\gamma_i - \gamma_{i+1}}{\|\gamma_{i+1} - \gamma_i\|}.
$$

This gradient can be interpreted geometrically in terms of $$\theta_i$$ and the **unit normal vector** $$N_i$$. It simplifies to:

$$
\nabla_{\gamma_i} \text{Length}(\gamma) = 2 \sin\left(\frac{\theta_i}{2}\right) N_i,
$$

where:

- $$ \theta_i/2 $$ is half the turning angle.
- $$ N_i $$ is the inward or outward unit normal at vertex $$i$$, depending on the curve's orientation.

The gradient of length is equal to the curvature times the normal, we have the second equivalent definition as length variation:

$$
   \kappa_i^B = 2 \sin\left(\frac{\theta_i}{2}\right)
$$

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/length_variation.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Relationship Between the Two

For small $$\theta_i$$ (when the curve bends only slightly):

$$
\kappa_i^B \approx \theta_i,
$$

since $$ \sin(\theta_i / 2) \approx \theta_i / 2 $$ when $$\theta_i$$ is small.

This shows that the **length variation** curvature ($$ \kappa_i^B $$) is a refined and scaled version of the **turning angle** curvature ($$ \kappa_i^A $$), particularly useful when considering the discrete gradient of the curve's length.

---

#### Steiner Formula for Smooth Curves

The **Steiner Formula** provides a powerful connection between the geometry of a curve and how its length changes as the curve is offset in the normal direction. Here’s the explanation in detail:

If a smooth curve $$\gamma$$ is moved at a constant distance $$\epsilon$$ in the **normal direction**, then the new length of the curve is given by:

$$
\text{Length}(\gamma + \epsilon N) = \text{Length}(\gamma) - \epsilon \int_0^L \kappa(s) \, ds.
$$

##### Key Insights:

1. **Offset Motion**: Moving in the normal direction affects the length of the curve proportionally to the **total curvature**, i.e., the integral of $$\kappa(s)$$ along the arc length.
2. **Geometric Meaning**: If the curve bends a lot (high curvature), offsetting it decreases the length more significantly. For flat or nearly straight curves, the change in length is minimal.

##### Discrete Setting

In discrete curves, we offset each edge segment of the curve. The challenge lies in connecting these new offset segments consistently. Several natural strategies include:

###### A. Circular Arc of Radius $$\epsilon$$:

- Each corner is joined with a small arc, mimicking the curvature of the original smooth curve.
- This approach approximates the smooth curve behavior, including how curvature influences the overall length.

###### B. Straight Line Connection:

- Offset segments are connected by straight lines.
- Simpler to implement but less faithful to smooth curvature effects.

###### C. Extending Edges Until Intersection:

- Extend the offset edges until they intersect, creating natural meeting points between segments.
- Reflects how many engineering applications handle discrete curves but introduces additional sharp features.

These equations express the **length variation** of a discrete curve under different curvature approximations, using turning angle ($$\theta_i$$) and its trigonometric variants. Let’s clarify the context and interpretation:

$$
\text{Length}_A = \text{Length}(\gamma) - \epsilon \sum_i \theta_i
$$

$$
\text{Length}_B = \text{Length}(\gamma) - \epsilon \sum_i 2 \sin\left(\frac{\theta_i}{2}\right)
$$

$$
\text{Length}_C = \text{Length}(\gamma) - \epsilon \sum_i 2 \tan\left(\frac{\theta_i}{2}\right)
$$

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/stein.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

##### Small $$\theta_i$$ Approximation

For small $$\theta_i$$, we can use:

$$
\sin\left(\frac{\theta_i}{2}\right) \approx \tan\left(\frac{\theta_i}{2}\right) \approx \frac{\theta_i}{2}.
$$

This makes all three formulas effectively equivalent when the turning angles are small. However, for larger angles, $$\sin(\theta_i / 2)$$ and $$\tan(\theta_i / 2)$$ offer better approximations.

---

#### Osculating Circle

The **osculating circle** is the circle that best approximates a smooth curve at a given point.

- Its radius matches the radius of curvature of the curve, i.e., it captures the curve’s local bending behavior.
- The **curvature** $$\kappa$$ of the curve is the reciprocal of the osculating circle’s radius:

$$
\kappa = \frac{1}{R}.
$$

This geometric approach provides a simple and intuitive way to understand curvature as the "tightness" of bending.

In the discrete setting, an analogous concept involves the **circumcircle** passing through three consecutive vertices of a discrete curve:

$$\kappa_i^D = \frac{1}{R_i} = \frac{2 \sin(\theta_i)}{\omega_i}$$

where $$R_i$$ is the circumcircle radius for the vertices $$v_{i-1}, v_i, v_{i+1}$$.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/osculating.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

##### Comparison with Other Curvature Approximations

The osculating circle method differs from previous discrete curvature approximations, such as the turning angle or length variation, in its direct connection to geometric properties:

1. **Turning Angle**: Measures the rate of direction change without explicit geometric constructs.
2. **Length Variation**: Relates to changes in curve length when offset, often smoothed over multiple vertices.
3. **Osculating Circle**: Provides a direct geometric measure based on the localized radius of bending, connecting smoothly to the smooth setting.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DDG/four.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

#### Key Properties of Curvature Flows

When studying curvature-based flows on curves, there are several fundamental properties that help in understanding their behavior:

1. **Total Curvature**
   **Property**: The **total curvature** remains constant throughout the flow.

   - For smooth curves, the total curvature is $$\int_0^L \kappa(s) \, ds$$.
   - In the discrete case, the total curvature is typically expressed as $$\sum_i \kappa_i$$ (using one of the discrete definitions of curvature).
   - This conservation is tied to intrinsic geometric properties of the curve.

2. **Drift**
   **Property**: The center of mass of the curve does not drift from the origin during the flow.

   - For a parameterized curve $$\gamma(s)$$, the center of mass is given by:

     $$
     \text{Center of Mass} = \frac{1}{L} \int_0^L \gamma(s) \, ds.
     $$

   - The non-drifting property ensures that the motion of the curve due to curvature flow does not introduce translational shifts in the overall system.

3. **Roundness (Stationary for Circular Curves)**
   **Property**: Up to rescaling, the flow is stationary for circular curves.
   - Circular curves represent an equilibrium state under curvature flows because their curvature $$\kappa = 1/r$$ is constant everywhere.
   - This means that circular shapes simply contract (or expand) uniformly during the flow but retain their geometry.
   - The radius of the circle may change over time, but the overall shape remains a perfect circle.

|              | Total | Drift | Round |
| :----------- | :---: | ----: | ----: |
| $$\kappa^A$$ |   √   |     × |     × |
| $$\kappa^B$$ |   ×   |     √ |     × |
| $$\kappa^D$$ |   ×   |     × |     √ |

No choice of discrete curvature simultaneously captures all three properties of the smooth flow.

### Conclusion

Curvature and its related properties, such as tangent vectors, normal vectors, and curvature flows, provide a fundamental framework for understanding the geometry of curves in both smooth and discrete settings. Key concepts like the Steiner formula, osculating circle, and curvature approximations help quantify and analyze the bending and motion of curves. While no single discrete curvature captures all the properties of smooth flows, these tools collectively enable deeper exploration and application of geometric principles in various fields, from robotics to computer graphics.
