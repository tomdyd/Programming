/******************************************
 *  Author : Author
 *  Created On : Sun Oct 29 2023
 *  File : site.js
 *******************************************/

const numbers = [0, 23, 48, 175, 2, 34, 11];

numbers.forEach((num) => console.log(num * 5));

function isEven(x) {
  return x % 2 === 0;
}
console.log(numbers.filter(isEven));

console.log(numbers.indexOf(48)); // zwraca indeks (w tymp przypadku 2) elementu jesli znajduje sie on w tablicy
console.log(numbers.indexOf(-50)); // zwraca -1 jesli elementu nie ma w tablicy

console.log(numbers.copyWithin(6, 3, 4)); // metoda kopiuje wybrane elmenty tablicy i umieszcza je w tej samej tablicy nie zmieniajac jej dlugosci.
//Pierwszy argument to index od ktorego elementu maja byc wstawiane, drugi argument to pierwszy element ktory ma zostac skopiowany,
//trzeci argument index elementu dna ktorym konczymy kopiowanie elementow (bez niego)

const iterator = numbers.entries(); // podobne do enum, klucz-wartosc w tablicy

for (let i = 0; i < numbers.length; i++) {
  console.log(iterator.next().value);
}

console.log(numbers.every((num) => num < 40)); // zwraca true jesli dla wszystkich elementow tablicy funkcja jest prawdziwa, inaczej flase

const numbers1 = [...numbers]; // kopiuje tablice a nie referencje, referencje kopiuje sie po prostu numbers1 = numbers
console.log(`To jest tablica numbers: ${numbers}`);
console.log(`To jest tablica numbers1: ${numbers1}`);

numbers1.fill(0, 0, 6); // metoda destrukcyjna, x1 = element ktory chcemy dodac, x2 = indeks od ktorego mamy zaczac (wlacznie), x3 = indeks na ktorym mamy skonczyc (bez niego)
console.log(`To jest tablica numbers: ${numbers}`);
console.log(`To jest tablica numbers1: ${numbers1}`);

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
// expected output: Arra[3, Array [0, 1, 2, Array y [4, 5]]]
console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

const text = "tekst";
console.log(Array.from(text)); // tworzy tablice z podanego inputu

const elements = ["Fire", "Air", "Water"];
console.log(elements.join(", "));
// Expected output: "Fire,Air,Water", łączy elementy tablicy w jeden element, jako argument mozna podac separator miedzy elementami

const array1 = ["a", "b", "c"];
const iterator1 = array1.keys(); //The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

for (const key of iterator1) {
  console.log(key);
}

console.log("----------");
let initialValue = 0;
const numbersArray = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(
  numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  )
);

console.log(numbers.some((x) => x % 2 === 0)); // jeśli chociaż jeden z elementów spełnia warunek zapisany w nawiasach zwraca true

console.log(numbers.with(2, 100)); //metoda niedestrukcyjna, x1 = indeks elementu który chcemy zamienić, x2 = nowy element
console.log(numbers);
