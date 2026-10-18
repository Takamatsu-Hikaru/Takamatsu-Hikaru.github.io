# 技术博客与研究观点

有些问题，读完论文还想看看作者怎样解释、实验中又遇到了什么。技术博客里常有更完整的推导、实现细节和研究过程，下面按主题整理了一些文章与笔记。

## 模型结构与数学推导

<a id="purshow"></a>

### Attention、MoE 与多模态模型

[Purshow](https://purshow.github.io/) 的 [Purshow Notes](https://github.com/Purshow/Purshow_Notes) 包含 Attention、MoE、On-Policy Distillation、残差连接、稀疏词表嵌入和 YOCO 等主题，多项提供中英文版本。[WAM](https://github.com/Purshow/Purshow_Notes/tree/main/WAM) 与 [Encoder-Free](https://github.com/Purshow/Purshow_Notes/tree/main/Encoder-Free) 有独立专题。

[从 Infra 角度看，为什么去掉 Encoder 更好](https://github.com/Purshow/Purshow_Notes/blob/main/Encoder-Free/CN/从Infra角度看，为什么去掉Encoder更好.md)比较视觉编码器与语言模型的负载、并行配置和调度差异，也讨论变长视觉 token 带来的负载问题。

关于多模态路线的两篇短文：[When Vision Is Pushed to the Roadside](https://x.com/purshow04/status/2081395814610653588)、[From Describing the World to Entering the World](https://x.com/purshow04/status/2042451108283761154)。

<a id="su"></a>

### 位置编码、扩散模型与优化器

[科学空间](https://kexue.fm/)有较完整的模型分析与数学推导，[文章归档](https://kexue.fm/content.html)按时间收录各个系列。

- **[Sinusoidal 位置编码追根溯源](https://spaces.ac.cn/archives/8231)**：从位置表示应具备的性质出发，分析正弦位置编码。
- **[博采众长的旋转式位置编码](https://spaces.ac.cn/archives/8265)**：介绍 RoPE 的构思，从内积表达相对位置这一目标构造位置变换。
- **[DDPM = 拆楼 + 建楼](https://kexue.fm/archives/9119)**：通过逐步破坏与重建的类比，讲解加噪、去噪与相应推导。
- **[为什么我们选择尝试 Muon？](https://spaces.ac.cn/archives/10739)**：介绍优化器实践中的选择，讨论谱范数、学习率与权重衰减。

<a id="knightnemo"></a>

### 世界模型、Diffusion RL 与记忆机制

[Nemo's Blog](https://knightnemo.github.io/blog/)（knightnemo）整理机器学习、数学与计算机相关笔记。[文章归档](https://knightnemo.github.io/blog/archives/)中有《Loops Inside the Denoiser》的去噪器循环结构笔记、《A Hitchhiker's Guide To Diffusion RL》的 diffusion / flow 后训练比较，以及《Titans: Learning to Memorize at Test Time》的记忆机制介绍。

## 训练、Scaling 与评测

<a id="chai"></a>

### 循环模型与 Agent 评测

[Wenhao Chai](https://wenhaochai.com/) 的[博客](https://wenhaochai.com/blogs.html)有以下几篇中英双语文章：

- **[LoopDiT: Loop Transformers for Diffusion Models](https://wenhaochai.com/blogs/loopdit.html)**：比较循环共享 Transformer 与普通模型在固定参数量、固定计算量下的表现，也比较增加循环与增加去噪步数。2026 年 9 月。
- **[What Happened to AutomationBench?](https://wenhaochai.com/blogs/automationbench-rubric.html)**：分析计分口径和字符串规则怎样影响 Agent 任务完成率与模型排名。2026 年 9 月。
- **[Predictable Swarm Scaling](https://wenhaochai.com/blogs/predictable-swarm-scaling.html)**：通过任务依赖图与模拟比较单 Agent、标准蜂群和递归蜂群，讨论完成覆盖度、结果质量与成本。2026 年 9 月。

<a id="zou"></a>

### 预训练与 Scaling Ladder

[jiaxuanzou0714](https://jiaxuanzou0714.github.io/blog/) 的两篇文章从研究方法与实验组织讨论 Scaling：

- **[pretrain 和 scaling 作为一种方法论和科学观](https://jiaxuanzou0714.github.io/blog/2026/pretrain-scaling-methodology-scientific-perspective/)**：用预训练与具身等案例，讨论通用学习框架、训练与推理计算扩展，以及效率、稳定性和外推预测。2026 年 9 月。
- **[如何搭建一个科学的 Scaling Ladder](https://jiaxuanzou0714.github.io/blog/2026/how-to-build-scientific-scaling-ladder/)**：梳理小规模实验、配置搜索、数据与模型规模、拟合和外推，涵盖 dense、MoE 与数据受限场景。2026 年 9 月。

## 科研写作与讨论

<a id="ding"></a>

### 论文写作与 Rebuttal

[Writing AI Conference Papers: A Handbook for Beginners](https://github.com/hzwer/WritingAIPaper)讨论贡献提炼、文章结构、Introduction、Related Work 与表达，也整理常见评语和投稿前检查事项。由 hzwer 与 [Xiaohan Ding](https://dingxiaohan.xyz/) 合著，2024 年。

[Rebuttal 写作指南](https://zhuanlan.zhihu.com/p/602024489)讨论怎样组织对审稿意见的回应。

<a id="han"></a>

### 研究问题、导师与学术职业

[GAMES 第一期学术沙龙观点集锦](https://games-cn.org/gamesdiyiqixueshushalongguandianjijin/)记录了围绕神经隐式表达与三维研究的讨论，其中谈到理解与重建的关系。2022 年。

- **[《好导师在线》第一期](https://www.bilibili.com/video/BV11Jw5eVE5e/)**：彭思达、李冠彬参加的导师访谈，2025 年 1 月。
- **[《谈形·说 AI》：科研双面镜——学术界 VS 工业界](https://www.bilibili.com/video/BV14V3d6wE5K/)**：齐晓娟、何盈庆的对谈，2026 年 8 月。

两场访谈由 [Xiaoguang Han](https://sse.cuhk.edu.cn/faculty/hanxiaoguang) 主持。他的《什么是好的科研工作》见[科研经验与交流](research-conversations.md#han)。更多学术报告见 [GAMES 往期报告](https://games-cn.org/previouswebinar-ppt/)。

<a id="industry-perspectives"></a>

## 产业与研究观点

- **[Master Plan, Part Deux](https://www.tesla.com/master-plan-part-deux)**：Elon Musk 于 2016 年发表的产品规划，包含自动驾驶与车辆应用的设想。
- **[AI 能力、产品与产业发展](https://blog.samaltman.com/)**：Sam Altman 的博客。
- **[The Urgency of Interpretability](https://darioamodei.com/post/the-urgency-of-interpretability)**：Dario Amodei 讨论模型可解释性的研究动机与进展，2025 年 4 月。

更多技术文章见 [BlogrXiv](https://openenvision.github.io/BlogrXiv/site/index.html)；课程、项目与工具见[资料总索引](resources.md)。

### 社员仓库

[Takamatsu-Hikaru / AI-Research-Guide](https://github.com/Takamatsu-Hikaru/AI-Research-Guide) — 本指南的开源仓库。
