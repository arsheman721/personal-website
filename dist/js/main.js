// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('open');
    mobileMenu.classList.add('open');
    showMenu = true;
  } else {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    showMenu = false;
  }
}