/******************************************
 *  Author : Author
 *  Created On : Mon Nov 06 2023
 *  File : site.js
 *******************************************/
const addBtn = document.querySelector(".add");
const rmBtn = document.querySelector(".remove");
const tgBtn = document.querySelector(".toggle");
const text = document.querySelector("p");

const div = document.createElement("div");
const p = document.createElement("p");

p.textContent = "To jest nowy paragraf";
p.classList.add("p");

document.body.append(div);
div.append(p);

const addClass = () => {
  text.classList.add("test");
  p.classList.add("test");
};

const removeClass = () => {
  text.classList.remove("test");
  p.classList.remove("test");
};

const toggleClass = () => {
  text.classList.toggle("test");
  p.classList.toggle("test");
};

addBtn.addEventListener("click", addClass);
rmBtn.addEventListener("click", removeClass);
tgBtn.addEventListener("click", toggleClass);
