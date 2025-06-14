---
layout: post
title: DDG Smooth Surfaces
date: 2025-06-11 10:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

## 光滑曲面

在上一部分中，我们研究了一维曲线的几何性质，包括光滑曲线（如参数化曲线、弧长参数化、曲率等）和离散曲线（如折线、离散曲率等）。现在，我们将视角扩展到二维曲面，探讨如何将曲线的概念推广到更高维度的几何对象。

#### 局部视角  

最初，我们通过**局部几何**来描述曲面。与曲线类似，曲面的**参数化**提供了一种**外在描述**，即曲面如何嵌入在空间中。例如，给定一个二维区域 \( U \subset \mathbb{R}^2 \) 和一个映射 \( f: U \to \mathbb{R}^3 \)，我们可以通过 \( f \) 的像 \( f(U) \) 来表示曲面。这种描述依赖于曲面的具体位置和形状在空间中的表现。

#### 全局视角  

通过将多个局部参数化片段拼接在一起，可以描述整个曲面。这种**全局描述**仍然是外在的，因为它依赖于曲面在空间中的嵌入方式。例如，球面可以通过多个局部参数化（如经纬度坐标）覆盖，最终组合成一个完整的几何对象。

### 内蕴视角 (Intrinsic)  

从全局描述出发，我们可以进一步“抛弃”曲面的空间嵌入，仅保留其**内蕴几何**。此时，曲面的形状信息由**黎曼度量**（Riemannian metric）编码，它记录了曲面上每一点的切空间中的长度和角度关系。  

- 黎曼度量 \( g(X, Y) \) 是一个光滑变化的双线性形式，满足正定性。  
- 通过度量，可以计算曲线的长度、区域的面积、切向量的夹角等，而无需知道曲面如何嵌入更高维空间。  
- **关键思想**：内蕴几何不依赖于外部空间，甚至可以描述无法嵌入低维空间的几何对象（如双曲平面）。

#### 离散视角  

在离散几何中，曲面的几何性质可以通过**边长**（内蕴）而非顶点坐标（外在）来定义。例如，三角形网格的几何完全由边长和夹角决定，无需显式指定顶点在空间中的位置。

这种从局部到全局再到内蕴的视角，不仅适用于光滑曲面，也为离散几何的研究提供了重要工具。

### 参数化曲面（Parameterized Surface）

一个**参数化曲面**是指从二维区域 $ U \subset \mathbb{R}^2 $ 到空间 $ \mathbb{R}^n $的映射：  

$$
f: U \to \mathbb{R}^n, \quad (u, v) \mapsto f(u, v)
$$

其中：  
- $ U $ 是参数域（如单位圆盘、矩形等）。  
- $ f $ 的像 $ f(U) $ 称为曲面的**图像（image）**，表示曲面在空间中的实际形状。  

通常，平滑曲面具有如下的性质：**连续性（Continuous）**，**可微性（Differentiable）**，**光滑性（Smooth, $ C^\infty $）**。

#### 示例：鞍面（Saddle Surface）

鞍面（双曲抛物面）的标准参数化可表示为：  

$$
f(u, v) = (u, v, u^2 - v^2), \quad \text{其中} \quad (u, v) \in U \subset \mathbb{R}^2
$$

这里，参数域 $ U $ 通常取单位圆盘 $ U = \{(u, v) \mid u^2 + v^2 \leq 1\} $ 或其他有界区域。

### *曲面的重新参数化（Reparameterization）

重新参数化是指用**不同的参数域映射**描述**同一个几何曲面**。例如，鞍面可以表示为：

$$
f(u,v) = (u, v, u^2 - v^2) \quad \text{或} \quad \hat{f}(s,t) = (s+t, s-t, 4st)
$$

尽管参数形式不同，但它们的像（即实际曲面）完全相同。

#### 重新参数化的意义

1. **数学灵活性**  
   - 某些计算（如积分、曲率）在特定参数化下更简单（如保角参数化）。  
2. **应用需求**  
   - 在计算机图形学中，不同的参数化可能影响纹理映射的质量或数值模拟的稳定性。  

