/******************************************
 *  Author : Author
 *  Created On : Mon Nov 06 2023
 *  File : site.js
 *******************************************/

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

const test = () => {
  console.log("click");
};

const target = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.offsetTop);
};

// btn1.addEventListener("click", test);

btn2.addEventListener("mouseover", (x) => {
  console.log("najechano na mnie!");
});

btn3.addEventListener("dblclick", (x) => {
  console.log("double click");
});

btn1.addEventListener("click", target);
