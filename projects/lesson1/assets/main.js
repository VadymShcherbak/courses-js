console.log('====Task-1=====');

function strToArray(str) {

	return str.split(' ');
}

console.log(strToArray('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-2=====');

function numSymbol(str) {

	return str.length;
}

console.log(numSymbol('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-3=====');

function insertSpaceWords(str, delimiter) {

	return str.split(' ').join(delimiter);
}

console.log(insertSpaceWords('Lorem ipsum dolor sit amet consectetur', '-'));

console.log('====Task-4=====');

function strToUpperCase(str) {
	let result = str.split(' ');

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();
	}

	return result.join(' ');
}

console.log(strToUpperCase('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-5=====');

function strCompare(str1, str2) {

	return str1.toUpperCase() === str2.toUpperCase();
}

console.log(strCompare('Lorem ipsum dolor sit amet consectetur', 'Lorem Ipsum dolor sit amet consectetur'));

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

console.log('====Task-7=====');

function strToCamelCase(str) {
	let result = str.split(' ');

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();	
	}

	return result.join('').charAt(0).toLowerCase() + result.join('').slice(1);
}

console.log(strToCamelCase('ipsum dolor sit amet'));

console.log('====Task-8=====');

function insertWords(str, delimiter) {

	return str.split(' ').join(delimiter);
}

console.log(insertWords('Lorem ipsum dolor sit amet consectetur', '_'));

console.log('====Task-9=====');

function repeatWord(word, num) {

	for (let i = 0; i < num; i++) {
		console.log(word);
	}
}

repeatWord('lorem', 5);

console.log('====Task-10=====');

function partOfStr(str, symbol) {

	return str.substr(0, str.indexOf(symbol));
}

console.log(partOfStr('Lorem ipsum dolor - sit amet consectetur', '-'));

console.log('====Task-11=====');

function shareSymbol(symbol, num) {

	var res = [];
	for(let i = 0 ; i < symbol.length; i += num) {
    res.push(symbol.substr(i, num));
	}
	return res;
}

console.log(shareSymbol('consectetur', 3));

console.log('====Task-12=====');

function returnLetter(str) {

	return str.split(' ').join('').length;
}

console.log(returnLetter('amet consectetur'));

console.log('====Task-13=====');

function sortLet(str) {

	return str.split('').sort().join('');
}

console.log(sortLet('consectetur'));

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

console.log('====Task-15=====');

function strToLowerCase(str) {

	let result = str.split(' ');

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].charAt(0).toLowerCase() + result[i].slice(1);
	}

	return result.join(' ');
}

console.log(strToLowerCase('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-16=====');

function typeValue(str) {
	
	return typeof(str);
}

console.log(typeValue('lorem ipsum dolor'));

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

