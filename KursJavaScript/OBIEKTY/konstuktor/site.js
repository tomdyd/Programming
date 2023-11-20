/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/

function User(name, age) {
  this.name = name;
  this.age = age;

  this.hello = function () {
    console.log(`Cześć ${this.name}`);
  };
}

const newUser = new User("Tomek", 26);
const newUser2 = new User("Paulina", 24);

newUser.hello();
newUser2.hello();
