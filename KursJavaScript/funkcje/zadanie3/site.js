/******************************************
 *  Author : Author
 *  Created On : Sat Nov 04 2023
 *  File : site.js
 *******************************************/

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
  numbers.push(i);
}

const test = (x) => {
  x % 3 === 0 && x !== 0
    ? console.log(`${x} jest podzielne przez 3`)
    : console.log(`${x} nie jest podzielne przez 3 lub ${x} = 0`);
};

numbers.forEach((num) => test(num));
