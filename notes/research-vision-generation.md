# 视觉、生成与多模态：新增内容的选取与核对

核对日期：2026-10-05。新增数据位于 `content/guide/fieldnotes/{vision,generation,multimodal}.json`，原有中英文 Markdown 未改。这里记录编辑依据，页面中的短解释为重新撰写，不复制摘要。

## 整体取舍

每页先解释研究对象和可见输出，再给问题驱动的发展脉络、4 个术语、3 个能留下结果的入门动作。论文按机制选择，避免把课程目录扩成一串必读清单。每张小卡提供问题、办法、选取原因、阅读入口和具体能力边界，中英文内容对应。

视觉用 4 篇连接特征学习、深层训练、检测与图像序列；生成用 4 篇连接对抗目标、去噪目标、表示压缩和网络扩展；多模态用 3 篇连接图文匹配、表示连接与视觉指令。年份采用正式发表年份，YOLO / ResNet / ViT 的预印本年份与会议年份可能不同。

所有 roadmap 是选读路线，不声称这些论文涵盖整个领域，也不把并行分支画成技术淘汰链。图中的箭头表示数据或采样步骤，caption 明确非等价关系。

## 计算机视觉

### AlexNet — NIPS 2012

一手来源：[会议页与原文](https://proceedings.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)。核对了标题、作者、年份，以及卷积、GPU、ReLU、dropout 的作用。会议页摘要与最终 PDF 的部分数字不同，卡片不采用这些数值，避免把不同版本的统计混写。保留历史会议名 NIPS。

选取理由：连接数据、计算和表示学习。读法指向结构、训练做法及错误示例；不给新生布置复现整套 ImageNet 训练。

### ResNet — CVPR 2016

一手来源：[CVF 会议页](https://openaccess.thecvf.com/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html)、[原文 PDF](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)。核对了训练退化问题、残差形式及不同深度普通网络与残差网络的对照。

选取理由：机制足够简洁，又能训练实验阅读。没有把贡献缩成“解决梯度消失”，也没有宣称更深必然更好。

### YOLO — CVPR 2016

一手来源：[arXiv 落地页](https://arxiv.org/abs/1506.02640)、[原文 HTML](https://arxiv.org/html/1506.02640v5)、[CVPR PDF](https://openaccess.thecvf.com/content_cvpr_2016/papers/Redmon_You_Only_Look_CVPR_2016_paper.pdf)、[作者 Darknet 仓库](https://github.com/pjreddie/darknet)。核对了整图预测框与类别、网格限制、小物体群体、定位误差。

选取理由：对应现有入门 demo 的检测路线。卡片说明今天的 YOLO 工具与原版有结构差异。原网站 `/darknet/yolov1/` 本次打开变成作者主页，因此小卡改为官方仓库链接；CVF HTML 本次返回 403，论文主链接使用正常返回的 arXiv。

### ViT — ICLR 2021

一手来源：[arXiv 落地页](https://arxiv.org/abs/2010.11929)、[ICLR 原文](https://openreview.net/pdf?id=YicbFdNTTy)、[官方仓库](https://github.com/google-research/vision_transformer)。核对图像 patch、Transformer 结构及数据规模影响。OpenReview forum 本次触发验证，主链接使用 arXiv。

选取理由：连接语言序列与视觉表示，也给大规模预训练的结果加上数据条件。没有写“Transformer 全面取代 CNN”。

视觉 overview 也介绍分割和三维问题，卡片优先保证分类与检测的最小理解链；后续若扩分割，可单独补 U-Net 或 Mask R-CNN，而不是塞进这 4 篇的替代时间线。

## 生成模型

### GAN — NIPS 2014

一手来源：[会议页](https://proceedings.neurips.cc/paper_files/paper/2014/hash/f033ed80deb0234979a61f95710dbe25-Abstract.html)、[原文](https://proceedings.neurips.cc/paper_files/paper/2014/file/f033ed80deb0234979a61f95710dbe25-Paper.pdf)。核对双模型目标、交替训练与从随机输入产生样本。

选取理由：给生成目标一个与扩散不同的参照。没有把判别器比喻成“知道所有好图片的老师”，也没有把理论均衡写成实际训练保证。

### DDPM — NeurIPS 2020

一手来源：[会议页](https://proceedings.neurips.cc/paper/2020/hash/4c5bcfec8584af0d967f1ab10179ca4b-Abstract.html)、[原文](https://proceedings.neurips.cc/paper/2020/file/4c5bcfec8584af0d967f1ab10179ca4b-Paper.pdf)、[官方实现](https://github.com/hojonathanho/diffusion)。核对已知加噪、噪声预测、训练与采样算法的区别。

选取理由：可将核心动作写成新人能追踪的输入输出。图示讲采样时从新噪声生成，不误写为复原预先隐藏的训练图片；也没有宣称 DDPM 首创所有扩散思想。物理理解边界为本指南的解释判断，不是论文原句。

### LDM — CVPR 2022

一手来源：[CVF 会议页](https://openaccess.thecvf.com/content/CVPR2022/html/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.html)、[官方仓库](https://github.com/CompVis/latent-diffusion)。核对压缩表示、编码/解码、交叉注意力条件和计算成本动机。

选取理由：回答扩散“在哪里做”的问题，与原有课程及后续 Stable Diffusion 阅读衔接。压缩信息损失是方法本身的取舍；数量与空间关系提醒是能力解读，不把示例生成能力扩大为条件必然满足。

### DiT — ICCV 2023

一手来源：[CVF 会议页](https://openaccess.thecvf.com/content/ICCV2023/html/Peebles_Scalable_Diffusion_Models_with_Transformers_ICCV_2023_paper.html)、[作者项目页](https://www.wpeebles.com/DiT)、[官方代码](https://github.com/facebookresearch/DiT)。核对 Transformer 处理潜表示 patch、深度/宽度/token 数比较和 ImageNet 类别条件生成。

选取理由：让学生区分目标、表示空间与 backbone 三个层面。论文原任务是图像而非文本到视频，卡片保留此边界。没有使用未经核对的具体 FID 数字。

## 多模态

### CLIP — ICML 2021

一手来源：[PMLR 会议页](https://proceedings.mlr.press/v139/radford21a.html)、[原文](https://proceedings.mlr.press/v139/radford21a/radford21a.pdf)、[官方代码与示例](https://github.com/openai/CLIP)。核对双编码器、对比配对、文本候选构造零样本分类器与相似度输出。

选取理由：图文连接中最容易通过小实验看见的机制。术语与图注明确 CLIP 不直接生成聊天回答。checklist 来自官方代码允许替换候选文字的实际接口。

### BLIP-2 — ICML 2023

一手来源：[PMLR 会议页](https://proceedings.mlr.press/v202/li23q.html)、[原文 PDF](https://proceedings.mlr.press/v202/li23q/li23q.pdf)。核对冻结两端模型、Q-Former、两阶段预训练和论文 limitation 中的错误回答现象。

选取理由：展示可复用模型之间连接模块的作用。官方代码入口 `https://github.com/salesforce/LAVIS/tree/main/projects/blip2` 在原文首页给出；本次浏览工具访问该目录内部错误，未虚称运行仓库。

### LLaVA — NeurIPS 2023

一手来源：[会议页](https://proceedings.neurips.cc/paper_files/paper/2023/hash/6dcf277ea32ce3288914faf369fe6de0-Abstract-Conference.html)、[原文 HTML](https://arxiv.org/html/2304.08485v2)、[官方项目](https://llava-vl.github.io/)、[代码](https://github.com/haotian-liu/LLaVA)。核对投影连接、分阶段训练，以及由 captions 和 bounding boxes 提供文本上下文、纯文本 GPT-4 生成指令数据的流程。

选取理由：补上“能接受图片”和“能遵循用户问题”之间的数据环节。避免写成 GPT-4 直接看图片生成全部数据；区分原作与 LLaVA 后续版本。读法没有编造图号。

## 内容检查

三份 JSON 通过解析与结构检查：中英文顶层字段相同，每语言 2 段 overview、3 项 solves、4 术语、3 项 checklist；roadmap 中的 paper id 均有对应小卡。中文 overview 每段 105–111 字。11 篇论文各有完整的中英文卡片字段。

小图以抽象数据流程展示，不使用论文截图；不复制版权图，也不让线性箭头暗示所有算法或任务相互替代。以上负责内容数据，具体排版与交互由主任务统一实现和检查。
