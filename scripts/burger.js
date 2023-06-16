const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navMenu.classList.toggle('active');
});