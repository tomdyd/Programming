/******************************************
 *  Author : Author
 *  Created On : Wed Nov 15 2023
 *  File : site.js
 *******************************************/

let todoInput;
let addBtn;
let ulList;
let errorInfo;
let newTodo;

let popup;
let popupInfo;
let popupInput;
let popupAddBtn;
let popupCancelBtn;
let todoEdit;

const main = () => {
  prepareDOCElements();
  prepareDOCEvents();
};

const prepareDOCElements = () => {
  todoInput = document.querySelector(".todo-input");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector("ul");
  errorInfo = document.querySelector(".error-info");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCancelBtn = document.querySelector(".cancel");
};

const prepareDOCEvents = () => {
  addBtn.addEventListener("click", addNewTodo);
  ulList.addEventListener("click", checkClick);
  popupCancelBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeTodoText);
  todoInput.addEventListener("keyup", enterKeyCheck);
};

const addNewTodo = () => {
  if (todoInput.value !== "") {
    newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    createToolArea();
    ulList.appendChild(newTodo);

    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
  }
};

const createToolArea = () => {
  const toolArea = document.createElement("div");
  toolArea.classList.add("tools");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = "<i class='fas fa-check'></i>";

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "<i class='fas fa-times'></i>";

  toolArea.append(completeBtn, editBtn, deleteBtn);
  newTodo.appendChild(toolArea);
};

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    completeTodo(e);
  } else if (e.target.matches(".edit")) {
    editToDo(e);
  } else if (e.target.matches(".delete")) {
    deleteTodo(e);
  }
};

const completeTodo = (e) => {
  e.target.closest("li").classList.toggle("completed");
  e.target.classList.toggle("completed");
};

const editToDo = (e) => {
  popup.style.display = "flex";
  todoEdit = e.target.closest("li");
  popupInput.value = todoEdit.firstChild.textContent;
};

const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoEdit.firstChild.textContent = popupInput.value;
    closePopup();
  } else {
    popupInfo.textContent = "Musisz podać jakąś tresć!";
  }
};

const deleteTodo = (e) => {
  e.target.closest("li").remove();

  const allTodos = document.querySelectorAll("li");

  if (allTodos.length === 0) {
    errorInfo.textContent = "Brak zadań na liście";
  }
};

const enterKeyCheck = (e) => {
  if (e.key === "Enter") {
    addNewTodo();
  }
};

document.addEventListener("DOMContentLoaded", main);
