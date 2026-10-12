# 写作、画图和汇报

## 写作

研究过程中，读过的文章、做过的尝试和得到的结果，会逐渐形成对一个问题的理解。写成论文时，需要把这件事从头讲清楚：为什么研究这个问题，已有工作做到了哪里，这项工作提出了什么，又得到了什么结果。你已经在这个问题上花了很多时间，读者还没有，文章需要把这些背景和联系交代出来。

**问题、做法与发现，构成了文章的主线。** Abstract 简要概括这项工作；Introduction 从背景和已有研究引出问题、动机与贡献；Setup 明确研究对象、任务设定和符号；Method 介绍具体方法；实验与分析则围绕前面的问题呈现证据。已有的[阅读笔记](irene-workflow.md#notes)、实验记录和图表，都可以成为写作的材料。

<figure class="guide-figure research-overview" id="writing-story"><a href="../../../public/blog/guide/figures/uestc/research/writing.svg" target="_blank" rel="noopener"><img src="../../../public/blog/guide/figures/uestc/research/writing.svg" width="1200" height="620" alt="论文结构、配图与研究汇报" loading="lazy" decoding="async"></a></figure>

### 文章结构与衔接

写稿和改稿时，可以多问自己：**为什么要在这里说这件事？这一段到底想传达什么？** 一个概念在后面要用到，前面就需要有合适的介绍；提出了一种做法，也需要交代它针对什么问题、为什么这样设计。读者沿着文章往下读，应当能理解话题为什么从这里走到那里。

比如 Introduction，从背景到 proposal，中间需要有提出这项工作的理由。已有研究怎样处理这个问题，仍然遇到了什么困难，这些困难又怎样引出了新的做法？这里提到的 limitation 应当与自己的研究有关。接下来的 Setup 将问题说得更明确：研究什么对象，输入和输出是什么，采用哪些假设。到了 Method，再沿着这个设定介绍具体怎么做。这样，形式化定义和方法细节都有了来由。

修改时也可以留意那些读起来突然的地方。有时前面缺了背景，有时一段里混进了几个不同的问题，还有些内容虽然有意思，却与当前讨论关系不大。把这些关系理顺，再调整句子，文章会清楚得多。

### 过度防御与空泛表达

写作中容易出现一种 defensive 的口吻：还没讲清楚工作，就先回应预想中的批评，反复声明“这只是一个简单的尝试”“并没有提出全新的框架”，或者提前把自己的发现说轻了。读者更需要知道的是，这项工作具体做了什么、发现了什么，以及结果成立的条件。

AI 润色也常把正常陈述改成解释、声明和评价。介绍一个方法之前，先说一遍“需要强调的是”；写完一个结果，又补上“具有重要意义”“为后续研究提供参考”。这些话如果没有具体内容，就只是在重复强调。**做法、结果和判断可以直接陈述，限制也可以具体交代。**

### 写作资料与工具

[Writing AI Conference Papers](https://github.com/hzwer/WritingAIPaper) 讨论贡献提炼、文章结构、Introduction、Related Work 和具体表达，也有[知乎版本一](https://zhuanlan.zhihu.com/p/593195527)、[二](https://zhuanlan.zhihu.com/p/639732057)、[三](https://zhuanlan.zhihu.com/p/627032371)。[Simon Peyton Jones 的写作讲座](https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/)谈研究想法怎样组织成文章；[MLNLP Paper-Writing-Tips](https://github.com/MLNLP-World/Paper-Writing-Tips) 整理了表达、格式与投稿细节。

也可以结合写作 skill 修改草稿。[Research Paper Writing Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills) 整理了论文各章节的写法与段落组织方法；[Academic Writing Humanizer](https://github.com/Zink-Liu/Academic-Writing-Humanizer) 侧重英文学术表达与句子衔接。使用时可以提供研究材料、已有草稿和喜欢的行文样例，说明想调整的部分。

### Rebuttal

收到评审后，可以和合作者一起看看意见主要集中在哪里：动机没有讲清，方法有疑问，还是实验尚不足以支持结论。Rebuttal 围绕这些具体问题回应，澄清误解、补充分析或实验；对工作价值存在分歧时，也可以说明自己的理由。

[丁霄汉的 Rebuttal 写作指南](https://zhuanlan.zhihu.com/p/602024489)讨论怎样组织对审稿意见的回应。评审中暴露出的表述问题，也可以一起改进到论文里。

## 配图与排版

模型各部分怎样连接，两种方法有什么区别，实验中出现了什么变化，这些关系往往用图更容易表达。读论文时遇到喜欢的配图，也可以留意它怎样组织信息、安排颜色和文字，积累一些构图与排版的参考。

模型结构、实验流程等示意图，可以用 [AstraDraw](https://github.com/AstraDraw/astradraw) 绘制，也可以让编程 AI 编写 SVG，再调整文字、连线与布局。这类图建议保留可编辑文件，便于逐项修改；直接生成整张位图，后续改公式、标签和细节会比较麻烦。**非常不建议用 AI 生成图片作为论文插图。**

<span id="figure-tasks"></span>

<figure class="guide-figure"><a href="../../../public/blog/guide/figures/uestc/writing-libero-full.png" target="_blank" rel="noopener"><img src="../../../public/blog/guide/figures/uestc/writing-libero-full.png" alt="LIBERO 完整总览图" width="960" height="519" loading="lazy"></a><figcaption><a href="https://libero-project.github.io/main.html">LIBERO</a> · <a href="../../../public/blog/guide/figures/uestc/writing-libero-tasks.png">任务分组图</a></figcaption></figure>

<span id="figure-overview"></span>

<figure class="guide-figure">
<a class="guide-figure-link" href="../../../public/blog/guide/figures/uestc/writing-minedojo-overview.png" target="_blank" rel="noopener" aria-label="查看大图：MineDojo"><img src="../../../public/blog/guide/figures/uestc/writing-minedojo-overview.png" alt="MineDojo 总览：环境任务在左，Agent 居中，知识来源在右，箭头连接三者。" width="934" height="376" loading="lazy" decoding="async"></a>
<figcaption><a href="https://minedojo.org/" target="_blank" rel="noopener">MineDojo</a> · <a href="../../../public/blog/guide/figures/uestc/writing-minedojo-overview.png" target="_blank" rel="noopener">查看大图</a></figcaption>
</figure>

<span id="figure-methods"></span>

<figure class="guide-figure">
<a class="guide-figure-link" href="../../../public/blog/guide/figures/uestc/writing-method-comparison.png" target="_blank" rel="noopener" aria-label="查看大图：FunPoison · Figure 2"><img src="../../../public/blog/guide/figures/uestc/writing-method-comparison.png" alt="FunPoison 与 CoProtector 的两行对照图，各列对齐同一处理环节，并标注差异。" width="2380" height="560" loading="lazy" decoding="async"></a>
<figcaption><a href="https://aclanthology.org/2026.findings-acl.1564/" target="_blank" rel="noopener">FunPoison · Figure 2</a> · <a href="../../../public/blog/guide/figures/uestc/writing-method-comparison.png" target="_blank" rel="noopener">查看大图</a></figcaption>
</figure>

<div class="figure-gallery">
<figure class="guide-figure"><span id="figure-results"></span>
<a class="guide-figure-link" href="../../../public/blog/guide/figures/uestc/writing-grouped-results.png" target="_blank" rel="noopener" aria-label="查看大图：FunPoison · Figure 1"><img src="../../../public/blog/guide/figures/uestc/writing-grouped-results.png" alt="FunPoison 结果图：代码质量与注释质量分别展示，各组柱子按方法配色。" width="1176" height="428" loading="lazy" decoding="async"></a>
<figcaption><a href="https://aclanthology.org/2026.findings-acl.1564/" target="_blank" rel="noopener">FunPoison · Figure 1</a> · <a href="../../../public/blog/guide/figures/uestc/writing-grouped-results.png" target="_blank" rel="noopener">查看大图</a></figcaption>
</figure>

<figure class="guide-figure guide-figure--compact"><span id="figure-radial"></span>
<a class="guide-figure-link" href="../../../public/blog/guide/figures/uestc/writing-radial-results.png" target="_blank" rel="noopener" aria-label="查看大图：AlphaEdit · Figure 2"><img src="../../../public/blog/guide/figures/uestc/writing-radial-results.png" alt="AlphaEdit 径向柱状图，多组指标沿圆周排列，方法颜色对应下方图例。" width="1088" height="1228" loading="lazy" decoding="async"></a>
<figcaption><a href="https://arxiv.org/abs/2410.02355" target="_blank" rel="noopener">AlphaEdit · Figure 2</a> · <a href="../../../public/blog/guide/figures/uestc/writing-radial-results.png" target="_blank" rel="noopener">查看大图</a></figcaption>
</figure>

</div>

<figure id="writing-annotation-example" class="guide-figure writing-example"><a href="../../../public/blog/guide/figures/uestc/writing-annotation-example.png" target="_blank" rel="noopener"><img src="../../../public/blog/guide/figures/uestc/writing-annotation-example.png" alt="任务采集、模型覆盖与轨迹标注" width="581" height="318" loading="lazy"></a><figcaption>任务采集、模型覆盖与轨迹标注 · <a href="../../../public/blog/guide/figures/uestc/writing-annotation-example.png" target="_blank" rel="noopener">查看大图</a></figcaption></figure>

<figure id="writing-task-composition" class="guide-figure writing-example"><a href="../../../public/blog/guide/figures/uestc/writing-task-composition.png" target="_blank" rel="noopener"><img src="../../../public/blog/guide/figures/uestc/writing-task-composition.png" alt="任务设置与数据构成" width="514" height="216" loading="lazy"></a><figcaption>任务设置与数据构成 · <a href="../../../public/blog/guide/figures/uestc/writing-task-composition.png" target="_blank" rel="noopener">查看大图</a></figcaption></figure>

<figure id="writing-harbor-example" class="guide-figure writing-example"><a href="../../../public/blog/guide/figures/uestc/writing-harbor-example.png" target="_blank" rel="noopener"><img src="../../../public/blog/guide/figures/uestc/writing-harbor-example.png" alt="数据筛选与任务实例" width="488" height="307" loading="lazy"></a><figcaption>数据筛选与任务实例 · <a href="../../../public/blog/guide/figures/uestc/writing-harbor-example.png" target="_blank" rel="noopener">查看大图</a></figcaption></figure>

<figure id="writing-t2av-layout" class="guide-figure writing-example writing-example--tall"><a href="../../../public/blog/guide/figures/uestc/writing-t2av-layout.png" target="_blank" rel="noopener"><img src="../../../public/blog/guide/figures/uestc/writing-t2av-layout.png" alt="T2AV-Compass · 图文排版" width="1368" height="1824" loading="lazy"></a><figcaption><a href="https://nju-link.github.io/T2AV-Compass/">T2AV-Compass · 图文排版</a> · <a href="../../../public/blog/guide/figures/uestc/writing-t2av-layout.png" target="_blank" rel="noopener">查看大图</a></figcaption></figure>

[Fundamentals of Data Visualization](https://clauswilke.com/dataviz/)介绍图表类型、配色和数据表达。

## 从分析文档到论文

研究过程中，Markdown 适合写分析、整理笔记和讨论记录：公式、代码、表格和图片可以和文字放在一起，后续也方便修改。[Markdown 基础语法](https://www.markdownguide.org/basic-syntax/)可以随用随查。

整理成论文时，再根据投稿模板安排章节、公式、图表与引用。[Overleaf 的 LaTeX 入门](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)介绍这些基本操作。


[LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) 提供 VS Code 中的编译、预览与引用补全；[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 用于英文拼写检查。

## 汇报与交流

论文可以回头读，汇报则需要在有限时间里让听众跟上。可以从研究问题和一个具体例子展开，接着讲关键做法与结果；组会中还可以留下不确定的解释、遇到的困难和想讨论的问题。

同一项工作，面向熟悉方向的合作者和第一次接触的听众，讲法会不一样：前者可以深入方法和实验，后者通常需要多一些背景与例子。AI 也可以协助整理材料、制作幻灯片和调整表达。[研究汇报讲座](https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk/)讨论内容组织、例子与幻灯片设计。

## 相关资料

[写作手册与 Rebuttal 资料](blogs.md#ding) · [The Bottom Line](lesswrong.md#bottom-line) · [科研资料目录](catalog-research.md#topic-11) · [AI 工具](ai.md)

<a id="submission"></a>

## 投稿与会议

[OpenReview](https://openreview.net/) · [IEEE 会议检索](https://events.ieee.org/search-ieee-conferences/) · [IEEE 投稿指南](https://conferences.ieeeauthorcenter.ieee.org/)

[NeurIPS](https://neurips.cc/) · [ICML](https://icml.cc/) · [ICLR](https://iclr.cc/) · [CVPR](https://cvpr.thecvf.com/) · [ACL](https://www.aclweb.org/portal/acl)
