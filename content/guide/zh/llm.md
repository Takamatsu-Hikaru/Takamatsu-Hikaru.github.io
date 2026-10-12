# 大语言模型：理解、生成、推理

你每天用的对话模型，背后有一连串问题：文字怎样变成模型能处理的东西，模型从什么数据中学习，为什么换一种训练方式会改变回答，又怎样知道它真的做得更好。

大语言模型从文本中学习表示与生成规律，通过指令、示例和上下文处理问答、摘要、代码等任务。数据、模型结构与训练方法共同影响这些能力；到了使用阶段，上下文怎样组织、推理计算怎样分配，也成为研究的一部分。

## 分词、表示与模型结构

文本经过 tokenizer 转成 token 序列，再映射成向量。[Transformer](https://arxiv.org/abs/1706.03762) 用 Attention 组织不同位置之间的信息，自回归语言模型根据已有上下文预测后续 token。[BERT](https://arxiv.org/abs/1810.04805) 则通过预测被遮住的内容学习双向表示。模型结构与训练目标的不同，带来了不同的语言表示和使用方式。

[Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) 介绍模型、tokenizer、数据处理与微调；[LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) 配合代码实现分词、Attention 和语言模型训练。[CS224N](https://web.stanford.edu/class/cs224n/) 围绕自然语言处理讲解语言表示、神经网络与具体任务。相关数学与深度学习内容见[学习基础知识](basics.md)。

## 预训练与 Scaling

预训练把大量数据转化为模型参数。数据的来源、质量和配比，模型规模、训练目标与计算预算，都影响模型学到什么。Scaling 研究这些因素与模型表现之间的关系，也涉及怎样用较小规模的实验判断更大规模训练的选择。

[Stanford CS336（2025）](https://cs336.stanford.edu/spring2025/) 围绕语言模型的实现与训练，覆盖分词、模型、数据处理、Scaling 和训练系统，配有实现作业。[pretrain 和 scaling 作为一种方法论和科学观](https://jiaxuanzou0714.github.io/blog/2026/pretrain-scaling-methodology-scientific-perspective/)讨论训练规模、数据、稳定性与问题选择；[Scaling 相关笔记](blogs.md#zou)还包括实验组织与外推。

## 后训练与推理

后训练利用示范、偏好或奖励调整模型的行为。指令微调学习如何响应要求，偏好学习与强化学习进一步利用回答之间的比较或任务反馈。[LoRA](https://arxiv.org/abs/2106.09685) 从参数更新方式入手，减少适配模型时需要训练的参数量；奖励、策略梯度与优化方法则与[强化学习](rl.md)相连。

推理阶段的研究涉及上下文、搜索、验证和计算分配。同一个模型可以产生多个候选、调用外部工具，或根据反馈修改答案；相应的时间和计算成本也会变化。工具交互见 [Agent](agent.md)，图像与语言的结合见[多模态](multimodal.md)。

## 计算与专题资料

长上下文、缓存、数值精度和硬件决定了训练与推理的开销，相关方法见[效率与系统](systems.md)。位置编码与优化器的推导见[科学空间选文](blogs.md#su)；经典工作的讲解见[李沐论文精读](https://github.com/mli/paper-reading)。更多课程与项目见[LLM 资料目录](catalog-directions.md#topic-14)。
