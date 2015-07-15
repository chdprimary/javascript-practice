var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.posts = [
		{title: 'posta', upvotes: 5 , link: 'https://www.google.com'},
		{title: 'postb', upvotes: 2 , link: 'https://www.google.com'},
		{title: 'postc', upvotes: 15, link: 'https://www.google.com'},
		{title: 'postd', upvotes: 16 },
		{title: 'postf', upvotes: 9  }
	];

	$scope.addPost = function() {
		if($scope.postTitle) {
			$scope.posts.push({
				title: $scope.postTitle, 
				link: $scope.postLink, 
				upvotes: 0
			});
			$scope.postTitle = '';
			$scope.postLink = '';
		}
	};

	$scope.upvotePost = function(post) {
		post.upvotes += 1;
	};
}]);