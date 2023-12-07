/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/

const newUser = {
  name: "Lisa",
  age: 23,
  car: {
    bramd: "Audi",
    model: "A3",
    color: "czarny",
    sound() {
      console.log("brum brum");
    },
  },
};

newUser.car.sound();
