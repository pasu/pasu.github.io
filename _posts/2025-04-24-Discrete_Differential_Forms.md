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
 0 &  0 & -1 & +1 \\
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

#### 组合操作：grad、curl、div、Laplacian

借助上面的基本矩阵，我们可以组合出熟悉的微分算子：

- **grad** = $ d_0 $：顶点函数 → 边的差值  
- **curl** = $ \star_2 d_1 $：边上的 1-form → 三角形上的旋度（2-form）  
- **div** = $ \star_0^{-1} d_0^\top \star_1 $：边上的 1-form → 顶点上的散度（0-form）  
- **Laplacian** = $ \star_0^{-1} d_0^\top \star_1 d_0 $：离散 Poisson 方程中的主角

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

