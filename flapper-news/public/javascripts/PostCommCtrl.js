//controller 'PostCommCtrl'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.controller('PostCommCtrl', ['$scope', 'posts', 'post', PostCommCtrl]); 

	function PostCommCtrl($scope, posts, post) {
		$scope.post = post;
		$scope.upvotePost = function(post) {
			posts.upvote(post);
		};
		$scope.upvoteComment = function(comment) {
			posts.upvoteComment(post, comment);
		};	

		$scope.addComment = function() {
			if($scope.commentBody) {
				posts.addComment(post._id, 
					{
						author: 'user',
						body: $scope.commentBody,
						upvotes: 0
					}
				).success(function(comment) {
					$scope.post.comments.push(comment);
				});
				$scope.commentBody = '';
			}
		}
	}
})();