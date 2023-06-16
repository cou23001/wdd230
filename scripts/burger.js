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

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
    cards.forEach((card) => {
      card.style.background = "#001c3d"; 
      card.style.color = "#fff"; 
    });
    bulletsa.forEach((bullet) => {
      bullet.style.color ="#fff"
    });
    ps.forEach((p) => {
      p.style.color ="#fff"
    });
    bullets.style.background = "#001C3D";
    body.style.background = "#fff"
    bullets.style.color = "#fff"
    footer.style.background = "#001C3D";
	} else {
		main.style.background = "#FFFFFF";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
    cards.forEach((card) => {
      card.style.background = "#f0f0f0";
    });
    ullia.forEach((bullet) => {
      bullet.style.color ="#fff"
    });
    bulletsa.forEach((bullet) => {
      bullet.style.color ="#000"
    });
    
    bullets.style.background = "#f0f0f0";
    body.style.background = "#fff";
    ps.forEach((p) => {
      p.style.color = "#000";
    });
    
    footer.style.background = "#f0f0f0";
    bullets.style.color = "#000"
	}
});
