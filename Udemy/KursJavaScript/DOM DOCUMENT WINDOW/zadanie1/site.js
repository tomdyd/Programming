/******************************************
 *  Author : Author
 *  Created On : Mon Nov 06 2023
 *  File : site.js
 *******************************************/

const ulList = document.createElement("ul");

document.body.append(ulList);

for (let i = 0; i < 10; i++) {
  const liElement = document.createElement("li");
  ulList.append(liElement);
  liElement.textContent = i + 1;
}

const liElements = document.querySelectorAll("li");

const lastElement = liElements.item(9);

lastElement.textContent = "Jestem ostatnim elementem";

lastElement.classList.add("test");
