//controller 'MainCtrl'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.controller('MainCtrl', ['$scope', 'posts', MainCtrl]);

	function MainCtrl($scope, posts) {
		$scope.posts = posts.posts;
		$scope.upvotePost = function(post) {
			posts.upvote(post);
		};

		$scope.addPost = function() {
			if($scope.postTitle) {
				posts.create({
					title: $scope.postTitle,
					link: $scope.postLink
				});
				$scope.postTitle = '';
				$scope.postLink = '';
			}
		};
	}
})();