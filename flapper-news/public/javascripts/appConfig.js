//appConfig
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.config(['$stateProvider', '$urlRouterProvider', appConfig]);

	function appConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'home': {
						templateUrl: '/home.html',
						controller: 'MainCtrl',
						resolve: {
							postPromise: ['posts', function(posts) {
								return posts.getAll();
							}]
						}
					}
				}
			})
			.state('post-comments', {
				url: '/post-comments/{id}',
				views: {
					'post-comments': {
						templateUrl: '/post-comments.html',
						controller: 'PostCommCtrl',
						resolve: {
							post: ['$stateParams', 'posts', function($stateParams, posts) {
								return posts.get($stateParams.id);
							}]
						}
					}
				}
			})
			.state('login', {
				url: '/login',
				views: {
					'login': {
						templateUrl: '/login.html',
						controller: 'LoginController'
					}
				}
			});

		$urlRouterProvider.otherwise('home');
	}
})();