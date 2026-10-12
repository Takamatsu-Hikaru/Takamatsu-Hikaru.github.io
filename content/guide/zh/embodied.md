# 具身智能：从看见到行动

让机器人把杯子放到架子上，需要看清杯子与架子的位置，选动作，控制身体，还要应对杯子滑了、角度变了、之前没见过的环境。你在视频里看到几秒钟的动作，背后连着数据、学习、控制和系统。

机器人操作、导航与运动控制，都需要把感知落实到身体与环境的互动。模型既要处理视觉和语言，也要面对动作的连续性、接触和动力学；换一种机器人或场景，数据与动作接口也会变化。

## 示范数据与动作模型

模仿学习利用人或已有策略的示范训练动作模型。[ACT / ALOHA](https://tonyzhaozh.github.io/aloha/)通过双臂遥操作采集示范，ACT 根据观察预测一段连续动作。[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)则用扩散模型生成动作序列，将视觉信息与动作分布联系起来。

示范怎样覆盖任务，动作采用关节、末端位姿还是其他表示，模型怎样利用连续观察，都会影响操作效果。[LeRobot](https://github.com/huggingface/lerobot)提供机器人数据、模型与训练工具；[Open X-Embodiment](https://robotics-transformer-x.github.io/)汇集不同来源的机器人数据，研究跨任务与跨机器人的学习。

## 视觉、语言与动作

VLA 将视觉观察、语言指令和动作接到同一个模型中。指令描述目标，视觉提供当前环境，动作预测则需要适配具体机器人。预训练模型中的知识怎样迁移到操作，换指令、物体和环境后怎样泛化，都是这类模型的研究问题。

VLA 可以从示范中训练，也可以结合奖励反馈改进策略。模型连接方式与[多模态](multimodal.md)有关，策略优化与[强化学习](rl.md)有关；它们在同一个机器人系统中常常结合使用。

## 仿真、控制与真实环境

仿真提供可重复的场景与交互，用于数据生成、策略训练与评测。[RoboTwin](https://robotwin-platform.github.io/)包含机器人操作的仿真任务、数据和评价工具。真实操作中的摩擦、接触、延迟和传感器误差，也影响仿真策略向真机迁移。

[MIT Robotic Manipulation](https://manipulation.csail.mit.edu/)讨论机器人操作中的几何、接触、规划与控制；[Underactuated Robotics](https://underactuated.mit.edu/)围绕动力学与控制展开。操作之外，导航研究机器人在空间中的定位与移动，人形机器人还涉及平衡、步态和全身协同。

## 课程、论文与团队

[Lumina 具身智能指南](https://github.com/TianxingChen/Embodied-AI-Guide)整理具身方向的任务、方法与资料；细分主题包括 [RL-VLA](https://github.com/Denghaoyuan123/Awesome-RL-VLA)、[人形机器人学习](https://github.com/YanjieZe/awesome-humanoid-robot-learning)和[高效 VLA](https://github.com/guanweifan/awesome-efficient-vla)。

更多[课程与项目](catalog-directions.md#topic-19)、[细分论文索引](catalog-directions.md#topic-20)与[课题组](labs.md)各有整理。数据与 Scaling 的讨论见[相关研究笔记](blogs.md#zou)，实验比较与结果分析见[科研问答](research.md#q44)。
