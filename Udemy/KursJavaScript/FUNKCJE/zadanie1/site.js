/******************************************
 *  Author : Author
 *  Created On : Sat Nov 04 2023
 *  File : site.js
 *******************************************/

let score;
const add = (x, y) => {
  score = x + y;
  score % 2 === 0 ? evenMessage(score) : oddMessage(score);
};

const evenMessage = (x) => {
  console.log(`Liczba ${x} jest parzysta`);
};

const oddMessage = (x) => {
  console.log(`Liczba ${x} jest nieparzysta`);
};

add(8, 2);
