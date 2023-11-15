/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const car = "Audi, Mercedes, BMW, Nissan, Dodge";

const cars = car.split(", ");

console.log(cars);

console.log(cars.length > 3 ? "Jest OK" : "Nie jest OK");

cars.includes("Audi") ? cars.push("Renault") : cars.pop();

console.log(cars);
