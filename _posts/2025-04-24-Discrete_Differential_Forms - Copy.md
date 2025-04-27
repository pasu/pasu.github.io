---
layout: post
title: DDG Discrete Differential Forms
date: 2025-04-24 10:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

### 为什么我们需要 Discrete Exterior Calculus？

经过之前的学习，我们已经理解了 **exterior calculus**，能够在光滑流形上实现 *k-form* 下的微分和积分表达，其求解问题则转化为一个关于 *differential forms* 的微分方程。

但问题在于：

- 即使是非常简单的微分方程，也往往难以手工求解！（更别说复杂情况了……）
- 如果这些方程涉及实际测量数据（例如 domain geometry），那么手工求解几乎不可能完成。
- 因此，我们需要借助计算机来**数值逼近**这些方程的解。

**Discrete Exterior Calculus (DEC)** 就是在这种背景下提出的，其核心思路是：

- 使用 **mesh**（网格）代替连续的定义域 —— 通常是一个有向的 **simplicial complex**（单纯形复形）；
- 使用网格上各 *k-simplex* 的数值来代替光滑的 **differential k-form**；
- 使用稀疏矩阵来代替微分算子 —— 例如，用带符号的邻接矩阵（signed incidence matrix）来表达 *exterior derivative*（外导数）。

通过这种方式，DEC 可以让我们在任意复杂曲面甚至非欧几何背景下，结构良好地离散化和求解微分形式相关的物理和几何问题。

---

### Basic Operations & Composition of Operators  

在上一节我们看到了 DEC 的总体动机，本节我们进一步了解它的基本操作构建和常见算子的组合方式。

#### 如何将光滑形式替换为离散表示

在 DEC 中，我们用下列方式将连续几何中的微分对象转化为离散表示：

- 使用 **oriented simplicial complex**（有向单纯形复形）作为离散的计算网格；
- 将 *differential k-form* 替换为网格中每个 *k-simplex* 上的一个数值 —— 这些称为 **discrete differential forms**；
- 将微分算子（如 *exterior derivative*）表示为稀疏矩阵 —— 最常见的就是 **signed incidence matrix**（带符号邻接矩阵）。

这些操作使得我们可以把原本复杂的几何和物理过程，转换为标准的线性代数问题。

如上图，我们定义四个顶点（vertices）:

- $ v_0 = 0 $  
- $ v_1 = 1 $  
- $ v_2 = 2 $  
- $ v_3 = 3 $

对应的两个三角形（faces）:

- $ f_0 = \{v_0, v_1, v_2\} $
- $ f_1 = \{v_0, v_2, v_3\} $

对应的5个 **oriented edges**:

| Edge | Orientation | Index |
|------|-------------|--------|
| $ e_0 $ | $ v_0 \rightarrow v_1 $ | 0 |
| $ e_1 $ | $ v_1 \rightarrow v_2 $ | 1 |
| $ e_2 $ | $ v_2 \rightarrow v_0 $ | 2 |
| $ e_3 $ | $ v_0 \rightarrow v_3 $ | 3 |
| $ e_4 $ | $ v_3 \rightarrow v_2 $ | 4 |

现在通过如上这个例子介绍算子。

#### 基本算子：d₀、d₁ 和 Hodge Star

我们先来看两个最基本的 **离散外导数**（discrete exterior derivative）矩阵：

##### d₀：Vertex → Edge  

它是一个边对顶点的邻接矩阵，每一行对应一条有向边，每一列对应一个顶点。如果某条边的起点是顶点 $v_i$，终点是 $v_j$，则该行在 $i$ 位置是 $-1$，在 $j$ 位置是 $+1$。

$$
d_0 =
\begin{bmatrix}
-1 & +1 &  0 &  0 \\
 0 & -1 & +1 &  0 \\
+1 &  0 & -1 &  0 \\
-1 &  0 &  0 & +1 \\
 0 &  0 & +1 & -1 \\
\end{bmatrix}
$$

这是离散版本的 **gradient**（梯度）操作。

##### d₁：Edge → Face  

