/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL).then((res) =>
  res.json().then((data) => {
    one.setAttribute("src", data.message);
  })
);

axios.get(URL).then((res) => {
  two.setAttribute("src", res.data.message);
});

async function showImg() {
  const res = await axios.get(URL);
  three.setAttribute("src", res.data.message);
  console.log(res);
}

showImg();
