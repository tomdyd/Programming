/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const user = {
  name: "Lily",
  age: 23,
};

const pet = {
  name: "Drops",
  type: "dog",
};

// const userInfo = Object.assign(user, pet); // w ten sposób możemy zniczszyć obiekt
// console.log(pet);
// console.log(userInfo);
// console.log(user);
console.log("===============================");
const userInfo1 = Object.assign({}, user, pet);
console.log(pet);
console.log(user);
console.log(userInfo1);
