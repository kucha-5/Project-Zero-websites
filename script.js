const loader = document.getElementById('loader');
const count = document.getElementById('loaderCount');
const bar = document.getElementById('loaderBar');
let progress = 0;

const timer = setInterval(() => {
  progress += Math.floor(Math.random() * 9) + 3;
  if (progress >= 100) {
    progress = 100;
    clearInterval(timer);
    setTimeout(() => loader.classList.add('hidden'), 350);
  }
  count.textContent = progress;
  bar.style.width = `${progress}%`;
}, 55);

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach((item) => revealObserver.observe(item));

const sections = [...document.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.rail__nav a')];

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach((section) => navObserver.observe(section));

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
links.forEach((link) => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const hero = document.querySelector('.hero__image');
window.addEventListener('pointermove', (event) => {
  if (window.innerWidth < 900) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 8;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  hero.style.transform = `scale(1.07) translate3d(${x}px, ${y}px, 0)`;
});
