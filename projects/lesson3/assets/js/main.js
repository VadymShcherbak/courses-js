
$('.products').each(function() {
	let $products = $(this);
	let $tabMenu = $products.find('.tab-menu > li');


	$tabMenu.click(function() {
		let dataProduct = $(this).data('product')
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$products.find('.product-list .row[data-product='+dataProduct+']').siblings().removeClass('active');
		$products.find('.product-list .row[data-product='+dataProduct+']').addClass('active');
	});
});

//============ TASK - 2 ========

$('.accordion-item-trigger').click(function() {
	$(this).next('.accordion-item-content').slideToggle();
})