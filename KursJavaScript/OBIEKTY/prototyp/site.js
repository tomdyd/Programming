/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.hello = function () {
  console.log(`Cześć ${this.name}`);
};

const newUser = new User("Tomek", 26);
const newUser1 = new User("Paulina", 24);
const newUser2 = new User("Jadwiga", 50);

newUser.hello();
newUser1.hello();
newUser2.hello();
