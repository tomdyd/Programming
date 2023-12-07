/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`${this.name} say hi.`);
};

Person.prototype.showAge = function () {
  console.log(`${this.name} said he/she is ${this.age}`);
};

const person1 = new Person("Tomek", 26);
const person2 = new Person("Paulina", 24);

person1.sayHi();
person2.sayHi();

person1.showAge();
person2.showAge();

//==================================

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`${this.name} say hi.`);
  }
  showAge() {
    console.log(`${this.name} said he/she is ${this.age}`);
  }
}

const person3 = new Person2("Jadwiga", 50);

person3.sayHi();
person3.showAge();

console.log(person2);
console.log(person3);

console.log("==============================");

function Valve(shortName, fullName, destiny) {
  this.shortName = shortName;
  this.fullName = fullName;
  this.destiny = destiny;
}

Valve.prototype.showDestiny = function () {
  console.log(`${this.destiny}`);
};

Valve.prototype.showShortName = function () {
  console.log(`${this.shortName}`);
};

Valve.prototype.showFullName = function () {
  console.log(`${this.fullName}`);
};

const valve = new Valve("KHN", "AV06 T-13-12-T", "Foames");

valve.showShortName();
valve.showFullName();
valve.showDestiny();

class Valve1 {
  constructor(shortName, fullName, destiny) {
    this.name = shortName;
    this.fullName = fullName;
    this.destiny = destiny;
  }

  showName() {
    console.log(this.name);
  }
  showFullName() {
    console.log(this.fullName);
  }
  showDestiny() {
    console.log(this.destiny);
  }

  showAll() {
    this.showName();
    this.showFullName();
    this.showDestiny();
  }
}

const valve1 = new Valve1("SUMMIT", "SV77/92", "Air fresheners");

valve1.showAll();
