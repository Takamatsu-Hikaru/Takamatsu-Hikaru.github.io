import { readFile, writeFile } from "node:fs/promises";
import { marked } from "marked";

const root = new URL("../", import.meta.url);
const slug = "more-papers-now-what";
const origin = "https://takamatsu-hikaru.github.io";
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const editions = [
  {
    lang: "zh-CN", source: "zh", suffix: "", otherSuffix: "-en", otherLang: "en", otherLabel: "EN",
    first: "投稿越来越多，", second: "然后呢？", title: "投稿越来越多，然后呢？",
    description: "投稿、评审与职业回报怎样形成一个越转越快的循环；当六万篇都认真，研究、判断与生活又该怎么继续。",
    alt: "海面、远处的灯塔与礁石旁的人", home: "返回 Bofan Zhu 主页", theme: "切换颜色主题", language: "Read this article in English", info: "文章信息", back: "返回博客列表", top: "回到顶部 ↑",
  },
  {
    lang: "en", source: "en", suffix: "-en", otherSuffix: "", otherLang: "zh-CN", otherLabel: "中文",
    first: "More Papers.", second: "Now What?", title: "More Papers. Now What?",
    description: "How submissions, peer review, and career rewards feed an accelerating cycle—and what remains when all sixty thousand papers are earnest, solid work.",
    alt: "A person by the rocks, the sea, and a distant lighthouse", home: "Back to Bofan Zhu home", theme: "Switch color theme", language: "阅读本文中文版", info: "Article information", back: "ALL POSTS", top: "Back to top ↑",
  },
];

for (const edition of editions) {
  const markdown = (await readFile(new URL(`content/blog/${slug}.${edition.source}.md`, root), "utf8")).replaceAll("\r\n", "\n").trim();
  const paragraphs = markdown.split(/\n\s*\n/);
  const title = paragraphs.shift();
  if (title !== `# ${edition.title}`) throw new Error(`Unexpected title in ${edition.source}`);
  const lead = paragraphs.shift();
  let section = 0;
  const body = marked.parse(paragraphs.join("\n\n")).replace(/<h2>/g, () => `<h2 id="section-${++section}">`);
  const leadHtml = marked.parse(lead).trim().replace(/^<p>/, '<p class="lead">');
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
  <meta property="og:image" content="${origin}/blog/more-papers-cover.webp">
  <meta property="og:image:alt" content="${escape(edition.alt)}">
  <meta property="article:published_time" content="2026-10-05">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="${page}">
  <link rel="alternate" hreflang="zh-CN" href="${origin}/blog/${slug}.html">
  <link rel="alternate" hreflang="en" href="${origin}/blog/${slug}-en.html">
  <title>${escape(edition.title)} · Hikaru</title>
  <link rel="stylesheet" href="./more-papers.css">
</head>
<body>
  <div class="progress" id="progress"></div>
  <header class="site-header">
    <a class="wordmark" href="/" aria-label="${edition.home}">
      <span class="wordmark-mark">BZ</span>
      <span class="wordmark-copy"><strong>Bofan Zhu</strong><small>Hikaru / Blog</small></span>
    </a>
    <nav aria-label="Article navigation"><a href="/">Home</a><a href="#article">Article</a><a href="/#blog">Blog</a></nav>
    <div class="header-actions">
      <a class="language-link" href="${other}" lang="${edition.otherLang}" hreflang="${edition.otherLang}" aria-label="${edition.language}">${edition.otherLabel}</a>
      <button class="theme-toggle" id="theme-toggle" type="button" aria-label="${edition.theme}">◐</button>
    </div>
  </header>
  <main class="shell" id="top">
    <section class="hero">
      <figure class="hero-cover"><img src="./more-papers-cover.webp" alt="${edition.alt}" width="1448" height="1086" fetchpriority="high"></figure>
      <h1><span class="title-first">${edition.first}</span><span class="title-second">${edition.second}</span></h1>
      <div class="byline"><time datetime="2026-10-05">2026/10/5</time> Hikaru</div>
      ${leadHtml}
    </section>
    <div class="article-layout" id="article">
      <aside class="rail" aria-label="${edition.info}"><span class="rail-number">04</span><p>RESEARCH<br>JUDGMENT &amp; LIFE</p><a href="/#blog">← ${edition.back}</a></aside>
      <article>
${body}
      </article>
    </div>
    <div class="end" id="end"><span>END / 2026.10.05</span><a href="#top">${edition.top}</a></div>
  </main>
  <footer><span>© 2026 Bofan Zhu / Hikaru</span><span>Built between papers, robots, and sandbox worlds.</span><a href="/#blog">${edition.back} ↗</a></footer>
  <script>
    const root = document.documentElement;
    const button = document.getElementById("theme-toggle");
    let stored;
    try { stored = localStorage.getItem("theme"); } catch {}
    const initial = stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    function setTheme(theme) {
      root.dataset.theme = theme;
      button.textContent = theme === "dark" ? "☀" : "◐";
      button.setAttribute("aria-pressed", String(theme === "dark"));
    }
    setTheme(initial);
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(next);
      try { localStorage.setItem("theme", next); } catch {}
    });
    const progress = document.getElementById("progress");
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = max > 0 ? Math.min(100, scrollY / max * 100) + "%" : "0%";
    };
    addEventListener("scroll", updateProgress, { passive: true });
    addEventListener("resize", updateProgress);
    updateProgress();
    const languageLink = document.querySelector(".language-link");
    const syncLanguageAnchor = () => { languageLink.href = ${JSON.stringify(other)} + location.hash; };
    addEventListener("hashchange", syncLanguageAnchor);
    syncLanguageAnchor();
  </script>
</body>
</html>
`;
  await writeFile(new URL(`public/blog/${slug}${edition.suffix}.html`, root), html);
  console.log(`Built ${slug}${edition.suffix}.html (${section} sections)`);
}