3. **几何不变性**  
   - 曲面的本质属性（如高斯曲率）与参数化无关，但显式计算依赖参数选择。

重新参数化揭示了曲面描述中的自由度，既是理论研究的工具，也是实际应用中需解决的难题（如形状匹配）。理解这一概念有助于区分几何的**本质属性**与**描述方式**的差异。

### 嵌入曲面（Embedded Surface）

一个**嵌入曲面**是指通过参数化映射 $ f: U \to \mathbb{R}^3 $ 将二维区域 $ U $ **无自交**、**无撕裂**地放入三维空间，且保持原域的基本拓扑结构。  
- **关键要求**：曲面不能“穿过自身”（无自交），也不能出现“粘合”（如将圆柱两端粘合为环面时需特殊处理）。

参数化 $ f $ 是一个**嵌入**，若满足：  
1. **连续双射**：$ f $ 是 $ U $ 到 $ f(U) $ 的一一对应连续映射。  
2. **逆映射连续**：$ f^{-1}: f(U) \to U $ 也连续。  

### 曲面微分（Differential of a Surface）

曲面的微分 $ \mathrm{d}f $ 是一个关键工具，它描述了**参数域上的切向量**如何被“推前”（push forward）到**三维空间的切平面**中。  

$ \mathrm{d}f $ 将参数平面的“微小箭头” $ X $ 拉伸、旋转为曲面上的切向量，揭示了曲面的局部线性近似。

#### 坐标表示（Differential in Coordinates）

曲面的微分 $ \mathrm{d}f $ 可以显式表示为参数化的**外导数**，它将参数域 $ U \subset \mathbb{R}^2 $ 上的向量场 $ X $ 映射到曲面切空间中的向量 $ \mathrm{d}f(X) $。

给定参数化 $ f: U \to \mathbb{R}^3 $，其微分 $ \mathrm{d}f $ 可展开为：  

$$
\mathrm{d}f = \frac{\partial f}{\partial u} \mathrm{d}u + \frac{\partial f}{\partial v} \mathrm{d}v
$$

其中：  
- $ \mathrm{d}u $ 和 $ \mathrm{d}v $ 是参数域的**对偶基**（1-形式），表示沿 $ u $、$ v $ 方向的微小变化。  
- $ \frac{\partial f}{\partial u} $ 和 $ \frac{\partial f}{\partial v} $ 是曲面的**切向量**（Jacobian 矩阵的列）。  

**几何解释**：  

$ \mathrm{d}f $ 将参数平面的向量 $ X = a \partial_u + b \partial_v $ 线性组合为曲面切向量：  

$$
\mathrm{d}f(X) = a \frac{\partial f}{\partial u} + b \frac{\partial f}{\partial v}
$$

##### 推前向量场（Push Forward）

若参数域上有向量场 $ X = \alpha(u,v) \partial_u + \beta(u,v) \partial_v $，则其推前 $ \mathrm{d}f(X) $ 为：  

$$
\mathrm{d}f(X) = \alpha(u,v) \frac{\partial f}{\partial u} + \beta(u,v) \frac{\partial f}{\partial v}
$$

##### 鞍面示例

考虑鞍面 $ f(u,v) = (u, v, u^2 - v^2) $：

1. **求偏导**：  

   $$
   \frac{\partial f}{\partial u} = (1, 0, 2u), \quad \frac{\partial f}{\partial v} = (0, 1, -2v)
   $$

2. **向量场推前**：对 $ X = \frac{3}{4} (\partial_u - \partial_v) $，有：  
   
   $$
   \mathrm{d}f(X) = \frac{3}{4} \left( (1,0,2u) - (0,1,-2v) \right) = \frac{3}{4} (1, -1, 2(u + v))
   $$

   在点 $ (u,v) = (0,0) $ 处，$ \mathrm{d}f(X) = \left( \frac{3}{4}, -\frac{3}{4}, 0 \right) $。

### 雅可比矩阵（Jacobian）

