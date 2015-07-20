//factory 'posts'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.factory('posts', ['$http', posts]);

	function posts($http) {
		var o = {
			posts: [
				{title: 'Blogger Multivariate Bullweevil', upvotes: 5 , link: 'https://www.google.com', comments: [{author: 'Tig', body: 'Nine Inch Nails is so underrated. Their new album Ghosts I-IV is great.', upvotes: 20},{author: 'James', body: 'Free Loving Radical Face Martyr.', upvotes: -1}]},
				{title: 'Tanqueray Mystical Barge Dolphins', upvotes: 2 , link: 'https://www.google.com'},
				{title: 'Complete Control Megalodon Freezes Carpenters Worldwide', upvotes: 15, link: 'https://www.google.com'},
				{title: 'Chimichanga Palay Taiwan Sujeet', upvotes: 16 },
				{title: 'Marksman Candle Powder', upvotes: 9  }
			]
		};

		o.get = function(id) {
			return $http.get('/posts/' + id).then(function(res) {
				return res.data;
			});
		};

		o.getAll = function() {
			return $http.get('/posts').success(function(data) {
				angular.copy(data, o.posts);
			});
		};

		o.create = function(post) {
			return $http.post('/posts', post).success(function(data) {
				o.posts.push(data);
			});
		};

		o.upvote = function(post) {
			return $http.put('/posts/' + post._id + '/upvote')
				.success(function(data) {
					post.upvotes += 1;
				});
		};

		o.addComment = function(id, comment) {
			return $http.post('/posts/' + id + '/comments', comment);
		};

		o.upvoteComment = function(post, comment) {
			return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote')
				.success(function(data) {
					comment.upvotes += 1;
				});
		};

		return o;
	}
})();