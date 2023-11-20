/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve();
    } else {
      reject("masz za mało lat");
    }
  });
};

const doubleCheck = () => {
  return new Promise((resolve, reject) => {
    console.log("sprawdzam jeszcze raz");
    setTimeout(() => {
      resolve("Faktycznie wiek się zgadza");
    }, 1000);
  });
};

// checkAge(50)
//   .then(() => {
//     console.log("Chyba możesz wejść");
//     return doubleCheck();
//   })
//   .then((res) => console.log(res))
//   .then(console.log("Weryfikacja zakończona"))
//   .catch((err) => console.error(err));

async function test() {
  try {
    await checkAge(2);
    console.log("Chyba możesz wejść");
    await doubleCheck();
    console.log("Faktycznie wiek się zgadza");
    console.log("Weryfikacja zakończona");
  } catch {
    console.error("Błąd, masz za mało alt");
  }
}

test();
