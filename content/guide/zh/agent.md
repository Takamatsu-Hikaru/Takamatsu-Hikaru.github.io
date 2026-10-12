# Agent

让模型解释一个报错，和让它打开项目、定位文件、修改代码、运行测试，是两种不同的任务。后者需要持续观察环境，决定下一步动作，并判断事情有没有做完。Agent 研究里很多问题就发生在这个过程里。

模型可以调用搜索、代码执行和浏览器等工具，也可以和其他 Agent 协作。任务怎样拆分，哪些信息需要记住，工具如何接入，以及怎样利用交互数据训练模型，都有各自的研究问题。

## 推理、行动与工具

[ReAct](https://react-lm.github.io/) 将推理与行动交替组织起来，搜索等工具返回的信息又参与下一步决策。语言模型与环境的交互由此形成一个持续的过程。

工具接口决定模型能够执行什么操作、得到什么信息。规划涉及任务分解与动作选择，记忆保存经历、知识或技能，上下文组织则决定哪些信息参与当前决策。[Reflexion](https://arxiv.org/abs/2303.11366) 将反馈写成文字记忆，[Voyager](https://voyager.minedojo.org/) 在 Minecraft 中建立可复用的代码技能库。

## 多 Agent 系统（MAS）

多个 Agent 可以承担不同角色、共享信息和协调任务。通信方式、共享上下文、任务分工与组织结构，会影响协作的过程与成本。群体中的记忆和互动还会形成信息传播与社会关系。

[AutoGen](https://arxiv.org/abs/2308.08155) 用可配置的角色与对话流程组织协作；[Generative Agents](https://arxiv.org/abs/2304.03442) 将记忆、规划与反思用于小镇中的角色，展示日常活动、聚会邀请和角色之间的信息传播。

## 交互数据与策略训练

Agent 的训练样本包含观察、动作、工具返回和任务结果。任务的选择、轨迹的筛选、数据配比与训练目标，影响模型学到的工具使用和决策方式。[Toolformer](https://arxiv.org/abs/2302.04761) 生成、执行并筛选候选工具调用；[AgentTuning](https://arxiv.org/abs/2310.12823) 将 AgentInstruct 交互轨迹与通用指令混合训练。

[强化学习](rl.md)进一步利用任务反馈优化策略。多步交互中的最终结果可能依赖较早的一次搜索或工具选择，奖励分配、探索和训练数据的组织因此相互联系。[Search-R1](https://arxiv.org/abs/2503.09516) 将搜索接入推理与 RL 训练；[Agent Lightning](https://arxiv.org/abs/2508.03680) 研究执行记录与训练数据的衔接，以及任务反馈与具体决策之间的信用分配。

## 环境与评测

研究环境规定 Agent 能看到什么、能执行什么操作，以及任务完成的条件。操作系统、网页、代码仓库等环境各有状态与规则；成功率、调用次数、耗时与成本描述系统表现的不同方面。

[AgentBench](https://arxiv.org/abs/2308.03688) 包含操作系统、数据库等交互环境，并提供[环境与评测代码](https://github.com/THUDM/AgentBench)；[WebArena](https://arxiv.org/abs/2307.13854) 提供可复现的网站环境与任务评价；[SWE-bench](https://www.swebench.com/)围绕真实代码仓库中的问题组织任务。[评测与多 Agent 组织笔记](blogs.md#chai)包括 AutomationBench 评分分析和组织结构的模拟研究。

## 执行框架与基础设施

模型之外的执行框架负责工具调用、上下文组织、沙箱、并行执行与任务状态。接口中有哪些操作，文件和执行结果怎样返回，都会影响模型的决策与工作方式。

[SWE-agent](https://arxiv.org/abs/2405.15793) 研究面向 Agent 的文件查看、编辑与执行接口；[OpenHands](https://arxiv.org/abs/2407.16741) 将代码执行、命令行、浏览器和沙箱接成一个平台。

<a id="agent-projects"></a>

## Agent 项目

一个实际的 Agent 往往会同时用到工具、记忆、规划和反馈。编程助手、个人助理和科研工具，已经把这些能力用在了不同的任务里。

### 编程 Agent：在代码仓库里完成任务

<div class="agent-project-grid">
<article class="agent-project"><h4><a href="https://openai.com/codex/">Codex ↗</a></h4><p>Codex 可以读取项目、修改代码、运行测试和审查改动，也支持并行处理任务与持续的后台工作。</p></article>
<article class="agent-project"><h4><a href="https://code.claude.com/docs/en/overview">Claude Code ↗</a></h4><p>Claude Code 在终端中读取仓库、编辑文件和执行命令，将项目理解、功能实现与测试接在一起，并支持工具、Skills 和项目指令。</p></article>
<article class="agent-project"><h4><a href="https://www.kimi.com/code/en">Kimi Code ↗</a></h4><p>Kimi Code 提供终端和编辑器入口，可以搜索代码、修改项目、运行命令，并根据执行结果调整后续步骤。</p></article>
<article class="agent-project"><h4><a href="https://www.zcode.network/en/">ZCode ↗</a></h4><p>ZCode 是面向 GLM 的编程 Agent 工作环境，将项目、对话和任务执行放在一起，支持通过 AGENTS.md 提供项目约定。</p></article>
<article class="agent-project"><h4><a href="https://pi.dev/">Pi ↗</a></h4><p>Pi 是一个可扩展的轻量 Agent harness，核心围绕文件读写和命令执行，支持组合扩展、Skills 与提示模板。</p></article>
</div>

### 个人 Agent

<div class="agent-project-grid">
<article class="agent-project"><h4><a href="https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/">Muse ↗</a></h4><p>Meta 的 Muse 在云端有自己的计算机和浏览器，可以连接日常应用，处理邮件、行程和长期目标。</p></article>
<article class="agent-project"><h4><a href="https://openai.com/index/introducing-dots/">Dots ↗</a></h4><p>OpenAI 的 Dots 是持续在线的个人 Agent，使用云端计算机和连接的应用推进任务，并从交流与反馈中积累对用户的了解。</p></article>
<article class="agent-project"><h4><a href="https://github.com/NousResearch/hermes-agent">Hermes ↗</a></h4><p>Hermes 是 Nous Research 开源的个人 Agent，可以从终端和聊天软件接收任务。它保留跨会话记忆，并把执行中积累的方法整理成可复用技能。</p></article>
</div>

### 科研 Agent

<div class="agent-project-grid">
<article class="agent-project"><h4><a href="https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep">ARIS ↗</a></h4><p>ARIS 用 Skills 组织机器学习研究流程，包括文献调研、想法讨论、实验、结果分析和论文修改。执行模型推进工作，另一个模型参与审阅，反馈再进入下一轮。</p></article>
</div>

### 健康 Agent

<div class="agent-project-grid">
<article class="agent-project"><h4><a href="https://www.antgroup.com/en/news-media/press-releases/1765779300000">蚂蚁阿福 / Ant A-Fu ↗</a></h4><p>蚂蚁阿福围绕健康问答、报告解读、健康记录与医疗健康服务展开。</p></article>
</div>

## 教程与综述

[Hello Agents](https://github.com/datawhalechina/hello-agents) 提供中文教程和代码项目；[Hugging Face Agents Course](https://huggingface.co/learn/agents-course/en/unit0/introduction)介绍工具调用、Agent 框架与实践。[LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)讨论规划、记忆和工具使用等组件，[LLM Agent Paper List](https://github.com/WooooDyy/LLM-Agent-Paper-List)整理相关研究论文。

更多教程与论文见[Agent 资料目录](catalog-directions.md#topic-21)。编程与开发工具见[学习基础知识](basics.md)；具体使用介绍见[AI 工具](ai.md)与[论文阅读与笔记工作流](irene-workflow.md)。
