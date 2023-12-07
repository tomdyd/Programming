/******************************************
 *  Author : Author
 *  Created On : Mon Nov 06 2023
 *  File : site.js
 *******************************************/

const lime = document.querySelector(".circleLime");
const blue = document.querySelector(".circleBlue");
const gold = document.querySelector(".circleGold");

const infoLime = () => {
  console.log(`%clime`, `color: lime; text-transform: uppercase`);
};

const infoBlue = (e) => {
  e.stopPropagation(); // Powoduje ze po zdarzeniu, zdarzenie nie rozchodzi sie dalej (faza babelkowa)
  console.log(`%cblue`, `color: blue; text-transform: uppercase`);
};

const infoGold = (e) => {
  e.stopPropagation(); // Powoduje ze po zdarzeniu, zdarzenie nie rozchodzi sie dalej (faza babelkowa)
  console.log(`%cgold`, `color: gold; text-transform: uppercase`);
};

lime.addEventListener("click", infoLime /*{ capture: true }*/); // to powoduje ze podczas fazy capture (a nie bąbelkowej) jest wywolywana funkcja infoLime

blue.addEventListener("click", infoBlue);

gold.addEventListener("click", infoGold); // w styles.css nadany jest tez atrybut poiner-events: none, powoduje on pomijanie zdarzenia na wybranym elemencie (przydaje sie np w listach rozwijanych)
