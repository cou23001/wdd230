const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card"); 
const bullets = document.querySelector(".bullets");
const body = document.querySelector("body");
const bulletsa = document.querySelectorAll(".bullets a");
const alerts = document.querySelectorAll("alerts");
const ps = document.querySelectorAll("p");
const ullia = document.querySelectorAll("ul li a");
const footer = document.querySelector("footer");

