/******************************************
 *  Author : Author
 *  Created On : Sun Nov 19 2023
 *  File : site.js
 *******************************************/

const movie = {
  title: "Avengers",
};

function showMovie(price, cinema) {
  console.log(`Film: ${this.title}, cena: ${price}, kino ${cinema}.`);
}

showMovie.call(movie, 35, "SUPERKINO2");

showMovie.apply(movie, [35, "SuperKINO2"]); // podajemy tablicę