对于映射 $ f: \mathbb{R}^n \to \mathbb{R}^m $，其**雅可比矩阵** $ J_f $ 是一个 $ m \times n $ 矩阵，表示 $ f $ 的微分 $ \mathrm{d}f $ 在标准基下的线性变换：  

$$
J_f := 
\begin{bmatrix}
\frac{\partial f^1}{\partial x^1} & \cdots & \frac{\partial f^1}{\partial x^n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f^m}{\partial x^1} & \cdots & \frac{\partial f^m}{\partial x^n}
\end{bmatrix}
$$

其中 $ f^1, \ldots, f^m $ 是 $ f $ 的分量函数，$ x^1, \ldots, x^n $ 是 $ \mathbb{R}^n $ 的坐标。

#### 几何意义

1. **微分的作用**：  
   雅可比矩阵将输入空间 $ \mathbb{R}^n $ 的切向量 $ X $ 线性映射到输出空间 $ \mathbb{R}^m $ 的切向量：  

   $$
   \mathrm{d}f(X) = J_f X
   $$

   - **曲线**（$ n=1 $）：$ J_f $ 是切向量 $ \gamma'(t) $。  
   - **曲面**（$ n=2, m=3 $）：$ J_f $ 的列向量张成切平面（如 $ \partial_u f, \partial_v f $）。  

2. **局部线性近似**：  

   $ J_f $ 描述了 $ f $ 在一点附近的**最佳线性逼近**，即：  

   $$
   f(p + h) \approx f(p) + J_f h \quad \text{（当 } \|h\| \to 0\text{）}
   $$

### 浸入曲面（Immersed Surface）

一个参数化映射 $ f: U \to \mathbb{R}^n $ 称为**浸入（immersion）**，如果其微分 $ \mathrm{d}f $ 在每一点 $ p \in U $ 都是**非退化的**，即：  

$$
\mathrm{d}f(X)|_p = 0 \iff X|_p = 0 \quad \forall p \in U.
$$

- **几何意义**：曲面的切空间在每点都保持二维性，没有“压扁”或“退化”。
- **关键性质**：即使曲面全局自交（如自交的 Klein 瓶），局部仍可定义切平面、法向量等几何量。

#### 示例：球面参数化

考虑球面的标准参数化：  

$$
f(u,v) = (\cos u \sin v, \sin u \sin v, \cos v), \quad v \in (0, \pi)
$$

其微分 \( \mathrm{d}f \) 的矩阵表示为：  

$$
J_f = 
\begin{bmatrix}
-\sin u \sin v & \cos u \cos v \\
\cos u \sin v & \sin u \cos v \\
0 & -\sin v
\end{bmatrix}
$$

- **问题**：当 $ v = 0 $ 或 $ v = \pi $（两极）时，$ \frac{\partial f}{\partial u} = (0, 0, 0) $，微分退化 （无法向东西或南北行走）。  
- **结论**：球面参数化在**两极不是浸入**（无法定义东西方向的切向量）。  

浸入是微分几何中“最弱”的光滑性条件，允许全局复杂性（如自交）但保留局部可计算性。理解浸入有助于处理实际中的非理想曲面（如扫描重建的噪声模型）。

#### 浸入（Immersion）与嵌入（Embedding）的对比

| **特性**          | **浸入（Immersion）**                          | **嵌入（Embedding）**                          |
|-------------------|-----------------------------------------------|-----------------------------------------------|
| **自交性**        | 允许全局自交（如 Klein 瓶在 $ \mathbb{R}^3 $） | 禁止自交（如球面、环面）                    |
| **局部性质**      | 每点处微分 $ \mathrm{d}f $ 满秩，切空间二维           | 浸入 + 全局单射（无自交）                      |
| **拓扑保持**      | 仅局部同胚于平面                              | 全局同胚于参数域的拓扑                         |
| **物理合理性**    | 非物理（自交）                                | 物理可实现（无自交）                           |

### 正则同伦（Regular Homotopy）

正则同伦描述了两个浸入曲面 $ f_0, f_1: U \to \mathbb{R}^3 $ 之间通过一系列“良好形变”相互转化的过程。具体表现为：  

