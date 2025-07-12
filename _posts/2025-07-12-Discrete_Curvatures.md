---
layout: post
title: DDG Discrete Curvatures
\mathrm{d}Ate: 2025-07-12 10:27:00
tags: Geometry
categories: DDG
giscus_comments: true
related_posts: true
pretty_table: true
---

原课件来自：https://brickisland.net/ddg-web/

## Discrete Curvature

上一节中，平滑的曲面曲率有多种表达形式：

- **高斯曲率（Gauss Curvature）**：$K = k_1 k_2$
- **平均曲率（Mean Curvature）**：$H = (k_1 + k_2)/2$
- **主曲率（Principal Curvatures）**： k_1, k_2（最大/最小曲率）
- **法曲率（Normal Curvature）**
- **测地曲率（Geodesic Curvature）**

因此，光滑曲率的离散化看似有无数种不相关的方法，实际上存在统一框架可以解释大多数常见离散化选择。

### 统一视角（Unified Picture）

通过将光滑曲面与离散曲面建立联系，我们可以在统一的框架下理解许多散见于文献中的不同离散曲率定义。这样不仅有助于从微分几何的连续视角解释常用的离散曲率（如角缺陷(Angle Defect)、高斯曲率、平均曲率的边长度加权和等），还可以揭示它们与光滑情形中体积、面积及其变分的深刻对应关系，从而为几何处理、数值模拟和计算机图形学中的曲率计算提供更直观和理论一致的基础。

### Discrete Gaussian Curvature

#### 欧拉示性数 (Euler Characteristic)

对于多面体曲面（Polyhedral Surface），欧拉示性数定义为：

$$
\chi = V - E + F
$$

其中：

- $ V $：顶点数（Vertices）
- $ E $：边数（Edges）
- $ F $：面数（Faces）

**示例**：
- **球面（Sphere）**：$\chi = 2$（如立方体：8顶点、12边、6面 → 8-12+6=2）
- **环面（Torus）**：$\chi = 0$（如四边形环面：16顶点、32边、16面 → 16-32+16=0）
- **双环面（Genus-2 Surface）**：$\chi = -2$（推广公式：$\chi = 2 - 2g$，$g$为亏格）

#### Topological Invariance

**定理（L’Huilier）**：  

欧拉示性数是多面体曲面的**拓扑不变量**，即：

- 与顶点的具体位置无关
- 与曲面的细分方式（Tessellation）无关  
仅由曲面的**拓扑类型（Topology）**决定。

$$
\chi = 2 - 2g
$$

其中 $ g $ 是曲面的Genus（即“洞”的数量）, $\chi$是欧拉示性数。  

例如：

- 球面（$g=0$）：$\chi = 2$
- 环面（$g=1$）：$\chi = 0$
- 双环面（$g=2$）：$\chi = -2$

#### Angle Defect

对于离散曲面（如三角网格）的顶点 $ i $，其角度缺损定义为：

$$
\Omega_i = 2\pi - \sum_{ijk \in \text{St}(i)} \theta_i^{jk}
$$

其中：

- $ \theta_i^{jk} $ 是顶点 $ i $ 在相邻三角形 $ ijk $ 中的内角，
- $ \text{St}(i) $ 表示顶点 $ i $ 的邻域（Star）。

通过**测地球（Geodesic Ball）**的面积比较，离散高斯曲率 $ K_i $ 与角度缺损直接相关：

**(1) 连续曲面的高斯曲率**

在光滑曲面中，半径为 $ \epsilon $ 的测地球面积与平面圆面积 $ \pi \epsilon^2 $ 的偏差反映高斯曲率：

$$
|B_g(\epsilon)| = \pi \epsilon^2 \left( 1 - \frac{K}{12} \epsilon^2 + O(\epsilon^3) \right)
$$

**(2) 离散曲面的测地球面积**

对于离散曲面：

- **欧几里得圆面积**：$ |B_{\mathbb{R}^2}(\epsilon)| = \pi \epsilon^2 $。
- **测地楔形面积**（Geodesic Wedge）：顶点 $ i $ 的贡献为：

  $$
  W_i(\epsilon) = \frac{\theta_i}{2\pi} \cdot \pi \epsilon^2 = \frac{1}{2} \epsilon^2 \theta_i
  $$

  其中 $ \theta_i $ 是顶点邻域的总角度。

- **总测地球面积**：

  $$
  |B_g(\epsilon)| = \sum_i W_i(\epsilon) = \frac{\epsilon^2}{2} \sum_i \theta_i
  $$

