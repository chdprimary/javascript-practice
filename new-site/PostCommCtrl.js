//controller 'PostCommCtrl'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.controller('PostCommCtrl', ['$scope','$stateParams','posts', PostCommCtrl]); 

	function PostCommCtrl($scope,$stateParams,posts) {
		$scope.post = posts.posts[$stateParams.id];
		$scope.upvotePost = posts.upvotePost;	
		// debugger;
	}
})();