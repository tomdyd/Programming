// /******************************************
//  *  Author : Author
//  *  Created On : Sat Oct 28 2023
//  *  File : site.js
//  *******************************************/

// const arr = [true, 123, "abcd", ["nowa tablica"], 0];

// // const btn1 = document.querySelector("button:nth-of-type(1)");
// // const btn2 = document.querySelector("button:nth-of-type(2)");
// // const btn3 = document.querySelector("button:nth-of-type(3)");

// function btnMsg(e) {
//   console.log(`kliknięto ${e.target.textContent}`);
// }

// const btns = document.querySelectorAll("button");
// console.log(btns);

// // btn1.addEventListener("click", btnMsg);
// // btn2.addEventListener("click", btnMsg);
// // btn3.addEventListener("click", btnMsg);

// btns.forEach((btn) => btn.addEventListener("click", btnMsg));

// const numbers = [1, 2, 3, 4, 5];

// numbers.unshift(100); // add element to index 0
// console.log(numbers);

// numbers.shift(); // delete element with index 0
// console.log(numbers);

// const colors = ["red", "green", "blue"];
// console.log(colors);
// colors.push("gold"); // add element at the end of the array
// console.log(colors);

// colors.pop(); // delete last element of the array
// console.log(colors);

const carArray = [];

carArray.unshift("opel");
carArray.push("audi");
console.log(carArray);
carArray.pop();
carArray.shift();
console.log(carArray);
