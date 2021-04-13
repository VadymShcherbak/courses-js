(function($) {

	const apiKey = '7eb68179b2bdf6fb3c79f2da02711d3e';

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

	function addCurrName(data) {
		for(let key in data.currencies) {
			$('.currency').append(
				`<option value="${key}">${data.currencies[key]}</option>`
			);
		}
	}

	function getCurrency() {
		$.ajax({
			url: `http://api.currencylayer.com/list?access_key=${apiKey}`,

			success: addCurrName,
			error: errorWindow
		});
	}


	$(document).ready(function() {
		getCurrency();
	});

})(jQuery);