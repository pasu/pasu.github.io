---
layout: post
title: DDG Integration
date: 2025-04-21 10:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

## **Integration**


今天这一节内容起到了承前启后的作用。在本节之前，我们始终假设研究对象是连续可微的物体，重点在于对基础理论的理解；而从本节之后，我们将转向对离散情形下问题的探讨。

我们先简单回顾一下之前的内容：

- **外代数（Exterior algebra）**：体积的语言  
- **k-形式（k-form）**：衡量 k 维体积的工具  
- **微分形式（Differential forms）**：定义在空间中每一点的 k-形式  
- **外导数（Exterior derivative）**：对 k-形式的求导操作  

在今天的课程中，我们将把这些概念统一起来，引出对 k-形式的积分定义。而通过在网格（meshes）上对微分形式进行积分，我们将自然地过渡到离散外微分几何(**Discrete Exterior Calculus**, DEC)的构建。

---

### **Overview**

我对积分的第一次认识，源于高中数学老师说的一句话：“把一个球（实心的）打成粉再求它的体积，这就是积分。” 所以我一直觉得积分是一种很残忍的事情，需要把完整的物体打碎——就像《剪爱》里的那句歌词：“把爱剪碎了随风飘向大海。”

**Integration（积分）** 是微积分中两个核心运算之一，另一个是 **differentiation（微分）**。它们之间通过 **Fundamental Theorem of Calculus（微积分基本定理）** 相互联系。在 **exterior calculus（外微分代数）** 中，这一定理被推广为 **Stokes’ Theorem（斯托克斯定理）**。

#### 从 Riemann Sums（黎曼和）到积分

积分的基本思想是对 **离散求和的精细化（refinement of discrete sums）**。例如，在某一区域 $ \Omega $ 上积分可以看作是对小片区域 $ A_i $ 求和的极限：

$$
\sum_i \widehat{A}_i \to \int_{\Omega} \mathrm{d}A
$$

通常我们用 **Riemann sums（黎曼和）** 来近似积分：
- 将区域 $ \Omega $ 划分成很多小片；
- 在每一小片中取样，计算被积对象（函数或 differential form）；
- 乘以度量（例如面积或长度）；
- 把所有小片的结果相加。

#### 积分一个 Scalar Function（标量函数）

对于一个标量函数 $ f $，在区域 $ \Omega $ 上的积分是对面积的加权求和：

$$
\sum_i f(p_i) \widehat{A}_i \to \int_{\Omega} f \, \mathrm{d}A
$$

这可以看作是一个 **0-form（0-形式）** 在二维区域上通过标准面积元 $ \mathrm{d}A $ 积分，最终结果是一个标量。

#### 积分一个 k-Form（k-形式）

一个 **k-form（k-形式）** 是可以在 k 维区域上进行积分的对象。其积分表达为：

$$
\int_\Omega \omega
$$

它自然地推广了我们熟悉的积分概念：
- **0-forms** 在点上积分（直接取值）；
- **1-forms** 在曲线上积分（线积分）；
- **2-forms** 在面上积分（面积积分）；
- **n-forms** 在 n 维体积上积分（体积积分）。

例如，对于一个 **2-form** $ \omega = f(x, y)\, \mathrm{d}x \wedge \mathrm{d}y $，在二维区域 $ \Omega $ 上的积分就是标准的双重积分：

$$
\int_\Omega \omega = \int_\Omega f(x, y)\, \mathrm{d}x\, \mathrm{d}y
$$

##### 例子

设 $ \omega := (x + xy)\, \mathrm{d}x \wedge \mathrm{d}y $，$ \Omega = [0,1] \times [0,1] $ 是单位正方形。那么：

$$
\int_\Omega \omega = \int_0^1 \int_0^1 (x + xy)\, \mathrm{d}x\, \mathrm{d}y \\
= \int_0^1 \left[ \int_0^1 (x + xy)\, \mathrm{d}x \right] \mathrm{d}y \\
= \int_0^1 \left[ \frac{1}{2} + \frac{1}{2}y \right] \mathrm{d}y \\
= \left[ \frac{1}{2}y + \frac{1}{4}y^2 \right]_0^1 \\
= \frac{3}{4}
$$

这个例子展示了如何将一个 2-form 在一个曲面上进行积分，并且与我们熟悉的双重积分是一致的。

