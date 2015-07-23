var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

var secret = "forsalebabyshoesneverworn";

// GET home page.
router.get('/', function(req, res) {
 	res.render('index', { title: 'Express' });
});

// GET to '/setup' (adds test user to database)
router.get('/setup', function(req, res) {
	var nick = new User({
		username: "Nick Offerman",
  		password: "password",
  		admin: true
  	});

  	nick.save(function(err) {
		if (!err) {
			console.log('Nick saved succesfully!');
			res.json({ success: true });
  		}
  	});
});

// GET to '/users' (get a list of all users)
router.get('/users', function(req, res) {
	User.find(function(err, users) {
		res.json(users);
	});
});

// POST to '/authenticate' (tries to authenticate based on provided login information)
router.post('/authenticate', function(req, res) {
	User.findOne({
		username: req.body.username
	}, function(err, user) {
		if (err) throw err;

		if (!user || user.password != req.body.password) {
			res.json({
				success: false, 
				message: "Authentication error. Please try again." 
			});
		} else {
			var token = jwt.sign(user, secret, {
				expiresInMinutes: 1440 // 24 hours
			});

			res.json({
				success: true,
				message: "WOULD YOU LIKE TOKEN",
				token: token
			});
		}
	});
});

// GET to '/posts' (get all posts)
router.get('/posts', function(req, res) {
	Post.find(function(err, posts) {
		if (err) {
			return next(err);
		}

		res.json(posts);
	});
});

// POST to '/posts' (create a post)
router.post('/posts', function(req, res) {
	var post = new Post(req.body);

	post.save(function(err, post) {
		if (err) {
			return next(err);
		}

		res.json(post);
	});
});

// if a post ID is in our route, find the post and attach it to 'req'
router.param('post', function(req, res, next, id) {
	var query = Post.findById(id);

	query.exec(function (err, post) {
		if (err) {
			return next(err); 
		}
		if (!post) { 
			return next(new Error('can\'t find post')); 
		}

		req.post = post;
		return next();
	});
});

// if a comment ID is in our route, find the comment and attach it to 'req'
router.param('comment', function(req, res ,next, id) {
	var query = Comment.findById(id);

	query.exec(function (err, comment) {
		if (err) {
			return next(err); 
		}
		if (!comment) { 
			return next(new Error('can\'t find comment')); 
		}

		req.comment = comment;
		return next();
	});
});

// GET to '/posts/:post' (get a single post and its comments)
router.get('/posts/:post', function(req, res) {
	req.post.populate('comments', function(err, post) {
		if (err) {
			return next(err);
		}

		res.json(post);
	});
});

// PUT to '/posts/:post/upvote' (upvote a post)
router.put('/posts/:post/upvote', function(req, res, next) {
	req.post.upvote(function(err, post) {
		if (err) {
			return next(err);
		}

		res.json(post);
	});
});

// POST to '/posts/:post/comments' (add a comment to a particular post)
router.post('/posts/:post/comments', function(req, res, next) {
	var comment = new Comment(req.body);

	comment.save(function(err, comment) {
		if (err) {
			return next(err);
		}

		req.post.comments.push(comment);
		req.post.save(function(err, post) {
			if (err) {
				return next(err);
			}

			res.json(comment);
		});
	});
});

// PUT to '/posts/:post/comments/:comment/upvote' (upvote a particular comment)
router.put('/posts/:post/comments/:comment/upvote', function(req, res, next) {
	req.comment.upvote(function(err, comment) {
		if (err) {
			return next(err);
		}

		res.json(comment);
	});
});

module.exports = router;