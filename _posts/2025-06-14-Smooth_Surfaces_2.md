---
layout: post
title: DDG Smooth Surfaces II
\mathrm{d}Ate: 2025-06-28 10:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

## 光滑曲面 II

好久不看DDG，导致每次看，感觉上次写的自己都看不懂，什么玩意，都需要在简单的温故一下，然后有会觉得有一些上次学习忽略的地方。不管怎样，今天无论如何都要看完Surface II。

### 第一节：高斯映射（Gauss Map）

#### 1. 基本概念

高斯映射是微分几何中描述曲面法向量方向的重要工具，它将曲面上的每一点映射到其单位法向量，从而建立从曲面到单位球面 $ S^2 $ 的对应关系。  

- **单位法向量**：对于曲面 $ M $，其高斯映射定义为：  

  $$
  N: M \to S^2, \quad p \mapsto N(p)
  $$  

  其中 $ N(p) $ 是点 $ p $ 处的单位法向量，满足 $ N(p) \perp T_pM $（与切空间正交）。  

- **非唯一性**：法向量本身可以有不同方向和长度，但高斯映射标准化为单位长度，仅保留方向信息（正反方向需一致）。  

**几何意义**：高斯映射通过记录曲面上各点的法向，反映曲面的弯曲和形状特征。例如：  

- 平面映射到球面的一个固定点（法向量恒定）。  
- 球面映射到整个单位球面（法向量方向全覆盖）。  

#### 2. 可定向性（Orientability）

并非所有曲面都能全局定义高斯映射，其存在性取决于曲面的**可定向性**：  

- **可定向曲面**（如球面、环面）：可定义连续的高斯映射。  
- **不可定向曲面**（如莫比乌斯带）：法向量沿环路移动时会反转，导致高斯映射矛盾。  

**关键结论**：  

- 高斯映射的全局定义要求曲面可定向。  
- 不可定向曲面的法向量场存在拓扑障碍（如莫比乌斯带的单侧性）。  

#### 3. 示例

通过参数化曲面的切向量计算高斯映射：  

1. 给定参数化 $ f(u,v) $，计算切向量：  

   $$
   \mathrm{d}f_u = \frac{\partial f}{\partial u}, \quad \mathrm{d}f_v = \frac{\partial f}{\partial v}
   $$  

2. 法向量由叉积得到：  

   $$
   N = \frac{\mathrm{d}f_u \times \mathrm{d}f_v}{\|\mathrm{d}f_u \times \mathrm{d}f_v\|}
   $$  

   **条件**：切向量必须线性独立（叉积非零）。  

**球面例子**：  

- 参数化 $ f(u,v) = (\cos u \sin v, \sin u \sin v, \cos v) $ 
- 切向量： 

  $ \mathrm{d}f(\frac{\partial}{\partial u}) = (-\sin u \sin v, \cos u \sin v, 0) $,  
  $ \mathrm{d}f(\frac{\partial}{\partial v}) = (\cos u \cos v, \sin u \cos v, -\sin v) $。  

- 叉积结果：  

  $ \mathrm{d}f(\frac{\partial}{\partial u}) \times \mathrm{d}f(\frac{\partial}{\partial v}) = -\sin v \cdot f(u,v) $。  
  
- 单位法向量：$ N = -f(u,v) $（与球心对称，直接取反即可）。

#### 4. 满射性（Surjectivity）

**问题**：高斯映射是否能覆盖整个单位球面？

- **封闭凸曲面**（如椭球）：满射（所有法向量方向均存在）。  
- **非凸或非闭曲面**（如圆柱、平面）：非满射。  
  - 圆柱面映射到赤道圆，平面映射到单点。  

**数学意义**：

- 满射性反映曲面法向方向的完备性，与曲率分布紧密相关。  
- **应用**：在曲面设计中，需控制法向覆盖范围以满足需求（如纹理映射）。  

#### 5. 向量面积（Vector Area）

**定义**：对曲面片 $ \Omega $，向量面积是法向量的加权积分：  

$$
\text{Vector Area} = \int_\Omega N \, \mathrm{d}A = \frac{1}{2} \int_\Omega \mathrm{d}f \wedge \mathrm{d}f
$$  