**(3) 曲率与角度缺损的关系**

对比连续与离散的面积公式：

$$
\frac{\epsilon^2}{12} K_i \approx 1 - \frac{\sum_i \theta_i}{2\pi}
$$

整理后得到：

$$
\Omega_i = 2\pi - \sum_i \theta_i = \frac{\pi}{6} \epsilon^2 K_i
$$

可以把角缺陷看作一种积分曲率：它不是在一点上给出曲率的瞬时值，而是将曲率在顶点周围的小邻域上积分后的结果。这样角缺陷就自然对应于光滑曲面上的高斯曲率积分（即Gauss-Bonnet定理中的项），为离散几何提供了与连续曲率概念一致的几何直觉。

#### 边界曲率的离散化

**边界顶点特性**：

1. **高斯曲率为零**：  
   边界邻域可展平到平面（无角度缺损，$ \Omega_i = 0 $）。  
2. **测地曲率（Geodesic Curvature）**：  
   通过边界顶点的**外角缺损**定义：

   $$
   \kappa_i = \pi - \sum_{ijk \in \text{Boundary}} \theta_i^{jk}
   $$

   **物理意义**：度量边界“弯曲程度”（如直边 $ \kappa_i = 0 $）。

**离散高斯-博内定理（带边界）**：

$$
\sum_{i \in \text{Interior}} \Omega_i + \sum_{i \in \text{Boundary}} \kappa_i = 2\pi \chi
$$

**高斯曲率的近似方法对比**

| **方法**                | **优点**                          | **缺点**                              |
|-------------------------|-----------------------------------|---------------------------------------|
| **角度缺损法**          | 严格满足离散高斯-博内定理         | 仅对特定顶点价数（4或6）收敛到连续曲率 |
| **二次曲面拟合**        | 更接近光滑曲率定义                | 不保证全局拓扑性质（如高斯-博内定理）  |
| **基于Mollification**   | 物理直观（如Steiner公式）         | 计算复杂                              |

- **无统一最优方法**，需根据应用选择（如拓扑分析优先角度缺损法，几何建模可选拟合方法）。  
- **角度缺损法**因保留拓扑性质，在理论推导中更受青睐。

### Curvature Normals

**三种基本曲率法向量**

在微分几何中，曲面的几何信息可通过以下三种2-形式（2-forms）自然表达：

| **类型**               | **光滑形式**               | **离散形式**                                                                 | **物理意义**                     |
|------------------------|----------------------------|------------------------------------------------------------------------------|----------------------------------|
| **面积法向量**         | $ \frac{1}{2} df \wedge df = N \, dA $ | $ \frac{1}{6} \sum_{ijk} f_j \times f_k $ （顶点邻域叉积和）              | 曲面的定向面积                   |
| **平均曲率法向量**    | $ \frac{1}{2} df \wedge dN = HN \, dA $ | $ \frac{1}{2} \sum_{ij} (\cot \alpha_{ij} + \cot \beta_{ij})(f_i - f_j) $ | 曲面的平均弯曲程度               |
| **高斯曲率法向量**    | $ \frac{1}{2} dN \wedge dN = KN \, dA $ | $ \frac{1}{2} \sum_{ij} \frac{\varphi_{ij}}{\ell_{ij}} (f_j - f_i) $      | 曲面的内在曲率（如“尖峰”或“鞍部”）|

**主曲率方向（Principal Directions）**

- **定义**：主方向 $ X_1, X_2 $ 是曲面上弯曲最大和最小的方向，对应主曲率 $ \kappa_1, \kappa_2 $。
- **关键关系**：法向量的微分与曲面微分通过**Weingarten方程**关联：

  $$
  dN(X_i) = -\kappa_i \, df(X_i)
  $$

  这一关系是推导曲率法向量的核心。

**面积法向量的推导**

$$
df \wedge df(X_1, X_2) = df(X_1) \times df(X_2) - df(X_2) \times df(X_1) = 2 \, df(X_1) \times df(X_2) = 2N dA
$$

**平均曲率法向量的推导**
$$
\begin{align*}
df \wedge dN(X_1, X_2) &= df(X_1) \times dN(X_2) - df(X_2) \times dN(X_1) \\
&= -\kappa_2 df(X_1) \times df(X_2) + \kappa_1 df(X_2) \times df(X_1) \\
&= (\kappa_1 + \kappa_2) \, df(X_1) \times df(X_2) \\
&= 2H \, N \, dA(X_1, X_2)
\end{align*}
$$

**高斯曲率法向量的推导**

