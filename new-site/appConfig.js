//appConfig
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.config(['$stateProvider','$urlRouterProvider',appConfig]);

	function appConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'home': {
						templateUrl: '/home.html',
						controller: 'MainCtrl'
					}
				}
			})
			.state('post-comments', {
				url: '/post-comments/{id}',
				views: {
					'post-comments': {
						templateUrl: '/post-comments.html',
						controller: 'PostCommCtrl'
					}
				}
			});

		$urlRouterProvider.otherwise('home');
	}
})();