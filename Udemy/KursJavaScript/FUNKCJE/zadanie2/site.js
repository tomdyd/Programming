/******************************************
 *  Author : Author
 *  Created On : Sat Nov 04 2023
 *  File : site.js
 *******************************************/

let celsius;
let temp;
const fahrenheit = (x) => {
  celsius = x;
  temp = celsius * 1.8 + 32;
  return console.log(`${celsius}°C = ${temp}°F`);
};

fahrenheit(50);
