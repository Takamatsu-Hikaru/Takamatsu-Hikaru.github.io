import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const out = new URL('public/paper-notes/supermimic/', root);
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
await mkdir(out, { recursive: true });
for (const lang of ['zh', 'en']) {
  const zh = lang === 'zh';
  const title = zh ? 'SuperMimic 精读笔记' : 'SuperMimic Reading Notes';
  const subtitle = zh ? 'Humanoid 控制、策略梯度与世界模型' : 'Humanoid Control, Policy Gradients, and World Models';
  const other = zh ? 'en.html' : 'index.html';
  const source = await readFile(new URL(`content/paper-notes/supermimic.${lang}.md`, root), 'utf8');
  const blocks = source.replaceAll('\r\n', '\n').trim().split(/\n\s*\n/);
  assert(blocks[0].startsWith('# SuperMimic'));
  let text = blocks.slice(4).join('\n\n');
  // Carry the original boxed emphasis colors into native MathML.
  const boxColors = [...text.matchAll(/\\boxed\{\\color\{(#[0-9a-fA-F]{6})\}/g)].map(match => match[1]);
  text = text.replace(/\\color\{#[0-9a-fA-F]{6}\}/g, '');
  text = text.replace(/ ([!]\[(?:配图|Figure)\]\()/g, '\n\n$1');
  const toc = [];
  let topSection = 'preface';
  text = text.replace(/^(#{1,2}) (.+)$/gm, (_, hashes, heading) => {
    const number = heading.match(/^([\dA]+(?:\.\d+)*)\s/);
    const id = number ? `section-${number[1].replaceAll('.', '-')}` : (heading.includes('参考') || heading === 'References' ? 'references' : 'preface');
    if (hashes.length === 1 || id === 'preface') {
      topSection = id;
      toc.push({ id, heading });
    }
    return `${hashes.length === 1 || id === 'preface' ? '##' : '###'} ${heading} {#${id || topSection}}`;
  });
  const result = spawnSync('pandoc', ['--from=markdown-implicit_figures', '--to=html5', '--mathml', '--wrap=none'], { input: text, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  if (result.status !== 0 || result.stderr.includes('[WARNING]')) throw new Error(result.stderr || 'Pandoc failed');
  let body = result.stdout;
  let coloredBoxes = 0;
  body = body.replace(/<menclose notation="box">/g, match => {
    const color = boxColors[coloredBoxes++];
    assert(color, 'Every boxed formula has its source color');
    return match.replace('>', ` style="color:${color};border:1px solid currentColor;padding:3px">`);
  });
  assert.equal(coloredBoxes, boxColors.length);
  body = body.replace(/<math display="block"[\s\S]*?<\/math>/g, math => `<span class="math display">${math}</span>`);
  body = body.replace(/<p>(<img[^>]+\/>|<img[^>]+>)<\/p>\s*<p>(<strong>(?:图 |Figure )\d+\.?<\/strong>[\s\S]*?)<\/p>/g, '<figure>$1<figcaption>$2</figcaption></figure>');
  body = body.replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, '</table></div>');
  body = body.replace(/<p>(<strong>(?:表 |Table )\d+\.?<\/strong>)/g, '<p class="table-caption">$1');
  const mathCount = (body.match(/<math\b/g) || []).length;
  const imageCount = (body.match(/<img\b/g) || []).length;
  assert.equal(imageCount, 12, 'All original figures must be retained');
  const nav = toc.map(({id, heading}) => `<a href="#${id}">${escape(heading)}</a>`).join('');
  const pdf = `supermimic-notes-${lang}.pdf`;
  const description = zh ? '从 PPO 与 BPTT 的推导，到可微 MBRL、SuperMimic 训练机制、实验与复现。' : 'From PPO and BPTT derivations to differentiable MBRL, SuperMimic training, experiments, and reproduction.';
  const html = `<!doctype html>
<html lang="${zh ? 'zh-CN' : 'en'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="description" content="${description}">
  <title>${title} · Hikaru’s Paper Notes</title>
  <link rel="stylesheet" href="../notes.css">
  <link rel="alternate" hreflang="zh-CN" href="https://takamatsu-hikaru.github.io/paper-notes/supermimic/">
  <link rel="alternate" hreflang="en" href="https://takamatsu-hikaru.github.io/paper-notes/supermimic/en.html">
</head>
<body>
  <div class="progress" id="progress"></div>
  <header class="site-header">
    <a class="wordmark" href="/#paper-notes"><span class="wordmark-mark">BZ</span><span class="wordmark-copy"><strong>Bofan Zhu</strong><small>Hikaru / Paper Notes</small></span></a>
    <nav aria-label="Page navigation"><a href="/#paper-notes">All notes</a><a href="#preface">Read</a><a href="./${pdf}">PDF ↗</a></nav>
    <div class="header-actions"><a class="language-link" id="language" href="./${other}" hreflang="${zh ? 'en' : 'zh-CN'}">${zh ? 'EN' : '中文'}</a><button class="theme-toggle" id="theme-toggle" aria-label="Switch color theme" type="button">◐</button></div>
  </header>
  <main class="shell" id="top">
    <section class="notes-hero">
      <p class="notes-eyebrow">HIKARU’S PAPER NOTES / 01</p>
      <h1>SuperMimic<span>${zh ? '精读笔记' : 'Reading Notes'}</span></h1>
      <p class="notes-subtitle">${subtitle}</p>
      <div class="notes-meta"><span>HIKARU · 2026.10.26</span><span>PPO / BPTT / DIFFERENTIABLE MBRL</span></div>
      <figure class="notes-cover"><img src="./images/paper_teaser.png" alt="SuperMimic: humanoid world-model rollouts and training compute" width="935" height="311" fetchpriority="high"></figure>
      <div class="notes-actions"><a class="notes-button" href="./${pdf}">${zh ? '下载中文 PDF' : 'Download English PDF'} ↓</a><a href="https://supermimic.github.io/">${zh ? '原论文项目' : 'Original project'} ↗</a><a href="./${other}">${zh ? 'Read in English' : '阅读中文版'} ↗</a></div>
    </section>
    <div class="notes-layout">
      <aside class="notes-toc"><span>${zh ? '目录' : 'CONTENTS'}</span><nav aria-label="Contents">${nav}</nav><a class="toc-back" href="/#paper-notes">← All notes</a></aside>
      <div class="notes-reading"><details class="mobile-toc"><summary>${zh ? '目录' : 'Contents'}</summary><nav>${nav}</nav></details><article class="notes-article">${body}</article></div>
    </div>
    <div class="end"><span>END / SUPERMIMIC</span><a href="#top">Back to top ↑</a></div>
  </main>
  <footer><span>© 2026 Bofan Zhu / Hikaru</span><span>Hikaru’s Paper Notes</span><a href="/#paper-notes">All notes ↗</a></footer>
  <script src="../notes.js"></script>
</body>
</html>
`;
  await writeFile(new URL(zh ? 'index.html' : 'en.html', out), html);
  console.log(`${lang}: ${mathCount} native MathML expressions, ${imageCount} figures, ${toc.length} top-level sections.`);
}