$$
A = \frac{1}{2} \mathrm{d}f \wedge \mathrm{d}f
$$  

### Exterior Calculus on Immersed Surfaces

#### 基本概念

Immersed surface是指通过光滑映射 $ f: M \to \mathbb{R}^3 $ 定义的曲面，其中微分 $ \mathrm{d}f $ 处处非退化（即切空间维度保持为2）。  

#### Induced Area 2-Form

- **定义**：给定参数域中的向量 $ X, Y $，其映射后的有向面积由叉积给出：  

  $$
  \mathrm{d}A(X, Y) = \| \mathrm{d}f(X) \times \mathrm{d}f(Y) \| \cdot \text{orientation}
  $$  

- **坐标表达式**：若 $ f(u,v) $ 是参数化，则：  

  $$
  \mathrm{d}A = \| f_u \times f_v \| \, du \wedge dv
  $$  

- **与法向量的关系**：  

  $$
  \mathrm{d}f \wedge \mathrm{d}f = 2 (\mathrm{d}f(X) \times \mathrm{d}f(Y)) \, du \wedge dv = 2 N \, \mathrm{d}A
  $$  

  （$ \mathrm{d}f \wedge \mathrm{d}f $ 的方向与单位法向量 $ N $ 一致，大小为 $ 2 \, \mathrm{d}A $）。

#### Hodge Star

在浸入曲面 $ f(M) $ 上，霍奇星算子需根据微分形式的阶数分别定义：

##### 0-Forms

- **定义**：  

  给定面积2-形式 $ \mathrm{d}A $ 和标量函数（0-形式）$ \phi $，定义：  

  $$
  \star \phi := \phi \, \mathrm{d}A
  $$  

- **几何意义**：  

  将函数 $ \phi $ 的值作为权重，缩放曲面的局部面积形式 $ \mathrm{d}A $，生成一个**带权面积2-形式**。  
  **示例**：  
  若 $ \phi $ 表示曲面的温度分布，则 $ \star \phi $ 表示“温度加权的面积微元”。

##### 2-Forms

- **定义**：  

  对任意2-形式 $ \omega $，存在唯一的标量函数 $ \phi $ 使得：  

  $$
  \omega = \phi \, \mathrm{d}A
  $$  

  则定义其霍奇对偶为：  

  $$
  \star \omega := \phi
  $$  

- **几何意义**：  

  将2-形式 $ \omega $ 分解为面积形式 $ \mathrm{d}A $ 和一个标量函数 $ \phi $，提取该函数作为霍奇对偶。 

  **示例**：  
  若 $ \omega = \sin v \, du \wedge dv $ 且 $ \mathrm{d}A = \sin v \, du \wedge dv $，则 $ \star \omega = 1 $。

### Complex Structure

#### 基本定义

复结构 $ J $ 是浸入曲面 $ f: M \to \mathbb{R}^3 $ 切空间上的线性算子，满足以下核心性质：

1. **旋转特性**：$ J^2 = -\text{Id} $，即对任意切向量连续应用两次 $ J $ 等价于反向。
2. **几何实现**：通过法向量叉积定义切向量的旋转：

   $$
   \mathrm{d}f(JX) = N \times \mathrm{d}f(X), \quad \forall X \in T_p M
   $$

   其中 $ N $ 是单位法向量，$ \mathrm{d}f $ 是微分映射。

在 $ \mathbb{R}^2 $ 中，标准复结构为固定矩阵：

$$
J_{\mathbb{R}^2} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}, \quad \text{对应旋转} \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} -y \\ x \end{bmatrix}
$$

曲面上的 $ J $ 是此概念的弯曲推广，其矩阵形式依赖局部几何。

#### 显式计算与度量依赖

复结构可通过雅可比矩阵 $ A = [\mathrm{d}f_u \ \mathrm{d}f_v] $ 和法向量叉积矩阵 $ \hat{N} $ 显式求解：

$$
J = (A^T A)^{-1} A^T \hat{N} A
$$

**关键步骤**：

1. **度量矩阵**：$ A^T A $ 是诱导度量 $ g $ 的坐标表示。
2. **叉积矩阵**：

   $$
   \hat{N} = \begin{bmatrix} 0 & -N_z & N_y \\ N_z & 0 & -N_x \\ -N_y & N_x & 0 \end{bmatrix}
   $$

