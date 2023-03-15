const toggler = document.querySelector('.toggle');
const nav = document.querySelector('nav');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  nav.classList.toggle('active');
});
