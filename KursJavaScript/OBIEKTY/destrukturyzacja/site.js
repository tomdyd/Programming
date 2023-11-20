/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const Person = {
  name: "Lily",
  age: 23,
  job: "DJ",
  car: {
    brand: "Dodge",
    model: "Viper",
  },
};

const showInfo = ({ name, age, job }) => {
  //   name = person.name; // to jest to samo co ten zapis wyżej
  //   age = person.age;
  //   job = person.job;

  console.log(`${name} pracuje jako ${job} i ma ${age} lata.`);
};

const showInfoCar = ({ car: { brand, model } }) => {
  console.log(`"Brand: ${brand}, model: ${model}"`);
};

showInfo(Person); // destukturyzacja, jako obiekt
// przekazuje Person i jako parametry w funkcji mam jego klucze

showInfoCar(Person);

const showInfoCar2 = () => {
  const {
    car: { brand, model },
  } = Person;
  console.log(`"Brand: ${brand}, model: ${model}"`);
};

console.log("-=======-");
showInfoCar2();
