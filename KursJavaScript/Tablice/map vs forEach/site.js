/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/
const numbers = [0, 1, 2, 3];

const newNumbers = numbers.forEach((x) => console.log(x * 2)); //forEach nie zwraca nic
console.log(newNumbers);

const mapNumbers = numbers.map((x) => x * 2); // map zwraca tablicę
console.log(mapNumbers);
