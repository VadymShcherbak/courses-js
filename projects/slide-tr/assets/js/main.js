(function($) {
	$(document).ready(function() {

		function sliderNav(element, section) {
			let $activeSlider = section.find('.slider .active');
			let $slider = section.find('.slider > div');
			let $dataNav;
			
			$activeSlider.removeClass('active');

			if ('prev' === element.data('sl-nav')) {
				$dataNav = $activeSlider.prev();

				if ($dataNav.length) {
					$dataNav.addClass('active');
				} else {
					$slider.last().addClass('active');
				}

			} else if ('next' === element.data('sl-nav')) {
				$dataNav = $activeSlider.next();

				if ($dataNav.length) {
					$dataNav.addClass('active');
				} else {
					$slider.first().addClass('active');
				}
			}
		}

		$('.main-slider').each(function() {
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

	});
})(jQuery);