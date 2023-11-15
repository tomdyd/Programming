/******************************************
 *  Author : Author
 *  Created On : Wed Nov 08 2023
 *  File : site.js
 *******************************************/
const divWrapper = document.querySelector(".wrapper");
const liItems = divWrapper.querySelectorAll("li");

let number = 1;

for (const liItem of liItems) {
  liItem.textContent = number;
  liItem.dataset.id = number;
  number++;
}

const thirdLi = divWrapper.querySelector(`[data-id="3"]`);
console.log(thirdLi);

const grandpa = thirdLi.closest(".wrapper");
console.log(grandpa);
