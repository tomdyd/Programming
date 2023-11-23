/******************************************
 *  Author : Author
 *  Created On : Mon Nov 20 2023
 *  File : site.js
 *******************************************/
let breakpoint;
let body;
let section;
let head;
let downloadBtn;
let element;

const main = () => {
  prepareDOMElemens();
  prepareDOMEvents();
};

const prepareDOMElemens = () => {
  breakpoint = document.querySelector(".info_header");
  body = document.querySelector("body");
  section = document.querySelector(".section");
  head = document.querySelector(".head");
  downloadBtn = document.querySelector(".downloadBtn");
  element = section;
};

const prepareDOMEvents = () => {
  downloadBtn.addEventListener("click", saveAsPDF);
};

const changeStyle = () => {
  // body.classList.toggle("body");
  // section.classList.toggle("section-width");
  // head.classList.toggle("head1");
  console.log("jestem wywołana");
  section.classList.toggle("section-width");
};

async function saveAsPDF() {
  changeStyle();
  let opt = {
    margin: 0,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 5 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  await html2pdf().set(opt).from(section).save();
  changeStyle();
}

document.addEventListener("DOMContentLoaded", main);