存在连续映射 $ h: U \times [0,1] \to \mathbb{R}^3 $，使得：  
1. **边界条件**：$ h(x,0) = f_0(x) $，$ h(x,1) = f_1(x) $；  
2. **浸入保持**：对任意固定 $ t \in [0,1] $，映射 $ h(\cdot, t) $ 仍是浸入（即微分 $ d h_t $ 处处满秩）。  

**几何意义**：形变过程中不允许曲面出现“捏缩”（pinches）、“尖锐褶皱”（sharp creases）或“停顿”（stops），始终保持局部光滑性。

### 圆与球面的外翻（Circle Eversion vs. Sphere Eversion）

- 平面闭合曲线的**正则同伦类**由其**环绕数（Turning Number）** $ k $ 决定。  
- **环绕数**：单位切向量绕原点的旋转次数（逆时针为 $ +1 $，顺时针为 $ -1 $）。  
- **结论**：  
   - 标准圆 $ k=+1 $ 无法通过浸入形变（正则同伦）变为 $ k=-1 $ 的“内翻圆”。  
   - 二维平面上不允许曲线自交时穿过自身（需第三维空间）。  

**反直觉的突破**  
   - 在三维空间中，球面可通过**自交浸入**实现外翻（Inside-Out），且过程中始终保持光滑（正则同伦）。  
   - **关键区别**：三维空间提供了额外的自由度，允许自交曲线动态移动并最终消除。  

2. **历史与人物**  
   - **Bernhard Morin（1976）**：首位给出具体外翻方法的数学家（虽本人失明，但通过触觉想象完成）。  
   - *Outside In*（1994）：几何中心制作的经典动画，直观展示外翻过程。  
   - **Optiverse**：Francis、Kusner、Sullivan 提出的“最优”外翻路径（能量最小化）。  

3. **外翻步骤（直观描述）**  
   - **阶段1**：引入“凹陷”使球面自交为环形。  
   - **阶段2**：逐步推动自交环向两极移动并消失。  
   - **结果**：初始外表面最终变为内表面。  

> *“我们的空间想象源于手的操作…而非视觉。”*  
> ——Bernhard Morin（以触觉“看见”几何的盲人数学家）

从圆的不可外翻到球面的可外翻，揭示了维度对几何形变的深刻影响。这一现象不仅是微分拓扑的经典课题，也是连接数学理论与可视化技术的桥梁。

### 黎曼度量（Riemannian Metric）

黎曼度量 $ g $ 是光滑流形（如曲线、曲面）上的一种结构，用于测量**切向量的长度**和**夹角**。具体表现为：  

- 对每一点 $ p $ 的切空间 $ T_p M $，$ g $ 给出一个正定对称双线性形式：  

  $$
  g_p: T_p M \times T_p M \to \mathbb{R}, \quad (X, Y) \mapsto g_p(X, Y).
  $$

黎曼度量 $ g $ 不同于距离函数 $ d(x, y) $，后者是全局的测地线长度。

1. **长度与角度**：  
   - 向量 $ X $ 的长度：$ \|X\| = \sqrt{g(X, X)} $。  
   - 两向量 $ X, Y $ 的夹角：$ \theta = \arccos\left( \frac{g(X, Y)}{\|X\| \|Y\|} \right) $。  
2. **局部几何**：$ g $ 决定了曲面的**第一基本形式**（如曲率、测地线）。  

### 浸入诱导的度量（Metric Induced by an Immersion）

对于浸入（immersion）$ f: U \to \mathbb{R}^n $，如何正确测量其参数域 $ U \subset \mathbb{R}^2 $ 上切向量 $ X, Y $ 的内积？  

- **错误做法**：直接使用参数域 $ U $ 的欧氏内积 $ \langle X, Y \rangle_{\mathbb{R}^2} $。  
- **原因**：参数域的平面内积无法反映曲面在空间中的实际几何（如拉伸或弯曲）。  

**正确方法：诱导度量（Induced Metric）**

定义曲面上的内积为推前切向量的欧氏内积：  

$$
g(X, Y) := \langle \mathrm{d}f(X), \mathrm{d}f(Y) \rangle_{\mathbb{R}^n},
$$