每一行对应一个三角形（face），每一列对应一条边。每个三角形的边若与其方向一致，则为 $+1$，否
则为 $-1$。  

$$
d_1 =
\begin{bmatrix}
+1 & +1 & -1 &  0 &  0 \\
 0 &  0 & -1 & +1 & -1 \\
\end{bmatrix}
$$

这是离散版本的 **curl**（旋度）操作。

##### Hodge Star ($\star_k$)  

Hodge 星号算子将 **primal k-form** 映射为 **dual (n–k)-form**。在离散中，它通常表现为一个 **对角矩阵**，每一项表示 *dual cell* 与 *primal simplex* 之间的比例关系。例如：

- $\star_0$：顶点对应的 dual 面积；
- $\star_1$：边的 dual 长度 / 边的原始长度；
- $\star_2$：三角形面积的倒数。

假设$v_0=(0,1)$， $v_1=(-1,0)$，$v_2=(0,-1)$，$v_3=(1,0)$，则$Area_{f_0} = Area_{f_1} = 1$，因此：

$$
\star_2 =
\begin{bmatrix}
1.0 & 0 \\
0 & 1.0 \\
\end{bmatrix}
$$

这里，我们假设$e$对应的dual edge $e^\star$的长度为1：

$$
\star_1 =
\begin{bmatrix}
\frac{1.0}{1.414} &  &  &  &  \\
 & \frac{1.0}{1.414} &  &  &  \\
 &  & \frac{1.0}{2.0} &  &  \\
 &  &  & \frac{1.0}{1.414} &  \\
 &  &  &  & \frac{1.0}{1.414} \\
\end{bmatrix}
\approx
\begin{bmatrix}
0.707 &     &     &     &     \\
      & 0.707 &     &     &     \\
      &     & 0.5 &     &     \\
      &     &     & 0.707 &     \\
      &     &     &     & 0.707 \\
\end{bmatrix}
$$

每个顶点的对偶面积 (dual area) $\approx$ 其相邻三角形面积的 $1/3$ 之和：

$$
\star_0 =
\begin{bmatrix}
0.6667 & 0      & 0      & 0 \\
0      & 0.3333 & 0      & 0 \\
0      & 0      & 0.6667 & 0 \\
0      & 0      & 0      & 0.3333 \\
\end{bmatrix}
$$

#### 组合操作：grad、curl、div、Laplacian

借助上面的基本矩阵，我们可以组合出熟悉的微分算子：

- **grad** = $ d_0 $：顶点函数 → 边的差值  
- **curl** = $ \star_2 d_1 $：边上的 1-form → 三角形上的旋度（2-form）  
- **div** = $ \star_0^{-1} d_0^\top \star_1 $：边上的 1-form → 顶点上的散度（0-form）  
- **Laplacian** = $ \star_0^{-1} d_0^\top \star_1 d_0 $：离散 Poisson 方程中的主角

定义$f$是一个顶点$v_i$的scalar function：

$$
f =
\begin{bmatrix}
f_0 \\
f_1 \\
f_2 \\
f_3 \\
\end{bmatrix}
=
\begin{bmatrix}
1.0 \\
2.0 \\
0.5 \\
3.0 \\
\end{bmatrix}
$$

对应的顶点值如下：

- $ f(v_0) = 1.0 $  
- $ f(v_1) = 2.0 $  
- $ f(v_2) = 0.5 $  
- $ f(v_3) = 3.0 $

则 $grad = d_0 f$:

$$
d_0 f =
\begin{bmatrix}
-1 & +1 &  0 &  0 \\
 0 & -1 & +1 &  0 \\
+1 &  0 & -1 &  0 \\
-1 &  0 &  0 & +1 \\
 0 &  0 & +1 & -1 \\
\end{bmatrix}
\cdot
\begin{bmatrix}
1.0 \\
2.0 \\
0.5 \\
3.0 \\
\end{bmatrix}
=
\begin{bmatrix}
-1(1.0) + 1(2.0) = 1.0 \\
-1(2.0) + 1(0.5) = -1.5 \\
1(1.0) - 1(0.5) = 0.5 \\
-1(1.0) + 1(3.0) = 2.0 \\
1(0.5) - 1(3.0) = -2.5 \\
\end{bmatrix}
$$

