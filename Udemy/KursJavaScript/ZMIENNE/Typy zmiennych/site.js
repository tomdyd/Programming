/******************************************
 *  Author : Author   
 *  Created On : Thu Oct 26 2023
 *  File : site.js
 *******************************************/

const text = 'aBCd';

console.log(typeof text); //Check type of variable
console.log(text.length); //Check length of string, this is a property so we dont use "()"

const textToUpper = console.log(text.toUpperCase()); //Change string to capital letters, this is a method so we have to use "()"
const textToLower = text.toLocaleLowerCase(); //same as higher but change to lowercase of the alphabet
console.log(textToLower);

const date = new Date();
console.log(date.toLocaleDateString('en')); //change data format to en (mm/dd/yyyy)
console.log(date.toLocaleDateString('pl')); // change data format to pl (dd.mm.yyyy)

const username = "tomek";
const newUsername = username.charAt(0).toUpperCase() + console.log(username.slice(1));; //choose character from string
console.log(newUsername);
// console.log(username.slice(1)); method slice take rest of the string starting and including given index

const newText = "/"
console.log(newText.charCodeAt(0)); //return ANCII code of character of given index
 const icons = "☃★♲";
 console.log(icons.charCodeAt(1));
 console.log(icons.codePointAt(1)); //returns a non-negative integer that is the Unicode code point value of the character starting at the given index

const str = "Hello";
const str1 = "World!"

console.log(str.concat(' ', str1)); //concat the strings in order

const str2 = "Cats are the best!";
console.log(str2.endsWith('best!')); // return true whether a string ends with the characters of this string, or false if opposite
console.log(str2.endsWith('the'));

console.log(String.fromCharCode(189, 43, 190, 61)) //static method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804)); //static method returns a string created from the specified sequence of code points

const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'fox';
console.log(`The word ${word} ${sentence.includes(word)? 'is': 'is not'} in the sentence`)

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'; //indexOf return the index of first character of searching word/character in searching string
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first ${searchTerm} is ${indexOfFirst}`);
console.log(`The index of the second ${searchTerm} is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}`);
console.log(paragraph.indexOf(searchTerm, 41)); //index of start searching string of given index (include that index)

const lastIndexOfFirst = paragraph.lastIndexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`); // same as above but start searching string from the end 
console.log(`The index of the second "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm, lastIndexOfFirst - 1)}`);

const a = "réservé"
const b = "RESERVE"
console.log(a.localeCompare(b));
console.log(a.localeCompare(b, 'en', {sensitivity: 'base'})) // this method check the alphabetical order

const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);

const str3 = 'Breaded mushrooms';
const str4 = '200';
console.log(str3.padEnd(25, '.')) //add given character (number of added character are equal to given number) at the end of string 
console.log(str4.padEnd(4, ' '))
console.log(str3.padStart(25, '.'))
console.log(str4.padStart(4, ' ')) // same as above but at the start of string

const filePath = String.raw`C:\Development\profile\aboutme.html`; //it allows to use literals (eq. /; \; \n)
console.log(`The file was uploaded from: ${filePath}`);

const str5 = "word ";
console.log(str5.repeat(3)); //repeat string by given number

const splittedString = paragraph.split('');
console.log(splittedString[8]);

const str6 = 'Saturday night plans';
console.log(str6.startsWith('Sat')); // same as endWith but start form the beggining of string
console.log(str6.startsWith('Sat', 3));

const stringObject = new String('foo') // its an Object
console.log(stringObject);
console.log(stringObject.toString()); // convert Object to string and returns its value
console.log(stringObject.valueOf()); // returns value of string

const greeting = '   Hello World   ';
console.log(greeting);
console.log(greeting.trim()); // removes whitespace from both ends of this string and returns a new string, without modifying the original string
console.log(greeting.trimStart()); // removes whitespace from begging of this string and returns a new string, without modifying the original string
console.log(greeting.trimEnd()); // removes whitespace from end of this string and returns a new string, without modifying the original string

