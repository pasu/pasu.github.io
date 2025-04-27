---
layout: post
title: DDG Discrete Exterior calculus
date: 2025-04-24 10:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

## Discrete Exterior Calculus

本节的重点是两方面：$d_k$ (discrete exterior derivative)和$\star_k$ (discrete Hodge star)。但有不少内容和上一篇《Discrete Differential Forms》中已经介绍，所以本篇对这部分仅作简单补充。

通常，$d$表示smooth exterior derivative，而$\hat{d}$表示discrete exterior derivative。$d_k$的矩阵表达方式在上篇介绍，不再赘述。

---

## Dual Forms

### 1. Poincaré Duality

在光滑（smooth）微分几何中，**Poincaré Duality**表达了一个基本事实：  
空间中的k维元素（如k-simplex）的行为可以通过其(n-k)维对偶元素（dual cell）来捕捉。

**物理直观**：  
- **Primal k-forms**记录的是“沿元素的量”，例如沿一条edge的circulation。  
- **Dual (n–k)-forms**记录的是“穿过元素的量”，例如穿过一个face的flux。

换句话说，primal元素描述沿着边界流动的量（circulation），dual元素描述穿过边界的量（flux）。

以二维网格为例：
- 0-simplex（点）对应 dual 2-cell（三角形）
- 1-simplex（边）对应 dual 1-cell（dual edge）
- 2-simplex（三角形）对应 dual 0-cell（dual vertex）

Poincaré Duality让我们可以从一个简单体（simplex）跳到其对偶元素（dual cell）上处理问题。

### 2. Dual Discrete Differential k-Form

一个**dual discrete differential k-form**，就是在每个dual k-cell上记录一个数值。
对应关系总结如下：

- dual 0-form：每个dual vertex一个值（实际上是每个triangle一个值）
- dual 1-form：每条dual edge一个值（实际上是每条primal edge一个值）
- dual 2-form：每个dual 2-cell一个值（实际上是每个primal vertex一个值）

这种定义和primal discrete differential k-form非常对称，只不过记录的是在dual complex上的数据。

### 3. Primal vs. Dual Discrete Differential k-Forms

对比一下在二维triangle mesh上的primal与dual离散k-forms：

| k-form | Primal (存储在primal elements上) | Dual (存储在dual elements上) |
| :---: | :--- | :--- |
| 0-form | 顶点 (vertices) | 三角形 (triangles) |
| 1-form | 边 (edges) | 边 (edges) |
| 2-form | 三角形 (triangles) | 顶点 (vertices) |

注意：

- primal与dual上的元素数目通常不一样，特别是0-forms和2-forms。
- 实际上，为了方便，我们通常**仍然在primal mesh上存储dual values**（比如在triangle上存dual 0-form的值）。

### 4. Dual Exterior Derivative

离散dual exterior derivative（记作 \(d^*\)）的定义本质上和primal一样：

- 对一个dual (k+1)-cell，计算其boundary上各个dual k-cell的数值之和。
- 每一项的符号由相对方向（orientation）决定。

**例子**：  

设有dual 2-cell，其边界由若干dual 1-cell围成，那么dual exterior derivative就是这些dual 1-forms的加权和。

和primal情况一样，离散dual exterior derivative同样满足：
- 不需要长度、面积等几何量，只靠topology（拓扑结构）！
- 可以通过Stokes’ theorem严格推导，保证d∘d = 0。

### 5. Interpolation Challenge for Dual Forms

虽然primal k-forms可以很容易用Whitney forms进行插值（interpolation），但dual cells形状奇怪、维度嵌套复杂，不能像primal simplex那样直接用简单的插值函数：

- k-simplex有清晰的几何意义（如edge、triangle），而dual k-cell往往**形状不规则**。
- Dual 0-form无法简单用线性函数插值。
- Dual cells（尤其是higher dimension，如dual 2-cells in 3D）甚至可能不是平面（non-planar）的！
- 为了插值dual forms，需要用到**generalized barycentric coordinates**，比如Wachspress coordinates。

因此，在实践中，很多方法宁可直接在primal mesh上插值，再通过数值映射到dual mesh，而不是直接在dual mesh上插值。

## Discrete Hodge Star

在DEC中，构建Discrete Hodge Star时，我们通常使用**circumcentric dual**。

**Circumcentric dual**的特点是：

- 每个primal k-simplex对应一个dual (n–k)-cell。
- 具体构造方式：
  - 0-simplex（顶点）：自身就是dual 2-cell中心。
  - 1-simplex（edge）：dual是连接edge两端triangle circumcenters的线段。
  - 2-simplex（三角形）：dual是连接三角形circumcenter到其顶点形成的区域。
