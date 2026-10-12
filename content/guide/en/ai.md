# Working with AI

You can ask AI for help with an unfamiliar equation, an error in reproduction code, or an idea you want to discuss. The examples below start from these situations and ask a follow-up question: **when it says the work is done, how can you check?**

## Make a task concrete

For a paper reproduction, collect the paper, code version, running conditions, and result you want to check. Ask AI to explain entry points, split the work into steps, inspect the environment, and write scripts.

Proceed in inspectable steps: find how data enters the model, run a small part, then expand to complete evaluation. Understand costs and stopping conditions before long or paid runs.

Goals, checks, and reusable steps mean “what to finish this time,” “how to know it is done,” and “how to use it again.” Plain text and records can do this before you choose particular tool features.

When you already have reading notes, provide their location and the comparison you need:

> Read the three paper notes I specify in Papers and compare how they address the same question. Attach the paper and note location to each comparison, preserve my annotations, and list missing information.

[Paper note workflow](irene-workflow.md#notes) connects Zotero, Obsidian, and a local AI tool.

## When it says it is finished, what do you inspect?

What changed in the code? Which configuration ran? What did tests cover? Where are outputs and logs? Turn “the experiment succeeded” into something you can examine.

The same applies to reading. Ask for an explanation, then ask which passage supports it. Open and check any references it supplies.

## Verify the method and metrics

For model deployment, do you know why a metric was chosen, whether the test workload resembles real use, which trick helped, and what might change under different conditions?

Compare the outputs before and after a change, record the conditions, and identify evidence for each explanation. Mark unverified assumptions for further checks.

## AI can be a discussion partner

Ask it for counterexamples, alternative explanations, and missing evidence for a concrete idea. Then decide what to use and how to test it.

[Lilian Weng's agent article](https://lilianweng.github.io/posts/2023-06-23-agent/) and [Anthropic's Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) explain how systems organize tasks. To research agents themselves, see the [direction page](agent.md).

Handle unpublished and review materials according to team and venue requirements; see [publication](writing.md).

<a id="grill-me"></a>

## Let AI ask you questions

Explain a method in your own words alongside its diagram, then ask AI to follow up on that explanation. Why is a module needed? What happens if it is removed? Which experiment supports your judgment? Return to the relevant passage, equation, or figure when you get stuck.

> I will explain this method diagram. Ask one question at a time and wait for my answer. Focus on inputs and outputs, module roles, conditions, and evidence. Identify the step I have not explained clearly and where to look again.

**Grill Me** checks methods and evidence through follow-up questions. See the [reading workflow](irene-workflow.md#grill) for reading depths and [paper-tools-marketplace](https://github.com/tseirene6/paper-tools-marketplace) for tools. Repeated input requirements, steps, and output formats can be saved as prompts or skills.

<a id="ai-feedback"></a>

## Does AI agreement make an idea more reliable?

An AI discussion can quickly turn a research idea into a coherent motivation, method, and story. That can blur the difference between a convincing account and supporting evidence. Here, being led by AI (“AI hack”) means mistaking its agreement or coherent explanation for verification.

Try these steps with the idea you are discussing:

- **Record your initial judgment.** What observation prompted the question? What evidence do you have, and what remains a guess?
- **Ask for counterexamples.** Ask what would disprove the idea and whether a simpler explanation exists.
- **Check outside the conversation.** Read the original source, run a small experiment, or ask a colleague to examine the evidence. Agreement from a second model cannot replace those checks.

> Do not package this as a contribution yet. Identify its assumptions, separate existing evidence from unverified judgments, and suggest a small experiment that distinguishes competing explanations. Say when evidence is missing.

[Two observations about AI](lesswrong.md#ai) discuss belief reinforcement in AI interactions and students' use and understanding of AI. Compare them with a real task: which step did the tool help with, and which judgments still need checking?

## Output checks

- References: identify the original source and passage.
- Code: inspect key calculations, tests, and run records.
- Experiments: retain configurations, raw outputs, and metric calculations.
- Conclusions: distinguish verified results from hypotheses.