3. **方程意义**：$ A J = \hat{N} A $ 确保参数域旋转与 $ \mathbb{R}^3 $ 叉积旋转一致。

#### 共形浸入的判定

浸入 $ f $ 是共形（保角）的充要条件为：

$$
J = J_{\mathbb{R}^2}
$$

此时曲面仅允许局部伸缩，角度保持不变。


$$
\mathrm{d}f(JX) = N \times \mathrm{d}f(X) \Rightarrow J = (A^T A)^{-1} A^T \hat{N} A
$$

##### Hodge star on 1-forms

对于浸入曲面 $f: M \to \mathbb{R}^3$ 上的 1-形式 $\alpha$，其Hodge star运算定义为：

$$
(\star_f \alpha)(X) = \alpha(\mathcal{J}_f X)
$$

其中：

* $X$ 是 $ T_p M$ 中的任意切向量。
* $\mathcal{J}_f$ 就是你前面定义的曲面上的复结构（局部90度旋转）：

  $$
  \mathrm{d}f(\mathcal{J}_f X) = N \times \mathrm{d}f(X)
  $$

**几何理解**：

* 在 $\mathbb{R}^2$ 中，$\star$ 对 1-形式相当于把向量旋转 $90^\circ$。
* 在曲面 $M$ 上，$\star_f$ 就通过局部法向量来确定“哪边是左，哪边是右”，从而将切向量场沿着面内旋转 $90^\circ$，再用 $\alpha$ 取值。

###### 与其他阶霍奇星的统一性

- **0-形式**：$ \star_f \phi = \phi \, \mathrm{d}A $
- **1-形式**：$ \star_f \alpha(X) = \alpha(\mathcal{J}_f X) $
- **2-形式**：$ \star_f (\phi \, \mathrm{d}A) = \phi $

#### Metric, Area Form, and Complex Structure

在曲面上，黎曼度规 $ g(X,Y) $ 可以分解为**面积形式 $ \mathrm{d}A $** 和**复结构 $ J $** 的组合：

$$
g(X, Y) = \mathrm{d}A(X, JY)
$$

其中：
- $ \mathrm{d}A $ 是曲面的有向面积2-形式（$ \mathrm{d}A(X,Y) = \|X \times Y\| $）。
- $ J $ 是切空间中的90度旋转算子（复结构），满足 $ J^2 = -\text{Id} $。

##### 二维平面（$ \mathbb{R}^2 $）中的类比

在平面上，Metric、Cross和Complex Structure $ J $ 满足类似关系：

$$
X \cdot Y = X \times (JY)
$$

**推导**：

1. 设 $ X = (x_1, x_2) $，$ Y = (y_1, y_2) $，平面复结构 $ J = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} $。
2. 计算 $ JY = (-y_2, y_1) $。
3. 叉积 $ X \times (JY) = x_1 y_1 + x_2 y_2 = X \cdot Y $。

**几何意义**：  
- 左边 $ X \cdot Y $ 是向量的点积（度量内积）。  
- 右边 $ X \times (JY) $ 通过旋转 $ Y $ 后与 $ X $ 叉积，结果等于点积。  
- **本质**：点积与叉积通过复结构 $ J $ 联系起来。

#### 曲面上的Sharp（♯）与Flat（♭）算子

在曲面 $ f: M \to \mathbb{R}^3 $ 上，**诱导度量 $ g $** 允许我们在**向量场**和**1-形式**之间转换：  
- **Flat（♭）**：将向量场 $ X $ 转换为对应的1-形式 $ X^b $。  
- **Sharp（♯）**：将1-形式 $ \alpha $ 转换为对应的向量场 $ \alpha^\# $。  

##### Flat 算子（♭）

对向量场 $ X $，定义其对应的1-形式 $ X^b $ 为：  

$$
X^b(Y) := g(X, Y) = \langle \mathrm{d}f(X), \mathrm{d}f(Y) \rangle_{\mathbb{R}^3}
$$  

##### Sharp 算子（♯）

对1-形式 $ \alpha $，定义其对应的向量场 $ \alpha^\# $ 为：  

$$
g(\alpha^\#, Y) := \alpha(Y), \quad \forall Y
$$  