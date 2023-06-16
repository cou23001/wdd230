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

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
    cards.forEach((card) => {
      card.style.background = "#001c3d"; 
    });
    bullets.style.background = "#fff";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
    cards.forEach((card) => {
      card.style.background = "#f0f0f0";
    });
    bullets.style.background = "#fff";
	}
});
