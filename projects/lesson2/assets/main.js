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

//==========task-8
let $hoverAlert = document.getElementsByClassName('hover-alert')[0];

$hoverAlert.addEventListener('mouseenter', function() {
	alert('Hello Erni');
});

//===========task-9 
let $dblClick = document.getElementsByClassName('dbl-click')[0];

$dblClick.addEventListener('dblclick', function() {
	alert('Hello Friday!!!');
});

//===========task-10
let $changeImgBtn = document.getElementsByClassName('change-img-btn')[0];

$changeImgBtn.addEventListener('click', function() {
	let $imgClick = document.getElementsByClassName('click-img')[0];

	if ($imgClick.classList.contains('img-next')) {
		$imgClick.classList.remove('img-next');
		$imgClick.src = 'assets/img/task-10/l-inst-2.jpg';
	} else {
		$imgClick.classList.add('img-next')
		$imgClick.src = 'assets/img/task-10/l-inst-3.jpg';
	}
});

//===========task-11
let $hoverImgBtn = document.getElementsByClassName('over-cursor-img')[0];

$hoverImgBtn.addEventListener('mouseover', function() {
	let $hoverChangeImg = document.getElementsByClassName('hover-change-img')[0];
	$hoverChangeImg.src = 'assets/img/task-10/l-inst-3.jpg';
});

$hoverImgBtn.addEventListener('mouseout', function() {
	let $hoverChangeImg = document.getElementsByClassName('hover-change-img')[0];
	$hoverChangeImg.src = 'assets/img/task-10/l-inst-2.jpg';
});

//==========task-12
let $showBtn = document.getElementsByClassName('show-btn')[0];
let $hideBtn = document.getElementsByClassName('hide-btn')[0];
let $inputShowing = document.getElementsByClassName('inp-showing')[0];

$hideBtn.addEventListener('click', function() {
	$inputShowing.classList.add('hide-input');
});

$showBtn.addEventListener('click', function() {
	$inputShowing.classList.contains('hide-input');
	$inputShowing.classList.remove('hide-input');
});

//===========task-13
let $changeInpCont = document.getElementsByClassName('change-inp-cont')[0];

$changeInpCont.addEventListener('click', function() {
	let $inpCont = document.getElementsByClassName('inp-cont')[0];

	$inpCont.classList.add('inp-cont-plus');
	$inpCont.value = 'Thi is new text'
});

//===========task-14
let $clickNumber = document.getElementsByClassName('click-number')[0];
let $clickCount = 1;

$clickNumber.addEventListener('click', function() {
	$clickCount++;
	$clickNumber.textContent = ' Click here ' + $clickCount;
});

//===========task-15
let $classToInput = document.getElementsByClassName('class-to-input')[0];

$classToInput.addEventListener('click', function() {
	let $showClassInp = document.getElementsByClassName('show-class-inp')[0];
	$showClassInp.value = $showClassInp.className;
});

//============task-16
let $formBtn = document.getElementsByClassName('form-btn')[0];

$formBtn.addEventListener('click', function() {
	
});