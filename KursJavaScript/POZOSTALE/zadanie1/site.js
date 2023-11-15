/******************************************
 *  Author : Author
 *  Created On : Wed Nov 08 2023
 *  File : site.js
 *******************************************/

const img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
);

img.setAttribute("alt", "random img");

const Test = () => {
  console.log("cokolwiek");
};

setTimeout(Test, 2000);
