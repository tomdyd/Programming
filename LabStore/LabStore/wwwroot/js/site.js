/******************************************
 *  Author : Author
 *  Created On : Sun Oct 29 2023
 *  File : site.js
 *******************************************/

let inputs;
let getValves;
let valvesList;
const URL = "http://localhost:5000/api/Valves";
const formEl = document.querySelector(".valveForm");

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  inputs = document.querySelectorAll("input");
  getValves = document.querySelector(".getValves");
  valvesList = document.querySelector(".valvesList");
};

const prepareDOMEvents = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", focusInput);
    inputs[i].addEventListener("blur", blurInput);
  }
  getValves.addEventListener("click", getValvesList, { once: true });
  formEl.addEventListener("submit", addNewValve);
};

const focusInput = (e) => {
  e.target.style.backgroundColor = "rgb(72, 89, 138)";
};

const blurInput = (e) => {
  e.target.style.backgroundColor = "transparent";
};

const getValvesList = () => {
  fetch(URL, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        elementsArray = Object.values(element);

        // let liElement = document.createElement("li");
        // createToolArea(liElement);

        // let div = document.createElement("div");

        // for (let i = 0; i < elementsArray.length; i++) {
        //   let input = document.createElement("input");
        //   input.value = elementsArray[i];

        //   div.appendChild(input);
        //   liElement.appendChild(div);
        //   valvesList.appendChild(liElement);
        // }
      });
    });
};

