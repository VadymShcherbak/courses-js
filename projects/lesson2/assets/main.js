//========task-1
let $alertBtn = document.getElementsByClassName('alert-btn')[0];

$alertBtn.addEventListener('click', function() {
	alert('Some text');
});

//========task-2
let $inputBtn = document.getElementsByClassName('input-btn')[0];

$inputBtn.addEventListener('click', function() {
	let $inpAlert = document.getElementsByClassName('inp-alert')[0].value;

	if (!$inpAlert) {
		alert('Введите текст');
	} else {
		alert($inpAlert);
	}
});

//========task-3
let $numBtn = document.getElementsByClassName('num-btn')[0];

$numBtn.addEventListener('click', function() {
	let $inpSquare = document.getElementsByClassName('inp-square')[0].value;

	if (isNaN($inpSquare)) {
		alert('this is not number');
	} else {
		alert($inpSquare ** 2);
	}
});

//===========task-4
let $changeBtn = document.getElementsByClassName('change-btn')[0];

$changeBtn.addEventListener('click', function() {
	let $inpChange = document.getElementsByClassName('inp-change')[0].value;
	let $inpChange2 = document.getElementsByClassName('inp-change2')[0].value;
	document.getElementsByClassName('inp-change')[0].value = $inpChange2;
	document.getElementsByClassName('inp-change2')[0].value = $inpChange;
});

//===========task-5
let $changeText = document.getElementsByClassName('change-text')[0];

$changeText.addEventListener('click', function() {
	$changeText.textContent = 'Active';
});

//===========task-6
let $changeColor = document.getElementsByClassName('change-color')[0];

$changeColor.addEventListener('click', function() {
	document.getElementsByClassName('text-color')[0].style.color = 'red';
});

//============task-7
let $blocketInput = document.getElementsByClassName('block-input')[0];
let $unblockInput = document.getElementsByClassName('unblock-input')[0];

$blocketInput.addEventListener('click', function() {
	document.getElementsByClassName('blocket-inp')[0].disabled = true;
});



$unblockInput.addEventListener('click', function() {
	document.getElementsByClassName('blocket-inp')[0].disabled = false;
})