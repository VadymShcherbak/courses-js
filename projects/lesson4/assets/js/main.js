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

				$('.blog .blog-content').append(
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
				
				$('.blog .blog-content').append(
					`<div class="albums col-lg-4" data-album-id="${el.id}">
						<div class="albums-item">
							<h4>${el.title}</h4>
							<a href="#" class="button photo-btn button-link">Show Photo</a>
						</div>
					</div>`
				);
			});
		}

		function renderPhoto(data) {
			data.forEach(function(el) {

				$('.blog .blog-content').append(
					`<div class="photo col-lg-3" data-photo-id="${el.id}">
						<div class="photo-item">
							<img src="${el.thumbnailUrl}">
							<h5>${el.title}</h5>
						</div>
					</div>`
				);
			});
		}

		function renderTodo (data) {
			data.forEach(function(el) {

				$('.blog .blog-content').append(
					`<div class="todo col-lg-4" data-todo-id="${el.id}">
						<div class="todo-item">
							<h5>${el.title}</h5>
						</div>
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
					renderUsers(data);
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

				let $postsBtn = $(this);
				let $thisUser = $postsBtn.parents('.user');
				let $userId = $thisUser.data('user-id');
					
				if ($postsBtn.hasClass('active')) {
					return false;
				}

				removeElement();
				$postsBtn.addClass('active');

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
					$thisComment.addClass('active');

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
				}
			});
		}

		function addAlbum() {
			let = albumData = {};

			$(document).on('click', '.album-btn', function(e) {
				e.preventDefault();
				
				let = $thisAlbum = $(this);
				let = $thisUser = $thisAlbum.parents('.user');
				let = $userId = $thisUser.data('user-id');

				if ($thisAlbum.hasClass('active')) {
					return false;
				}

				removeElement();
				$thisAlbum.addClass('active');

				if (!albumData[`user_id_${$userId}`]) {
					
					$.ajax({
						url: `https://jsonplaceholder.typicode.com/albums?userId=${$userId}`,

						success: function(data) {
							albumData[`user_id_${$userId}`] = data;
							renderAlbum(data);
						},

						error: function() {
							errorWindow();
						}
					});
				} else {
					renderAlbum(albumData[`user_id_${$userId}`]);
				}
			});
		}

		function showPhoto() {
			let photoData = {};

			$(document).on('click', '.photo-btn', function(e) {
				e.preventDefault();

				let $photoBtn = $(this);
				let $photoAlbum = $photoBtn.parents('.albums');
				let $albumId = $photoAlbum.data('album-id');

				if ($photoBtn.hasClass('active')) {
					return false;
				}

				removeElement();
				$photoBtn.addClass('active');

				if (!photoData[`album_id_${$albumId}`]) {
					
					$.ajax({
						url: `https://jsonplaceholder.typicode.com/photos?albumId=${$albumId}`,

						success: function(data) {
							photoData[`album_id_${$albumId}`] = data;
							renderPhoto(data);
						},

						error: function() {
							errorWindow();
						}
					})
				} else {
					renderPhoto(photoData[`album_id_${$albumId}`]);
				}
			});
		} 

		function addTodo() {
			let $todoData = {};

			$(document).on('click', '.todo-btn', function(e) {
				e.preventDefault();

				let $todoBtn = $(this);
				let $todoUser = $todoBtn.parents('.user');
				let $todoId = $todoUser.data('user-id');

				if ($todoBtn.hasClass('active')) {
					return false;
				}

				removeElement();
				$todoBtn.addClass('active');

				if (!$todoData[`user_id_${$todoId}`]) {
					
					$.ajax({
						url: `https://jsonplaceholder.typicode.com/todos?userId=${$todoId}`,

						success: function(data) {
							$todoData[`user_id_${$todoId}`] = data;
							renderTodo(data);
						},
						error: function() {
							errorWindow();
						}
					});
				} else {
					renderTodo($todoData[`user_id_${$todoId}`]);
				}
			});
		}

		function removeElement() {
			$('.post-item').remove();
			$('.albums').remove();
			$('.post-item').remove();
			$('.photo').remove();
			$('.todo').remove();
			$('.posts-btn').removeClass('active');
			$('.album-btn').removeClass('active');
			$('.todo-btn').removeClass('active');
		}

		$(document).ready(function() {
			addUser();
			addPost();
			showComments();
			addAlbum();
			showPhoto();
			addTodo();
		});

})(jQuery);