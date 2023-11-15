/******************************************
 *  Author : Author
 *  Created On : Mon Nov 06 2023
 *  File : site.js
 *******************************************/

const ulList = document.createElement("ul");
const divEl = document.querySelector("div");
const btn = document.querySelector("button");

const liItem = document.createElement("li");
liItem.textContent = "Punkt 1";

btn.addEventListener("click", (x) => {
  divEl.appendChild(ulList);
  ulList.appendChild(liItem);
});
