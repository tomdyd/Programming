/******************************************
 *  Author : Author
 *  Created On : Sun Oct 29 2023
 *  File : site.js
 *******************************************/
const formEl = document.querySelector(".canForm");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

  const data = Object.fromEntries(formData);
  console.log(data);

  fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    location.reload();
  });
});

function GetId() {
  let id = document.getElementById("valveId").value;
  return id;
}

function GetName() {
  let name = document.getElementById("valveName").value;
  return name;
}

function GetIndex() {
  let index = document.getElementById("valveIndex").value
  return index
}

function GetDestiny() {
  let destiny = document.getElementById("valveDestiny").value
  return destiny
}

//#region GetValveByIndex
const btnIndex = document.querySelector('.GetValveByIndex')

btnIndex.addEventListener("click", function GetValveByIndex() {
  index = GetIndex();
  fetch(`http://localhost:5000/api/Valves/${index}`, {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const markup = `<li>
                      Index: ${data._index}
                      <br> Name: ${data._fullName}
                      <br> Supplier: ${data._supplier}
                      <br> Acceptance date: ${data._acceptanceDate}
                      <br> Expiration date: ${data._expiriationDate}
                      <br> Amount: ${data._amount}
                      <br> Storage place: ${data._storagePlace}
                      <br> Tube length: ${data._tubeLength}
                      <br> Destiny: ${data._destiny}</li>`;

      document
        .querySelector(".valvesList")
        .insertAdjacentHTML("beforeend", markup);
    });
});
//#endregion

//#region GetValveByName
const btnName = document.querySelector('.GetValveByName')

btnName.addEventListener("click", function GetValveByName() {
  name = GetName();
  fetch(`http://localhost:5000/api/Valves/Name?name=${name}`, {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const markup = `<li>
                      Index: ${data._index}
                      <br> Name: ${data._fullName}
                      <br> Supplier: ${data._supplier}
                      <br> Acceptance date: ${data._acceptanceDate}
                      <br> Expiration date: ${data._expiriationDate}
                      <br> Amount: ${data._amount}
                      <br> Storage place: ${data._storagePlace}
                      <br> Tube length: ${data._tubeLength}
                      <br> Destiny: ${data._destiny}</li>`;

      document
        .querySelector(".valvesList")
        .insertAdjacentHTML("beforeend", markup);
    });
});
//#endregion

//#region GetValveByDestiny
const btnDestiny = document.querySelector('.GetValveByDestiny')

btnName.addEventListener("click", function GetValveByDestiny() {
  destiny = GetDestiny();
  fetch(`https://localhost:5000/api/Valves/Destiny?destiny=${destiny}`, {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const markup = `<li>
                      Index: ${data._index}
                      <br> Name: ${data._fullName}
                      <br> Supplier: ${data._supplier}
                      <br> Acceptance date: ${data._acceptanceDate}
                      <br> Expiration date: ${data._expiriationDate}
                      <br> Amount: ${data._amount}
                      <br> Storage place: ${data._storagePlace}
                      <br> Tube length: ${data._tubeLength}
                      <br> Destiny: ${data._destiny}</li>`;

      document
        .querySelector(".valvesList")
        .insertAdjacentHTML("beforeend", markup);
    });
});
//#endregion

//#region GetValveById

const element = document.querySelector(".GetValveById");

element.addEventListener("click", function GetValveById() {
  id = GetId();
  fetch(`http://localhost:5000/api/Valves/${id}`, {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const markup = `<li>
                  Index: ${data._index}
                  <br> Name: ${data._fullName}
                  <br> Supplier: ${data._supplier}
                  <br> Acceptance date: ${data._acceptanceDate}
                  <br> Expiration date: ${data._expiriationDate}
                  <br> Amount: ${data._amount}
                  <br> Storage place: ${data._storagePlace}
                  <br> Tube length: ${data._tubeLength}
                  <br> Destiny: ${data._destiny}</li>`;

      document
        .querySelector(".valvesList")
        .insertAdjacentHTML("beforeend", markup);
    });
});
//#endregion

const element1 = document.querySelector(".GetValves");

element1.addEventListener("click", function GetValves() {
  fetch(`http://localhost:5000/api/Valves/`, {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        const markup = `<li>
                      Index: ${element._index}
                      <br> Name: ${element._fullName}
                      <br> Supplier: ${element._supplier}
                      <br> Acceptance date: ${element._acceptanceDate}
                      <br> Expiration date: ${element._expiriationDate}
                      <br> Amount: ${element._amount}
                      <br> Storage place: ${element._storagePlace}
                      <br> Tube length: ${element._tubeLength}
                      <br> Destiny: ${element._destiny}</li>`;

        document
          .querySelector(".valvesList")
          .insertAdjacentHTML("beforeend", markup);
      });
    });
});

// const menuElement = document.getElementById('menu');
// const menuToggleElement = document.getElementById('toggle-menu');

// menuToggleElement.addEventListener('click', function () {
//     menuElement.classList.toggle('visible');
// });
