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

### Field guides and illustrated paper cards

The guide includes bilingual introductions, idea roadmaps, terms, checklists,
and 37 illustrated paper cards across ten directions, including pi0 and pi0.5.
Edit `content/guide/fieldnotes/*.json`; figure sources and dimensions are stored in
`content/guide/paper-figures.json`. Each article introduces the field, follows its
learning routes, then presents papers and exercises. `papers.html` collects searchable cards.

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

### Sync the AI club edition

Run `node scripts/sync-club-guide.mjs <club-guide-directory>`, then run
`node build.mjs` and `node check-preview.cjs` in that directory. The sync preserves
the club homepage, community introduction, and green design while copying the
shared field data, paper illustrations, and interactions. A snapshot before the
first sync is saved locally under `work/club-before-fieldnotes-sync`.
