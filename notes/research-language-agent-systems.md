# LLM、Agent、效率与系统：代表作与导览核对

本轮仅新增 fieldnotes JSON，未改原课程列表与正文。核对日期：2026-10-05。

## 选取逻辑

- LLM：Transformer → GPT → GPT-3 → InstructGPT，分别承担结构、预训练迁移、上下文学习、后训练四个解释任务。不是“架构越来越新”的替代关系。正文已有 BERT、LoRA 和课程入口，所以小卡没有重复展开全部模型。
- Agent：ReAct → Toolformer → Reflexion → SWE-bench，分别解释执行循环、工具训练、跨尝试反馈、完整任务评测。不是断言所有 Agent 必须使用这四个模块；多 Agent 留在原文问题入口。
- Systems：ZeRO、FlashAttention、SmoothQuant、PagedAttention，覆盖训练状态、算子访存、数值精度、服务缓存四类瓶颈。它们可以组合；尤其不把 FlashAttention 与 PagedAttention 写成彼此替代的同类算法。
- 这组入门论文偏重建立机制概念，并非当前前沿全景或 SOTA 榜单。具体前沿仍由现有 look-out / lab / paper list 页承担。
- 简介和 stance 是编辑组织与解释；不把整段观点归因于某篇论文。每张卡的机制说明与阅读入口均根据一手材料核对。

## LLM 一手来源

1. [Attention Is All You Need](https://arxiv.org/abs/1706.03762)：读取摘要，核对编码器—解码器、注意力和翻译任务。会议信息由 [NIPS 2017 proceedings](https://proceedings.neurips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html) 核对。卡片没有编造图号。
2. [GPT 原始技术报告](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)：读取摘要、Introduction、Framework 和 Figure 1 caption，确认生成式预训练后做监督微调、不同任务输入转换；正确标技术报告，不冒充会议。
3. [GPT-3](https://arxiv.org/abs/2005.14165)：读取摘要，确认 zero/one/few-shot、不做使用阶段梯度更新以及训练测试重合问题。会议信息由 [NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html) 核对。
4. [InstructGPT](https://arxiv.org/abs/2203.02155)：读取摘要，核对 demonstrations → ranking → RLHF；用 [NeurIPS 2022](https://proceedings.neurips.cc/paper_files/paper/2022/hash/b1efde53be364a73914f58805a001731-Abstract.html) 核对正式发表。明确偏好不等于事实正确。

## Agent 一手来源

1. [ReAct](https://arxiv.org/abs/2210.03629)、[官方项目页](https://react-lm.github.io/)：读了项目的 HotpotQA 与 ALFWorld 成功/失败案例说明，核对 reasoning/action/observation；[ICLR 2023 论文](https://openreview.net/pdf?id=WE_vluYUL-X) 确认会议年份。year 使用正式会议年 2023，非 arXiv 首发 2022。
2. [Toolformer 原文 HTML](https://arxiv.org/html/2302.04761v1)：阅读方法与 Figure 2 caption，核对采样、执行、按语言模型损失过滤调用及微调。读到 Limitations 中链式调用与交互工具问题；[NeurIPS 2023](https://proceedings.neurips.cc/paper/2023/hash/d842425e4bf79ba039352da0f658a906-Abstract-Conference.html) 确认正式会议。
3. [Reflexion](https://arxiv.org/abs/2303.11366)：核对语言反馈、episodic memory、权重不更新；[作者仓库](https://github.com/noahshinn/reflexion) 可访问，包含真实实验日志和不同反思配置，标 NeurIPS 2023。没有把 verbal reinforcement learning 等同于梯度 RL。
4. [SWE-bench](https://arxiv.org/abs/2310.06770)、[ICLR 2024 proceedings](https://proceedings.iclr.cc/paper_files/paper/2024/hash/edac78c3e300629acfe6cbe9ca88fb84-Abstract-Conference.html)：核对真实 Python 仓库、issue、补丁、测试评价。原始任务集与网站后续 Verified 等变体分开理解，不移植旧成绩到当前榜单。官方入口 [swebench.com](https://www.swebench.com/)。

## 系统一手来源

1. [ZeRO](https://arxiv.org/abs/1910.02054)、[DeepSpeed 官方教程](https://www.deepspeed.ai/tutorials/zero/)：核对三阶段分片对象；正式发表由 [SC20 proceedings](https://sc20.supercomputing.org/proceedings/tech_paper/tech_paper_pages/pap379.html) 核对，所以卡片 year 和 roadmap 用 2020，arXiv URL 首发仍是 2019。
2. [FlashAttention](https://arxiv.org/abs/2205.14135)、[NeurIPS 2022](https://proceedings.neurips.cc/paper/2022/hash/67d57c32e20fd0a7a302cb81d36e40d5-Abstract-Conference.html)：核对 exact attention、tiling、HBM/SRAM 搬运，保留二次算术复杂度的区别。[官方代码](https://github.com/Dao-AILab/flash-attention) 可访问；不引用仓库后续版本的数字作为原论文成绩。
3. [SmoothQuant](https://arxiv.org/abs/2211.10438)、[官方项目](https://github.com/mit-han-lab/smoothquant)：核对 ICML 2023、activation outliers、等价尺度迁移、W8A8。区分量化前等价变换与量化后的误差，未写“无损量化”。
4. [PagedAttention](https://arxiv.org/abs/2309.06180)：摘要直接标 SOSP 2023，核对缓存碎片、block mapping、共享与相同延迟条件吞吐比较。[vLLM 项目](https://github.com/vllm-project/vllm) 可访问。

## 图与自检的表达约束

- LLM 小图表示自回归生成循环，不冒充模型训练全流程。
- Agent 小图表示控制流；观察返回到下一轮，不代表每轮更新参数。
- 系统小图表示请求延迟的简化阶段；正文明确 FlashAttention 和 PagedAttention 的不同作用层。
- Checklist 是本页建议的小练习，未声称已跑过用户设备上的模型实验。
- 卡片默认短文，不放摘要大段摘抄；正式题名与原文链接保留，阅读提示只有 GPT Figure 1 和 Toolformer Figure 2 使用已核对的图号。
