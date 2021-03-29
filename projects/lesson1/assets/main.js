console.log('====Task-1=====');

function strToArray(str) {
	let result = str.split(' ');
	return result; 
}

console.log(strToArray('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-2=====');

function numSymbol(str) {
	let result = str.length;
	return result;
}

console.log(numSymbol('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-3=====');

function insertSpaceWords(str, delimiter) {
	let result = str.split(' ').join(delimiter);
	return result;
}

console.log(insertSpaceWords('Lorem ipsum dolor sit amet consectetur', '-'));

console.log('====Task-4=====');

function strToUpperCase(str) {
	let result = str.toUpperCase();
	return result;
}

console.log(strToUpperCase('Lorem ipsum dolor sit amet consectetur'));

console.log('====Task-5=====');

function strCompare(str1, str2) {
	let result = (str1.toUpperCase() === str2.toUpperCase())
	return result;
}

console.log(strCompare('Lorem ipsum dolor sit amet consectetur', 'Lorem Ipsum dolor sit amet consectetur'));

console.log('====Task-6=====');

function searchStrInStr(str1, str2) {
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();
	let result = str1.split(' ').indexOf(str2);
	// if (str2 != -1) {
	// 	result = true;
	// } else {
	// 	result = false;
	// }
	result = str2 != -1 ? true : false;
	return result;
}

console.log(searchStrInStr('Lorem ipsum dolor sit amet consectetur', 'Ipsum'));

console.log('====Task-7=====');

function strToCamelCase(str) {
	return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
		return m.toUpperCase().replace(/\s+/g, "");
	});
}

console.log(strToCamelCase('ipsum dolor sit amet consectetur'));

console.log('====Task-8=====');

function insertSpaceWords(str, delimiter) {
	let result = str.split(' ').join(delimiter);
	return result;
}

console.log(insertSpaceWords('Lorem ipsum dolor sit amet consectetur', '_'));

console.log('====Task-9=====');

function repeatWord(word, num) {
	for (let i = 0; i < num; i++) {
		console.log(word);
	}
}

console.log(repeatWord('lorem', 5));

console.log('====Task-10=====');

function partOfStr(str, symbol) {
	let result = str.substr(0, str.indexOf(symbol));
	return result;
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
	let result = str.split(' ').join('').length;
	return result;
}

console.log(returnLetter('amet consectetur'));

console.log('====Task-13=====');

function sortLet(str) {
	let result = str.split(' ').sort().join('');
	return result;
}

console.log(sortLet('consectetur'));
