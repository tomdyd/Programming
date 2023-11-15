/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

helloWorld(); // Funkcje w js'ie podlegają hoistingowi, tzn IDE wyciąga deklaracje funkcji na samą górę,
//więc nie ma znaczenia czy użyjemy funkcji przed jej deklaracją czy po

function helloWorld() {
  console.log("hello world!");
}

const helloWorldVariable = function () {
  console.log("Hello World!");
}; // przypisanie funkcji do zmiennej sprawia, że pozbywamy się zjawiska hoistingu.
//Teraz musimy używać funkcji (a w zasadzie zmiennej po jej deklaracji)

helloWorldVariable();

function add(parameter) {
  console.log(`Podany argument to: ${parameter}`);
} // podczas tworzenia funkcji podajemy parametr

add("test"); // podczas wywołania funkcji podajemy argument, ogólnie parametr = argument

function MyFunction(name, age) {
  console.log(`Cześć, mam na imię ${name} i mam ${age} lat`);
}

MyFunction("Tomek", 25);
