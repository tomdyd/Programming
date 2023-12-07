/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/
const hello = (name = "drogi użytkowniku") => {
  console.log(`Cześć ${name}, jak się masz?`);
};

hello("Tomek");

const add = (x = 0, y = 0) => {
  console.log(x + y);
};

add();
