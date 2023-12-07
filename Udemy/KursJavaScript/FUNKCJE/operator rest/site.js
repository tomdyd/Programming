/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const arr = [1, 2, 3, 4, 5];
//SPREAD
console.log(arr);
console.log(...arr);

//REST, jeśli podamy więcej argumentów niż funkcja przewiduje, to parametr który ma parametr rest przyjmuje je jako tablice

const numbers = (x, y, ...z) => {
  z.forEach((el) =>
    el % 2 === 0
      ? console.log(`Liczba ${el}: parzysta`)
      : console.log(`Liczba ${el}: nieparzysta`)
  );
};

numbers(451341, 13123, 123, 123, 32, 32, 125, 6, 7, 1, 5256, 56);
