//controller 'MainCtrl'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.controller('MainCtrl', ['$scope','posts', MainCtrl]);

	function MainCtrl($scope,posts) {
		$scope.posts = posts.posts;
		$scope.upvotePost = posts.upvotePost;

		$scope.addPost = function() {
			if($scope.postTitle) {
				$scope.posts.push({
					title: $scope.postTitle, 
					link: $scope.postLink, 
					upvotes: 0,
					comments: [
						{author: 'Joey', body:'Your post sucks', upvotes: 0},
						{author: 'Chandelier29', body:'Great idea but everything is wrong!', upvotes: 3}
					]
				});
				$scope.postTitle = '';
				$scope.postLink = '';
			}
		};
	}
})();