/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/

function Meal(name, price) {
  this.name = name;
  this.price = price;
}

const meal = new Meal("Schabowy", 20);
const meal1 = new Meal("Mielony", 15);
const meal2 = new Meal("Pizzka", 30);

Meal.prototype.showMeal = function () {
  console.log(`${this.name} kosztuje ${this.price}`);
};

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

btn1.addEventListener("click", () => meal.showMeal());
btn2.addEventListener("click", () => meal1.showMeal());
btn3.addEventListener("click", () => meal2.showMeal());
