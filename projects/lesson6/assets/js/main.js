(function($) {

	const apiKey = '60c592ec5eb5f3c7cfd3c53f4ac4c0bd';

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