
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

//============ TASK - 2 ========
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
			$accOneOpen.addClass('accordion-item-open');
		});
	}
});