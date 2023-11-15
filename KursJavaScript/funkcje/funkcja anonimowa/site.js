/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const heading = document.querySelector("h1");

function test() {
  console.log("HEJ, KLIKNIĘTO MNIE");
}

heading.addEventListener("click", test);

// heading.addEventListener("click", function () {
//   console.log("HEJ, KLIKNIĘTO MNIE");
// }); // TO JEST FUNKCJA ANONIMOWA ALE NIE POWIJNNIISMY TAK ROBIC, LEPIEJ JEST JAK WYZEJ