其中 $ \mathrm{d}f $ 是微分（雅可比矩阵），将参数域的向量 $ X $ 映射到曲面的切空间。

### 诱导度量（Induced Metric）的矩阵表示与计算

诱导度量 $ g $ 可以表示为一个对称正定的 $ 2 \times 2 $ 矩阵 $ \mathbf{I} $，称为**第一基本形式**。其定义如下：  

$
g(X, Y) = X^\top \mathbf{I} Y,
$

其中：
- $ X, Y $ 是参数域 $ U \subset \mathbb{R}^2 $ 上的切向量。
- 矩阵 $ \mathbf{I} $ 的分量为：  

  $$
  I_{ij} = g\left( \frac{\partial}{\partial x^i}, \frac{\partial}{\partial x^j} \right) = \left\langle \mathrm{d}f\left( \frac{\partial}{\partial x^i} \right), \mathrm{d}f\left( \frac{\partial}{\partial x^j} \right) \right\rangle.
  $$

**关键点**：  
- $ \mathbf{I} $ 通过曲面的微分 $ \mathrm{d}f $ 定义，编码了参数化导致的拉伸和扭曲。  
- 矩阵 $ \mathbf{I} $ 也可以由雅可比矩阵 $ J_f $ 计算：  
  
  $$
  \mathbf{I} = J_f^\top J_f.
  $$

#### Saddle 示例

**参数化曲面**：  

$$
f(u, v) = (u, v, u^2 - v^2), \quad (u, v) \in U \subset \mathbb{R}^2.
$$

**步骤1：计算微分 $ \mathrm{d}f $ 和雅可比矩阵 $ J_f $**  

- 切向量的偏导数：  

  $$
  \frac{\partial f}{\partial u} = (1, 0, 2u), \quad \frac{\partial f}{\partial v} = (0, 1, -2v).
  $$

- 雅可比矩阵：  
  
  $$
  J_f = 
  \begin{bmatrix}
  1 & 0 \\
  0 & 1 \\
  2u & -2v
  \end{bmatrix}.
  $$

**步骤2：计算第一基本形式 $ \mathbf{I} = J_f^\top J_f $**  

$$
\mathbf{I} = 
\begin{bmatrix}
1 & 0 & 2u \\
0 & 1 & -2v
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
2u & -2v
\end{bmatrix}
= 
\begin{bmatrix}
1 + 4u^2 & -4uv \\
-4uv & 1 + 4v^2
\end{bmatrix}.
$$

**分量解释**：  
- $ E = 1 + 4u^2 $：$ u $-方向的拉伸系数（含 $ 2u $ 的扭曲项）。  
- $ F = -4uv $：$ u $ 和 $ v $-方向的耦合项（反映曲面的非正交性）。  
- $ G = 1 + 4v^2 $：$ v $-方向的拉伸系数。

##### **3. 几何意义**

- **长度计算**：向量 $ X = (a, b)^\top $ 的长度为：  

  $$
  \|X\| = \sqrt{g(X, X)} = \sqrt{a^2 (1 + 4u^2) + 2ab (-4uv) + b^2 (1 + 4v^2)}.
  $$

- **角度计算**：两向量 $ X, Y $ 的夹角 $ \theta $ 满足：  

  $$
  \cos \theta = \frac{g(X, Y)}{\|X\| \|Y\|} = \frac{X^\top \mathbf{I} Y}{\sqrt{X^\top \mathbf{I} X \cdot Y^\top \mathbf{I} Y}}.
  $$  

在点 $ (u, v) = (1, 0) $ 处，度量矩阵为：  

$$
\mathbf{I} = 
\begin{bmatrix}
5 & 0 \\
0 & 1
\end{bmatrix}.
$$

- 向量 $ X = (1, 0)^\top $ 的长度为 $ \sqrt{5} $，而 $ Y = (0, 1)^\top $ 的长度为 $ 1 $。  
- 此时 $ g(X, Y) = 0 $，说明 $ X $ 和 $ Y $ 在该点正交。
  
