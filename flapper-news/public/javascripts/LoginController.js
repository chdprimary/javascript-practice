//controller 'LoginController'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.controller('LoginController', ['$scope', '$http', LoginController]);

	function LoginController($scope, $http) {
		$scope.submitLogin = function() {
			return $http.post('/authenticate', { username: $scope.username, password: $scope.password }).success(function(res) {
				$scope.username = '';
				$scope.password = '';
				return res.data;
			});
		};
	}
})();