# Bofan Zhu — Personal Homepage

Personal academic homepage for **Bofan Zhu (Hikaru)**, a student researcher exploring long-horizon agents, agent failure, embodied intelligence, VLA, and robotic manipulation.

## Live site

[https://takamatsu-hikaru.github.io](https://takamatsu-hikaru.github.io)

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run build:pages
```

- `npm run build` verifies the local vinext/Cloudflare build.
- `npm run build:pages` generates the static GitHub Pages site in `out/`.

The site is automatically deployed to GitHub Pages after changes are pushed to `main`.

## Getting-started guide

Section 06, Getting Started Guidance, links to the personal guide in Chinese and English. Edit articles in
`content/guide/zh/` and `content/guide/en/`; `content/guide/manifest.json` controls their order and grouping.

Run `npm run build:guide` to regenerate `public/blog/guide/`. Both site build commands
also run this step automatically. Open `public/blog/guide/zh/index.html` or
`public/blog/guide/en/index.html` directly to preview the guide. The homepage and its
Guide entry are included in the full site build.

Shared guide styles and interactions live in `public/blog/guide/guide.css` and
`public/blog/guide/guide.js`; page templates live in `scripts/build-guide.mjs`.
The original AI club knowledgebase remains a separate project.

### Field-guide additions (demo branch)

`feat/guide-fieldnotes` adds bilingual introductions, idea roadmaps, terms, checklists,
and 35 paper cards across ten directions. Edit `content/guide/fieldnotes/*.json`;
the builder inserts these additions before each original hands-on path. The existing
Markdown articles remain intact. `papers.html` collects searchable cards by field.

`ama.html` is an interaction demo with browser-local questions and replies. It has no
shared database or authentication; production options are recorded in
`notes/ama-options.md`. Source selection and editorial decisions are in `notes/`.

Build with `npm run build:guide` or `npm run build:pages`. Start a review at
`public/blog/guide/zh/agent.html`, `generation.html`, `papers.html`, or `ama.html`.
The English counterparts are in `en/`.

Browser checks: `node scripts/check-fieldnotes.cjs` (requires Playwright and Edge;
set `PLAYWRIGHT_MODULE_PATH` if Playwright is supplied by a separate local runtime).
When this worktree shares `node_modules` through a junction, use
`npm run build:pages -- --webpack`; Turbopack rejects dependency links outside its root.