诱导度量 \( \mathbf{I} \) 将曲面的内在几何从嵌入空间“拉回”到参数域，是计算长度、角度、曲率的基础。

### 共形坐标（Conformal Coordinates）

一个参数化 $ f: U \subset \mathbb{R}^2 \to \mathbb{R}^3 $ 是**共形的**（conformal），如果其诱导的黎曼度量 $ \mathbf{I} $ 满足：  

$$
\mathbf{I} = \lambda(u,v) \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \lambda(u,v) > 0.
$$

- **几何意义**：曲面的度量是参数域平面度量的**标量倍**，仅通过一个函数 $ \lambda(u,v) $ 缩放。
- **核心性质**：  
  - **保角性**：曲面上任意两向量的夹角与其在参数域中的夹角相同。  
  - **长度非均匀缩放**：长度在参数域和曲面之间按比例 $ \sqrt{\lambda(u,v)} $ 变化。

#### 共形参数化的重要性

1. **简化计算**：  
   - 度量矩阵仅含一个自由度（$ \lambda $），而非三个（$ E, F, G $），极大简化曲率、测地线等计算。  

2. **几何不变性**：  
   - 保角性使局部形状（如角度）不受参数化扭曲影响，适用于纹理映射、曲面重建。

3. **理论普适性**：  
   - 任何光滑曲面均存在共形参数化（Uniformization Theorem），而等距参数化通常不存在。

---

#### **3. 共形 vs. 等距参数化**
| **特性**          | **共形参数化**                     | **等距参数化**                     |
|-------------------|-----------------------------------|-----------------------------------|
| **度量形式**      | $ \mathbf{I} = \lambda(u,v) \mathbb{I}_2 $ | $ \mathbf{I} = \mathbb{I}_2 $（理想情况） |
| **长度保持**      | 非均匀缩放                        | 完全保持                          |
| **角度保持**      | 是                             | 是                             |
| **存在性**        | 总存在（如球面、环面）            | 仅限可展曲面（平面、圆柱）        |

#### 恩内佩尔曲面（Enneper Surface）示例

恩内佩尔曲面是一个经典的**极小曲面**（Minimal Surface），其参数化方程为：

$$
f(u,v) = \begin{bmatrix} 
uv^2 + u - \frac{1}{3}u^3 \\ 
\frac{1}{3}v(v^2 - 3u^2 - 3) \\ 
u^2 - v^2 
\end{bmatrix}
$$

- **几何特性**：具有自交性质，对称且无限延伸，是数学上研究共形度量的理想例子。

**雅可比矩阵 $ J_f $**（切向量的矩阵表示）：

$$
J_f = \begin{bmatrix} 
\frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ 
\frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \\ 
\frac{\partial f_3}{\partial u} & \frac{\partial f_3}{\partial v} 
\end{bmatrix}
= \begin{bmatrix} 
-u^2 + v^2 + 1 & 2uv \\ 
-2uv & -u^2 + v^2 - 1 \\ 
2u & -2v 
\end{bmatrix}
$$

**诱导度量 $ \mathbf{I} = J_f^\top J_f $**：

$$
\mathbf{I} = 
\begin{bmatrix} 
1 + 4u^2 + (u^2 - v^2 - 1)^2 & -4uv \\ 
-4uv & 1 + 4v^2 + (u^2 - v^2 + 1)^2 
\end{bmatrix}
$$

经过化简后，神奇地简化为：

$$
\mathbf{I} = (u^2 + v^2 + 1)^2 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}.
$$
 
恩内佩尔曲面通过其简洁的共形度量，展示了极小曲面与复分析之间的深刻联系。其度量形式 $ \mathbf{I} = \lambda(u,v) \mathbb{I}_2 $ 是理论与应用中的黄金标准，为曲面参数化提供了最优的局部几何描述。

### 抽象黎曼度量（Abstract Riemannian Metric）

