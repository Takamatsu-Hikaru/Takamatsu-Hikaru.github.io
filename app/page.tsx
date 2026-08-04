"use client";

import { useEffect, useState } from "react";

const themes = [
  ["01", "Long-horizon agents", "How do agents stay coherent, recover from failure, and keep making progress across long, open-ended tasks?", "blue"],
  ["02", "Embodied intelligence", "Learning VLA, WAM, world models, and robotic manipulation through hands-on deployment on real robots.", "orange"],
  ["03", "Agent evaluation", "Building harnesses and benchmarks that reveal what AI agents can actually do — and where they break.", "violet"],
];

const work = [
  { status: "paper", eyebrow: "Agent failure · 2026", title: "Let It Go", subtitle: "Narrative Lock-in in Open-ended Real-Life AI Agents", description: "A first-author study of how open-ended agents become trapped by their own narratives and continue acting on stale assumptions.", result: "ICML 2026 Workshop on Agent Generalization · EMNLP 2026 submission", marker: "LIG" },
  { status: "experiment", eyebrow: "Automated research · EPIC Lab", title: "Autoresearch for Diffusion Cache", subtitle: "Multi-agent workflow for end-to-end research", description: "Designed an automated research workflow that searched, tested, and improved diffusion-cache ideas under a strict compute budget.", result: "Better than existing baselines · 1× RTX 4090 · 8-hour budget", marker: "AR" },
  { status: "exploring", eyebrow: "Embodied AI · YesAI Lab", title: "From agents to robots", subtitle: "VLA, WAM, and robotic manipulation", description: "Operating real robotic systems, deploying models, and learning the full manipulation stack from perception to action.", result: "Current exploration · July 2026 — now", marker: "01" },
];

const projects = [
  { name: "MetaCode", type: "LEARNING SYSTEM", description: "An all-in-one learning and practice environment for people getting started with AI coding.", stack: "React · FastAPI · SQLite", href: "https://github.com/Takamatsu-Hikaru/MetaCode/" },
  { name: "NeoMyGo", type: "AGENT WORKFLOW", description: "A hands-on workflow for exploring agent-driven cache research and experimentation.", stack: "Agents · Research workflow", href: "https://github.com/Takamatsu-Hikaru/NeoMyGO/" },
  { name: "Nexus", type: "EVALUATION INFRA", description: "An agent harness and LLM evaluation pipeline for repeatable, evidence-driven experiments.", stack: "Harness · Evaluation · LLM", href: "https://github.com/Takamatsu-Hikaru/NLI_Code/" },
  { name: "ClawMark", type: "BENCHMARK", description: "Contributing tasks and evaluation work to a benchmark for long-horizon AI agents.", stack: "Long-horizon agents · Benchmarking", href: "https://github.com/evolvent-ai/ClawMark" },
];

