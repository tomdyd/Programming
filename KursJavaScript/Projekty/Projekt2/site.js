/******************************************
 *  Author : Author
 *  Created On : Wed Nov 08 2023
 *  File : site.js
 *******************************************/
// 1. Nasluchiwanie na buttony
// 2. funkcje na zmiane koloru i powiekszenie fonta

const sizeUpBtn = document.querySelector(".sizeUp");
const sizeDownBtn = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 36;

const SizeUp = () => {
  if (fontSize >= 60) {
    return;
  }
  fontSize += 4;
  p.style.fontSize = fontSize + "px";
};

const SizeDown = () => {
  if (fontSize <= 12) {
    return;
  }
  fontSize -= 4;
  p.style.fontSize = fontSize + "px";
};

const Color = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  p.style.color = `rgb(${r} ${g} ${b})`;
};

sizeUpBtn.addEventListener("click", SizeUp);

sizeDownBtn.addEventListener("click", SizeDown);

colorBtn.addEventListener("click", Color);