--- 

### Stokes’ Theorem

在传统微积分中，**Fundamental Theorem of Calculus** （微积分基本定理）告诉我们：函数在区间两端的差值，等于它的导数在这个区间上的积分：

$$
\int_a^b \frac{\partial f}{\partial x} \, \mathrm{d}x = f(b) - f(a)
$$

在**Exterior Calculus（外微分代数）**中，这一定理被推广为更强大的 **Stokes’ Theorem（斯托克斯定理）**：

$$
\int_\Omega \mathrm{d}\omega = \int_{\partial \Omega} \omega
$$

这意味着：我们在边界上看到的变化，完全取决于内部发生的变化。

> "The change we see on the outside is purely a function of the change within."  
> —— *Zen koan*

#### 两个例子：

- **Divergence Theorem（散度定理）**：  

  $$
  \int_\Omega \nabla \cdot \mathbf{X} \, \mathrm{d}A = \int_{\partial \Omega} \mathbf{X} \cdot \mathbf{n} \, \mathrm{d}\ell
  $$

  它告诉我们：**What goes in, must come out!（进多少，出多少）**

- **Green’s Theorem（格林公式）**：  
  
  $$
  \int_\Omega \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \mathrm{d}x \mathrm{d}y = \int_{\partial \Omega} P\,\mathrm{d}x + Q\,\mathrm{d}y
  $$  
  
  它的直觉是：**What goes around comes around!（绕一圈的环流等于内部的旋度）**

#### 为什么 $ d \circ d = 0 $？

这是 Exterior Calculus 中的一个核心事实，意味着对任意形式 \( \omega \)，都有：

$$
\int_\Omega \mathrm{d} \mathrm{d} \phi = \int_{ \partial \Omega} \mathrm{d} \phi = \int_{ \partial \partial \Omega} \phi = 0
$$

也就是说，“导数的导数恒为零”：

- 对 0-forms 来说，这类似于梯度场的旋度为零；
- 对 1-forms 来说，就是旋度场的散度为零。

这是因为 **外导数** $\mathrm{d}$ 满足类似 **product rule** 的性质，并且符合拓扑学中的 **exactness** （闭而不一定为恰）。

换句话说：
> 如果你已经计算了变化，再去求它的变化，那就什么都不会留下。  
> **变化之上的变化，是空无（zero）本身。**

当然！以下是加入“物理直觉”后的完整讲解版本，在开头用物理角度引入 **内积（Inner Product）** 的意义，便于读者从力学或工程背景自然过渡到微分形式中的内积概念。

---

### 内积（Inner Product）

#### 从物理直觉看内积

在物理中，**内积（inner product）** 最常出现在力学或工程中的以下情景：

- 两个力的“对齐程度”：  
  $$
  \vec{F} \cdot \vec{v} = |\vec{F}|\, |\vec{v}|\, \cos\theta
  $$
  ——表示力在速度方向上的有效分量，是功率或做功的来源；
  
- 在信号处理或能量计算中，两个波形之间的“匹配程度”也用内积来度量：
  $$
  \langle f, g \rangle = \int f(t)\, g(t)\, \mathrm{d}t
  $$

所以从物理角度讲，**内积衡量的是“两个对象相互作用时有多少是同方向的”**。  
在 differential forms 中，我们希望保留这种“对齐”或“重合程度”的直觉，但应用到更广义的对象（k-形式）上。

在数学上，**内积** 是一个满足以下三个条件的映射：

$$
\langle \cdot , \cdot \rangle : V \times V \to \mathbb{R}
$$

1. **双线性（bilinear）**：  
   $$
   \langle a\alpha + b\beta, \gamma \rangle = a\langle \alpha, \gamma \rangle + b\langle \beta, \gamma \rangle
   $$
2. **对称性（symmetric）**：  
   $$
   \langle \alpha, \beta \rangle = \langle \beta, \alpha \rangle
   $$
3. **正定性（positive-definite）**：  
   $$
   \langle \alpha, \alpha \rangle > 0 \quad \text{当且仅当 } \alpha \neq 0
   $$

#### $ L^2 $ 内积：0-form 的内积

对函数空间（0-forms）中的两个函数 $ f $、$ g $，它们的内积定义为：

