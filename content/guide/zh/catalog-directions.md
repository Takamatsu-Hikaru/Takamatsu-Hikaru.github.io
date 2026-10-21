# 各方向课程、论文与项目

各方向的课程、论文清单与开源项目整理在下面。课程通常会连贯地讲解背景与方法，项目页有代码、实验和演示，paper list 则汇集同一主题下的相关工作。各方向的基本介绍见[研究方向总览](directions.md)。

[返回资料总索引](resources.md)

<a id="topic-13"></a>

## CV：感知任务、视觉表示与图像模型

- **[Kaggle Digit Recognizer：MNIST 手写数字识别](https://www.kaggle.com/competitions/digit-recognizer/overview)**

    手写数字分类比赛，提供数据、公开 Notebook 与结果提交。 [Code 页面](https://www.kaggle.com/competitions/digit-recognizer/code) · [第一个 AI 项目](start.md)

- **[Ultralytics YOLO Quickstart](https://docs.ultralytics.com/quickstart)**

    目标检测入门文档，包含安装、加载预训练模型与预测的代码示例。

    <figure class="resource-figure medium"><a href="https://docs.ultralytics.com/quickstart"><img src="../../../public/blog/guide/figures/uestc/intro/yolo-detection.png" alt="YOLO · 目标检测" loading="lazy" width="1920" height="541"></a></figure>

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/stanford.png" alt="" loading="lazy"> Stanford CS231n](https://cs231n.stanford.edu/schedule)**

    计算机视觉课程，讲解视觉任务、神经网络训练与常见架构，提供课件和作业。

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/polo.png" alt="" loading="lazy"> CNN Explainer — Polo Club](https://poloclub.github.io/cnn-explainer/)**

    卷积网络交互演示，展示输入图像与网络中间表示。

- **[Computing Receptive Fields of Convolutional Neural Networks — Distill](https://distill.pub/2019/computing-receptive-fields/)**

    带可视化的技术文章，解释网络结构怎样决定感受野。

<a id="topic-14"></a>

## 自然语言处理与语言模型

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/huggingface.svg" alt="" loading="lazy"> Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1)**

    语言模型课程与代码，涵盖 tokenizer、模型与数据处理。

- **[Build a Large Language Model From Scratch — Sebastian Raschka](https://github.com/rasbt/LLMs-from-scratch)**

    从头实现语言模型的配套代码，包含 token、embedding、attention 与训练过程。

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/stanford.png" alt="" loading="lazy"> Stanford CS224N](https://web.stanford.edu/class/cs224n/)**

    自然语言处理课程，涵盖表示学习、注意力与语言任务。

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/stanford.png" alt="" loading="lazy"> Stanford CS336：Language Modeling from Scratch，2025](https://cs336.stanford.edu/spring2025/)**

    从头构建语言模型的课程，包含数据、训练、系统与评估，配有编程作业和视频。 [官方第一讲](https://www.youtube.com/watch?v=SQ3fZ1sAqXI)

- **[Deep Dive into LLMs like ChatGPT — Karpathy](https://www.youtube.com/watch?v=7xTGNNLPyMI)**

    面向较广泛观众的语言模型介绍，讲解 ChatGPT 一类模型的训练与使用。

<a id="topic-15"></a>

## 多模态与视觉语言模型

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/huggingface.svg" alt="" loading="lazy"> Vision Language Models Explained — Hugging Face](https://huggingface.co/blog/vlms)**

    介绍视觉语言模型的组成、使用与评价。

- **[CLIP 官方项目](https://github.com/openai/CLIP)**

    图文对比学习的官方代码与论文，包含零样本分类示例。

- **[LLaVA：Visual Instruction Tuning](https://llava-vl.github.io/)**

    视觉指令微调项目，介绍视觉与语言模型的连接、指令数据和图像问答。

- **[Awesome Multimodal Large Language Models](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models)**

    多模态大模型论文与资源列表，按任务与主题整理。

<a id="topic-16"></a>

## AIGC、Diffusion 与 Flow Matching

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/huggingface.svg" alt="" loading="lazy"> Hugging Face Diffusion Course](https://huggingface.co/learn/diffusion-course/unit1/1)**

    扩散模型实践课程，通过 Notebook 介绍图像生成、加噪与去噪。

- **[MIT：Introduction to Flow Matching and Diffusion Models，2025](https://diffusion.csail.mit.edu/2025/)**

    生成模型课程，讲解 Flow Matching 与扩散模型的数学关系，配有讲义和练习。

- **[Generative Modeling by Estimating Gradients of the Data Distribution — Yang Song](https://yang-song.net/blog/2021/score/)**

    从数据分布的 score 出发解释生成建模，包含图示与数学推导。

- **[What are Diffusion Models? — Lilian Weng](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)**

    扩散模型技术综述，梳理方法、训练目标与相关推导。

<a id="topic-17"></a>

## World Model：预测、交互、想象与决策

- **[World Models — David Ha、Jürgen Schmidhuber](https://worldmodels.github.io/)**

    世界模型的文章与实验演示，将观察压缩、动态预测与控制结合起来。

- **[DreamerV3 — Danijar Hafner 等](https://danijar.com/project/dreamerv3/)**

    通过世界模型学习行为的项目，提供论文、代码与任务演示。

- **[Awesome World Models — JiahuaDong](https://github.com/JiahuaDong/Awesome-World-Models)**

    世界模型论文清单，涵盖视频、机器人等研究主题。

<a id="topic-18"></a>

## 强化学习

- **[动手学强化学习](https://hrl.boyuai.com/)**

    中文强化学习教材，配有代码与视频，涵盖价值方法、策略方法与深度强化学习。

- **[Easy RL：蘑菇书](https://github.com/datawhalechina/easy-rl)**

    Datawhale 的中文强化学习教程，包含基本概念、算法与实践。

- **[Gymnasium：Basic Usage](https://gymnasium.farama.org/introduction/basic_usage/)**

    环境接口教程，介绍 observation、action、reward 与终止信号。

- **[CleanRL](https://docs.cleanrl.dev/)**

    强化学习算法的单文件实现，配有文档与实验说明。

- **[Berkeley Deep Reinforcement Learning](https://rail.eecs.berkeley.edu/deeprlcourse/)**

    深度强化学习课程，涵盖策略优化、模型学习等主题，提供视频和作业。

<a id="topic-19"></a>

## 具身智能与机器人

- **[Lumina／陈天行：Embodied-AI-Guide](https://github.com/TianxingChen/Embodied-AI-Guide)**

    中文具身智能指南，包含方向介绍、学习路线、论文、教程与项目。

- **[MIT Robotic Manipulation — Russ Tedrake](https://manipulation.csail.mit.edu/)**

    机器人操作课程与教材，涉及几何、感知、规划与控制。

- **[MIT Underactuated Robotics](https://underactuated.mit.edu/)**

    机器人动力学、控制与决策课程。

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/huggingface.svg" alt="" loading="lazy"> LeRobot](https://github.com/huggingface/lerobot)**

    机器人学习的模型、数据集、训练代码与工具。

- **[RoboTwin 2.0](https://robotwin-platform.github.io/)**

    双臂机器人仿真、数据生成与评测项目。

- **[ALOHA／ACT：Learning Fine-Grained Bimanual Manipulation](https://tonyzhaozh.github.io/aloha/)**

    双臂机器人模仿学习项目，展示示范数据采集、动作预测与精细操作。

    <figure class="resource-figure medium"><a href="https://tonyzhaozh.github.io/aloha/"><img src="../../../public/blog/guide/figures/uestc/intro/aloha.jpg" alt="ACT / ALOHA · 双臂操作" loading="lazy" width="1859" height="1454"></a></figure>

- **[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)**

    将扩散模型用于动作序列生成，提供论文、代码与机器人操作演示。

- **[Open X-Embodiment](https://robotics-transformer-x.github.io/)**

    跨机器人数据与模型项目，汇集不同机器人平台的操作数据。

<a id="topic-20"></a>

## 具身细分方向的论文索引

- **[Awesome Humanoid Robot Learning — Yanjie Ze](https://github.com/YanjieZe/awesome-humanoid-robot-learning)**

    人形机器人学习论文索引，涵盖运动与操作等主题。

- **[Awesome RL-VLA](https://github.com/Denghaoyuan123/Awesome-RL-VLA)**

    强化学习与 VLA 操作学习的交叉论文列表。

- **[Awesome Efficient VLA](https://github.com/guanweifan/awesome-efficient-vla)**

    VLA 效率研究索引，涵盖推理、部署与模型设计。

- **[Data Pyramid for Embodied Manipulation](https://github.com/worldbench/awesome-embodied-data-pyramid)**

    具身操作数据综述，按数据来源与组织方式整理相关工作。

<a id="topic-21"></a>

## Agent

- **[LLM Powered Autonomous Agents — Lilian Weng](https://lilianweng.github.io/posts/2023-06-23-agent/)**

    通过规划、记忆和工具使用等组件介绍 LLM Agent。

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/huggingface.svg" alt="" loading="lazy"> Hugging Face Agents Course](https://huggingface.co/learn/agents-course/en/unit0/introduction)**

    工具调用、Agent 框架与实践课程。

    <figure class="resource-figure medium"><a href="https://huggingface.co/learn/agents-course/en/unit0/introduction"><img src="../../../public/blog/guide/figures/uestc/intro/hf-agents.jpg" alt="Hugging Face Agents Course" loading="lazy" width="1200" height="675"></a></figure>

- **[Hello Agents — Datawhale](https://github.com/datawhalechina/hello-agents)**

    中文 Agent 原理与实践教程，包含基础实现、框架与项目。

- **[LLM-Agent-Paper-List](https://github.com/WooooDyy/LLM-Agent-Paper-List)**

    综述作者维护的 LLM Agent 论文列表，按研究主题分类。

- **[AgentBench](https://github.com/THUDM/AgentBench)**

    多环境 Agent 评测项目，提供任务、评测代码与结果。

- **[SWE-bench](https://www.swebench.com/)**

    基于真实 GitHub issue 的软件任务评测，使用测试检验代码修改。

<a id="topic-22"></a>

## 效率、推理和软硬协同

- **[Machine Learning Systems](https://mlsysbook.ai/)**

    机器学习系统教材，涵盖数据、软件、硬件与部署。

- **[MIT 6.5940：TinyML and Efficient Deep Learning Computing，2024](https://hanlab.mit.edu/courses/2024-fall-65940)**

    TinyML 与高效深度学习课程，讲解量化、压缩与高效计算。

- **[Making Deep Learning go Brrrr From First Principles — Horace He](https://horace.io/brrr_intro.html)**

    从计算、内存与执行开销解释深度学习程序的性能。

- **[How To Scale Your Model](https://jax-ml.github.io/scaling-book/)**

    分布式训练与推理技术书，讨论模型规模、硬件与通信开销。

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/pytorch.webp" alt="" loading="lazy"> PyTorch Performance Tuning Guide](https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html)**

    PyTorch 官方性能调优指南，包含数据加载、内存与计算优化。

<a id="topic-23"></a>

## AI4X：科学数据与任务

- **[DeepChem](https://github.com/deepchem/deepchem)**

    面向药物、分子等科学任务的开源工具与教程。

- **[Therapeutics Data Commons](https://tdcommons.ai/)**

    药物与生物任务的数据集和评测基准。

- **[MONAI Tutorials](https://github.com/Project-MONAI/tutorials)**

    医学影像教程，包含数据处理、模型训练与分割等示例。

- **[DeePMD-kit](https://github.com/deepmodeling/deepmd-kit)**

    将深度学习用于原子相互作用建模与分子动力学模拟。

- **[FinRL](https://github.com/AI4Finance-Foundation/FinRL)**

    金融强化学习项目，包含数据、交易环境、训练与回测。

- **[Awesome AI for Science](https://github.com/ai4s-research/awesome-ai-for-science)**

    AI for Science 的跨学科工具、论文与项目集合。

<a id="topic-24"></a>

## 自动研究

- **[autoresearch — Karpathy](https://github.com/karpathy/autoresearch)**

    自动迭代训练实验的项目，包含实验目标、代码修改与结果记录。

- **[The AI Scientist — Sakana AI](https://github.com/SakanaAI/AI-Scientist)**

    自动研究系统，包含想法生成、实验与论文写作。

<a id="topic-25"></a>

## 图学习与时序预测

- **[<img class="resource-mark" src="../../../public/blog/guide/figures/uestc/resources/stanford.png" alt="" loading="lazy"> Stanford CS224W：Machine Learning with Graphs](https://web.stanford.edu/class/cs224w/)**

    图机器学习课程，讲解图表示、图神经网络与典型任务。

- **[Forecasting: Principles and Practice，第三版](https://otexts.com/fpp3/)**

    开放时序预测教材，涵盖趋势、季节性、预测与评价，配套使用 R。

- **[tsai](https://github.com/timeseriesAI/tsai)**

    基于 PyTorch/fastai 的时序学习工具，提供模型与实践示例。
