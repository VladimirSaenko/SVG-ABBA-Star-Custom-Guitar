
"use strict";

let bodyGuitar = document.getElementById("bodyGuitar")
let pad = document.getElementById("pad");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

bodyGuitar.style.fill = `rgb(${getRandomInt(0, 225)}, ${getRandomInt(0, 225)}, ${getRandomInt(0, 225)})`;
// pad.style.fill = `rgb(${getRandomInt(0, 225)}, ${getRandomInt(0, 225)}, ${getRandomInt(0, 225)})`;

color1.addEventListener('input', () => {
    bodyGuitar.style.fill = color1.value;
})

color2.addEventListener('input', () => {
    pad.style.fill = color2.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