$$
\begin{align*}
dN \wedge dN(X_1, X_2) &= dN(X_1) \times dN(X_2) - dN(X_2) \times dN(X_1) \\
&= \kappa_1 \kappa_2 \, df(X_1) \times df(X_2) - \kappa_2 \kappa_1 \, df(X_2) \times df(X_1) \\
&= 2K \, N \, dA(X_1, X_2)
\end{align*}
$$

#### 离散化的实现

**面积法向量（离散）**

对顶点 $ i $ 的邻域面求和：

$$
N_i = \frac{1}{6} \sum_{ijk \in \text{St}(i)} f_j \times f_k
$$

**平均曲率法向量（离散）**

通过 **cotangent公式**：

$$
(HN)_i = \frac{1}{2} \sum_{ij \in E} (\cot \alpha_{ij} + \cot \beta_{ij})(f_i - f_j)
$$

- **推导依据**：  
  - 积分 $ HN $ 对偶单元时，cotangent权重来自对偶边与原始边的长度比。  
  - 与Laplace-Beltrami算子 $ \Delta f = 2HN $ 的离散化一致。

**高斯曲率法向量（离散）**

假设法向量沿边在单位球面上弧线运动：

$$
(KN)_i = \frac{1}{2} \sum_{ij \in E} \frac{\varphi_{ij}}{\ell_{ij}} (f_j - f_i)
$$

- **关键区别**：  
  - 法向量 $ N $ 的非线性变化由二面角 $ \varphi_{ij} $ 描述。  
  - 边长 $ \ell_{ij} $ 归一化保证尺度不变性。

### Steiner’s Formula

对于多面体（离散曲面），直接求导得到的曲率要么为零（平面上），要么无定义（顶点/边处）。  

**Steiner方法**通过以下步骤定义离散曲率：

1. **平滑化（Mollification）**：  
   将多面体与半径为 $ \varepsilon $ 的球 $ B_\varepsilon $ 做 **Minkowski求和**（即 $ P + B_\varepsilon $），得到一个光滑逼近的曲面。  
2. **极限分析**：  
   计算平滑后曲面的曲率，并取 $ \varepsilon \to 0 $ 的极限，提取离散曲率的合理定义。

**Minkowski求和与体积增长**

对于凸体 $ A \subset \mathbb{R}^n $，其Minkowski求和的体积可表示为 $ \varepsilon $ 的多项式（**Steiner公式**）：

$$
\text{Vol}(A + B_\varepsilon) = V_0 + \varepsilon \Phi_1 + \varepsilon^2 \Phi_2 + \cdots + \varepsilon^n \Phi_n
$$

- **系数 $ \Phi_k $**：称为 **quermassintegrals**，描述不同维度（面、边、顶点）对体积增长的贡献。  

- **与曲率的关系**：  
  - $ \Phi_1 $：表面积（零阶曲率）。  
  - $ \Phi_2 $：总平均曲率。  
  - $ \Phi_3 $：总高斯曲率（三维时为 $ 4\pi $ 的倍数）。

**多面体的Steiner多项式（三维）**

对多面体 $ P $，平滑后的体积增长分解为：

$$
\text{Vol}(P + B_\varepsilon) = V_0 + \varepsilon A + \frac{1}{2} \varepsilon^2 \sum_{\text{edges } ij} \ell_{ij} \varphi_{ij} + \frac{1}{3} \varepsilon^3 \sum_{\text{vertices } i} \Omega_i
$$

- **各项意义**： 

  | **项**               | **几何贡献**                     | **对应曲率**          |
  |----------------------|----------------------------------|-----------------------|
  | $ \varepsilon A $   | 面的“平板”体积（厚度 $ \varepsilon $） | 面积（零阶曲率）      |
  | $ \varepsilon^2 $   | 边的“圆柱楔”体积（$ \ell_{ij} \varphi_{ij} $） | 平均曲率（边弯曲）    |
  | $ \varepsilon^3 $   | 顶点的“球锥”体积（$ \Omega_i $）      | 高斯曲率（顶点缺陷）  |

**非凸多面体**：公式依然成立，但需注意符号（如二面角 $ \varphi_{ij} $ 可能为负）。

**曲率提取与几何意义**

通过对体积多项式的微分得到曲率：