$ curl = \star_2 d_1$:

$$
\star_2 d_1 \alpha =
\begin{bmatrix}
1.0 & 0 \\
0 & 1.0 \\
\end{bmatrix}
\begin{bmatrix}
+1 & +1 & +1 & 0 & 0 \\
0 & 0 & +1 & +1 & +1 \\
\end{bmatrix}
\cdot
\begin{bmatrix}
1.0 \\
-1.5 \\
0.5 \\
2.0 \\
-2.5 \\
\end{bmatrix}
=
\begin{bmatrix}
0.0 \\
0.0 \\
\end{bmatrix}
$$

这里需要注意，因为$\alpha = d_0 f$已经考虑了edge的direction，$d_1$只需要求和。同时结果也验证了梯度的旋度总是为零：$\nabla \times (\nabla \phi) = 0$。

##### 关于 divergence 的详细说明

这个算子链：

$$
\boxed{\text{div} = \star_0^{-1} d_0^\top \star_1}
$$

的含义是：

1. **$\star_1$**：将边上的 1-form 映射到 dual edge 上，编码了度量信息；
2. **$d_0^\top$**：对应 gradient 的共轭操作，将边的信息“聚合”到每个顶点；
3. **$\star_0^{-1}$**：把顶点的聚合值归一化为散度密度（例如除以顶点周围 dual 面积）。

所以这个算子表达的是**顶点处的净流出强度**，它是 gradient 的 adjoint，符合离散散度的物理意义。

该例子对应的Laplacian:

$$
\Delta \phi = \nabla \cdot (\nabla \phi) = \star_0^{-1} d_0^\top \star_1 d_0 f = \begin{bmatrix}
1.5 \cdot (-1.871) = -2.807 \\
3.0 \cdot 1.767 = 5.301 \\
1.5 \cdot (-3.078) = -4.617 \\
3.0 \cdot 3.181 = 9.543 \\
\end{bmatrix}
$$

可见 $v_0$和$v_2$属于hill，流出，而$v_1$和$v_3$属于valley，流入。

因此，在计算物理与几何建模中，DEC把复杂问题简化成了一种线性代数的求解：

$$
\boxed{\text{Load a mesh → Build a few matrices → Solve a linear system}}
$$

我们已经介绍了 DEC 中的基本算子（如 $ d_0, d_1 $）以及它们之间的组合关系，并用这些离散形式构造了如 grad、curl 和 div 等经典算子。  
这些离散算子能够直接作用在网格上的数值对象，比如定义在顶点、边或面上的函数。

但现实问题往往并非一开始就是离散的，而是给定一个 **连续的物理场（continuous field）** 或偏微分方程模型。  
为了将这些连续的数学对象转化为可计算的离散系统，并反过来从离散解中恢复对连续现象的理解，我们就需要两个核心操作：

$$
\boxed{\text{Discretization \quad \& \quad Interpolation}}
$$

接下来，我们将介绍这两个基本操作在微分形式（differential forms）中的具体方式，以及它们是如何构建起连续与离散之间桥梁的。

### Discretization

**Basic idea**：所谓 Discretization（离散化），本质上就是将一个连续的 $ k $-form **积分到 $ k $-simplex 上**。  
结果就是一个**有限个数值的集合**，它代表了连续物理量在离散网格上的表达。

这种方式非常自然地将连续几何信息转换为离散数据，是 DEC 框架的基础。我们来一步步看具体的例子。

#### Integrating a 0-form Over Vertices

对 0-form（标量函数）来说，"积分" 实际上就是 **直接在点上取值**。  
所以，如果一个 0-form 是 $ f(x, y) = x + y $，那么在顶点 $ v = (1, 2) $ 上的离散值就是：
$$
f(v) = 1 + 2 = 3
$$

这类操作没有方向性，只有采样。

#### Integrating a 1-form Over an Edge

