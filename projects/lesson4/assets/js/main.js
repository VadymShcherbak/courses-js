(function($) {
	$(document).ready(function() {

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',

			success: function(data) {
				data.forEach(function(el) {
					let id = el.id;
					let name = el.name;
					let company = el.company.name;

					$('.card').append(
						`<div class ="user" data-user-id="${id}">
							<div class="user-photo"><img src="assets/img/client1.png"></div>
							<div class="user-info">
								<h4>${name}</h4>
								<p>${company}</p>
							</div>
						</div>`
					);
				});
			}
		});

	});
})(jQuery);