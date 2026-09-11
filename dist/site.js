const button = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
