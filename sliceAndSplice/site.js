/******************************************
 *  Author : Author
 *  Created On : Sun Oct 29 2023
 *  File : site.js
 *******************************************/

const numbers = [0, 0, 1, 1, 2, 2, 2];
const colors = ["red", "green", "blue", true, 123];
const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

const numbers2 = numbers.slice(0, 2); // metoda niedestrukcyjna
const numbers3 = numbers.slice(4);
// console.log(numbers); // tablica nie została zmieniona

console.log(numbers2);
console.log("-------");
console.log(numbers3);

const randomStuff = colors.splice(3); // metoda destukcyjna
console.log("-------");
console.log(randomStuff);

const newCars = cars.splice(2, 4, "test");
console.log("-------");
console.log(newCars);

console.log("-------");
console.log(cars);
