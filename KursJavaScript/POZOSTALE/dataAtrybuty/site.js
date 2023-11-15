/******************************************
 *  Author : Author
 *  Created On : Wed Nov 08 2023
 *  File : site.js
 *******************************************/

const divTag = document.querySelector(`[data-number="23"]`);
console.log(divTag.dataset);
console.log(divTag.dataset.number);
console.log(divTag.dataset.moreInfo); // stosujemy camel casa

divTag.setAttribute("data-test", "123");
console.log(divTag.dataset);
console.log(divTag.dataset.test);