const getValves1 = () => {
  fetch(URL, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

const add = (x, y) => {
  let result = x + y;
  return result;
};

let calc = add(5, 5);
console.log(calc);

const createToolArea = (newToDo) => {
  let btnEdit = document.createElement("button");

  btnEdit.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
  btnEdit.classList.add("editBtn");
  newToDo.appendChild(btnEdit);
};

const addNewValve = (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);

  const data = Object.fromEntries(formData);
  console.log(data);

  fetch("http://localhost:5000/api/Valves", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

document.addEventListener("DOMContentLoaded", main);

// function GetId() {
//   let id = document.getElementById("valveId").value;
//   return id;
// }

// function GetName() {
//   let name = document.getElementById("valveName").value;
//   return name;
// }

// function GetIndex(elementId) {
//   let index = document.getElementById(elementId).value;
//   return index;
// }

// function GetDestiny() {
//   let destiny = document.getElementById("valveDestiny").value;
//   return destiny;
// }

// const list = document.getElementById("valvesList");

// function GetByIndex(url, elementId) {
//   let liElements = list.getElementsByTagName("li");

//   while (liElements.length > 0) {
//     list.removeChild(liElements[0]);
//     console.log("obiekt usuniety");
//   }

//   index = GetIndex(elementId);
//   fetch(`http://localhost:5000/api/${url}/${index}`, {
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const markup = `<li>
//                       Index: ${data._index}
//                       <br> Name: ${data._fullName}
//                       <br> Supplier: ${data._supplier}
//                       <br> Acceptance date: ${data._acceptanceDate}
//                       <br> Expiration date: ${data._expiriationDate}
//                       <br> Amount: ${data._amount}
//                       <br> Storage place: ${data._storagePlace}
//                       <br> Tube length: ${data._tubeLength}
//                       <br> Destiny: ${data._destiny}</li>`;

//       document
//         .querySelector(".valvesList")
//         .insertAdjacentHTML("beforeend", markup);
//     });
// }

// function GetByName(url) {
//   let liElements = list.getElementsByTagName("li");

//   while (liElements.length > 0) {
//     list.removeChild(liElements[0]);
//     console.log("obiekt usuniety");
//   }

//   name = GetName();
//   fetch(`http://localhost:5000/api/${url}/Name?name=${name}`, {
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
// .then((data) => {
//   console.log(data);
//   const markup = `<li>
//                   Index: ${data._index}
//                   <br> Name: ${data._fullName}
//                   <br> Supplier: ${data._supplier}
//                   <br> Acceptance date: ${data._acceptanceDate}
//                   <br> Expiration date: ${data._expiriationDate}
//                   <br> Amount: ${data._amount}
//                   <br> Storage place: ${data._storagePlace}
//                   <br> Tube length: ${data._tubeLength}
//                   <br> Destiny: ${data._destiny}</li>`;

//   document
//     .querySelector(".valvesList")
//     .insertAdjacentHTML("beforeend", markup);
// });
// }

// function GetByDestiny(url) {
//   let liElements = list.getElementsByTagName("li");

//   while (liElements.length > 0) {
//     list.removeChild(liElements[0]);
//     console.log("obiekt usuniety");
//   }

//   destiny = GetDestiny();
//   fetch(`http://localhost:5000/api/${url}/Destiny?destiny=${destiny}`, {
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach((element) => {
//         const markup = `<li>
//                       Index: ${element._index}
//                       <br> Name: ${element._fullName}
//                       <br> Supplier: ${element._supplier}
//                       <br> Acceptance date: ${element._acceptanceDate}
//                       <br> Expiration date: ${element._expiriationDate}
//                       <br> Amount: ${element._amount}
//                       <br> Storage place: ${element._storagePlace}
//                       <br> Tube length: ${element._tubeLength}
//                       <br> Destiny: ${element._destiny}</li>`;

//         document
//           .querySelector(".valvesList")
//           .insertAdjacentHTML("beforeend", markup);
//       });
//     });
// }

// function GetAll(url) {
//   let liElements = list.getElementsByTagName("li");

//   while (liElements.length > 0) {
//     list.removeChild(liElements[0]);
//     console.log("obiekt usuniety");
//   }

//   fetch(`http://localhost:5000/api/${url}/`, {
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach((element) => {
//         const markup = `<li>
//                       Index: ${element._index}
//                       <br> Name: ${element._fullName}
//                       <br> Supplier: ${element._supplier}
//                       <br> Acceptance date: ${element._acceptanceDate}
//                       <br> Expiration date: ${element._expiriationDate}
//                       <br> Amount: ${element._amount}
//                       <br> Storage place: ${element._storagePlace}
//                       <br> Tube length: ${element._tubeLength}
//                       <br> Destiny: ${element._destiny}</li>`;

//         document
//           .querySelector(".valvesList")
//           .insertAdjacentHTML("beforeend", markup);
//       });
//     });
// }

// function Clear() {
//   let liElements = list.getElementsByTagName("li");
//   while (liElements.length > 0) {
//     list.removeChild(liElements[0]);
//     console.log("obiekt usuniety");
//   }
// }

// function Delete(url, elementId) {
//   let index = GetIndex(elementId);

//   GetByIndex(url, elementId);
//   fetch(`http://localhost:5000/api/${url}/${index}`, {
//     method: "DELETE",
//   });
// }

// function Update(url, elementId) {
//   let index = GetIndex(elementId);

//   index = GetIndex(elementId);
//   fetch(`http://localhost:5000/api/${url}/${index}`, {
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const markup = `
//                       Name:
//                       <br> <input type='text' name='_fullname' placeholder='put new name'>
//                       <br> Expiriation date:
//                       <br> <input type='date' name='_expiriationDate'>
//                       <br> Amount:
//                       <br> <input type='text' name='_amount' placeholder='put new amount'>
//                       <br> Storage place:
//                       <br> <input type='text' name='_storagePlace' placeholder='put new storage place'>
//                       <br> Destiny:
//                       <br> <input type='text' name='_destiny' placeholder='put new destiny'>
//                       <br> <button type='submit' id='submitUpdate'>Submit</button>
//                       `;

//       document
//         .querySelector(".valveForm1")
//         .insertAdjacentHTML("beforeend", markup);
//       const formEl = document.querySelector(".valveForm1");

//       formEl.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const formData = new FormData(formEl);

//         const updateData = Object.fromEntries(formData);
//         console.log(updateData);

//         updateData._index = data._index;
//         updateData._supplier = data._supplier;
//         updateData._acceptanceDate = data._acceptanceDate;
//         updateData._tubeLength = data._tubeLength;

//         fetch(`http://localhost:5000/api/Valves/${index}`, {
//           method: "PUT",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updateData),
//         }).then(() => {
//           location.reload();
//         });
//       });
//     });
// }
