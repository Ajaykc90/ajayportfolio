const themeButtons = [...document.querySelectorAll('[data-style]')];
const validThemes = new Set(themeButtons.map(button => button.dataset.style));
function chooseTheme(theme) {
  if (!validThemes.has(theme)) return;
  document.body.dataset.theme = theme;
  themeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.style === theme)));
  const url = new URL(location.href);
  url.searchParams.set('theme', theme);
  history.replaceState(null, '', url);
}
themeButtons.forEach(button => button.addEventListener('click', () => chooseTheme(button.dataset.style)));
chooseTheme(new URLSearchParams(location.search).get('theme') || 'editorial');

const portrait = document.querySelector('.portrait-button');
let waveTimer;
portrait?.addEventListener('click', () => {
  portrait.classList.remove('greeting-dismissed');
  clearTimeout(waveTimer);
  portrait.classList.remove('is-waving');
  void portrait.offsetWidth;
  portrait.classList.add('is-waving');
  waveTimer = setTimeout(() => portrait.classList.remove('is-waving'), 2600);
});

portrait?.addEventListener('pointerenter', () => portrait.classList.remove('greeting-dismissed'));
portrait?.addEventListener('focusin', () => portrait.classList.remove('greeting-dismissed'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    portrait?.classList.add('greeting-dismissed');
    portrait?.classList.remove('is-waving');
    clearTimeout(waveTimer);
  }
});

// Native hash navigation scrolls; explicitly move keyboard focus to its destination.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});
