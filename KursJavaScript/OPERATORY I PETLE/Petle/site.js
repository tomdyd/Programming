/******************************************
 *  Author : Author
 *  Created On : Sat Oct 28 2023
 *  File : site.js
 *******************************************/
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("---------------");

for (const number of numbers) {
  console.log(number);
}

console.log("___________");

let x = 20;

do {
  x -= 3;

  if (x < 0) {
    console.log(`${x}`);
  }
} while (x > 0);

/* Zadanie */
console.log("-----------------");
const array = [5, 8, 10, 23, 48, 60];

let text;

for (element of array) {
  console.log((element /= 5));
}

console.log("-------------------");
for (element of array) {
  if (element % 2 === 0) console.log(`liczba ${element} jest parzysta`);
  else {
    console.log(
      `%cliczba ${element} jest nieparzysta`,
      "background-color: tomato; color: black"
    );
  }
}

console.log("---------------");
