/******************************************
 *  Author : Author
 *  Created On : Tue Dec 05 2023
 *  File : site.js
 *******************************************/

let burger = document.querySelector(".burger");
let barIco = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-xmark");
let nav = document.querySelector("nav ul");

const handleNav = () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  barIco.classList.toggle("hide");
  xMark.classList.toggle("hide");
};

burger.addEventListener("click", handleNav);
