/******************************************
 *  Author : Author
 *  Created On : Tue Nov 07 2023
 *  File : site.js
 *******************************************/

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const square = document.querySelector(".square");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

const ColorRed = () => {
  square.style.backgroundColor = "tomato";
};

const ColorBlue = () => {
  square.style.backgroundColor = "royalblue";
};

const Hello = () => {
  console.log("Cześć");
};

const ChangeClasses = () => {
  p1.classList.contains("show")
    ? p1.classList.remove("show")
    : p1.classList.add("show");
  p2.classList.contains("show")
    ? p2.classList.remove("show")
    : p2.classList.add("show");
  //     p1.classList.toggle("show");
  //   p2.classList.toggle("show");
};

btn1.addEventListener("dblclick", Hello);
square.addEventListener("mouseover", ColorRed);
square.addEventListener("mouseleave", ColorBlue);
btn2.addEventListener("click", ChangeClasses);
