//=========== TASK-1 ==========
$('.products').each(function() {
	let $products = $(this);
	let $tabMenu = $products.find('.tab-menu > li');


	$tabMenu.click(function(e) {
		e.preventDefault();
		let $thisTab = $(this);
		let $dataProduct = $thisTab.data('product');
		let $findProduct = $products.find('.product-list .row[data-product='+$dataProduct+']');


		$thisTab.siblings().removeClass('active');
		$thisTab.addClass('active');

		$findProduct.siblings().removeClass('active');
		$findProduct.addClass('active');
	});
});

//============ TASK - 2, 3 ========
$('.accordion').each(function() {
	let $sectionAccordion = $(this);
	let $accordionItem = $sectionAccordion.find('.accordion-wrapper > div');
	let $accordionState = $sectionAccordion.data('acc-state');

	if ('open' === $accordionState) {
		$accordionItem.on('click', function() {
			$(this).toggleClass('accordion-item-open');
		});
	} else if ('one-open' === $accordionState) {
		$accordionItem.on('click', function() {
			let $accOneOpen = $(this);
			$accOneOpen.siblings().removeClass('accordion-item-open');
			$accOneOpen.toggleClass('accordion-item-open');
		});
	}
});

//============== TASK - 4 ============
function sliderNav(element, sectionSlider) {
	let $activeSlider = sectionSlider.find('.slider-wrapper .active');
	let $sliderItem = sectionSlider.find('.slider-wrapper > div');
	let $dataNav;
	
	$activeSlider.removeClass('active');

	if ('prev' === element.data('sl-nav')) {
		$dataNav = $activeSlider.prev(); 

		if ($dataNav.length) {
			$dataNav.addClass('active');
		} else {
			$sliderItem.last().addClass('active');
		}
	} else if ('next' === element.data('sl-nav')) {
		$dataNav = $activeSlider.next();

		if ($dataNav.length) {
			$dataNav.addClass('active');
		} else {
			$sliderItem.first().addClass('active');
		}
	}
}

$('.slider').each(function () {
	let $mainSlider = $(this);
	let $prevBtn = $mainSlider.find('.prev-btn');
	let $nextBtn = $mainSlider.find('.next-btn');

	$prevBtn.on('click', function(e) {
		e.preventDefault();
		sliderNav($(this), $mainSlider);
	});

	$nextBtn.on('click', function(e) {
		e.preventDefault();
		sliderNav($(this), $mainSlider);
	});
});