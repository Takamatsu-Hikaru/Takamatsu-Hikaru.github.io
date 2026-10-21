# Research Q&A

Want to try research but unsure how to begin? You might be exploring a field, opening a paper someone asked you to read, or trying to explain an unexpected experiment result. We have gathered questions that come up at each of these stages.

The 60 questions below cover preparation, contacting researchers, reading, experiments, and publication. **Open the question closest to what you are working through.** To run an example first, try [MNIST or YOLO](start.md).

## What research involves

<a id="q1"></a>

### 1. What is research? How is it different from classes, course projects, or competitions?

Research formulates hypotheses or methods for unresolved questions and tests them with **inspectable evidence**. Courses and competitions usually supply tasks, data, or evaluation criteria; research must also establish the question, the gap in prior work, and the conditions of the conclusion.

<a id="q2"></a>

### 2. What does an AI researcher actually do all day, beyond reading papers and coding?

Common tasks include literature search, baseline reproduction, experiment design, debugging, analysis, recording configurations, discussion, and writing. An experiment produces **a code version, configuration, logs, metrics, and example analysis**. See [experiments](research.md#q43).

<a id="q3"></a>

### 3. What practice does research provide, and how do application requirements differ?

A research project provides practice in defining questions, reviewing literature, designing experiments, analyzing results, and technical writing. For applications, **check the program or role requirements** and assemble relevant work samples; requirements for papers, code, and experience vary.

<a id="q4"></a>

### 4. What makes research hard? What do beginners underestimate?

You may find that **the question is still vague, the baseline does not reproduce, or the experiments cannot be compared fairly**. Data or compute may be missing, or a result may not answer the original question. Before starting, discuss available resources, evaluation, when to meet, and what you hope to finish at this stage. After running, look at the discrepancies together.


<a id="q5"></a>

### 5. How can a small project cover running, modifying, and recording results?

Choose an [MNIST or YOLO project](start.md) and complete three checks:

1. Run the documented example and save the environment, configuration, and output.
2. Change one factor and compare results and failure cases.
3. Record observations, possible explanations, and the next test.

These artifacts can support a technical discussion.


## Preparation

<a id="q6"></a>

### 6. How do I match prerequisites to a task?

Start by asking: **what do you want to do next?** To run a demo, learn to set up the environment and understand the inputs and outputs. To reproduce an experiment, also work through the data split, training, and evaluation. When you want to change the method, go deeper into its principles and controlled comparisons. Read the specific project prerequisites too.


<a id="q7"></a>

### 7. How do I identify missing prerequisites?

“I lack the basics” is broad. Can you run a Python example, read a tensor shape, distinguish training from testing, or identify an abstract’s main claim with a dictionary? **Find the particular step that is blocking you**, then look up the relevant section in [foundations](basics.md). It will also be easier to explain what you need help with.


<a id="q8"></a>

### 8. What preparation and materials are needed before contacting a supervisor?

For a paper question, include **the source location, your current interpretation, and the unresolved point**. To join a project, add relevant coursework, code or reproduction notes, available time, and guidance needed. Prerequisites depend on the task and project requirements.

<a id="q9"></a>

### 9. What work samples can be prepared without papers or project experience?

Start with something small you have already tried: **runnable reproduction code, a one-page experiment record**, or an analysis of a paper. Explain what you did, how it runs, and where you are stuck, with source locations for paper references. This gives the recipient a way to understand your attempts; see the [email example](contact.md).


<a id="q10"></a>

### 10. How can a first month of project work be organized?

Choose a [starter project](start.md) and try this sequence: **select the task and data → run a baseline → change one setting and compare → organize code, results, and questions**. There is no need to assign exactly one week to each step; adjust to your time and progress. Keep code or notes from each step so you can pick up where you left off.


## Directions and sources

<a id="q11"></a>

### 11. Which resources introduce the research areas?

Start with the tasks, inputs, outputs, and representative papers in [research directions](directions.md). Media and demos can provide leads; **check methods, evaluation conditions, and limitations** against papers, code, and project pages. See [Lookout](lookout.md) for research sources.

<a id="q12"></a>

### 12. How do LLMs, agents, embodied AI, RL, and world models become more than names I have heard?

Describe an area through its **task, inputs and outputs, and limitations**: what is the goal, what does the model receive and produce, and where does it fail?

Compare the paper's question, method, and results with prior work, recording what it adds.

<a id="q13"></a>

### 13. How do I check the implementation conditions and limits behind a demo?

Inspect code, data, and evaluation behind the demo: selected examples, failing inputs, manual intervention, and whether reported metrics match the demonstration. **Record reproducible behavior** and derive a testable question from it.

<a id="q14"></a>

### 14. What should I check when comparing research projects?

If you are comparing projects, put them in a table: what question does each address, what prior work and prerequisites are involved, where will data and compute come from, who will discuss the work with you, and what needs to be ready by when? **Write down what you do not know and ask the project lead.** If data or compute is not yet available, discuss a smaller question you can try with what you have.


<a id="q15"></a>

### 15. Why follow other universities, labs, and companies? What should I look for in their work?

Different teams provide baselines, data, implementations, and evaluation settings. Record the question, changes from prior work, conditions of success, and failures. **Compare work around a shared question** rather than only by author or institution. Sources are in [Lookout](lookout.md).


## Contacting researchers

<a id="q16"></a>

### 16. What should be checked when contacting researchers across institutions or regions?

Use contact information on university, lab, or author pages and follow any stated contact instructions. Include **a specific paper or project, prior attempts, and the request**. Confirm recruitment, scheduling, and access conditions for cross-institutional or overseas projects.

<a id="q17"></a>

### 17. How can relevant work and recruitment information be found?

Check author pages, lab project pages, and open calls. Verify topics, recent work, participation requirements, and contact channels. Existing undergraduate members do not establish current openings; **ask whether supervision is available**.

<a id="q18"></a>

### 18. What can I ask for first: a question, a conversation, a lab meeting, or a project?

Ask about a specific paper question, project openings, or availability of open talks and short trial tasks. Focus the message on **a clear request**. For a meeting, state the topic, materials, and expected duration.

<a id="q19"></a>

### 19. What should an initial email say about background, prior attempts, and the request?

State **your background, the relevant research, completed attempts, and request**. Attach necessary code, notes, or a CV. Distinguish planned work from completed work. The [contact page](contact.md) provides an adaptable email example.

<a id="q20"></a>

### 20. How should follow-up preparation depend on the reply?

A response may propose a discussion, reading or trial task, or indicate no available opportunity; there may also be no response. Follow the stated requirements and consider one follow-up after an appropriate interval. Before a trial, confirm **scope, deadline, feedback, and use of the work**.


## Starting a collaboration

<a id="q21"></a>

### 21. A professor says, “Let's talk.” What should I prepare?

Prepare a short introduction, relevant work samples, and questions. Confirm **the task, responsible contact, supervision, resources, and schedule**. Identify gaps and preparation needed, then record what was agreed after the meeting.

<a id="q22"></a>

### 22. Someone sends a paper and says, “Have a look.” How much am I expected to do?

Confirm the **reading task and discussion date**: understanding the main argument, presenting it, or reproducing experiments.

- **First pass:** record the question, method, evidence, and unresolved points.
- **Further analysis:** locate predecessors and follow-up work, and identify implementation checks or possible modifications.
- **Cross-field comparison:** note similar questions elsewhere and whether the methods share applicable conditions.

See [paper reading](reading.md) for the steps.

<a id="q23"></a>

### 23. Can I observe or try a project before joining? What should I clarify?

Ask whether observation, a short trial, or a staged task is available, and confirm **scope, feedback, time, resources, and expected contributions**.

Before joining, record agreements about outputs and authorship; update them when tasks or contributions change.

<a id="q24"></a>

### 24. How do I find out who will supervise me, how often we meet, and what resources are available?

Confirm the **day-to-day contact, meeting frequency, and resources**: who handles questions and blockers, how to obtain data and compute, and the expected time for each stage.

Supervision may involve faculty or graduate researchers. Check the project's arrangements and state available time.

<a id="q25"></a>

### 25. How can supervision and feedback issues be discussed, adjusted, or handed over?

List specific differences from the agreement in **feedback, scope, resources, or time**, then discuss adjustments with the project contact. If leaving, confirm the end date, completed and unfinished tasks, code and data locations, handoff recipient, and arrangements for outputs and access.


## Learning the foundations

<a id="q26"></a>

### 26. Which foundations are shared across AI research, and which depend on the area?

Shared foundations include **linear algebra, probability and statistics, calculus, optimization, programming, and computing fundamentals**. Information theory and infrastructure are also relevant to particular tasks.

- **Reinforcement learning:** policy gradients involve probability, expectations, and optimization.
- **CNNs / Transformers:** architectures and implementations involve linear algebra, tensors, and automatic differentiation.
- **Training and deployment:** data pipelines, memory, parallelism, and runtime environments matter.

For pretraining hyperparameters, post-training data mixtures, RL scaling, or DDPM, consult the relevant [foundation resources](basics.md), then relate them to the code and experiment.

<a id="q27"></a>

### 27. How can I combine courses, books, and projects without putting off getting started?

**You do not need to read every paper in a field before opening the code.** When you find a project that interests you and that you have the resources to run, reading and running it can go together: try the authors' examples, look at the model's output, use the implementation to understand the paper, and try changing something. Concepts whose purpose once seemed unclear become concrete questions, giving you a reason to return to a course or textbook.

<a id="q28"></a>

### 28. When should I stop to study a concept systematically, and when is a rough understanding enough?

Resolve a gap before proceeding if it affects **implementation correctness or interpretation**. Record derivations not needed for the current task, including when they will be needed, and review them before modifying methods or interpreting results.

<a id="q29"></a>

### 29. How do I check understanding after watching a course or running code?

Use three checks:

- **Explain the data flow, loss, and metric**, locating their implementation.
- Change a setting, predict its effect before running, and compare with observations.
- Propose explanations for a failure case and design checks that distinguish them.

Save results and open questions for further study and experiments.

<a id="q30"></a>

### 30. What foundations are needed to verify AI-assisted work?

Prioritize foundations needed for verification: tensors and autodiff, probability and statistics, data splits, optimization, runtime environments, and evaluation. For AI-generated implementations, check **key calculations, edge cases, and metric definitions** against documentation, small examples, or original sources.


## Finding and reading papers

<a id="q31"></a>

### 31. What should I read first: a classic, a survey, a new paper, or something my supervisor assigned?

**Choose material for the reading task.**

- **Understand how research is presented:** examine a classic paper's question, method, and evidence.
- **Map a field:** start with a survey, then follow citations to foundational and recent work. AI can organize leads; check specific claims in the originals.
- **Advance an existing project:** start with the most relevant or assigned paper.

For agents, one route runs from LLM capabilities, chain-of-thought, and prompting to [ReAct](https://react-lm.github.io/), examining how reasoning, action, tools, and feedback combine. Extend to multi-agent systems, multimodal agents, agent RL, harnesses, skills, and feedback loops as the task requires. For recursive self-improvement, check what each paper improves and how it evaluates that change.

The routes intersect. Record their questions, motivations, and connections. Continue with [papers](papers.md), [agents](agent.md), and [reading depth](reading.md#reading-depth).

<a id="q32"></a>

### 32. Where should I start inside a paper? What should I be able to answer afterward?

Start with the **abstract, introduction, key figures, and conclusion**, then check experimental evidence. Record:

1. The question and the data or task.
2. What the method changes and which baseline it uses.
3. The results supporting the main claim, including conditions and limitations.

See [Mu Li's paper readings](https://github.com/mli/paper-reading) and [matching claims to figures](reading.md#claims-evidence).

<a id="q33"></a>

### 33. What if I cannot understand the English, equations, terminology, or background?

First identify **term definitions and the claims in key sentences**. Use dictionaries, AI, author explanations, or notes, then check against the source.

Read equations in layers: identify symbols, inputs and outputs, and the operation before examining the derivation. If an equation determines the implementation being reproduced or modified, check the derivation, assumptions, and code.

<a id="q34"></a>

### 34. Does understanding a paper require every derivation, the code, and a reproduction?

Reading requirements depend on **the task**. A first pass can explain the question, method, and main evidence; reproduction or modification also requires data, implementation, derivations, and evaluation details.

Record key questions and how to verify them. See the [AI questioning example](ai.md#grill-me) for checking a method explanation.

<a id="q35"></a>

### 35. How do I keep useful notes and connect papers instead of collecting separate summaries?

Keep **the question, method, evidence locations, conditions, open questions, and related work** in literature notes. Compare papers under matched tasks and evaluation definitions, retaining sources for each item. The [Zotero and Obsidian workflow](irene-workflow.md#notes) provides setup and comparison prompts.


## Finding questions and ideas

<a id="q36"></a>

### 36. Must beginners come up with their own ideas? What can I learn on someone else's project?

An existing project provides practice with **experiments, writing, and collaboration**. Requirements for independent problem formulation vary by task; confirm them with the project contact.

Record unexplained observations from reading, running systems, and discussions as starting points for investigation.

<a id="q37"></a>

### 37. What is the difference between a direction, a research question, an idea, and a method?

- **Direction:** a broad area, such as agents, embodied AI, or world models.
- **Research question:** a specific uncertainty, such as why agents fail on long tasks.
- **Idea:** a proposed explanation or solution.
- **Method:** an executable, inspectable way to test that idea.

The question determines what the method and experiments need to address.

<a id="q38"></a>

### 38. How can reading identify questions worth checking or testing?

Look for specific questions in **conditions, comparisons, and evidence gaps**:

1. Which data, assumptions, or resources does the conclusion depend on?
2. Do baselines use matched conditions, and which cases are not compared?
3. Are there unexplained results or failure examples?

Compare observations in a joint reading, then choose one question for literature search or validation.

<a id="q39"></a>

### 39. How do I know whether an idea is new, meaningful, and feasible?

Search keywords, predecessors, and citation chains, then compare **settings, assumptions, data, methods, and evaluation**. Feasibility depends on data access, implementation, compute, time, and guidance. Use a small experiment to estimate cost and state which explanation it can exclude. See [targeted literature search](irene-workflow.md#search).

<a id="q40"></a>

### 40. When is a question worth pursuing? Should I stop if someone has tried it or my first attempt fails?

Distinguish **implementation errors, statistical variation, and lack of effect** under the current conditions. Before another experiment, specify the uncertainty it resolves, resource cost, and stop or revision criteria. If prior work addresses the same question, check for a clear, testable remaining difference.


## Doing experiments

<a id="q41"></a>

### 41. How do I turn a project into tasks I can do today or this week?

Break work down as **question → evidence → experiment → task**. State what is being tested, then list data, baselines, and evaluation methods.

An early stage may cover related work, a baseline run, evaluation checks, and one small test. Give each task inputs, actions, and expected outputs for daily or weekly progress checks.

<a id="q42"></a>

### 42. Why run baselines and reproduce work? What should I check after the code runs?

A baseline gives you a reference for understanding the effect of a change. [Reading the code alongside the paper](reading.md#paper-code) also makes the data, metrics, and implementation details more concrete.

After a run, compare the setup and results with the paper. Check data splits, evaluation, randomness, and possible leakage. Look at actual outputs too: some errors will not show up in an aggregate score.

<a id="q43"></a>

### 43. What should I decide before an experiment so I know what I am testing?

Write **the question, expected results**, and how different outcomes would change your understanding. Check the process on a small scale before investing in a larger run.

To study one factor, control the others as far as possible. To study interactions, design combinations around that purpose. Keep each change traceable.

<a id="q44"></a>

### 44. Does a higher score prove the idea works? How do I check bugs, unfair comparisons, and noise?

First inspect implementation, data splits, and evaluation. Then check fairness, including **resources, configuration, and tuning effort**.

Run more than once and report variation. If the gain is smaller than ordinary variation, the evidence may not support either a confident positive or negative conclusion. Use suitable ablations and sample analysis to test your explanation.

<a id="q45"></a>

### 45. What if experiments fail, reproduction does not work, or progress stalls for weeks?

Check **data, implementation, environment, and evaluation** in turn, narrowing the issue to a reproducible case. Organize attempts, conditions, and discrepancies before asking collaborators or original authors.

Use the remaining discrepancies to decide whether to investigate further or change reference methods, retaining sufficient reproduction details.


## Communicating and working together

<a id="q46"></a>

### 46. When should a blocker be reported, and what information is needed?

Report the status when diagnosis is stuck, access is missing, or another task is blocked. Include **the goal, minimal reproduction, environment, logs, attempts, and precise question**. Record independent tasks that can proceed while awaiting feedback.

<a id="q47"></a>

### 47. How do I explain a problem so someone can help?

A help request includes the **goal, attempts, observations, and question**, with the environment, key logs, or results.

Use a minimal reproduction to remove unrelated code and logs. See [contact and collaboration](contact.md) for an example.

<a id="q48"></a>

### 48. What do I report at meetings when I have no positive results?

Organize updates around **completed work, results and explanations, blockers, and next steps**.

Without positive results, report excluded explanations, failure cases, and support needed. Attach key figures and locations of original records for discussion and review.

<a id="q49"></a>

### 49. What if I do not understand a discussion, or think someone more senior is wrong?

**Locate the disagreement in a specific concept or piece of evidence.** Ask for a contextual example for an unclear term; for a disputed conclusion, identify the difference between prediction and observation.

For example: “This explanation predicts A, but the experiment produced B. Should we check condition C?” Discuss it immediately or continue after organizing the records.

<a id="q50"></a>

### 50. When should we discuss tasks, contributions, authorship, and schedules? What about disagreements?

Discuss **responsibilities, time commitments, goals, and how authorship will reflect contributions** at the start. Update the discussion as work and contributions change.

Talk to the people involved first; a shared supervisor can help if necessary. Keep clear written agreements where possible.


## AI-assisted research and verification

<a id="q51"></a>

### 51. How can AI help with papers, code, experiments, ideas, and writing?

- **Reading:** explain terms, equations, and background, then check the source.
- **Code:** draft scripts and diagnose errors; verify core calculations and evaluation.
- **Experiments:** organize records, plots, and analysis while retaining raw output.
- **Questions:** find related work, alternative explanations, and testable hypotheses.
- **Writing:** revise structure and sentences, checking evidence for each claim.

See [AI tools](ai.md) for examples.

<a id="q52"></a>

### 52. How do I judge an AI explanation, plan, or result that sounds convincing?

**Check original material, not only the summary.** Experimental claims require configurations, logs, outputs, and statistics; literature claims require source passages, equations, or figures.

For a new proposal, design checks that distinguish explanations. Preserve unexpected observations and unresolved hypotheses before adding experiments.

<a id="q53"></a>

### 53. How does understanding methods and metrics help verify AI-assisted work?

Understanding the method and metric helps detect **task mismatch, leakage, implementation errors, and unfair comparisons**. Trace one example through the full pipeline and check which conclusions survive a configuration change.

<a id="q54"></a>

### 54. How do I review an AI-assisted task and retain reusable records?

Save **task inputs, key changes, configuration, outputs, and verification results**. Check whether you can locate the key computation, explain the metric, reproduce a result, and explain a failure. Turn unresolved points into checks for the next task.

<a id="q55"></a>

### 55. Which materials can I give AI? What permissions and research rules matter?

Public papers, open-source code, and your own notes still require checking applicable permissions and the service's data policies. For unpublished ideas, data and drafts, other people's code, and private or confidential material, first confirm **permissions, team agreements, and the service's data policies**.

For reviewing, check that year's venue rules separately. [ICML 2026](https://icml.cc/Conferences/2026/LLM-Policy), for example, distinguishes two reviewing policies: follow the one assigned to you. Permitted assistance does not mean delegating judgment and evaluation to AI.

Check the target venue's writing rules too. Authors remain responsible for the content; AI cannot take on authorship responsibility. Follow the specific rules on disclosure and permitted use. Check every reference, particularly for fabricated citations. Official entry points are on the [publication page](writing.md).


## Writing, publication, and project records

<a id="q56"></a>

### 56. When is work ready to become a paper? What does writing do during research?

**Claims need matching experiments or analysis.** A paper explains the question, method, evidence, and scope of the conclusion.

Draft the question, method diagram, and result records during experiments. If a paragraph is unclear, check both its wording and whether the necessary explanation or evidence is missing. See [writing](writing.md).

<a id="q57"></a>

### 57. What makes good research or a good paper? What do novelty, scores, and prestigious venues tell us?

Check **the question, differences from prior work, comparison conditions, strength of evidence, limitations, and reproducibility**. New structures or higher scores require experimental explanation. Publication venues provide review and dissemination context but do not replace evidence checks. Verify institutional recognition against the relevant published rules.

<a id="q58"></a>

### 58. How do SCI, CCF categories, major conferences, workshops, and preprints differ?

**SCI/SCIE** are citation indexes. The phrase “SCI journal” refers to inclusion in an index. Journal quartiles are another evaluation layer; do not conflate them.

**CCF A** comes from the China Computer Federation's recommended publication list, which groups conferences and journals into A, B, and C categories. Chinese institutions may use it for awards or graduate admission; check the particular program.

**Top conference** is an informal description of an important venue in a field. NeurIPS, ICML, ICLR, CVPR, and ACL are names common across AI areas. A field's view and the CCF list are not identical.

A **workshop** is a focused forum for discussion. Archival status, later submission of an extended version, and accepted work types depend on its rules. A suitable workshop can offer conversation and feedback.

A **preprint** shares work before or outside formal publication. arXiv is a common venue. Uploading there does not itself mean peer review; a preprint may later be formally published. Inspect the specific version and publication record. Find official links on the [publication page](writing.md).

<a id="q59"></a>

### 59. How do I archive and review unpublished or rejected work?

Archive the question, literature comparisons, runnable code, configurations, raw results, and failure analysis. For reviews, separate **implementation issues, evidence gaps, presentation issues, and disagreements over scope**. Identify revisions and required validation. See [publication](writing.md) for submission procedures.

<a id="q60"></a>

### 60. How do I adjust and hand over a project when conditions change?

Look at the situation with your collaborators: **what have you done, what remains unclear, and what can you do with the time and resources now available?** If you need to reduce, pause, or end the project, agree on what remains to be finished, where code and data are stored, and who will follow up. The next person can then continue from the existing records.