$$
\langle f, g \rangle = \int_\Omega f(x)\, g(x)\, \mathrm{d}x
$$

这衡量了两个函数在区域 $ \Omega $ 上的重合程度，是最基本、最常见的内积形式。


#### 微分 k-form的内积

对于一般的微分形式 $ \alpha $、$ \beta $，我们通过 wedge product 与 Hodge star 运算定义它们的内积：

$$
\langle \alpha, \beta \rangle := \int_\Omega \alpha \wedge *\beta
$$

其中：

- $ \wedge $：**wedge product**，表示方向上带有符号的“体积构造”；
- $ * $：**Hodge star 运算**，将一个 $ k $-form 映射到它的正交补维度，使得结果可以组成 $ n $-form，适合在区域 $ \Omega \subset \mathbb{R}^n $ 上积分。

#### 例子：1-form 的内积

考虑以下两个 1-form：

- $ \alpha := \mathrm{d}u $
- $ \beta := v\, \mathrm{d}u - u\, \mathrm{d}v $

在 $ \mathbb{R}^2 $ 中计算它们的内积：

$
\langle \alpha, \beta \rangle = \int_\Omega \mathrm{d}u \wedge *(v\, \mathrm{d}u - u\, \mathrm{d}v)
$

Hodge star 运算规则：

- $ *\mathrm{d}u = \mathrm{d}v $， $ *\mathrm{d}v = -\mathrm{d}u $

得到：

$$
*\beta = v\, \mathrm{d}v + u\, \mathrm{d}u \quad \Rightarrow \quad
\mathrm{d}u \wedge *\beta = v\, \mathrm{d}u \wedge \mathrm{d}v
$$

最终：

$$
\langle \alpha, \beta \rangle = \int_\Omega v\, \mathrm{d}u \wedge \mathrm{d}v
$$

这说明 differential forms 的内积最终仍然通过一个 2-form 的积分来实现，几何意义清晰。

#### 几何直觉总结

我们可以用以下类比来理解微分形式的内积：

> **wedge product** 类似于三维空间中的 **cross product（叉积）**：它构造带方向的体积；  
> **Hodge star** 是将一个形式转换为其“正交方向”的补维度形式；  
> **最终通过 wedge 得到一个可积的 n-form，再进行积分，得出两者的对齐程度，也就是 inner product。**

$$
\boxed{\langle \alpha, \beta \rangle = \int_\Omega \alpha \wedge *\beta}
$$

所以我们可以这样理解：

> **内积 = 方向一致 + 维度补齐 + 空间整合**

这种结构正是 differential forms 世界中“对齐与交互”的表达方式。

---

### 总结：从平直空间到离散外微分（DEC）

我们目前在 **平直空间（flat space, $ \mathbb{R}^n $）** 上建立了 Exterior Calculus 的基本框架：

- **Exterior algebra（外代数）**：构建表示方向与体积的语言 —— 使用 **k-vectors（k-向量）**；
- **k-form（k-形式）**：用于测量 k 维体积，是与 k-向量配对的对象；
- **Differential forms（微分形式）**：是定义在每个空间点上的 k-form，具有局部变化的能力；
- **Exterior calculus（外微分代数）**：包含两个核心操作 —— **differentiation（外导数）** 与 **integration（积分）**；
- **Inner product（内积）**：通过 $ \langle \alpha, \beta \rangle = \int_\Omega \alpha \wedge *\beta $ 衡量形式之间的“对齐”；
- **Simplicial complex（单纯形复形）**：用 k-simplices 来近似空间，为离散计算打下结构基础。

#### 但空间未必总是平的

虽然我们在平直空间中建立了这一切，但真正复杂和有趣的几何问题往往发生在**曲面（curved surfaces）**或**流形（manifolds）**上：

- 在曲面上，**不同的参数化**可能会引起不同的测量尺度；
- 此时，**Euclidean inner product** 就不能再用来准确地测量角度；
- 我们需要引入 **Riemannian metric（黎曼度量）** 来正确描述空间中的长度、角度与体积；
- 这也意味着，在曲面上，**外微分与积分依然成立，但度量结构必须重新考虑**。

我们将在未来研究 **smooth surfaces** 与 **manifolds** 时，回到这些问题，探索在更一般几何中的 exterior calculus。