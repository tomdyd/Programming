/******************************************
 *  Author : Author
 *  Created On : Sat Oct 28 2023
 *  File : site.js
 *******************************************/

const arr = [true, 123, "abcd", ["nowa tablica"], 0];

// const btn1 = document.querySelector("button:nth-of-type(1)");
// const btn2 = document.querySelector("button:nth-of-type(2)");
// const btn3 = document.querySelector("button:nth-of-type(3)");

function btnMsg(e) {
  console.log(`kliknięto ${e.target.textContent}`);
}

const btns = document.querySelectorAll("button");
console.log(btns);

// btn1.addEventListener("click", btnMsg);
// btn2.addEventListener("click", btnMsg);
// btn3.addEventListener("click", btnMsg);

btns.forEach((btn) => btn.addEventListener("click", btnMsg));
