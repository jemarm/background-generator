let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let randomBtn = document.getElementById("randomBtn")
let body = document.getElementById("gradient");

document.addEventListener('DOMContentLoaded', function(){
	body.style.background = 
	"linear-gradient(to right," + color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
})

function setGradient() {
	body.style.background = 
	"linear-gradient(to right," + color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor(){
	let letters = '0123456789ABCDEF';
	let color = '#';
	for(let i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color;
}

function randomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomColor);