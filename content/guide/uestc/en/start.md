# Your first AI project

If you have not chosen a field yet, try a project with a result you can see: recognizing handwritten digits or detecting people and cars in your own photos. Data, code, and tutorials are available, so you can start by running an example and learn the concepts as you need them.

MNIST takes you through training and making a submission; YOLO lets you inspect predictions on real photos. Choose one that interests you, or skip to the agent and robotics examples below.

| Project | First task | Result to retain |
| --- | --- | --- |
| [MNIST](#project-mnist) | Train a digit classifier | Predictions, validation results, and submission |
| [YOLO](#project-yolo) | Run pretrained detection | Boxes, labels, and failure examples |
| [Agent](#project-agent) | Complete a tool call | Task, call, and tool response |
| [Robotics](#project-robotics) | Inspect a demo and dataset | Observations, actions, and data fields |

<a id="project-mnist"></a>

## MNIST: recognize handwritten digits on Kaggle

Open [Kaggle Digit Recognizer](https://www.kaggle.com/competitions/digit-recognizer/overview). Given a handwritten digit image, predict which digit from 0 to 9 it shows. The project connects data, training, prediction, and submission.

### Look at the data, then find readable code

Visit the competition's [Data page](https://www.kaggle.com/competitions/digit-recognizer/data) to inspect training data, test data, and the sample submission. Turn a row of pixels back into an image and compare its label. You will then know what the model code processes.

On the [Code page](https://www.kaggle.com/competitions/digit-recognizer/code), find a beginner notebook you can read from beginning to end. Search for MNIST, PyTorch, or CNN, favoring examples that display data, train, and generate a submission. Copy one into your own notebook and run it.

On your first pass, locate data loading, the model, loss, parameter updates, and prediction. Ask AI to explain unfamiliar sections, then print real data shapes to check.

### Train and make a first submission

Reserve part of the labeled training data for validation and check how many of those images your model recognizes. Then predict the competition test set, save the required submission format, and submit once.

Which images did training use, which did validation use, and where did the submitted predictions come from? Distinguishing those three matters in later projects too.

### Change something and inspect the difference

Save the first working notebook, validation result, and submission. Change one setting—learning rate, training epochs, or network width. Predict the effect before comparing results.

Display mistakes: which digits are confused, and which are hard even for you? Compare the next change on your own validation split and use the leaderboard as additional information. Write what changed, what happened, your explanation, and what remains unclear.

### When concepts or code are unfamiliar

[3Blue1Brown's neural-network explanation](https://www.3blue1brown.com/lessons/neural-networks/) uses handwritten digits to explain inputs, neurons, and outputs. [PyTorch Learn the Basics](https://docs.pytorch.org/tutorials/beginner/basics/intro.html) covers data loading, autograd, optimization, and saving. Its Quickstart uses clothing images in FashionMNIST; compare the training process with your digit-recognition code.

For functions, loops, lists, and files, revisit [foundations](basics.md). For tensor mismatches, inspect shapes, indexing, and matrix multiplication. For a wider view of AI, try topics in [Crash Course AI](https://thecrashcourse.com/topic/ai/).

<a id="project-yolo"></a>

## YOLO: detect objects in your own images

For a quick, visible result, start with object detection. Classification asks what an image contains; detection also asks where. One photo may contain people, bicycles, and cars, each with a box and class.

### Predict with a pretrained model

Start with [Ultralytics Quickstart](https://docs.ultralytics.com/quickstart). Run the example with a pretrained model, then substitute your own photo. For a browser-based environment, use the official [Colab tutorial](https://docs.ultralytics.com/integrations/google-colab).

Inspect boxes, classes, and confidence: are distant objects missed, does occlusion matter, and is one object detected twice? Try several scenes instead of looking only at a successful screenshot.

### Walk through training and validation

Follow the [training tutorial](https://docs.ultralytics.com/modes/train) with [COCO8](https://docs.ultralytics.com/datasets/detect/coco8) to trace loading, training, and validation.

<aside class="guide-note"><strong>What the small dataset checks</strong><p><b>COCO8 is for checking that the pipeline runs.</b> Its eight images are insufficient for a meaningful model comparison; use separate training and validation data with enough examples.</p></aside>

Open an image and annotation to see how classes and boxes are recorded. Inspect how the data configuration names paths and classes. After training, predict again with the saved weights and find the output images and training records.

### Inspect detections in new scenes

Use a video you filmed and inspect pedestrian or vehicle detections. For a specific object, look for suitable annotations or try labeling data yourself. First establish which classes the current model knows before deciding whether to retrain.

Follow one observation: does resolution help small objects? When the confidence threshold falls, how many additional boxes are false positives? Keep output images beside settings and you have something concrete to [discuss with a mentor](contact.md).

Next read [computer vision](vision.md) for classification, detection, and segmentation. For serious comparisons, see [experiments](research.md#q43).

<a id="project-agent"></a>

## Already interested in agents?

Choose the basics in [Hello Agents](https://github.com/datawhalechina/hello-agents) or the [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/en/unit0/introduction).

A first goal is to let a model call one simple tool and understand the whole sequence: task, reason for calling, returned information, next action, and stopping. Exercises using online models may require accounts or paid APIs; check the running conditions when choosing an example.

Save a successful and a failed trace. If the model can answer the same question directly, compare what the tool changes. Then read [ReAct](https://react-lm.github.io/) and choose a question from the [agents page](agent.md).

<a id="project-robotics"></a>

## Already interested in robots?

Watch the [ACT / ALOHA](https://tonyzhaozh.github.io/aloha/) videos and method diagram. Pick an action: what did the robot see, what did the demonstration record, and what action does the model output?

Then inspect a demonstration dataset and project structure in [LeRobot](https://github.com/huggingface/lerobot). Connect diagram modules to files and data. Reading data and understanding action representations can be your first step; choose simulation or robot training next. See [embodied AI](embodied.md).

## After finishing, where next?

After finishing an example, save the code and results and note **what you changed, what happened, and what you still want to understand**. Which part would you like to explore next?

- To understand how data enters the model and what each layer does, explore [foundations and architectures](basics.md).
- If the task interests you and you want to see what researchers have tried, find papers in the [directions pages](directions.md).
- To reproduce a paper seriously, connect [reading](reading.md), [experiments](research.md#q43), and [conversation](contact.md).
- You can also try another project and see how it handles the questions you encountered here.

## Continue learning

For systematic foundations, see [how Mu Li's courses fit](limu.md). For another textbook or explanation, consult the [foundations catalog](catalog-foundation.md).
