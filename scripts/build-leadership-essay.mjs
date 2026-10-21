import { readFile, writeFile } from "node:fs/promises";
import { marked } from "marked";

const root = new URL("../", import.meta.url);
const slug = "leadership-learning-impact";
const origin = "https://takamatsu-hikaru.github.io";
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const editions = [
  {
    lang: "zh-CN", source: "zh", suffix: "", otherSuffix: "-en", otherLang: "en", otherLabel: "EN",
    title: "从 Leadership 到 Learning，再到 Impact", first: "从 Leadership 到 Learning，", second: "再到 Impact",
    description: "办 AI 社比赛、建设 Wiki 和入门指南的经历，以及我对 Leadership、Learning 和 Impact 的思考。",
    alt: "蓝天与云层下的街巷、建筑和结伴而行的人们", home: "返回 Bofan Zhu 主页", theme: "切换颜色主题", language: "Read this article in English", info: "文章导航", back: "返回博客列表", top: "回到顶部 ↑",
    highlights: ["以及从其他人的视角看问题", "做事情要有定力，不要乱了阵脚", "二是什么时候算完事。", "这是一个不断递归的tree of question，", "需要懂自己的team和自己", "一起做成一个人很难独立完成的事情。", "把大家聚在一起，形成好的合力，让自己worth it。", "先做一些事情，发现自己不懂的地方，再去学习；学到新的东西，再回来改进自己的方案。", "而是希望提供一张地图", "我们每个人都有自由发展的权利", "年龄不重要，重要的是start now。", "互相蒸馏，一起做有价值的事情。"],
  },
  {
    lang: "en", source: "en", suffix: "-en", otherSuffix: "", otherLang: "zh-CN", otherLabel: "中文",
    title: "From Leadership to Learning, and on to Impact", first: "From Leadership to Learning,", second: "and on to Impact",
    description: "Running an AI club competition, building a Wiki and a getting-started guide, and thinking through leadership, learning, and impact.",
    alt: "People walking together through a street beneath a blue sky and clouds", home: "Back to Bofan Zhu home", theme: "Switch color theme", language: "阅读本文中文版", info: "Article navigation", back: "ALL POSTS", top: "Back to top ↑",
    highlights: ["see things from other people's perspectives.", "Stay grounded when doing things. Don't lose your footing.", "second, when to call it finished.", "It is a tree of questions that keeps recursing.", "understand both your team and yourself.", "accomplish something that would be difficult for one person to do alone.", "bring everyone together, combine our strengths, and make myself worth it.", "do something first, discover what you don't understand, and then learn it; learn something new, then return and improve your approach.", "We want to offer a map", "everyone has the right to develop freely.", "age doesn't matter; what matters is to start now.", "learn from one another, and do things worth doing."],
  },
];

