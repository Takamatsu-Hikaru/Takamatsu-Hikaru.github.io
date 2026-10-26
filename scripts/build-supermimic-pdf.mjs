import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const cwd = fileURLToPath(new URL('public/paper-notes/supermimic/', root));
const build = fileURLToPath(new URL('work/supermimic-pdf-en/', root));
await mkdir(build, { recursive: true });
let markdown = (await readFile(new URL('content/paper-notes/supermimic.en.md', root), 'utf8')).trim().split(/\n\s*\n/).slice(4).join('\n\n');
markdown = markdown.replace(/<a id="([^"]+)"><\/a>/g, '[]{#$1}');
markdown = markdown.replace(/\\color\{#([A-Fa-f0-9]{6})\}/g, (_, hex) => `\\color{color${hex}}`);
markdown = markdown.replace(/ ([!]\[Figure\]\()/g, '\n\n$1');
const result = spawnSync('pandoc', ['--from=markdown-implicit_figures', '--to=latex', '--wrap=none'], { input: markdown, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
if (result.status) throw new Error(result.stderr);
const preamble = String.raw`\documentclass[11pt,a4paper]{article}
\usepackage[margin=22mm,headheight=15pt]{geometry}
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
\usepackage{amsmath,amssymb,bm,mathtools}
\usepackage{graphicx,xcolor,booktabs,longtable,array,calc,multirow,adjustbox}
\usepackage{fancyhdr,enumitem}
\definecolor{Ink}{HTML}{202A32}
\definecolor{Blue}{HTML}{315EE8}
\definecolor{color4C78B8}{HTML}{4C78B8}
\definecolor{color8570B1}{HTML}{8570B1}
\definecolor{colorC75F78}{HTML}{C75F78}
\usepackage[colorlinks=true,linkcolor=Blue,urlcolor=Blue,bookmarksnumbered=false]{hyperref}
\hypersetup{pdftitle={SuperMimic Reading Notes: Humanoid Control, Policy Gradients, and World Models},pdfauthor={hikaru}}
\color{Ink}
\setcounter{secnumdepth}{0}
\setcounter{tocdepth}{2}
\setlength{\parindent}{0pt}
\setlength{\parskip}{6pt plus 1pt}
\setlength{\emergencystretch}{3em}
\linespread{1.12}
\setlist{topsep=4pt,itemsep=4pt,leftmargin=1.6em}
\newcommand{\tightlist}{\setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}
\newcommand{\passthrough}[1]{#1}
\newcommand{\pandocbounded}[1]{\begin{adjustbox}{max width=\linewidth,max totalheight=.70\textheight,keepaspectratio}#1\end{adjustbox}}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\sffamily SuperMimic Reading Notes}
\fancyhead[R]{\small\sffamily Hikaru's Paper Notes}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0pt}
\begin{document}
\begin{titlepage}
\vspace*{18mm}
{\Huge\bfseries SuperMimic Reading Notes\par}
\vspace{8mm}
{\Large Humanoid Control, Policy Gradients,\\and World Models\par}
\vspace{6mm}
{\normalsize\sffamily PPO / BPTT / DIFFERENTIABLE MBRL\par}
\vspace{4mm}
{\large hikaru\par}
\vspace{24mm}
\includegraphics[width=\linewidth]{images/paper_teaser.png}
\vfill
{\small October 2026\par}
\end{titlepage}
{\small\linespread{0.93}\selectfont\tableofcontents}
\clearpage
`;
const body = result.stdout.replace(/\\def\\LTcaptype\{none\}/g, '\\def\\LTcaptype{table}');
const tex = preamble + body + '\n\\end{document}\n';
await writeFile(build + '/main.tex', tex);
for (let pass = 0; pass < 3; pass++) {
  const compiled = spawnSync('xelatex', ['-interaction=nonstopmode', '-halt-on-error', '-output-directory=' + build, build + '/main.tex'], { cwd, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  await writeFile(build + `/compile-${pass + 1}.txt`, compiled.stdout + '\n' + compiled.stderr);
  if (compiled.status) throw new Error(compiled.stdout.slice(-5500) + compiled.stderr);
}
await copyFile(build + '/main.pdf', cwd + '/supermimic-notes-en.pdf');
console.log('English PDF compiled: public/paper-notes/supermimic/supermimic-notes-en.pdf');
