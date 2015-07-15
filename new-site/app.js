var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.test = 'Hello World!';
}]);