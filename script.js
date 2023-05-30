const buttonMenu = document.querySelector('.button-menu-toggle');
const navList = document.querySelector('.nav-links');

buttonMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});
