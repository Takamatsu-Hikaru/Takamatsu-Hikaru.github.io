# 行动与科学方向：选篇与事实核对

核对日期：2026-10-05。交付文件：`rl.json`、`world-model.json`、`embodied.json`、`ai4x.json`。每份包含完整中英简介、用途、观点、脉络、术语、可检查的练习、图示文案和三张论文卡。正文已有的课程、项目、ACT/ALOHA 与 paper list 保留，由主构建插入这些加法。

## 写作取舍

这些节点用于认识方法怎样回答问题，不当作完整历史或逐年榜单。强化学习按价值/策略/数据复用区分；世界模型按表示/搜索/想象学习区分；具身按示范数据/动作分布/语义迁移区分；AI4X 按预测/计算加速/结构推断区分。每页两段中文 overview 均为 101–110 字，先讲对象和工作，再讲相邻路线。

图由文字节点重新绘制，不复制论文图片。图注明确方法之间的非等价关系。checklist 要求产出轨迹、对照表、数据说明或具体评估，而非“掌握某领域”。论文卡的 limit 是对应研究对象的技术边界，不是泛泛免责声明。

## 强化学习

- [DQN / Nature 2015](https://www.nature.com/articles/nature14236)：确认题名、年份与离散 Atari 任务；卡片说明动作价值、经验回放、目标网络。选择它帮助读者把交互数据与更新对应起来。
- [PPO / arXiv 2017](https://arxiv.org/abs/1707.06347)：确认是技术报告，不标 ICML/NeurIPS。说“常用的裁剪版本”，不把 PPO 的所有变体等同一个式子；裁剪也不意味着严格的单调改善保证。
- [SAC / ICML 2018](https://proceedings.mlr.press/v80/haarnoja18b.html)：采用 1801.01290 对应的正式会议论文，不混入后续 Algorithms and Applications。机制解释为回放、actor–critic 和最大熵目标，避免把 off-policy 写成自动适用于任意离线数据。

## 世界模型

- [World Models / arXiv 2018](https://arxiv.org/abs/1803.10122)；[作者交互文章](https://worldmodels.github.io/)：使用 World Models 这个报告题名。其 NeurIPS 2018 后续论文题名不同，未把报告直接标成该会议论文。交互文章的 V/M/C、CarRacing 与 VizDoom 说明足以支持卡片。没有错误地说控制器每一步都显式规划，也没有说控制器直接接收预测的下一帧。
- [MuZero / Nature 2020](https://www.nature.com/articles/s41586-020-03051-4)：正式题名和年份以期刊为准；2019 是预印本。模型预测服务搜索的奖励、价值、策略，不需像素重建。对照 Dreamer 时突出决策时搜索。
- [DreamerV3 / Nature 2025](https://www.nature.com/articles/s41586-025-08744-2)；[作者项目](https://danijar.com/project/dreamerv3/)：正式题名是 Mastering diverse control tasks through world models。2023 年预印本与 2025 年正式版不可混写。统一配置并非一个训练好的权重跨所有任务；卡片明确各任务训练与交互，避免给新人错误印象。

## 具身智能

- [RT-1 / arXiv 2022](https://arxiv.org/abs/2212.06817)；[官方项目](https://robotics-transformer1.github.io/)：官方引用也为 arXiv 2022。核对语言条件、图像输入、离散动作输出；不虚构会议。
- [Diffusion Policy / RSS 2023 对应 v4](https://arxiv.org/abs/2303.04137v4)；[官方项目](https://diffusion-policy.cs.columbia.edu/)：官方明确 v4 是 RSS 2023，v5 是 2024 IJRR 扩展。卡片固定 v4 与 RSS 年份；方法解释观察条件、动作序列去噪、滚动执行。Push-T 的失败/成功视频在项目页可见。
- [RT-2 / CoRL 2023](https://proceedings.mlr.press/v229/zitkovich23a.html)；[官方项目](https://robotics-transformer2.github.io/)：动作 token 与视觉语言共同训练、语义迁移。区分语义推理能力和新的底层运动技能。这里的 code 字段使用官方项目入口，并非宣称有完整开源模型权重。

保留原有 ACT/ALOHA 起步段而未另加第四张卡，以控制首屏和阅读负担；导航、移动、控制等广义具身路线在 overview 与原文交代，不把三个操作论文当作整个具身领域。

## AI 交叉学科

- [Neural Message Passing for Quantum Chemistry / ICML 2017](https://proceedings.mlr.press/v70/gilmer17a.html)：message passing/readout 与分子性质任务。选择它作为 GNN 联系学科结构的案例，而非泛化成“药物发现已完成”。
- [Deep Potential Molecular Dynamics / PRL 2018](https://arxiv.org/abs/1707.09571)；[作者机构存档](https://oar.princeton.edu/handle/88435/pr1hd7ns9m)；[DeePMD-kit](https://github.com/deepmodeling/deepmd-kit)：预印本 2017，正式出版 2018；卡片标正式年份。学习能量/力及对称性、替代计算链一环；指出训练构型与参考方法决定适用范围。
- [AlphaFold2 / Nature 2021](https://www.nature.com/articles/s41586-021-03819-2)；[官方代码](https://github.com/google-deepmind/alphafold)：结构预测与 CASP14，读法加入置信度；不把结构等同动态、功能、药效。卡片标题沿正式论文，标签用 AlphaFold2 区分后续版本。

用三个分子案例建立可比较的具体认识；医学图像、交通、时序等原正文入口继续存在。此处没有医疗使用建议，示例仅用于理解研究任务与证据。

## 验证

四个 JSON 可正常解析；每页三篇论文，共 12 个全局唯一 ID。每语言都有 2 段 overview、3 项 solves、3 项 roadmap、4 个 terms、3 个 checklist 和 5 个图节点。每条 roadmap 的论文 ID 都对应本页卡片；每卡中英都有 tag/question/idea/why/read/limit。未修改原版正文，未提交或推送。
