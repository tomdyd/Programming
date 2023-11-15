/******************************************
 *  Author : Author   
 *  Created On : Thu Oct 26 2023
 *  File : site.js
 *******************************************/

const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(5));

const word = 'czy';
console.log(text4.includes(word));

console.log(text5.charAt(2));

const serachValue = 'pies'
console.log(text6.replaceAll(serachValue, 'kot'));

console.log(text7.split(','));
const newText7 = text7.split(',');
console.log(newText7[1]);

let toStringNewText7 = '';
for (let i = 0; i < newText7.length; i++)
{
    toStringNewText7 += newText7[i]
}

console.log(toStringNewText7)