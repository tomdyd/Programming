/******************************************
 *  Author : Author
 *  Created On : Mon Nov 20 2023
 *  File : site.js
 *******************************************/
let breakpoint;
let body;
let section;
let head;
let download;
let element;
let downloadBtn;

const main = () => {
  prepareDOMElemens();
  prepareDOMEvents();
};

const prepareDOMElemens = () => {
  breakpoint = document.querySelector(".info_header");
  body = document.querySelector("body");
  section = document.querySelector("section");
  head = document.querySelector(".head");
  download = document.querySelector(".download");
  element = section;
};

const prepareDOMEvents = () => {
  breakpoint.addEventListener("click", changeStyle);
  download.addEventListener("click", saveAsPDF);
};

const changeStyle = () => {
  body.classList.toggle("body");
  section.classList.toggle("section-width");
  head.classList.toggle("head1");
};

const saveAsPDF = () => {
  let opt = {
    margin: 0,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 5 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(section).save();
};

document.addEventListener("DOMContentLoaded", main);