$$
\begin{align*}
\text{Area}_\varepsilon &= \frac{d}{d\varepsilon} \text{Vol}_\varepsilon = A + \varepsilon \sum \ell_{ij} \varphi_{ij} + \varepsilon^2 \sum \Omega_i, \\
\text{Mean Curvature}_\varepsilon &= \frac{1}{2} \frac{d}{d\varepsilon} \text{Area}_\varepsilon = \frac{1}{2} \sum \ell_{ij} \varphi_{ij} + \varepsilon \sum \Omega_i, \\
\text{Gauss Curvature}_\varepsilon &= \frac{d}{d\varepsilon} \text{Mean Curvature}_\varepsilon = \sum \Omega_i.
\end{align*}
$$

- **当 $ \varepsilon \to 0 $**：  
  - **总平均曲率**：$ \frac{1}{2} \sum \ell_{ij} \varphi_{ij} $（边贡献）。  
  - **总高斯曲率**：$ \sum \Omega_i $（顶点角度缺损）。  

**曲面上的Steiner公式**

对光滑曲面 $ f: M \to \mathbb{R}^3 $，沿法向偏移 $ f_t = f + tN $ 时，面积变化为：

$$
dA_t = (1 + 2tH + t^2 K) \, dA_0
$$

- **几何解释**：  
  - $ df \wedge df $：原始面积。  
  - $ df \wedge dN $：平均曲率（“混合面积”）。  
  - $ dN \wedge dN $：高斯曲率（球面像面积）。  

### 几何微分的基本原理

1. **方向**：确定使几何量变化最快的移动方向
2. **大小**：计算在该方向上变化的速率
3. **合成**：将方向与大小结合得到梯度向量

这种方法避免了繁琐的偏导数计算，直接利用几何直观解决问题。

#### 角度导数的几何推导

计算两点(b,a)和(c,a)之间夹角θ关于点a坐标的梯度：

1. **方向**：垂直于ab连线（这是改变角度最有效的方向）
2. **大小**：1/|b-a|（源自圆周运动的角度变化率）
3. **合成**：∇ₐθ = J(b-a)/|b-a|²，其中J是90度旋转矩阵

#### 微分策略比较

| 方法 | 优点 | 缺点 |
|------|------|------|
| 闭式微分 | 快速准确 | 耗时，难以修改 |
| 自动微分 | 准确高效 | 需要修改代码 |
| 数值微分 | 直接可用 | 不精确，成本高 |
| 符号微分 | 精确 | 表达式可能过于复杂 |

几何微分融合了闭式微分的效率与几何直观性，是处理几何问题的理想选择。

### Curvature Variations

```
体积 -> 面积 -> 平均曲率 -> 高斯曲率 -> 0
```

#### 离散体积的梯度

对于离散曲面网格，顶点i处的**体积梯度**可表示为：

$$
\nabla_i V = \frac{1}{6} \sum (f_j \times f_k) = N_i A_i
$$

这个等式建立了三个关键几何量的联系：

1. **体积变化率**（左项）：顶点移动时包围体积的变化
2. **向量面积**（中项）：通过相邻三角形边界的叉积和
3. **法向量积分**（右项）：顶点邻域的法向量面积分

当移动一个顶点时，体积变化主要来自相邻四面体的体积变化,这是离散版本的$\delta V = N \mathrm{d}A$

#### 离散面积的梯度

对于离散曲面，顶点 $i$ 的**面积梯度**可以用两种互补的形式表示：

$$
\nabla_i A 
= \sum_{\triangle} \frac{1}{2} N_i \times e_i 
= \frac{1}{2} \sum_{j \in \mathcal{N}(i)} (\cot \alpha_{ij} + \cot \beta_{ij})(f_i - f_j)
$$

其中，第一个求和遍历以 $i$ 为顶点的三角形，第二个求和遍历与顶点 $i$ 相邻的边。

**单个三角形的面积梯度：**

* 若移动顶点 $p$，其引起的面积变化率为

$$
\nabla_p A = \frac{1}{2} N \times e
$$

* 方向垂直于对边 $e$ 和三角形法向 $N$，即沿高度方向。
* 大小与对边长度成正比（因为 $A = \frac{1}{2} |e|h$）。

**整体曲面的面积梯度：**

* 是相邻三角形梯度的线性叠加。
* 可以简洁地重写为边权重形式，权重为 $\cot \alpha + \cot \beta$。
* 这些余切权重不仅压缩了几何信息，还编码了局部曲率特征。

##### 曲率与变分的几何联系

* 这样我们在离散中完美复现了光滑几何中的关系 $\delta A = HN$。
* 其中 $\frac{1}{2}(\cot \alpha + \cot \beta)$ 就是离散平均曲率密度。
* 梯度方向给出了面积最速下降的“展平”方向，自然成为形变优化的驱动场。

#### 离散平均曲率的梯度

