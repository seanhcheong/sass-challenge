var purple = document.getElementById("purple");
var red = document.getElementById("red");
var message = document.getElementById("message");
var container = document.getElementById("mainContainer");

function purpleButton() {
	message.className = "purple";
	container.className = "purple"
}

function redButton() {
	message.className = "red";
	container.className = "red";
}

purple.addEventListener('click', purpleButton);
red.addEventListener('click', redButton);