- Primal simplex和其dual cell在局部是**正交（orthogonal）**的。
  
在circumcentric dual体系下，Discrete Hodge Star本质上连接了两种积分：

- 把一个连续的k-form $\alpha$ 积分（integrate）在primal k-simplex $\sigma$ 上，得到一个离散值 $\hat{\alpha}$。
- 把Hodge变换后的(n–k)-form $\star \alpha$ 积分在dual (n–k)-cell $\star \sigma$ 上，得到另一个离散值 $\hat{\star \alpha}$。

两者关系为：

$$
\frac{\hat{\star \alpha}}{\hat{\alpha}} \approx \frac{|\sigma^\star|}{|\sigma|}
$$

**直观理解**：

- 在1-form情形下，\(\hat{\alpha}\) 表示沿着一条edge的circulation，而\(\hat{\star \alpha}\)表示穿过对应dual edge的flux。
- 如果form是平滑的，或者网格细致（small elements），这种近似非常准确。

所以，对应的$1$-forms (2D): $\hat{\star \alpha} := \frac{\ell^\star}{\ell} \hat{\alpha}$

对应的$2$-forms (3D)： $\hat{\omega}_{ab} := \frac{\ell_{ab}}{A_{ijk}} \hat{\omega}_{ijk}$

### Diagonal Hodge Star

$\hat{\alpha}$为input, 而$\hat{\star \alpha}$为output， 对应的对角矩阵为：

$$
\star_k :=  
\begin{bmatrix}
\frac{|\sigma_1^\star|}{|\sigma_1|} &  &  0 \\
  & \ddots &  \\
0 &  & \frac{|\sigma_N^\star|}{|\sigma_N|} \\
\end{bmatrix}

\in \mathbb{R}^{N \times N}
$$

这个矩阵是对角的（diagonal），意味着离散Hodge star在基底表示下是局部、独立的。

实际上，**构建Discrete Hodge Star有多种方法**，但**没有一种是完美准确的**。常见选择包括：

- **Volume Ratio（体积比法）**  
  - 最典型、也是DEC中最常用的方法（Hirani, Desbrun等人）。  
  - 通常选择**circumcentric dual**（如果网格是Delaunay/Voronoi结构），这样dual volumes是正的，且与primal元素局部正交。
  - 更一般地，也可以使用**正交dual**（比如weighted triangulation/power diagram生成的dual mesh）。
  
- **Barycentric Dual**  
  - 另一种选择是使用**barycentric dual**（Auchmann & Kurz，Alexa & Wardetzky等人的工作）。
  - 优点是构造简单，dual volumes总是正的。  
  - 缺点是没有正交性，因此在数值精度上稍差。

- **Galerkin Hodge Star**  
  - 采用Galerkin方法，基于Whitney forms上定义的$L^2$内积，得到的离散Hodge Star。  
  - 特点是：矩阵**不是对角的**，但仍然是**稀疏的**。
  - 这是在FEEC（Finite Element Exterior Calculus，Arnold等人）中标准做法。

- **Mass Lumping**  
  - 在Galerkin Hodge Star基础上，如果进一步进行**mass lumping**（把质量矩阵对角化近似），可以重新回到类似**circumcentric Hodge Star**的形式。

总结：  
- 如果追求简洁高效（比如DEC里常见应用），通常用**circumcentric volume ratio**方法。
- 如果追求更高数值精度（比如有限元计算/FEEC框架），会使用**Galerkin Hodge Star**，即便矩阵不是对角的。

---

## 总结

本文简要回顾了离散外微分（Discrete Exterior Derivative）与离散Hodge Star的基本构建方法，重点介绍了primal与dual形式之间的对应关系，以及如何通过积分与体积比来实现两者之间的近似变换。通过引入Poincaré对偶性（Poincaré Duality），我们理解了在离散网格上处理k-form与(n–k)-form的物理直觉。文中还讨论了不同类型的Hodge Star构造方案，包括circumcentric dual、barycentric dual以及Galerkin方法，说明了在精度与简洁性之间的权衡。此外，我们强调了离散外微分算子（$d$）本质上是通过有向边界求和实现的，并且严格满足Stokes定理，从而保证了离散微分结构的严谨性。  
整体来看，Discrete Exterior Calculus提供了一种兼顾几何直观与计算稳定性的离散微分框架，为处理曲面、流体、弹性等问题奠定了坚实基础。