离散曲面的**总平均曲率**由边积分给出：

$$
H_{total} = \frac{1}{2} \sum \ell_{ij} \varphi_{ij}
$$

其中$\ell_{ij}$为边长，$\varphi_{ij}$为二面角。


##### Schläfli公式的深刻内涵与应用

对于$\mathbb{R}^3$中的闭多面体，在顶点任意运动下保持：

$$
\sum \ell_{ij} \mathrm{d} \varphi_{ij} = 0
$$

其中$\ell_{ij}$为边长度，$\varphi_{ij}$为对应的二面角。 因此梯度简化为纯边长度变化项。

对于顶点位置$ f_i $，总平均曲率的梯度为：

$$
\nabla_{f_i} H_{\text{total}} = \frac{1}{2} \sum_{j \in \mathcal{N}(i)} \frac{\varphi_{ij}}{\ell_{ij}} (f_i - f_j)
$$

其中：
- $\varphi_{ij}$是边$ij$的二面角
- $\ell_{ij}$是边长度
- $\mathcal{N}(i)$表示顶点$i$的邻域

1. **Schläfli公式**：
   - 原始表达式包含两项：边长变化和二面角变化
   - 根据Schläfli公式，二面角变化项相互抵消
   - 最终仅保留边长变化主导的简洁形式

2. **曲率流**：
   - 梯度方向自动指向最优曲率调节方向
   - 权重系数$\varphi_{ij}/\ell_{ij}$编码了局部曲率信息
   - 完美再现连续情形的$\delta \text{mean} = KN$关系

#### 离散高斯曲率的拓扑不变性

离散曲面的**总高斯曲率**由顶点角缺陷求和：

$$
K_{\text{total}} = \sum_{i} (2\pi - \sum_{jk} \theta_i^{jk}) 
$$

其中$\theta_i^{jk}$是顶点$i$处三角形$ijk$的内角。

**离散高斯-博内定理**

该定理揭示：

$$
K_{\text{total}} = 2\pi\chi 
$$

其中欧拉示性数$\chi = V - E + F$是拓扑不变量。

#### 关键性质

1. **梯度为零**：
   - 任意顶点运动下$K_{\text{total}}$保持不变
   - 变分序列自然终止：$\delta \text{Gauss} = 0$
   
2. **几何解释**：
   - 局部角缺陷变化相互抵消
   - 保持整体拓扑约束不变
   - 反映曲面的内在刚性

### 曲率流

1. **曲率计算**：在每个顶点处评估曲率量（平均/H/Gauss曲率）
2. **运动方向**：沿法向移动顶点 $ f_i^{k+1} = f_i^k - \tau \nabla E $
3. **迭代优化**：重复直至收敛

#### 数值实现关键

采用前向欧拉格式：

$
\frac{f_i^{k+1} - f_i^k}{τ} = - \nabla_{f_i} E(f^k)
$

其中梯度项自动包含曲率信息：

- **平均曲率流**：$ \nabla A = HN $
- **Willmore流**：$ \nabla(H^2) = \Delta H + 2H(H^2-K)N $

#### 典型应用对比

| 流类型 | 能量函数 | 梯度表达式 | 主要应用 |
|--------|----------|------------|----------|
| 平均曲率流 | 表面积 | $ \frac{1}{2}∑(\cotα+\cotβ)(f_i-f_j) $ | 表面平滑 |
| 逆平均曲率流 | 体积 | $ \frac{1}{6}∑(f_j×f_k) $ | 体积膨胀 |
| Willmore流 | $ ∫H^2dA $ | 包含双拉普拉斯项 | 保特征平滑 |

#### Willmore流的特殊处理

1. **能量最小化**：寻找$ ∫H^2dA $的临界点
2. **数值挑战**：需要处理四阶导数项
3. **稳定技巧**：
   - 采用隐式时间积分
   - 添加面积约束项
   - 使用混合有限元离散化

这种基于曲率流的处理方法，通过几何量的自然变分实现了：

- 噪声表面的自适应平滑
- 特征结构的保持
- 拓扑优化的自动化

### 总结

离散微分几何通过统一的曲率框架，将连续曲面的几何特性（如高斯曲率、平均曲率）优雅地推广到离散网格，建立了基于顶点角缺陷、边二面角等几何量的离散曲率定义，并通过变分原理揭示了"体积→面积→平均曲率→高斯曲率"的层级关系，为曲面处理算法（如曲率流、网格平滑）提供了理论基础和高效实现方法，在计算机图形学、几何建模和物理仿真等领域具有重要应用价值。