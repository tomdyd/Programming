/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

async function test() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
  } catch {
    console.error("Błąd");
  }
}

test();