黎曼度量是流形上**逐点光滑变化的内积** $ g_p $，赋予切空间 $ T_p M $ 长度和角度的测量能力。其核心在于：  
1. **内蕴性**：无需依赖嵌入空间，仅通过 $ g_p(X,Y) $ 即可定义几何量（如曲率、测地线）。  
2. **灵活性**：任意指定对称正定双线性形式 $ g_{ij} $ 均可构造合法度量（如双曲平面 $ \delta_p $）。  
3. **普适公式**：长度 $ \|X\| = \sqrt{g(X,X)} $，夹角 $ \cos\theta = \frac{g(X,Y)}{\|X\|\|Y\|} $。  

黎曼度量是“弯曲空间的尺规”，完全由局部内积决定全局几何。

#### 例子：单位圆盘的双曲度量

在单位圆盘 $ U = \{ p \in \mathbb{R}^2 \mid |p| < 1 \} $ 上定义双曲度量：

$$
g_p(X, Y) = \frac{4}{(1 - |p|^2)^2} \langle X, Y \rangle_{\mathbb{R}^2},
$$

其中 $ \langle \cdot, \cdot \rangle_{\mathbb{R}^2} $ 是欧氏内积。

1. **局部长度膨胀**  

   在点 $ p = (0.5, 0) $ 处，取向量 $ X = (1, 0) $：

   $$
   |X|_{g} = \sqrt{g_p(X, X)} = \frac{2}{1 - 0.5^2} \cdot 1 = \frac{8}{3}.
   $$
     
   **结论**：相同欧氏长度的向量在 $ p $ 点处双曲长度更大，且仅依赖 $ p $ 的局部坐标 $ |p| $。

2. **角度不变性（保角性）**  
   对任意两向量 $ X, Y $，夹角：  

   $$
   \theta = \arccos \left( \frac{g_p(X, Y)}{|X|_g |Y|_g} \right) = \arccos \left( \frac{\langle X, Y \rangle}{\|X\| \|Y\|} \right).
   $$

   **结论**：双曲度量与欧氏角度相同，仅通过 $ g_p $ 的标量因子 $ \lambda(p) = \frac{4}{(1-|p|^2)^2} $ 即可确定，无需全局信息。

3. **面积**  
   对参数域 $ D \subset U $，面积为：  

   $$
   \text{Area}(D) = \iint_D \sqrt{\det(g_p)} \, du \, dv = \iint_D \frac{4}{(1 - u^2 - v^2)^2} \, du \, dv.
   $$  

   **结论**：当 $ R \to 1 $，面积 $ \to +\infty $，与长度共同反映双曲空间的“膨胀”性质。

