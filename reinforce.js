const menu = document.querySelectorAll('#mobile-menu');
const menuLinks = document.querySelectorAll ('.navbar___menu');

menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');