/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/
let body, container1, container2, btns;

const main = () => {
  prepareDOMElements();
  addButtons();
  checkThis();
};

const prepareDOMElements = () => {
  body = document.querySelector("body");
  container1 = document.querySelector(".container1");
  container2 = document.querySelector(".container2");
};

const addButtons = () => {
  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      const button = document.createElement("button");
      container1.append(button);
      button.classList.add(`btn-${i + 1}`);
      button.textContent = `#${i + 1}`;
    } else {
      const button = document.createElement("button");
      container2.append(button);
      button.classList.add(`btn-${i + 1}`);
      button.textContent = `#${i + 1}`;
    }
  }
};

const checkThis = () => {
  btns = document.querySelectorAll("button");
  btns.forEach((btn) =>
    btn.addEventListener("click", function () {
      console.log(this);
    })
  );
};

document.addEventListener("DOMContentLoaded", main);
