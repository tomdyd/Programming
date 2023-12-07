/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const btn = document.querySelector("button");
const img = document.querySelector("img");

const URL = "https://dog.ceo/api/breeds/image/random";

//fetch(URL).then().catch(); - template

btn.addEventListener("click", (x) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => img.setAttribute("src", data.message))
    .catch((err) => console.error(err));
});
