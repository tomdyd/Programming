/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const numbers = [1, 5, 13, 26, 48];

const newArr = numbers.map((x) => x * 5);
console.log(newArr);

console.log("----------------");
console.log("funkcja forEach");
console.log("----------------");
newArr.forEach((x) =>
  console.log(
    x % 2 === 1 ? `Liczba nieparzysta: ${x}` : `Liczba parzysta: ${x}`
  )
);

console.log("----------------");
console.log("funkcja for of");
console.log("----------------");
for (const number of newArr) {
  console.log(
    number % 2 === 1
      ? `Liczba nieparzysta: ${number}`
      : `Liczba parzysta: ${number}`
  );
}
