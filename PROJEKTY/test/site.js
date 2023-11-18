/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/
let addBtn;
let inputName;
let inputLastName;
let inputAge;

const main = () => {
  prepareDOMElemens();
  prepareDOMEvenets();
};

const prepareDOMElemens = () => {
  addBtn = document.querySelector(".addBtn");
  formEl = document.querySelector(".form");
  inputName = document.querySelector(".input1");
  inputLastName = document.querySelector(".input2");
  inputAge = document.querySelector(".input3");
  ulList = document.querySelector(".info");
  hiddenLi = document.querySelector(".hidden");
  errorMsg = document.querySelector(".error");
};

const prepareDOMEvenets = () => {
  addBtn.addEventListener("click", add);
  inputAge.addEventListener("keydown", enterEventCheck);
};

const add = (e) => {
  e.preventDefault();

  if (inputName.value !== "" && inputLastName.value !== "" && inputAge !== "") {
    const name = document.createElement("p");
    const lastName = document.createElement("p");
    const age = document.createElement("p");
    const liElement = document.createElement("li");
    liElement.append(name, lastName, age);

    name.textContent = inputName.value;
    lastName.textContent = inputLastName.value;
    age.textContent = inputAge.value;

    hiddenLi.classList.remove("hidden");

    ulList.appendChild(liElement);

    inputName.value = "";
    inputLastName.value = "";
    inputAge.value = "";
  } else {
    errorMsg.textContent = "Wypełnij pola formularza!";
  }
};

const enterEventCheck = (k) => {
  if (e.key === "Eneter") {
    add();
  }
};

document.addEventListener("DOMContentLoaded", main);
