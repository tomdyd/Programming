/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

console.log(this);

function test() {
  console.log(this);
}

test();

// this w zwykłej funkcji wskazuje na obiekt, który jest na lewo od kropki

const person = {
  name: "Lisa",
  "fav-meal": "schabowy",
  address: {
    city: "Kraków",
    "zip-code": "00-000",
    showCity() {
      console.log(this.city);
    },
  },
};

person.address.showCity(); //this wskazuje na obiekt na lewo od kropki przy której znajduje się metoda

// this w konstruktorze wskazuje na obiekt, stworzony na podstawie konstruktora

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Tomek", 26); // this w konstruktorze wskazuje na obiekt person1, ponieaż został on utworzony na podstawie tego konstruktora
