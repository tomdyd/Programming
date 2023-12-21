const foodArray = [
	['pizza', 'kanapka'],
	['schabowy', 'makaron', 'kebab'],
];
let foodList = [];

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`${this.name} say hi.`);
	}
	showAge() {
		console.log(`${this.name} said he/she is ${this.age}`);
	}
}

const person3 = new Person2('Jadwiga', 50);

person3.showAge();

class Food {
	constructor(foodName) {
		this.foodName = foodName;
	}

	showFood() {
		console.log(this.foodName);
	}
}

foodArray.forEach((x) => {
	element = new Food(x);
	console.log(element);
	foodList.push(element);
});

console.log(foodList);

food.showFood();
