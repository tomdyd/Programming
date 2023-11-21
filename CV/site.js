/******************************************
 *  Author : Author   
 *  Created On : Mon Nov 20 2023
 *  File : site.js
 *******************************************/
let breakpoint;
let body;
let section;
let head;

const main = () => {
    prepareDOMElemens()
    prepareDOMEvents()
}

const prepareDOMElemens = () => {
    breakpoint = document.querySelector(".info_header")
    body = document.querySelector("body")
    section = document.querySelector("section")
    head = document.querySelector(".head")  
}

const prepareDOMEvents = () => {
    breakpoint.addEventListener("click", changeStyle)
}

const changeStyle = () => {
    body.classList.toggle("body")
    section.classList.toggle("section-width")
    head.classList.toggle("head1")

}

document.addEventListener("DOMContentLoaded", main)