for (const edition of editions) {
  const markdown = (await readFile(new URL(`content/blog/${slug}.${edition.source}.md`, root), "utf8")).replaceAll("\r\n", "\n");
  const tokens = marked.lexer(markdown);
  if (tokens[0]?.type !== "heading" || tokens[0].text !== edition.title) throw new Error(`Unexpected title: ${edition.source}`);
  tokens.shift();
  const blocks = [];
  let callouts = 0;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === "paragraph" && /^TLDR/.test(token.text)) {
      const label = marked.parser([token]);
      const items = [];
      while (i + 1 < tokens.length) {
        const next = tokens[i + 1];
        if (next.type === "space") { i++; continue; }
        if (next.type !== "paragraph" || !/^[①②③④]/.test(next.text)) break;
        items.push(marked.parser([next]));
        i++;
      }
      blocks.push(`<aside class="tldr" aria-label="TLDR"><div class="tldr-label">${label}</div><div class="tldr-points">${items.join("")}</div></aside>`);
      callouts++;
    } else {
      blocks.push(marked.parser([token]));
    }
  }
  if (callouts !== 3) throw new Error(`Expected three TLDR panels, got ${callouts}`);
  let body = blocks.join("\n").replace(/<h2>(Leadership|Learning|Impact)<\/h2>/g, (_, heading) => `<h2 id="${heading.toLowerCase()}">${heading}</h2>`);
  for (const phrase of edition.highlights) {
    const escaped = escape(phrase).replaceAll("'", "&#39;");
    if (!body.includes(escaped)) throw new Error(`Highlight not found: ${phrase}`);
    body = body.replace(escaped, `<strong>${escaped}</strong>`);
  }
  const page = `${origin}/blog/${slug}${edition.suffix}.html`;
  const other = `./${slug}${edition.otherSuffix}.html`;
  const html = `<!doctype html>
<html lang="${edition.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="description" content="${escape(edition.description)}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escape(edition.title)}">
  <meta property="og:description" content="${escape(edition.description)}">
  <meta property="og:url" content="${page}">
  <meta property="article:published_time" content="2026-10-21">
  <link rel="canonical" href="${page}">
  <link rel="alternate" hreflang="zh-CN" href="${origin}/blog/${slug}.html">
  <link rel="alternate" hreflang="en" href="${origin}/blog/${slug}-en.html">
  <title>${escape(edition.title)} · Hikaru</title>
  <link rel="stylesheet" href="./leadership-learning-impact.css">
</head>
<body>
  <div class="progress" id="progress"></div>
  <header class="site-header">
    <a class="wordmark" href="/" aria-label="${edition.home}"><span class="wordmark-mark">BZ</span><span class="wordmark-copy"><strong>Bofan Zhu</strong><small>Hikaru / Blog</small></span></a>
    <nav aria-label="Article navigation"><a href="/">Home</a><a href="#article">Article</a><a href="/#blog">Blog</a></nav>
    <div class="header-actions"><a class="language-link" href="${other}" lang="${edition.otherLang}" hreflang="${edition.otherLang}" aria-label="${edition.language}">${edition.otherLabel}</a><button class="theme-toggle" id="theme-toggle" type="button" aria-label="${edition.theme}">◐</button></div>
  </header>
  <main class="shell" id="top">
    <section class="hero">
      <figure class="hero-cover"><img src="./leadership-learning-impact-cover.webp" alt="${edition.alt}" width="640" height="853" fetchpriority="high"></figure>
      <div class="hero-copy"><h1><span class="title-first">${edition.first}</span><span class="title-second">${edition.second}</span></h1><div class="byline"><time datetime="2026-10-21">2026/10/21</time> Hikaru</div></div>
    </section>
    <div class="article-layout" id="article">
      <aside class="rail" aria-label="${edition.info}"><span class="rail-number">05</span><div class="rail-sections"><a href="#leadership">Leadership</a><a href="#learning">Learning</a><a href="#impact">Impact</a></div><a href="/#blog">← ${edition.back}</a></aside>
      <article>
${body}
      </article>
    </div>
    <div class="end" id="end"><span>END / 2026.10.21</span><a href="#top">${edition.top}</a></div>
  </main>
  <footer><span>© 2026 Bofan Zhu / Hikaru</span><span>Built between papers, robots, and sandbox worlds.</span><a href="/#blog">${edition.back} ↗</a></footer>
  <script>
    const root = document.documentElement;
    const button = document.getElementById("theme-toggle");
    let stored;
    try { stored = localStorage.getItem("theme"); } catch {}
    function setTheme(theme) {
      root.dataset.theme = theme;
      button.textContent = theme === "dark" ? "☀" : "◐";
      button.setAttribute("aria-pressed", String(theme === "dark"));
    }
    setTheme(stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(next);
      try { localStorage.setItem("theme", next); } catch {}
    });
    const progress = document.getElementById("progress");
    function updateProgress() {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = max > 0 ? Math.min(100, scrollY / max * 100) + "%" : "0%";
    }
    addEventListener("scroll", updateProgress, { passive: true });
    addEventListener("resize", updateProgress);
    updateProgress();
    const languageLink = document.querySelector(".language-link");
    function syncLanguageAnchor() { languageLink.href = ${JSON.stringify(other)} + location.hash; }
    addEventListener("hashchange", syncLanguageAnchor);
    syncLanguageAnchor();
  </script>
</body>
</html>
`;
  await writeFile(new URL(`public/blog/${slug}${edition.suffix}.html`, root), html);
  console.log(`Built ${slug}${edition.suffix}.html (3 sections, ${callouts} TLDR panels)`);
}
