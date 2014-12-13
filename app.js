var purple = document.getElementById("purple");
var red = document.getElementById("red");
var message = document.getElementById("message");

function purpleButton() {
	message.className = "purple";
}

function redButton() {
	message.className = "red";
}

purple.addEventListener('click', purpleButton);
red.addEventListener('click', redButton);