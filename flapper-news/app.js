// express modules
var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// mongoose modules
var mongoose = require('mongoose');
var postModel = require('./models/Posts');
var commentsModel = require('./models/Comments');

// route modules
var routes = require('./routes/index');
var users = require('./routes/users');

// configure 'app' ========================================================

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/users', users);

// error handlers ----------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.on('uncaughtException', function (err) {
    console.log(err);
});

// ------------------------------------------- 

module.exports = app;

// =====================================================================

// connect to database
mongoose.connect('mongodb://localhost:27017/flapper-news');