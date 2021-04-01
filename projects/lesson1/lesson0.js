// const fullAge = 28
// const birthYear = 1992
// const currentYear = 2021

// const isFullAge = (currentYear - birthYear) >= fullAge // 28 >= 27 true 
// console.log(isFullAge);

// const courseStatus = 'fail' // ready, fail ,panding

// if (courseStatus === 'ready') {
// 	console.log('курс уже готов');
// }
// else if (courseStatus === 'panding') {
// 	console.log('курс в процессе розробки');
// }
// else {
// 	console.log('курс не получился');
// }
// const isReady = true;

// if (isReady) {
// 	console.log('all done');
// }
// else {
// 	console.log('all not done');
// }

// function calculateAge(year) {
// 	return 2021 - year
// }

// // const myAge = calculateAge(1992)
// // console.log(calculateAge(1992));
// // console.log(calculateAge(2002));
// // console.log(calculateAge(1997));

// function logInfoAbout(name, year) {
// 	const age = calculateAge(year);

// 	if (age > 0) {
// 		console.log('Человек по имени' + name + 'сейчас имеет возраст' + age);
// 	} else {
// 		console.log('Вообщето ето уже будущее');
// 	}
// }

// logInfoAbout('Вадим', 1992 );
// logInfoAbout('Елена', 2022 );

// let cars = ['mazda', 'mercedes', 'ford']
// let cars = new Array('mazda', 'mercedes', 'ford')
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[3] = 'mazda'
// console.log(cars);

// ЦИКЛ
// let cars = ['mazda', 'mercedes', 'ford', 'porsche']

// for (let i = 0; i < cars.length; i++) {
// 	let car = cars[i]
// 	console.log(car);
// }

// Objects
// const person = {
// 	firstName: 'Vadym',
// 	lastName: 'Shcherbak',
// 	year: 1992,
// 	languages: ['Ukr', 'Ru', 'En'],
// 	hasWife: false,
// 	greet: function () {
// 		console.log('greet from person');
// 	}
// }

// console.log(person.firstName);
// person.greet()

// ======== NUMBER ========== //


// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
// console.log('Math.pow 53', Math.pow(2, 53,) - 1);
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE', Number.MAX_VALUE);
// console.log('MAX_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
// console.log('2 / 0', 2 / 0);
// console.log(Number.NaN); // not a number
// console.log(typeof NaN);
// const weird = 2 / undefined
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(42));

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.4 + 0.2);
// console.log(+(0.4 + 0.2).toFixed(1));
// console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// СТРОКИ

// const myname = 'Vadym'
// const age = 26 

// function getAge() {
// 	return age
// }

// // const output = 'Hello, my name is ' + myname + ' i have ' + age + ' years old'
// const output = `Hello, my name is ${myname} i have ${getAge()} years old`
// console.log(output);

// const myname = 'Vadym'
// console.log(myname.length);
// console.log(myname.toUpperCase());
// console.log(myname.toLocaleLowerCase());
// console.log(myname.charAt(2));
// console.log(myname.indexOf('!'));

// function logPerson(s, name, age) {
// 	if (age < 0) {
// 		age = 'Еще не родился'
// 	}
	// return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'Вадим'
// const personName2 = 'Максим'
// const personAge = 28
// const personAge2 = -10

// const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
// const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`

// console.log(output);
// console.log(output2);

// ФУНКИИ 
// Function Declaration
// function greet(name) {
// 	console.log('Привет - ', name);
// }

//Function Expression
// const greet2 = function greet2(name) {
// 	console.log('Привет 2 -', name);
// }

// greet('Лена')
// greet2('Лена')

//АНОНИМНЫЕ ФУНКЦИИ
// let counter = 0
// const interval = setInterval(function() {
// 	if (counter === 5) {
// 		clearInterval(interval)
// 	} else {
// 		console.log(++counter);
// 	}
// }, 1000)

//СТРЕЛОЧНЫЕ ФУНКЦИИ
// function greet(name) {
// 	console.log('Привет - ', name);
// }

// const arrow = (name) => {
// 	console.log('Привет - ', name);
// }

// const arrow2 = name => console.log('Привет - ', name);

// arrow2('Vadym')

// const pow2 = num => num ** 2

// // console.log(pow2(5));

// //ПАРАМЕТРИ ПО УМОЛЧАНИЮ
// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) {
// 	let result = 0
// 	for (let num of all) {
// 		result += num
// 	}
// 	return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res);

// DOM

// alert(1)
// window.prompt('What is your name')
// window.confirm('What is your name')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') // Всегда один елемент (первый)
console.log(heading2);

// const heading3 = heading2.nextElementSibling
const h2list = document.querySelectorAll('h2')
console.log(h2list);
// const heading3 = h2list[1]
const heading3 = h2list[h2list.length -1]
console.log(heading3);


// setTimeout(() => {
// 	heading.textContent = 'Change from js'
// 	heading.style.color = 'red'
// 	heading.style.textAlign = 'center'
// 	heading.style.backgroundColor = 'black'
// 	heading.style.padding = '2rem'
// }, 1500)

setTimeout(() => {
	addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
	event.preventDefault()
	console.log('Click on link', event.target.getAttribute('href'));
	const url = event.target.getAttribute('href')

	window.location = url
})

setTimeout(() => {
	addStylesTo(heading3.children[0], 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
	addStylesTo(heading2, 'И все получитса', 'yellow', '2rem')
}, 4500)



function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'
	node.style.padding = '2rem'
	node.style.display = 'block'
	node.style.width = '100%'
	// falsy: '', undefined, null, 0, false
	if (fontSize) {
		node.style.fontSize = fontSize
	}
}

heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.backgroundColor = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'yellow') {
		heading2.style.color = '#000'
		heading2.style.backgroundColor = '#fff'
	} else {
		heading2.style.color = 'yellow'
		heading2.style.backgroundColor = '#000'
	}
})