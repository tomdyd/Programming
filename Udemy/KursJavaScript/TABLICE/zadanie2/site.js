/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const numbers = [1, 2, 3, 4, 5];
const foods = ["żeberka", "burger", "pizzka"];

// const joined = numbers.concat(foods);
// console.log(joined);

const joined = [...numbers, ...foods];
console.log(joined);
