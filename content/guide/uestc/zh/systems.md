# 效率与系统

同一个模型，为什么换一个 batch size 就快了，显存明明没满却跑不动，吞吐提高了但用户等得更久？模型落到程序和硬件上，这些问题就会出现。

一个模型的公式没有变，运行速度也可能差很多。数据搬运、算子实现、显存分配、请求调度和多卡通信，都会影响硬件能否持续工作。模型规模、上下文长度与精度，又让这些系统问题和模型设计联系起来。

## 计算、访存与执行开销

GPU 的计算速度很快，但一次运算还涉及数据在不同层级内存之间的搬运，以及算子的启动和调度。计算密集、访存密集与执行开销占主导的任务，需要不同的优化方式。[Making Deep Learning go Brrrr](https://horace.io/brrr_intro.html)具体讨论这些瓶颈。

FlashAttention 通过分块计算减少显存读写，量化降低数值表示的存储与计算开销，算子融合减少中间结果和调度。实际收益与张量形状、数据精度和硬件实现有关。[PyTorch Performance Tuning Guide](https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html)介绍常见的性能优化方法。

## 延迟、吞吐、显存与质量

交互服务关心首字延迟和尾延迟，离线批处理更关心吞吐，部署还受到显存与成本约束。更大的 batch 可能提高硬件利用率，也可能增加单个请求的等待时间；更长的上下文会增加计算和缓存，降低精度则可能影响模型质量。

系统研究因此需要同时描述负载与优化目标。相同硬件和请求条件下的比较，才能说明一种设计省下了哪部分时间或内存。

## 分布式训练与推理

训练大模型需要分配参数、梯度、优化器状态和计算；多张卡之间的通信又会带来同步与等待。推理服务还需要管理 KV cache、批处理和请求调度。ZeRO、PagedAttention 等方法分别处理其中的存储与执行问题。

[How To Scale Your Model](https://jax-ml.github.io/scaling-book/)将模型计算、内存、通信与并行方式联系起来；[Machine Learning Systems](https://mlsysbook.ai/)讨论机器学习系统的组成与设计。[MIT 6.5940（2024）](https://hanlab.mit.edu/courses/2024-fall-65940)覆盖模型压缩、量化与高效计算。

## 系统案例与研究资料

[系统与模型架构笔记](blogs.md#purshow)包含具体设计分析，更多课程和项目见[效率与系统资料](catalog-directions.md#topic-22)，相关团队包括 [MIT HAN Lab](labs.md) 等。[AI 工具](ai.md)也可用于代码阅读与性能分析脚本的编写。
