/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/

const user = {
  name: "Klaudia",
  age: 23,
  "fav-dish": "schabowy",
};

user.country = "Polska";

user["fav-color"] = "niebieski";

console.log(user);

const dogName = "Drops";
const dogAge = 5;

const dog = {
  //   dogName: dogName,
  //   dogAge: dogAge,

  dogName, //zapis skrócony tego co wyżej, możemy go stosować jeśli klucz i wartość ma tą samą nazwę
  dogAge,
};

console.log(dog);
