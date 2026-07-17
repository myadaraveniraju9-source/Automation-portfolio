const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  html.classList.toggle('theme-dark', isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }
};

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
} else {
  applyTheme('light');
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = html.classList.contains('theme-dark') ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', nextTheme);
  applyTheme(nextTheme);
});

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
