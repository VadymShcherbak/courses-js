(function($) {
	let apiKey = 'MHm2FOE4xDRP4j5v9lCsI74CSV9QX3Y5S0LMyOFITr8';

	function errorWindow() {
		$('body').children().remove();

		$('body').append(
			`<div class="server-error">
				<h1>Conecting Error</h1>
				<p>Check your conection</p>
				<p>Check server address</p>
			</div>`
		);
	}

	function addPhoto(data) {
		data.forEach(function(el) {
			$('.wrapper').append(
				`<div class="col-lg-3">
						<div class="img-item">
							<img src="${el.urls.small}">
						</div>
					</div>`
			);
		});
	}


	function getPhoto() {
		$.ajax({
			url: `https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=10`,

			success: function(data) {
				addPhoto(data);
			},
			error: function() {
				errorWindow();
			}
		});
	}


	$(document).ready(function() {
		getPhoto();
	});
})(jQuery);