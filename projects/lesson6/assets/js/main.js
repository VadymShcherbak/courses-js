(function($) {

	const apiKey = 'cee74240e02028a7d4f9cb1a6437a2b1';

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