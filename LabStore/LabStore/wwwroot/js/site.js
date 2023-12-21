/******************************************
 *  Author : Author
 *  Created On : Sun Oct 29 2023
 *  File : site.js
 *******************************************/

let inputs;
let getValves;
let dataList;
const URL = "http://localhost:5000/api/Valves";
let formEl;
let editBtn;
let popup;
let closeBtn;
let editValves;
let dataTable;
let searchInput;
let applyBtn;
let cancelBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  inputs = document.querySelectorAll("input");
  getValves = document.querySelector(".getValves");
  dataList = document.querySelector(".valvesList");
  formEl = document.querySelector(".valveForm");
  editBtn = document.querySelectorAll(".editBtn");
  popup = document.querySelector(".popup");
  closeBtn = document.querySelector(".x-mark");
  searchInput = document.querySelector(".search-input");
  editValves = document.querySelector(".editValves");

  // dataTable = document.querySelector('.dataTable');
};

const prepareDOMEvents = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", focusInput);
    inputs[i].addEventListener("blur", blurInput);
  }
  getValves.addEventListener("click", () => addHeaders(dataList), {
    once: true,
  });
  getValves.addEventListener(
    "click",
    () => {
      getValvesList(dataList);
    },
    { once: true }
  );
  formEl.addEventListener("submit", addNewValve);
  dataList.addEventListener("click", checkClick);
  popup.addEventListener("click", checkClick);
  searchInput.addEventListener("input", dynamicSearch);
};

const focusInput = (e) => {
  e.target.style.backgroundColor = "rgb(72, 89, 138)";
};

const blurInput = (e) => {
  e.target.style.backgroundColor = "transparent";
};

const getValvesList = (list) => {
  fetch(URL, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((x) => {
        array = [
          (index = x._index),
          (name = x._fullName),
          (supplier = x._supplier),
          (acceptanceDate = x._acceptanceDate),
          (expiriationDate = x._expiriationDate),
          (amount = x._amount),
          (storagePlace = x._storagePlace),
          (tubeLength = x._tubeLength),
          (destiny = x._destiny),
        ];
        addToList(array, list);
      });
    });
};

const addHeaders = (list) => {
  let headers = [
    (index = "Index"),
    (fullName = "Full name"),
    (supplier = "Supplier"),
    (acceptanceDate = "Acceptance Date"),
    (expiriationDate = "Expiriation Date"),
    (amount = "Amount"),
    (storagePlace = "Storage Place"),
    (tubeLength = "Tube Length"),
    (destiny = "Destiny"),
  ];

  let liElement = document.createElement("li");
  let headersList = document.createElement("ul");
  let container = document.createElement("div");

  headersList.classList.add("headersList");
  container.classList.add("container");

  headers.forEach((item) => {
    let header = document.createElement("li");
    header.textContent = item;

    headersList.appendChild(header);
  });

  container.appendChild(headersList);
  liElement.appendChild(container);
  list.appendChild(liElement);
};

const addToList = (dataValuesArray, list) => {
  let liElement = document.createElement("li");
  let dataList = document.createElement("ul");
  let container = document.createElement("div");

  dataList.classList.add("dataList");
  container.classList.add("container");

  for (let i = 0; i < dataValuesArray.length; i++) {
    let liParameter = document.createElement("li");

    liParameter.textContent = dataValuesArray[i];

    dataList.appendChild(liParameter);
  }

  container.appendChild(dataList);
  liElement.appendChild(container);
  list.appendChild(liElement);

  createToolArea(container);
};

const createToolArea = (newElement) => {
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let toolsArea = document.createElement("div");

  editBtn.classList.add("editBtn");
  deleteBtn.classList.add("deleteBtn");

  editBtn.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
  deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";

  toolsArea.classList.add("tools");

  toolsArea.append(editBtn, deleteBtn);
  newElement.append(toolsArea);
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

const checkClick = (e) => {
  if (e.target.matches(".editBtn")) {
    edit(e);
  } else if (e.target.matches(".closePopup")) {
    closePopup(e);
  }
};

const edit = (e) => {
  popup.setAttribute("style", "display: block");
  editValve(e);
};

const editValve = (e) => {
  liElements = e.target
    .closest("li")
    .firstChild.firstChild.querySelectorAll("li");
  console.log(editValves);

  liElements.forEach((element) => {
    let editInput = document.createElement("input");
    editInput.value = element.textContent;
    editValves.appendChild(editInput);
  });

  //   applyBtn = document.createElement("button");
  //   closeBtn = document.createElement("button");

  //   applyBtn.classList.add("apply-btn");
  //   cancelBtn.classList.add("cancel-btn");
};

const closePopup = () => {
  popup.setAttribute("style", "display: none");
  oldData = editValves.querySelectorAll("input"); // czyszczenie popupa
  oldData.forEach((element) => element.remove());
};

const dynamicSearch = (e) => {
  const searchTerm = e.target.value.toUpperCase();
  const listItems = document.querySelectorAll(".dataList li");
  //   console.log(listItems);

  let searchInputArray = [];

  listItems.forEach(function (item) {
    const itemText = item.textContent.toUpperCase();

    if (itemText.includes(searchTerm)) {
      searchInputArray.push(item.closest(".container")); //dodajemy element który ma się wyświetlać do tablicy którą wyświetlimy po zakończeniu przeszukiwania
    } else {
      item.closest("div").style.display = "none";
    }
  });
  searchInputArray.forEach((item) => (item.style.display = "flex"));
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
