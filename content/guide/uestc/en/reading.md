# Finding and reading papers

Getting started in research may be closer than you think. While reading, building a project, or talking with others, **you come across a question that interests you or a possible improvement**. Following it through related work, trying things out, making sense of the results, and writing up what you find is how a research project begins to take shape.

<h2 id="reading-overview">Understanding a field</h2>

Research also brings you into contact with the wider field. Surveys, talks, and courses offer an overview; foundational papers and researchers' blogs help connect its development: **What prompted each piece of work? Why did the authors take that approach? What did it solve, and what did it change about our understanding?** These connections reveal different lines of research and the smaller areas within a broad field.

Some questions will catch your interest. Other work may offer a method, a dataset, or a useful explanation for your current project. As you keep reading, discussing, and experimenting, you develop your own judgment about **what is worth investigating, what remains unclear, and what to try next**. Research taste and ideas grow through this experience.

When a paper interests you, the authors' earlier and later work, homepage, blog, and talks are worth a look too. Following **the same question** across several papers can reveal reasoning that is hard to see in one article alone.

## Finding papers and related work

<a id="research-map"></a>

When you are new to a topic, you can ask AI to find surveys and representative papers, then follow their related work—and the related work of those papers—to trace the main research directions: **what problems people are addressing, how the methods relate, and what later work improved**. When a particular line interests you, read the original papers and ask AI to find more work along it.

[Google Scholar](https://scholar.google.com/) can help find later citations and related papers; a paper's references lead to the work it builds on. Author pages, project sites, and code repositories often include talks, demos, and updates. [Scholar help](https://scholar.google.com/intl/en/scholar/help.html) explains its search features, and [AMiner](https://docs.aminer.cn/user-guide/platform-overview/) also offers paper search and reading tools. See [targeted literature search](irene-workflow.md#search) for more approaches.

<a id="reading-depth"></a>

## Reading depth

**How closely you read depends on what you want to understand.** For an introduction to a piece of work, focus on the problem, main method, and key results. To understand a field, compare the connections between papers. To reproduce or extend a method, look more closely at the architecture, equations, data, and experimental setup.

You can return to the same paper several times. Questions from a first reading may become clearer after seeing later work, the code, or an experiment. [Keshav's How to Read a Paper](https://cs.uwaterloo.ca/~brecht/courses/854-Experimental-Performance-Evaluation-2018/readings/common/how-to-read/keshav-paper-reading.pdf) describes a three-pass approach; [Mu Li's How to Read Papers](https://www.bilibili.com/video/BV1H44y1t75x/) also discusses reading order and depth.

<figure class="resource-figure medium"><a href="https://www.bilibili.com/video/BV1H44y1t75x/"><img src="../../../public/blog/guide/figures/uestc/reading/limu-reading.jpg" alt="Mu Li: How to Read Papers (in Chinese)" loading="lazy" width="800" height="450"></a><figcaption><a href="https://www.bilibili.com/video/BV1H44y1t75x/">How to Read Papers</a><span class="caption-dot">·</span>Mu Li · Chinese<span class="caption-dot">·</span><a href="https://www.zhihu.com/zvideo/1428973951632969728">Zhihu</a></figcaption></figure>

## Problems, methods, and experiments

The abstract, introduction, key figures, and conclusion give a first view of **what the authors did, why, and how**. The experiments show how the results support their claims. You can return to method details and unclear passages as you read further.

<a id="claims-evidence"></a>

If the authors attribute an improvement to a module, look at whether the ablation isolates that change. If they claim generalization to new settings, examine how the test settings relate to the training data. When comparing papers, differences in **tasks, data, and compute** matter alongside differences in methods. Questions that arise while reading can lead to a discussion, or you can [ask AI to question your explanation](ai.md#grill-me).

<a id="paper-code"></a>

## Papers and code

A paper's repository can contain many files, and individual implementations may be hard to follow at first. Use the architecture and design in the paper as a guide: **trace how data moves through the program, then how training and inference work**. The overall structure becomes easier to understand. AI can work with the paper and repository to help you find the relevant implementation and explain how the parts connect and why they are written that way.

When reproducing a result, data processing, training configuration, and evaluation often become clearer through the code. Some details that affect the results are absent from the main text; **appendices, configuration files, and repository issues** often fill in the gaps.

<a id="paper-notes"></a>

## Notes and reference management

[Zotero](https://www.zotero.org/support/quick_start_guide) stores paper metadata, PDFs, and annotations. Obsidian, Feishu, or Notion can hold your understanding, questions, and related material. Alongside what a paper says, it is useful to keep **why it caught your attention and what you have not yet figured out**, with relevant figures and locations in the original. The [paper and note workflow](irene-workflow.md#notes) includes Zotero and Obsidian setup and examples.

When several papers address the same question, bringing them together helps you compare their methods, experimental conditions, and unresolved problems. Those connections can change as your reading and experiments progress. [Research questions and related work](irene-workflow.md#depth) describes one way to organize them.

## Paper discussions and further reading

[Mu Li's paper readings](https://github.com/mli/paper-reading) discuss background, methods, experiments, and writing, often paragraph by paragraph. Videos on Transformer, ViT, and CLIP appear in [selected papers](papers.md#sec-1); more courses and paper discussions are collected under [deep learning courses and paper readings](limu.md).

[Research methods and tools](catalog-research.md) · [Research experiences and conversations](research-conversations.md) · [Contact and collaboration](contact.md)
