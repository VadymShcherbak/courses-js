(function($) {

		function renderUsers(data) {
			data.forEach(function(el) {

				$('.card').append(
					`<div class ="user" data-user-id="${el.id}">
						<div class="user-photo"><img src="assets/img/client1.png"></div>
						<div class="user-info">
							<h4>${el.name}</h4>
							<p>${el.company.name}</p>
						</div>
							<a href="#" class="button posts-btn">Posts</a>
							<a href="#" class="button album-btn">Album</a>
							<a href="#" class="button todo-btn">to do</a>
					</div>`
				);
			});
			// $('.posts-btn').first().trigger('click');
		}

		function renderPosts(data) {
			data.forEach(function(el) {

				$('.posts').append(
					`<div class="post-item col-lg-6" data-post-id="${el.id}">
						<div class="post-item-content">
							<h3>${el.title}</h3>
							<p>${el.body}</p>
							<a href="#" class="button com-btn">Show comments</a>
						</div>
					</div>`
				);
			});
		}

		function renderComents(data) {
			data.forEach(function(el) {

				$(`.post-item[data-post-id="${el.postId}"] .com-btn`).append(
					`<div class="comment">
						<p>${el.name}</p>
					</div>`
				);
			});
		}

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

		function addUser() {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users',
	
				success: function(data) {
					renderUsers(data, 'card');
				},
				error: function() {
					errorWindow();
				}
			});
		}

		function addPost() {
			let postData = {};

			$(document).on('click', '.posts-btn', function(e) {
				e.preventDefault();

				let $thisUser = $(this).parents('.user');
				let $userId = $thisUser.data('user-id');

				if (!postData[`user_id_${$userId}`]) {
					

					$.ajax({
						url: `https://jsonplaceholder.typicode.com/posts?userId=${$userId}`,

						success: function(data) {
							postData[`user_id_${$userId}`] = data;
							renderPosts(data, 'posts')
						},

						error: function() {
							errorWindow();
						}
					});
				}
			});
		}

		$(document).ready(function() {
			addUser();
			addPost();
		});

})(jQuery);