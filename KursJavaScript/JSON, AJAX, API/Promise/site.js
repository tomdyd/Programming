/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const test = new Promise((resolve, reject) => {
  if (!true) {
    resolve("jest ok");
  } else {
    reject("błąd");
  }
});

test.then((info) => console.log(info)).catch((err) => console.error(err));
