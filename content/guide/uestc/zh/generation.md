# 生成模型

给定文字描述生成图像、补全被遮住的区域、按要求修改画面，都需要学习数据的分布，并把输入条件带入生成过程。研究涉及怎样训练模型、怎样从模型中采样，以及怎样控制生成的内容。

图像是生成建模中的一类数据。相似的方法也用于视频、音频、分子结构和动作序列；这些输出可能有多个合理答案，模型需要表示这种多样性，以及数据内部的空间、时间或结构关系。

## 生成目标与模型结构

VAE 通过潜变量描述数据，并用变分推断进行训练；GAN 利用生成器与判别器的对抗学习数据分布。扩散模型学习不同噪声程度下的去噪预测，生成时从随机噪声出发逐步采样。Flow Matching 则学习连接噪声与数据的速度场，通过数值积分得到样本。

训练目标之外，计算发生在哪里、采用什么网络，也是不同的设计选择。LDM 将扩散过程放在压缩后的潜空间，最后解码回图像；DiT 使用 Transformer 处理潜空间中的图像块。条件信息可以进入这些网络，引导内容、布局或风格。

## 扩散与 Flow Matching

DDPM 的训练样本来自对数据逐步加噪，网络根据带噪样本和时间步预测噪声等目标量。Score-based 方法学习分布的对数密度梯度，将不同噪声水平下的分布与采样过程联系起来。Flow Matching 通过指定概率路径构造速度目标，学习样本沿这条路径怎样变化。

[Diffusion Models](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)介绍扩散模型的目标与推导；[Score-based Generative Modeling](https://yang-song.net/blog/2021/score/)从 score 与随机微分方程讨论生成。[MIT Flow Matching and Diffusion（2025）](https://diffusion.csail.mit.edu/2025/)覆盖 ODE/SDE、概率路径、Flow Matching 与 score matching，并有配套代码实验。概率、梯度和微分方程在这里分别参与分布建模、训练与采样，相关内容见[数学基础](basics.md)。

## 条件控制与采样效率

文字、已有图像、深度或布局可以作为生成条件。模型既要保持样本质量，也要响应这些要求；局部编辑、细节保留和多个条件之间的配合，都有具体的研究问题。

采样器决定怎样用网络预测更新样本，步数、更新公式和随机性共同影响速度与结果。潜空间压缩减少计算，也会改变细节的表达。这些取舍将生成质量与计算效率联系起来。

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)把扩散模型用于动作序列，结合视觉观察预测机器人操作，相关内容见[具身智能](embodied.md)。生成方法还可用于环境预测和交互式模拟，与[世界模型](world-model.md)相连。

## 教程与技术文章

[Hugging Face Diffusion Course](https://huggingface.co/learn/diffusion-course/unit1/1)提供扩散模型的讲解与代码；[科学空间的扩散系列](blogs.md#su)包含中文数学推导，[LoopDiT](blogs.md#chai)讨论相关模型与比较实验。更多课程与项目见[生成模型资料目录](catalog-directions.md#topic-16)。
