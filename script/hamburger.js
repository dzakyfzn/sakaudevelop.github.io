const menuToggle = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('.navbar-link');
const link1 = document.querySelector('.item1');
const link2 = document.querySelector('.item2');
const link3 = document.querySelector('.item3');


menuToggle.addEventListener('click', function () {
  nav.classList.toggle('scroll');
});

link1.addEventListener('click', function () {
  menuToggle.checked = false;
  nav.classList.remove('scroll');
});

link2.addEventListener('click', function () {
  menuToggle.checked = false;
  nav.classList.remove('scroll');
});

link3.addEventListener('click', function () {
  menuToggle.checked = false;
  nav.classList.remove('scroll');
});

