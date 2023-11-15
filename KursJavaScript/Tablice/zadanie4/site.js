/******************************************
 *  Author : Author
 *  Created On : Fri Nov 03 2023
 *  File : site.js
 *******************************************/

const colors = ["green"];
colors.unshift("red");
colors.push("blue");

for (let i = 0; i < colors.length; i++) {
  console.log(
    `${colors[i].slice(0, 1).toUpperCase()}` +
      `${colors[i].slice(1).toLowerCase()}`
  );
}

console.log("charAt"); // Ta metoda jest "bardziej" poprawna
console.log("-------");
for (let i = 0; i < colors.length; i++) {
  console.log(
    `${colors[i].charAt(0).toUpperCase()}` +
      `${colors[i].slice(1).toLowerCase()}`
  );
}

console.log("--------------");
console.log("pętla for of");
console.log("--------------");
for (color of colors) {
  console.log(`${color.charAt(0).toUpperCase()}` + `${color.slice(1)}`);
}
