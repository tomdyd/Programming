/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Zwierzak robi 'hau hau'");
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  test() {
    console.log("test");
  }
}

const dog = new Dog("Drops", 6);

console.log(dog);
dog.sound();

// const testAnimal = new Animal("Papuga");
// testAnimal.test(); // błąd, metoda test jest dostępna tylko dla klasy Dog

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log("miau miau");
  }
}

const cat = new Cat("kot");

cat.sound(); // nadpisujemy metodę sound z klasy animals
