/******************************************
 *  Author : Author
 *  Created On : Sun Oct 29 2023
 *  File : site.js
 *******************************************/

let inputs;
let getValves;
let dataList;
const URL = 'http://localhost:5000/api/Valves';
let formEl;
let editBtn;
let deleteBtn;
let popup;
let closeBtn;
let editValves;
let dataTable;
let searchInput;
let applyBtn;
let cancelBtn;
let index;
let deletePopup;
let closeWindow;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	inputs = document.querySelectorAll('input');
	getValves = document.querySelector('.getValves');
	dataList = document.querySelector('.valvesList');
	formEl = document.querySelector('.valveForm');
	editBtn = document.querySelectorAll('.editBtn');
	deleteBtn = document.querySelectorAll('.deleteBtn');
	popup = document.querySelector('.popup');
	closeBtn = document.querySelector('.x-mark');
	searchInput = document.querySelector('.search-input');
	editValves = document.querySelector('.editValves');
	applyBtn = document.querySelector('.apply-btn');
	cancelBtn = document.querySelector('.cancel-btn');
	closeWindow = document.querySelector('.close-delete-window');
	deletePopup = document.querySelector('.delete-popup');
	deleteElement = document.querySelector('.delete-btn');

	// dataTable = document.querySelector('.dataTable');
};

const prepareDOMEvents = () => {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('focus', focusInput);
		inputs[i].addEventListener('blur', blurInput);
	}
	getValves.addEventListener('click', () => addHeaders(dataList), {
		once: true,
	});
	getValves.addEventListener(
		'click',
		() => {
			getValvesList(dataList);
		},
		{ once: true }
	);
	formEl.addEventListener('submit', addNewValve);
	dataList.addEventListener('click', checkClick);
	popup.addEventListener('click', checkClick);
	searchInput.addEventListener('input', dynamicSearch);
	applyBtn.addEventListener('click', () => updateData(index));
	cancelBtn.addEventListener('click', closePopup);
	closeWindow.addEventListener('click', closeDeleteWindow);
	deleteElement.addEventListener('click', deleteData);
};

const focusInput = (e) => {
	e.target.style.backgroundColor = 'rgb(72, 89, 138)';
};

const blurInput = (e) => {
	e.target.style.backgroundColor = 'transparent';
};