1-forms 是作用在向量上的线性函数。  
要将一个 1-form $ \alpha $ 离散化到一条边 $ e $ 上，就是计算线积分：
$$
\boxed{
\int_e \alpha
}
$$

##### Example:  

设  
$$
\alpha := x y \, dx - x^2 \, dy
$$  
边从 $ p_0 = (-1, 2) $ 到 $ p_1 = (3, 1) $。

我们可以用参数法：设
$$
\vec{p}(t) = (1 - t)p_0 + t p_1 = (-1 + 4t, 2 - t), \quad t \in [0, 1]
$$

$$
x(t) = -1 + 4t
$$

$$
y(t) = 2 - t
$$

求导：
$$
\vec{p}'(t) = \frac{d\vec{p}}{dt} = (4, -1)
$$

代入 $ \alpha $ 得：
$$
\alpha(\vec{p}(t)) = x(t) y(t)\, dx - x(t)^2\, dy
\Rightarrow \text{Evaluate on } \vec{p}'(t) = (4, -1)
$$

最终线积分是：
$$
\int_0^1 \left[ x(t) y(t) \cdot 4 + x(t)^2 \cdot 1 \right] dt = 7
$$

同理，我们可以用相同的方法对任意simplicial complex的edge进行积分。

#### Integrating a 2-form Over a Triangle

2-forms 在二维中可以理解为 **密度函数**，其离散化就是在三角面片上积分：

$$
\boxed{
\int_{\text{triangle}} \omega
}
$$

比如 $ \omega = x \, dx \wedge dy $，可以通过二维区域积分在每个三角形上得到一个数值。

##### 示例

让我们在 $ \mathbb{R}^2 $ 空间中对一个三角形 $ T $ 进行 **differential 2-form** 的积分，该三角形的顶点为 $ (0,0) $、$ (1,0) $ 和 $ (0,1) $。

由于 $ T $ 是平坦的，切空间在各处相同，由以下向量张成：
  $$
  T_1 = \frac{\partial}{\partial x}, \quad T_2 = \frac{\partial}{\partial y}.
  $$
  在标准的 $\mathbb{R}^2$ 空间中（使用欧几里得度量），它们已经是 **orthonormal** 的。

###### **步骤 1：在基向量上求值 $\omega$**

2-form $\omega$ 对切向量的作用为：
$$ 
\omega(T_1, T_2) = 3 \, (dx \wedge dy)(T_1, T_2).
$$
根据 wedge product 的定义：
$$ 
(dx \wedge dy)(T_1, T_2) = dx(T_1)dy(T_2) - dx(T_2)dy(T_1).
$$
由于 $dx(T_1) = 1$，$dy(T_2) = 1$，且 $dx(T_2) = dy(T_1) = 0$：
$$ 
\omega(T_1, T_2) = 3 \cdot (1 \cdot 1 - 0 \cdot 0) = 3.
$$

###### **步骤 2：对 $ T $ 进行标量函数积分**

$\omega$ 在 $ T $ 上的积分为：
$$ 
\int_T \omega = \int_T \omega(T_1, T_2) \, dA,
$$
其中 $dA$ 是面积元素。由于 $\omega(T_1, T_2) = 3$ 是常数：
$$ 
\int_T \omega = 3 \int_T dA = 3 \cdot \text{Area}(T).
$$
三角形 $ T $ 的面积是 $\frac{1}{2}$，因此：
$$ 
\int_T \omega = 3 \cdot \frac{1}{2} = \boxed{\frac{3}{2}}.
$$

### Orientation and Integration

在对 1-form 和 2-form 进行积分时，**方向（orientation）至关重要**：

- 对边来说，正向或反向会改变积分结果的符号  
  
  $$
  \alpha_{ij} = -\alpha_{ji}
  $$

- 对三角形来说，顺时针 vs 逆时针会影响 2-form 的符号

  $$
  \beta_{ijk} = \beta_{jki}, \beta_{jik} = -\beta_{kij}
  $$

这也是 DEC 中为什么需要为每个 simplex 明确指定 orientation 的原因。

### Discrete Differential $k$-Form

