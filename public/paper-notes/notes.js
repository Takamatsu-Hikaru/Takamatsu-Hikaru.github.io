const root = document.documentElement;
const button = document.getElementById('theme-toggle');
let stored;
try { stored = localStorage.getItem('theme'); } catch {}
function setTheme(theme) {
  root.dataset.theme = theme;
  button.textContent = theme === 'dark' ? '☀' : '◐';
  button.setAttribute('aria-pressed', String(theme === 'dark'));
}
setTheme(stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
button.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('theme', next); } catch {}
});
function syncAnchor() {
  const link = document.getElementById('language');
  link.href = link.href.split('#')[0] + location.hash;
}
syncAnchor();
addEventListener('hashchange', syncAnchor);
function updateProgress() {
  const height = document.documentElement.scrollHeight - innerHeight;
  document.getElementById('progress').style.width = height > 0 ? Math.min(100, scrollY / height * 100) + '%' : '0%';
}
addEventListener('scroll', updateProgress, { passive: true });
addEventListener('resize', updateProgress);
for (const img of document.images) img.addEventListener('load', updateProgress);
updateProgress();