const getValvesList = (list) => {
	fetch(URL, {
		method: 'GET',
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
		(index = 'Index'),
		(fullName = 'Full name'),
		(supplier = 'Supplier'),
		(acceptanceDate = 'Acceptance Date'),
		(expiriationDate = 'Expiriation Date'),
		(amount = 'Amount'),
		(storagePlace = 'Storage Place'),
		(tubeLength = 'Tube Length'),
		(destiny = 'Destiny'),
	];

	let liElement = document.createElement('li');
	let headersList = document.createElement('ul');
	let container = document.createElement('div');

	headersList.classList.add('headersList');
	container.classList.add('container');

	headers.forEach((item) => {
		let header = document.createElement('li');
		header.textContent = item;

		headersList.appendChild(header);
	});

	container.appendChild(headersList);
	liElement.appendChild(container);
	list.appendChild(liElement);
};

const addToList = (dataValuesArray, list) => {
	let liElement = document.createElement('li');
	let dataList = document.createElement('ul');
	let container = document.createElement('div');

	dataList.classList.add('dataList');
	container.classList.add('container');

	for (let i = 0; i < dataValuesArray.length; i++) {
		let liParameter = document.createElement('li');

		liParameter.textContent = dataValuesArray[i];

		dataList.appendChild(liParameter);
	}

	container.appendChild(dataList);
	liElement.appendChild(container);
	list.appendChild(liElement);

	createToolArea(container);
};

const createToolArea = (newElement) => {
	let editBtn = document.createElement('button');
	let deleteBtn = document.createElement('button');
	let toolsArea = document.createElement('div');

	editBtn.classList.add('editBtn');
	deleteBtn.classList.add('deleteBtn');

	editBtn.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
	deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";

	toolsArea.classList.add('tools');

	toolsArea.append(editBtn, deleteBtn);
	newElement.append(toolsArea);
};

const addNewValve = (e) => {
	e.preventDefault();

	const formData = new FormData(formEl);

	const data = Object.fromEntries(formData);

	fetch('http://localhost:5000/api/Valves', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	clearForm();
};

const clearForm = () => {
	inputs = formEl.querySelectorAll('input');
	inputs.forEach((element) => {
		element.value = '';
	});
};

const updateData = (index) => {
	editValves = document.querySelector('.editValves');
	editInput = editValves.querySelector('input');

	editInput.removeAttribute('disabled', '');

	const updateForm = new FormData(editValves);
	const data = Object.fromEntries(updateForm);

	fetch(URL + `/${index}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
};

const deleteData = () => {
	fetch(URL + `/${index}`, {
		method: 'DELETE',
	});
	closeDeleteWindow();

	const search = index;
	const listItems = document.querySelectorAll('.dataList li');

	listItems.forEach((item) => {
		if (item.textContent === search) {
			item.closest('div').remove();
		}
	});
};

const checkClick = (e) => {
	if (e.target.matches('.editBtn')) {
		edit(e);
	} else if (e.target.matches('.closePopup')) {
		closePopup(e);
	} else if (e.target.matches('.deleteBtn')) {
		openDeleteWindow();
	}
};

const openDeleteWindow = () => {
	deletePopup.style.display = 'block';
};

const closeDeleteWindow = () => {
	deletePopup.style.display = 'none';
};

const edit = (e) => {
	popup.setAttribute('style', 'display: block');
	editValve(e);
};

const editValve = (e) => {
	liElements = e.target
		.closest('li')
		.firstChild.firstChild.querySelectorAll('li');

	const inputAttributes = [
		'_index',
		'_fullName',
		'_supplier',
		'_acceptanceDate',
		'_expiriationDate',
		'_amount',
		'_storagePlace',
		'_tubeLength',
		'_destiny',
	];

	for (let i = 0; i < liElements.length; i++) {
		let editInput = document.createElement('input');
		editInput.setAttribute('name', inputAttributes[i]);

		if (inputAttributes[i] === '_index') {
			editInput.setAttribute('disabled', '');
			editInput.setAttribute('style', 'backgroundcolor: #333');
			editInput.classList.add('nunu');
		} else if (
			inputAttributes[i] === '_acceptanceDate' ||
			inputAttributes[i] === '_expiriationDate'
		) {
			editInput.setAttribute('type', 'date');
		} else if (
			inputAttributes[i] === '_amount' ||
			inputAttributes[i] === '_tubeLength'
		) {
			editInput.setAttribute('type', 'number');
		} else {
			editInput.setAttribute('type', 'text');
		}

		editInput.value = liElements[i].textContent;
		editValves.appendChild(editInput);
	}

	index = editValves.querySelector('input').value;
};

const closePopup = () => {
	popup.setAttribute('style', 'display: none');
	oldData = editValves.querySelectorAll('input'); // czyszczenie popupa
	oldData.forEach((element) => element.remove());
};

const dynamicSearch = (e) => {
	const searchTerm = e.target.value.toUpperCase();
	const listItems = document.querySelectorAll('.dataList li');

	let searchInputArray = [];

	listItems.forEach(function (item) {
		const itemText = item.textContent.toUpperCase();

		if (itemText.includes(searchTerm)) {
			searchInputArray.push(item.closest('.container')); //dodajemy element który ma się wyświetlać do tablicy którą wyświetlimy po zakończeniu przeszukiwania
		} else {
			item.closest('div').style.display = 'none';
		}
	});
	searchInputArray.forEach((item) => (item.style.display = 'flex'));
};

document.addEventListener('DOMContentLoaded', main);
