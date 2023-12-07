/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

function test() {
  console.log(this);
  console.log(this.name);
}

const car1 = {
  name: "Audi",
};

const car2 = {
  name: "Dodge",
};
const car3 = {
  name: "Nissan",
};

test.bind(car1)(); // najpierw wywołujemy metodą bind, a potem całą funkcję test