4. **长度**  
   在双曲度量 $ g_p $ 下，曲线 $ \gamma: [a,b] \to U $ 的长度为：  

   $$
   \text{Length}(\gamma) = \int_a^b \sqrt{g_{\gamma(t)}(\gamma'(t), \gamma'(t))} \, dt = \int_a^b \frac{2 \|\gamma'(t)\|_{\mathbb{R}^2}}{1 - |\gamma(t)|^2} \, dt.
   $$  

   **结论**：当 $ r \to 1 $，长度 $ \to +\infty $，体现双曲几何的“无限延伸”特性。

双曲度量 $ g_p $ 展示了如何仅通过局部内积定义弯曲空间的完整几何，无需全局嵌入。这是内蕴几何的核心思想——**几何即局部测量的规则**。

### 嵌入定理（Embedding Theorems）

1. **核心问题**  
   给定黎曼度量 $ g $，能否找到嵌入映射 $ f $ 使得 $ g(X,Y) = \langle \mathrm{d}f(X), \mathrm{d}f(Y) \rangle $？即：能否将抽象流形等距嵌入欧氏空间？

2. **Hilbert定理（负结果）**  
   - **双曲空间**：无法将常负曲率（如双曲平面）光滑嵌入 $ \mathbb{R}^3 $。  
   - **限制**：某些内蕴几何需更高维空间实现。

3. **Nash嵌入定理（正结果）**  
   - **存在性**：任何 $ n $-维黎曼流形均可全局嵌入 $ \mathbb{R}^N $（$ N $ 足够大，如 $ N = \frac{n(n+1)(3n+11)}{2} $）。  
   - **低维优化**：若允许 $ C^1 $ 光滑性，可嵌入 $ \mathbb{R}^{n+1} $；若初始嵌入“不拉伸距离”（short），则存在保距嵌入。

### Atlas & Charts

复杂曲面通常无法用单一参数化表示，需通过**重叠的局部坐标卡**（charts）覆盖，构成**图册**（atlas）。每个坐标卡 $ \phi_i: U_i \subset \mathbb{R}^2 \to \mathbb{R}^3 $ 提供曲面的局部参数化。

2. **度量的局部一致性**  
   - 每个坐标卡 $ \phi_i $ 诱导局部黎曼度量 $ g_i(X,Y) = \langle d\phi_i(X), d\phi_i(Y) \rangle $。  
   - **关键条件**：在坐标卡重叠区域 $ U_i \cap U_j $，度量需满足相容性：  
     
     $$
     g_j(d\phi_{ij}(X), d\phi_{ij}(Y)) = g_i(X,Y), \quad \phi_{ij} = \phi_j^{-1} \circ \phi_i.
     $$

     这确保几何量（如长度、曲率）与坐标选择无关。

3. **几何意义**  
   - **局部简化**：将复杂曲面拆分为可计算的“碎片”（如球面需至少两片坐标卡）。  
   - **全局一致性**：通过转移映射 $ \phi_{ij} $ 和度量相容性，拼合出整体几何。

### 抽象黎曼流形（Abstract Riemannian Manifold）

无需依赖流形在欧氏空间中的具体嵌入，仅通过**局部坐标卡**（charts）和**相容的黎曼度量** $ g_i $ 即可定义几何结构。  
- **组成要素**：  
   - 开集覆盖 $ \{U_i\} $ 和转移映射 $ \phi_{ij} $。  
   - 每片 $ U_i $ 上的度量 $ g_i $，且在重叠区域满足 $ g_j(\mathrm{d}\phi_{ij}(X), \mathrm{d}\phi_{ij}(Y)) = g_i(X,Y) $。  

2. **核心定理**  
   - **几何量的内蕴性**：长度、角度、曲率等均可通过局部度量 $ g_i $ 计算，与坐标选择无关。  
   - **脱离嵌入的自由**：允许定义无法低维嵌入的流形（如双曲平面、高维时空）。

3. **意义与应用**  
   - **数学**：统一处理弯曲空间，如广义相对论的时空流形。  
   - **计算**：离散几何中通过局部边长和夹角定义流形（如三角网格）。  

Charts是“地图”，抽象黎曼流形是“带比例尺的地图集”

## 总结

**两种几何描述的对比**

| **描述方式**       | **外在（Extrinsic）参数化**                                                                 | **内蕴（Intrinsic）黎曼度量**                                                                 |
|--------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **核心思想**       | 将曲面表示为映射 $ f: U \to \mathbb{R}^n $ 的像，依赖外部空间坐标。                          | 通过切空间上的内积 $ g(X,Y) $ 定义几何，完全脱离嵌入空间。                                     |
| **优点**           | 直观描述曲面形状（如顶点位置、法向量）。                                                    | 独立于参数化，直接反映曲面的内在性质（如曲率、测地线）。                                          |
| **局限性**         | 依赖嵌入空间，无法描述抽象流形（如无法嵌入的拓扑空间）。                                      | 缺乏直观的空间位置信息，需通过计算提取几何特征。                                                  |
| **关键工具**       | 微分 $ \mathrm{d}f $、法向量 $ N = \partial_u f \times \partial_v f $。                          | 第一基本形式 $ \mathbf{I} = J_f^\top J_f $、高斯曲率 $ K $。                               |
| **应用场景**       | 计算机图形学（网格建模）、物理模拟（流体表面）。                                              | 广义相对论（时空流形）、离散微分几何（仅知边长和夹角时的曲面重建）。                                |

外在参数化与内蕴度量是研究光滑曲面的“一体两面”，前者提供直观形状，后者揭示本质几何。理解二者的转换与互补，是微分几何及其应用（如离散曲面处理）的核心基础。