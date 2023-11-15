/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const name = "Tomek";

const test = () => {
  const name = "Paulina";
  console.log(`NAME w funkcji: ${name}`);

  const test2 = () => {
    const name = "Nela";
    console.log(`NAME w funkcji test2: ${name}`);
  };

  test2();
};

test();

console.log(`NAME poza funkcją: ${name}`);
