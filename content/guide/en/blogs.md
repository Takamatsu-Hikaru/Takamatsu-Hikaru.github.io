# Technical blogs and research perspectives

Sometimes a paper leaves you wanting to know how an author explains the idea or what happened during the experiments. We have selected technical blogs and research notes, with original links and suggestions for where to begin.

For model mechanisms, start with Jianlin Su or Purshow; for training and evaluation, try Wenhao Chai. You will also find writing on Scaling Ladder, world models, and paper writing below.

Find more articles by field at [BlogrXiv](https://openenvision.github.io/BlogrXiv/site/index.html). [Back to the resource index](resources.md).

<a id="purshow"></a>

## Yuwei Niu / Purshow

[Homepage](https://purshow.github.io/) · [Purshow Notes](https://github.com/Purshow/Purshow_Notes)

### Why remove the encoder? An infrastructure perspective

[Original article](https://github.com/Purshow/Purshow_Notes/blob/main/Encoder-Free/EN/Why%20Removing%20the%20Encoder%20Is%20Better%20-%20An%20Infra%20Perspective.md)

The article explains encoder-free design through differences in workload, parallel configuration, and scheduling between vision encoders and language models. It also notes that removing the encoder does not eliminate workload variation from variable-length visual tokens.

### Purshow Notes: consult by question

[Repository](https://github.com/Purshow/Purshow_Notes) · [WAM](https://github.com/Purshow/Purshow_Notes/tree/main/WAM) · [Encoder-Free](https://github.com/Purshow/Purshow_Notes/tree/main/Encoder-Free)

Topics include attention, MoE, on-policy distillation, world-action models, residual connections, sparse vocabulary embeddings, and YOCO. Several have Chinese and English versions.

### Two short perspectives

- [When Vision Is Pushed to the Roadside](https://x.com/purshow04/status/2081395814610653588)
- [The (Possible) Future of Multimodal Understanding: From Describing the World to Entering the World](https://x.com/purshow04/status/2042451108283761154)

<a id="chai"></a>

## Wenhao Chai

[Homepage](https://wenhaochai.com/) · [Blog index](https://wenhaochai.com/blogs.html)

### LoopDiT: Loop Transformers for Diffusion Models

[Original article](https://wenhaochai.com/blogs/loopdit.html)

Chinese and English, September 10, 2026. Compares weight-sharing looped Transformers and ordinary models under fixed parameter and fixed compute conditions, including more loops versus more denoising steps.

### What Happened to AutomationBench?

[Original article](https://wenhaochai.com/blogs/automationbench-rubric.html)

Chinese and English, September 19, 2026. Examines scoring definitions and string-matching rules in agent-workflow evaluation and how they affect completion rates and model rankings.

### Predictable Swarm Scaling

[Original article](https://wenhaochai.com/blogs/predictable-swarm-scaling.html)

Chinese and English, September 27, 2026. Uses task-dependency graphs and simulations to compare single agents and standard or recursive swarms. Distinguishes coverage from best results while discussing division of work and cost limits.

<a id="zou"></a>

## Jiaxuan Zou

[Blog index](https://jiaxuanzou0714.github.io/blog/)

### Pretraining and scaling as methodology and scientific perspective

[Original article](https://jiaxuanzou0714.github.io/blog/2026/pretrain-scaling-methodology-scientific-perspective/)

Chinese, September 7, 2026. Uses pretraining and embodied-AI examples to connect general learning frameworks, training/inference compute scaling, efficiency, stability, and extrapolation in research.

### How to build a scientific Scaling Ladder

[Original article](https://jiaxuanzou0714.github.io/blog/2026/how-to-build-scientific-scaling-ladder/)

Chinese, September 20, 2026. Organizes a workflow around small experiments, consistent definitions, configuration search, data and model scale, fitting, and validation of extrapolations. Discusses dense, MoE, and data-limited settings.

<a id="ding"></a>

## Xiaohan Ding

[Homepage](https://dingxiaohan.xyz/)

### Writing AI Conference Papers: A Handbook for Beginners

[Repository and full text](https://github.com/hzwer/WritingAIPaper)

By Zhewei Huang and Xiaohan Ding, 2024. Covers extracting contributions, overall structure, introductions and related work, logic, defensibility, reader effort, and information density. Includes common negative reviews and a pre-submission check.

### Rebuttal writing

- [Article on rebuttals](https://zhuanlan.zhihu.com/p/602024489)

<a id="han"></a>

## Xiaoguang Han

[University profile](https://sse.cuhk.edu.cn/faculty/hanxiaoguang). The materials below include academic discussion, mentoring interviews, and research experience.

### Highlights from the first GAMES academic salon

[Organizer's transcript](https://games-cn.org/gamesdiyiqixueshushalongguandianjijin/)

A 2022 discussion of neural implicit representations and 3D research. Han's contribution concerns the relationship between understanding and reconstruction. The full discussion shows researchers questioning one another about concrete problems.

### Good Mentors Online, episode one

[Official GAMES-Webinar video on Bilibili](https://www.bilibili.com/video/BV11Jw5eVE5e/)

Guests Sida Peng and Guanbin Li, hosted by Xiaoguang Han; published January 16, 2025.

### Talking Shape and AI: academia and industry, two sides of research

[Official GAMES-Webinar video on Bilibili](https://www.bilibili.com/video/BV14V3d6wE5K/)

Guests Xiaojuan Qi and Yingqing He, hosted by Xiaoguang Han; page dated August 2, 2026.

For What Makes Good Research, see the [original post and research conversations](research-conversations.md#han). More talks are in the [GAMES archive](https://games-cn.org/previouswebinar-ppt/).

<a id="su"></a>

## Jianlin Su / BoJone: Scientific Spaces

[Scientific Spaces](https://kexue.fm/) · [Article archive](https://kexue.fm/content.html)

### Upgrading the Transformer, part 1: tracing sinusoidal positional encodings

[Original](https://spaces.ac.cn/archives/8231), 2021.

Why do we need positional representations, and how can desired properties guide the analysis of sinusoidal encodings? Useful for LLM mechanisms and applied mathematics; assumes basic linear algebra, attention, and Taylor expansions. Ask where the sine and cosine terms come from.

### Upgrading the Transformer, part 2: rotary positional embeddings

[Original](https://spaces.ac.cn/archives/8265), 2021.

Introduces RoPE and RoFormer, constructing a positional transformation from the goal of making inner products reflect relative position. It is both a mechanism explanation and a firsthand account of design emerging from a question and constraints. Read after part one.

### A discussion of diffusion models, part 1: DDPM as demolition and reconstruction

[Original](https://kexue.fm/archives/9119), 2022.

Starts with a gradual destruction-and-rebuilding analogy, then connects noising and generation. Use the analogy for intuition before following the probability-based derivation.

### More on Muon: why did we choose to try it?

[Original](https://spaces.ac.cn/archives/10739), 2025.

Explains the team's choice of Muon through optimizer practice and discusses spectral norms, learning rates, weight decay, and related theory and experiments. Start with the question, motivation, and experimental adjustments before the equations.


<a id="knightnemo"></a>

## knightnemo / Nemo

[Nemo's Blog](https://knightnemo.github.io/blog/) · [Archive](https://knightnemo.github.io/blog/archives/)

Technical topics include world models, reinforcement learning, and generative models. Look up “Loops Inside the Denoiser” for looped denoiser notes, “A Hitchhiker's Guide To Diffusion RL” for diffusion / flow post-training comparisons, and “Titans: Learning to Memorize at Test Time” for memory mechanisms.

<a id="industry-perspectives"></a>

## Industry and research perspectives

Public perspectives on technical directions and industry developments. Read alongside publication dates, supporting evidence, and subsequent technical work.

- **[Elon Musk: Master Plan, Part Deux](https://www.tesla.com/master-plan-part-deux)**: a 2016 product plan on Tesla's website, including autonomy and vehicle applications.
- **[Sam Altman: blog](https://blog.samaltman.com/)**: perspectives on AI capabilities, products, and industry developments.
- **[Dario Amodei: The Urgency of Interpretability](https://darioamodei.com/post/the-urgency-of-interpretability)**: April 2025; discusses the motivation and progress of research into models' internal mechanisms.

### Member repository

[Takamatsu-Hikaru / AI-Research-Guide](https://github.com/Takamatsu-Hikaru/AI-Research-Guide) — Source repository for this guide.