const journey = [
  { date: "2026.07 — NOW", place: "ShanghaiTech University · YesAI Lab", role: "Research Intern", detail: "Embodied intelligence with Shi Ye and Jingya Wang. VLA, WAM, robotic manipulation, and real-robot deployment.", active: true },
  { date: "2026.03 — 2026.07", place: "Shanghai Jiao Tong University · EPIC Lab", role: "Research Intern", detail: "Agent research with Prof. Linfeng Zhang: automated research for diffusion cache and agent failure in open-ended tasks." },
  { date: "2025.09 — NOW", place: "University of Electronic Science and Technology of China", role: "B.Sc. Computer Science · Honors College", detail: "Undergraduate student and president of the UESTC AI Society, building a community around learning and making with AI.", active: true },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const next = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Bofan Zhu home">
          <span className="wordmark-mark">BZ</span>
          <span className="wordmark-copy"><strong>Bofan Zhu</strong><small>Hikaru online</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a><a href="#work">Work</a><a href="#journey">Journey</a><a href="#about">About</a>
        </nav>
        <div className="header-actions">
          <a className="plain-link desktop-only" href="/resume.pdf">CV ↗</a>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? "☀" : "◐"}</button>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="status-line"><span className="status-dot" />Currently exploring embodied intelligence @ YesAI Lab</div>
          <p className="kicker">Student researcher · Builder · Community organizer</p>
          <h1>Hi, I&apos;m <span>Bofan.</span><br />I build agents that keep going.</h1>
          <p className="hero-lede">I&apos;m a 19-year-old computer science student at UESTC, working on long-horizon agents, agent failure, and embodied intelligence — from evaluation pipelines to real robots.</p>
          <div className="hero-links">
            <a className="button button-primary" href="#work">See my research <span>↓</span></a>
            <a className="button button-secondary" href="https://github.com/Takamatsu-Hikaru" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Hikaru avatar">
          <div className="portrait-frame"><img src="/hikaru-avatar-2026.jpg" alt="Hikaru anime avatar" /></div>
          <div className="portrait-note note-top">research mode ✦</div>
          <div className="portrait-note note-bottom">UESTC · 2025</div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Research interests">
        <div className="signal-track"><span>LONG-HORIZON AGENTS</span><i>✦</i><span>AGENT FAILURE</span><i>✦</i><span>VLA</span><i>✦</i><span>WORLD-ACTION MODELS</span><i>✦</i><span>ROBOTIC MANIPULATION</span><i>✦</i></div>
      </section>

      <section className="section-shell section-block" id="research">
        <div className="section-heading">
          <div><p className="eyebrow">What keeps me curious</p><h2>Research questions</h2></div>
          <p className="section-intro">I care about agents that operate beyond a single prompt — systems that remember, adapt, recover, and eventually act in the real world.</p>
        </div>
        <div className="theme-grid">
          {themes.map(([index, title, body, tone]) => <article className={`theme-card ${tone}`} key={index}><span className="card-index">{index}</span><h3>{title}</h3><p>{body}</p><span className="card-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="section-shell section-block" id="work">
        <div className="section-heading compact"><div><p className="eyebrow">Selected work</p><h2>Research, in progress</h2></div><p className="hand-note">paper ≠ the whole story</p></div>
        <div className="work-list">
          {work.map((item, index) => <article className="work-card" key={item.title}>
            <div className={`work-visual visual-${index + 1}`}><span className="visual-marker">{item.marker}</span><div className="visual-grid" /><span className="visual-status">{item.status}</span></div>
            <div className="work-copy"><p className="eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><h4>{item.subtitle}</h4><p>{item.description}</p><div className="result-line"><span>RESULT / STATUS</span><strong>{item.result}</strong></div></div>
          </article>)}
        </div>
      </section>

      <section className="projects-section section-block">
        <div className="section-shell">
          <div className="section-heading compact"><div><p className="eyebrow">Built in public</p><h2>Projects & infrastructure</h2></div><a className="plain-link" href="https://github.com/Takamatsu-Hikaru" target="_blank" rel="noreferrer">All repositories ↗</a></div>
          <div className="project-grid">
            {projects.map((project, index) => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <div className="project-topline"><span>{project.type}</span><span>0{index + 1}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-footer"><span>{project.stack}</span><strong>↗</strong></div>
            </a>)}
          </div>
        </div>
      </section>

      <section className="section-shell section-block" id="journey">
        <div className="section-heading"><div><p className="eyebrow">Learning by doing</p><h2>A very early journey</h2></div><p className="section-intro">Nineteen is not a credential. It&apos;s simply where this story starts.</p></div>
        <div className="timeline">
          {journey.map((item) => <article className="timeline-item" key={`${item.date}-${item.place}`}><div className="timeline-date">{item.active && <span className="tiny-dot" />}{item.date}</div><div className="timeline-main"><h3>{item.place}</h3><p className="timeline-role">{item.role}</p></div><p className="timeline-detail">{item.detail}</p></article>)}
        </div>
      </section>

      <section className="about-section section-block" id="about">
        <div className="section-shell about-grid">
          <div className="about-title"><p className="eyebrow">Beyond the lab</p><h2>Hikaru,<br />after hours.</h2></div>
          <div className="about-copy">
            <p className="about-lede">When I&apos;m not training agents or deploying robots, I&apos;m probably watching tokusatsu, following a new anime, listening to Stray Kids, or starting yet another sandbox world.</p>
            <div className="interest-cloud" aria-label="Personal interests"><span>特撮 / TOKUSATSU</span><span>MyGO!!!!!</span><span>Terraria</span><span>Stardew Valley</span><span>Minecraft</span><span>Stray Kids</span><span>Anime</span></div>
            <div className="currently-box"><span className="currently-label">CURRENTLY</span><p>Learning how intelligence leaves the screen and enters the physical world.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell">
        <p className="eyebrow">Let&apos;s talk</p><h2>Have a strange agent problem?</h2><p>I&apos;m always happy to talk about agents, robots, research, and things worth building.</p>
        <div className="contact-links"><a className="button button-primary" href="mailto:zhubofan.ai@gmail.com">zhubofan.ai@gmail.com ↗</a><a className="button button-secondary" href="/resume.pdf">Read my CV ↗</a></div>
      </section>

      <footer><span>© 2026 Bofan Zhu / Hikaru</span><span>Built between papers, robots, and sandbox worlds.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

