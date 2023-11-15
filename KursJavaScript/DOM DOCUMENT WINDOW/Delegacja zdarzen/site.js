/******************************************
 *  Author : Author
 *  Created On : Mon Nov 06 2023
 *  File : site.js
 *******************************************/

const allCircles = document.querySelectorAll(".circle");
const lime = document.querySelector(".lime");
const blue = document.querySelector(".blue");
const gold = document.querySelector(".gold");

// allCircles.forEach((circle) =>
//   circle.addEventListener("click", () => console.log(circle))
// );

const purple = document.createElement("div");
purple.classList.add("circle", "purple");
gold.append(purple);

lime.addEventListener("click", (e) => {
  if (e.target.matches(".circle2")) {
    console.log(e.target);
  }
});
