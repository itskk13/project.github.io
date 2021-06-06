const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', showMenu);

function showMenu() {
  menu.classList.toggle('hidden');
}