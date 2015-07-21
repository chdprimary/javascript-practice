//factory 'posts'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.factory('posts', ['$http', posts]);

	function posts($http) {
		var o = {
			posts: []
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