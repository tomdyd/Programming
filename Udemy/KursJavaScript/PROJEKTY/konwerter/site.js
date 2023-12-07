/******************************************
 *  Author : Author
 *  Created On : Sun Nov 12 2023
 *  File : site.js
 *******************************************/

const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const ConvertTemperature = () => {
  if (one.textContent === "°C") {
    celToFahr();
  } else {
    fahrToCel();
  }
};

const celToFahr = () => {
  let Fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°C to ${Fahrenheit.toFixed(1)}°F`;
  converter.value = "";
};

const fahrToCel = () => {
  let Celsius = (converter.value - 32) * (5 / 9);
  result.textContent = `${converter.value}°F to ${Celsius.toFixed(1)}°C`;
  converter.value = "";
};

const Reset = () => {
  converter.value = "";
  result.textContent = "";
};

const Swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    result.textContent = "";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
    result.textContent = "";
  }
};

convBtn.addEventListener("click", ConvertTemperature);
resetBtn.addEventListener("click", Reset);
changeBtn.addEventListener("click", Swap);
