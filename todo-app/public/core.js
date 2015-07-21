var scotchTodo = angular.module('scotchTodo', []);

scotchTodo.controller('mainController', ['$scope', '$http', mainController]);

function mainController($scope, $http) {
	$scope.formData = {};

	// Immediately make a GET request to '/api/todos' (get all todos)
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data; // set todos = data that was returned, also populates todo list in view because of Angular two-way binding
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// When createTodo() is called in view, send POST request to '/api/todos' along with formData as req
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear formData in $scope, also clears form in view because of Angular two-way binding
				$scope.todos = data; // set todos = data that was returned, also populates todo list in view because of Angular two-way binding
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// When deleteTodo() is called in view, send DELETE request to '/api/todos/:todo_id'
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data; // set todos = data that was returned, also populates todo list in view because of Angular two-way binding
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}