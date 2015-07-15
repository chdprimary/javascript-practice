var app = angular.module('flapperNews', ['ui.router']);

//Angular UI Router
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('home');
}]);

//Service posts
app.factory('posts', [function() {
	var o = {
		posts: [
			{title: 'posta', upvotes: 5 , link: 'https://www.google.com'},
			{title: 'postb', upvotes: 2 , link: 'https://www.google.com'},
			{title: 'postc', upvotes: 15, link: 'https://www.google.com'},
			{title: 'postd', upvotes: 16 },
			{title: 'postf', upvotes: 9  }
		]
	};
	return o;
}]);

//Controller MainCtrl has a $posts array of objects, addPost(), and upvotePost()
app.controller('MainCtrl', ['$scope','posts', function($scope, posts){
	$scope.posts = posts.posts;

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