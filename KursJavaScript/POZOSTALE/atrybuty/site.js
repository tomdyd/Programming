/******************************************
 *  Author : Author
 *  Created On : Wed Nov 08 2023
 *  File : site.js
 *******************************************/

const link = document.querySelector("a");
const img = document.querySelector("img");
const p = document.querySelector("p");

link.setAttribute("href", "#");
link.setAttribute("target", "_blank");
// dodaje ustawia nowy atrybut i przypisuje do niego wartość

console.log(img.getAttribute("src"));
console.log(link.getAttribute("href")); // w DOMie a posiada atrybut wiec w konsoli widac jego wartosc pomimo braku tego w HTMLu
// pobiera wartosc, ktora jest przypisana do danego atrybutu

console.log(p.hasAttribute("style"));
// sprawdza czy mamy jakis atrybut

p.removeAttribute("style");
// usuwa wskazany atrybut z DOM
