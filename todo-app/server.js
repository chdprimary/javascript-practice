var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Connect to database, print any errors to console
mongoose.connect('mongodb://localhost:27017/todo-app');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	//do something everytime the database connection is opened successfully
});

// Use content stored in '/public'
app.use(express.static(__dirname + '/public'));

// Initialize morgan logger
app.use(morgan('dev'));

// BodyParser parses JSON in POST requests
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type:'application/vnd.api+json' }));

// Define mongoose model/schema for Todos
var Todo = mongoose.model('Todo',
	{
		text : String,
		done : Boolean
	}
);

// Handles GET requests to '/api/todos' (gets all todos)
app.get('/api/todos', function(req,res) {

	Todo.find(function(err, todos) {
		//if there is an error retrieving, send the error, nothing after res.send will execute
		if (err) {
			res.send(err);
		}

		res.json(todos); // return all todos in JSON format
	});

});

// Handles POST requests to '/api/todos' (creates a todo)
app.post('/api/todos', function(req,res) {

	Todo.create({
		text: req.body.text,
		done: false
	}, function(err, todo) {
		if (err) {
			res.send(err);
		}

		Todo.find(function(err, todos) {
			//if there is an error retrieving, send the error, nothing after res.send will execute
			if (err) {
				res.send(err);
			}

			res.json(todos); // return all todos in JSON format
		});
	});

});

// Handles DELETE requests to '/api/todos/:todo_id' (deletes a todo)
app.delete('/api/todos/:todo_id', function(req,res) {

	Todo.remove({
		_id: req.params.todo_id
	}, function(err, todo) {
		//if there is an error retrieving, send the error, nothing after res.send will execute
		if (err) {
			res.send(err);
		}

		Todo.find(function(err, todos) {
			if (err) {
				res.send(err);
			}

			res.json(todos); // return all todos in JSON format
		});
	});
	
});

// Any GET requests to routes besides those listed above will simply serve index.html
app.get('*', function(req, res) {
	res.sendFile('./public/index.html');
});

app.listen(8080);
console.log("App listening on port 8080");