const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["yellow", "red", "green", "blue", "black", "orange", "pink"];

body.style.backgroundColor = "white";
button.addEventListener("click", changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex];
} 













