/******************************************
 *  Author : Author
 *  Created On : Sat Oct 28 2023
 *  File : site.js
 *******************************************/

console.log("10" == 10); //check only value
console.log("10" === 10); //check type and value

// const pass ='mfasifa'
// if (pass.length > 10 && pass.includes('!'))
// {
//     console.log('Masz rewelacyjne hasło');
// }
// else if(pass.length > 10)
// {
//     console.log('Masz dobre hasło');
// }
// else{
//     console.log('Masz za krótkie hasło');
// }

const isLoggedIn = false;

function LoggedIn() {
  console.log("Użytkownik jest zalogowany");
}

function LoggedOut() {
  console.log("Użytkownik nie jest zalogowany");
}

isLoggedIn ? LoggedIn() : LoggedOut();

/*Zadanie 1
1. Stwórz zmienne x = 50 i y = 30
2. Stwórz if'a, który sprawdzi czy x jest większe od y
3. Wynik wypisz w konsoli za pomocą template string'a.
   Wartość 50 oraz 30 umieść za pomocą zmiennych*/

const x = 50;
const y = 30;

if (x > y) {
  console.log(`x = ${x} jest większy od y = ${y}`);
}

/*Zadanie 2
   1. Stwórzy zmienną color i przypisz do niej wartość blue
   2. Stwórz zmienną newColor i przypisz do niej wartość green
   3. Za pomocą if'a sprawdź czy zmienna color przechowuje tą samą wartość co newColor*/

const color = "blue";
const newColor = "green";

if (color === newColor) {
  console.log(
    `zmienna color przechowuje wartość: ${color} i jest równa zmiennej newColor, która przechowuje wartość: ${newColor}`
  );
} else {
  console.log(
    `zmienna color przechowuje wartość: ${color} i jest różna od zmiennej newColor, która przechowuje wartość: ${newColor}`
  );
}
/* Zadanie 3*/
const X = 100;
const Y = 50;

if (X > Y) {
  console.log(`${X} > ${Y}`);
} else if (X === Y) {
  console.log(`${X} = ${Y}`);
} else {
  console.log(`${X} < ${Y}`);
}

/* Zadanie 4 */
const promo = "100%";

switch (promo) {
  case "20%":
    console.log("Dzisiaj mamy 20% zniżki");
    break;
  case "10%":
    console.log("Dzisiaj mamy 10% zniżki");
    break;
  case "30%":
    console.log("Dzisiaj mamy 30% zniżki");
    break;
  default:
    console.log(`Dzisiaj mamy ${promo} zniżki`);
}

/* Zadanie 5 */
const num = 10;

function isEven() {
  console.log(`Liczba ${num} jest liczbą parzystą`);
}

function isOdd() {
  console.log(`Liczba ${num} nie jest liczbą parzystą`);
}

if (num % 2 === 0) {
  isEven();
} else {
  isOdd();
}

num % 2 === 0 ? isEven() : isOdd();

/* Zadanie 6
1. Stwórz zmienna X i przypisz do niej wartość 50
2. Za pomocą konsoli, sprawdź czy X jest większy lub równy 100.
   Jeśli jest - wypisz w konsoli "X >= 100"
3. Nastpęnie sprawdź czy X jest mniejsze niż 100, ale większe niż 30. Jeśli jest wypisz w konsoli "X JEST ŚREDNIAKIEM"
4. Jeśli X jest mniejszy lub równy 30, wypisz w konsoli "X JEST MAŁY"*/

console.log("---------");
console.log("ZADANIE 6");
const num1 = -100;

let text;

if (num1 >= 100) {
  text = "X > 100";
} else {
  if (num1 < 100 && num1 > 30) {
    text = "X jest średniakiem";
  } else {
    text = "X jest mały";
  }
}

console.log(text.toUpperCase());
