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
			$('.posts-btn').first().trigger('click');
		}

		function renderPosts(data) {
			data.forEach(function(el) {

				$('.posts').append(
					`<div class="post-item col-lg-6" data-post-id="${el.id}">
						<div class="post-item-content">
							<h3>${el.title}</h3>
							<p>${el.body}</p>
							<a href="#" class="button com-btn button-link">Show comments</a>
						</div>
					</div>`
				);
			});
		}

		function renderComents(data) {
			data.forEach(function(el) {

				$(`.post-item[data-post-id="${el.postId}"] .post-item-content`).append(
					`<div class="comment">
						<p>${el.name}</p>
					</div>`
				);
			});
		}

		function renderAlbum(data) {
			data.forEach(function(el) {
				
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
					
				if ($(this).hasClass('active')) {
					return false;
				}

				$('.post-item').remove();
				$('.posts-btn').removeClass('active');
				$(this).addClass('active');

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
			});
		}

		function showComments () {
			let commentData = {};

			$(document).on('click', '.com-btn', function(e) {
				e.preventDefault();

				let $thisComment = $(this);
				let $postId = $thisComment.parents('.post-item').data('post-id');

				if ($thisComment.hasClass('active')) {
					$thisComment.removeClass('active');
					$thisComment.parents('.post-item-content').find('.comment').remove();
				} else {
					$thisComment.toggleClass('active');
				}


				if (!commentData[`post_id_${$postId}`]) {
					
					$.ajax({
						url: `https://jsonplaceholder.typicode.com/comments?postId=${$postId}`,

						success: function(data) {
							commentData[`post_id_${$postId}`] = data;
							renderComents(data , 'comments');
						},

						error: function() {
							errorWindow();
						}
					});
				} else {
					renderComents(commentData[`post_id_${$postId}`]);
				}
			});
		}

		$(document).ready(function() {
			addUser();
			addPost();
			showComments();
		});

})(jQuery);