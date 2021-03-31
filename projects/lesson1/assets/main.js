//==========1
console.log('====Task-1=====');

function strToArray(str) {
	return str.split(' ');
}

console.log(strToArray('Lorem ipsum dolor sit amet consectetur'));


//==========2
console.log('====Task-2=====');

function numSymbol(str) {
	return str.length;
}

console.log(numSymbol('Lorem ipsum dolor sit amet consectetur'));


//==========3
console.log('====Task-3=====');

function insertSpaceWords(str, delimiter) {
	return str.split(' ').join(delimiter);
}

console.log(insertSpaceWords('Lorem ipsum dolor sit amet consectetur', '-'));


//==========4
console.log('====Task-4=====');

function strToUpperCase(str) {
	let result = str.split(' ');

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();
	}

	return result.join(' ');
}

console.log(strToUpperCase('Lorem ipsum dolor sit amet consectetur'));


//==========5
console.log('====Task-5=====');

function strCompare(str1, str2) {
	return str1.toUpperCase() === str2.toUpperCase();
}

console.log(strCompare('Lorem ipsum dolor sit amet consectetur', 'Lorem Ipsum dolor sit amet consectetur'));


//==========6
console.log('====Task-6=====');

function searchStrInStr(str1, str2) {
	return str1.toUpperCase().split(' ').indexOf(str2.toUpperCase()) != -1;
	// if (str2 != -1) {
	// 	result = true;
	// } else {
	// 	result = false;
	// }
}

console.log(searchStrInStr('Lorem ipsum dolor sit amet consectetur', 'Ipsum'));


//==========7
console.log('====Task-7=====');

function strToCamelCase(str) {
	let result = str.split(' ');

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();	
	}

	return result.join('').charAt(0).toLowerCase() + result.join('').slice(1);
}

console.log(strToCamelCase('ipsum dolor sit amet'));


//==========8
console.log('====Task-8=====');

function insertWords(str, delimiter) {
	return str.split(' ').join(delimiter);
}

console.log(insertWords('Lorem ipsum dolor sit amet consectetur', '_'));


//==========9
console.log('====Task-9=====');

function repeatWord(word, num) {
	for (let i = 0; i < num; i++) {
		console.log(word);
	}
}

repeatWord('lorem', 5);


//==========10
console.log('====Task-10=====');

function partOfStr(str, symbol) {
	return str.substr(0, str.indexOf(symbol));
}

console.log(partOfStr('Lorem ipsum dolor - sit amet consectetur', '-'));


//==========11
console.log('====Task-11=====');

function shareSymbol(symbol, num) {
	var res = [];

	for(let i = 0 ; i < symbol.length; i += num) {
    res.push(symbol.substr(i, num));
	}
	return res;
}

console.log(shareSymbol('consectetur', 3));


//==========12
console.log('====Task-12=====');

function returnLetter(str) {
	return str.split(' ').join('').length;
}

console.log(returnLetter('amet consectetur'));


//==========13
console.log('====Task-13=====');

function sortLet(str) {
	return str.split('').sort().join('');
}

console.log(sortLet('consectetur'));


//==========14
console.log('====Task-14====='); 

function delRepeatWord(str) {

	let array = str.split(',');
	let result = [];

	for (let i = 0; i < array.length; i++) {
		if (result.indexOf(array[i]) === -1) {
			result.push(array[i]);
		}
	}

	return result = result.join('');
}

console.log(delRepeatWord('вишня, груша, слива, груша'));


//==========15
console.log('====Task-15=====');

function strToLowerCase(str) {
	let result = str.split(' ');

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].charAt(0).toLowerCase() + result[i].slice(1);
	}

	return result.join(' ');
}

console.log(strToLowerCase('Lorem ipsum dolor sit amet consectetur'));


//==========16
console.log('====Task-16=====');

function typeValue(str) {
	return typeof(str);
}

console.log(typeValue('lorem ipsum dolor'));


//==========17
console.log('====Task-17=====');

function longStr(array) {
	let result = '';

	for (let i = 0; i < array.length; i++) {
		if (array[i].length > result.length) {
			result = array[i];
		}
	}

	return result;
}

console.log(longStr(['lorem', 'loremloremloremlorem', 'ipsum']));


//==========18
console.log('====Task-18=====');

function longWord(str) {
	let array = str.split(' ');
	let result = '';

	for (let i = 0; i < array.length; i++) {
		if (array[i].length > result.length) {
			result = array[i];
		}
	}

	return result;
}

console.log(longWord('lorem loremipsumdolor ipsum'));


//==========19
console.log('====Task-19====='); 

function wordSpace(str) {
	let array = str.split(' ');
	let result = 0;

	for (let i = 0; i <= array.length; i++) {
		result = i;
	}

	return result;
}

console.log(wordSpace('lorem ipsum dolor sit amet'));


//==========20
console.log('====Task-20====='); 

function changeDate(date) {
	let array = date.split('-');
	let result = [];

	result.push(array[2]);
	result.push(array[1]);
	result.push(array[0]);

	return result.join('-');
}

console.log(changeDate('31-12-2030'));


//==========21
console.log('====Task-21====='); 

function twoArrayInOne(str1, str2) {
	let array1 = str1.split(' ');
	let array2 = str2.split(' ');
	let result = array1.concat(array2);

	return result
}

console.log(twoArrayInOne('lorem ipsum', 'dolor sit'));


//==========22
console.log('====Task-22====='); 

function addLastElement(str) {
	let array = str.split(' ');
	array.push('amet')

	return array
}

console.log(addLastElement('lorem ipsum dolor sit'));


//==========23
console.log('====Task-23====='); 

function reverseArray(array) {
	return array.split(' ').reverse();
}

console.log(reverseArray('lorem ipsum dolor sit'));


//==========24
console.log('====Task-24====='); 

function deleteElement(array) {
	let result = array.split(' ');
	let index = result.indexOf('dolor');

	if (index > -1) {
		result.splice(index, 1);
	}

	return result
}

console.log(deleteElement('lorem ipsum dolor sit'));


//==========25
console.log('====Task-25====='); 

// function calculateAge(year) {
// 	return 2021 - year;
// }

// console.log(calculateAge(1992));

function myBirthDay() {
	let date1 = new Date('1992.08.14');
	let date2 = new Date();
	let result = date2.getFullYear() - date1.getFullYear();

	if (date2.getMonth() < date1.getMonth()) {
		result --;
	}

	return result;
}

console.log(myBirthDay());
