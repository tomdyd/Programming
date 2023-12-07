/******************************************
 *  Author : Author
 *  Created On : Sat Nov 04 2023
 *  File : site.js
 *******************************************/

const numbers = [0, 5, 4, "abc"];
const names = ["Lisa", "Lily", "Adam", "Przemek"];

numbers.forEach((num) => console.log(num * num));

const showBigNames = (name) => {
  console.log(name.toUpperCase());
};

names.forEach(showBigNames);
console.log("---");

names.forEach((el) => console.log(el.toUpperCase()));
