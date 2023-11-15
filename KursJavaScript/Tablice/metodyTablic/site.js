/******************************************
 *  Author : Author
 *  Created On : Sat Oct 28 2023
 *  File : site.js
 *******************************************/

const numbers = [1, 2, 3, 4, 5];

function multiply(x) {
  return x * 2;
}

const newNumbers = numbers.map(multiply); // wykonuje jakiś kod na każdym elemencie tablicy
// jako parametr przekazujemy funkcje która ma się wykonać
// zwraca nową tablicę

// console.log(numbers);
// console.log(newNumbers);

const abc = ["a", "b", "c"];
// const newAbc = numbers.concat(abc); // metoda niedestrukcyjna, łączenie tablic

// console.log(newAbc);

console.log(abc);
console.log(...abc);

const drinks = ["pepsi", "kawa", "sok"];
const meals = ["schabowy", "spaghetti", "zupa"];

const menu = [...drinks.concat(...meals)];
console.log(menu);
const menu2 = [drinks.concat(meals)];
console.log(menu2);

const menu3 = [drinks, meals];

console.log(menu3);
