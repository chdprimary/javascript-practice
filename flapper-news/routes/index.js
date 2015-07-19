var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET to '/posts' (get all posts)
router.get('/posts', function(req, res, next) {
	Post.find(function(err, posts) {
		if (err) {
			return next(err);
		}

		res.json(posts);
	});
});

// POST to '/posts' (create a post)
router.post('/posts', function(req, res, next) {
	var post = new Post(req.body);

	post.save(function(err, post) {
		if (err) {
			return next(err);
		}

		res.json(post);
	});
});

// if a post ID is in our query string, find the post and attach it to 'req'
router.param('post', function(req, res ,next, id) {
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

// if a comment ID is in our query string, find the comment and attach it to 'req'
router.param('comment', function(req, res ,next, id) {
	var query = Comment.findById(id);

	query.exec(function (err, comment) {
		if (err) {
			return next(err); 
		}
		if (!comment) { 
			return next(new Error('can\'t find comment')); 
		}

		req.post.comments[0] = comment;
		return next();
	});
});

// GET to '/posts/:post' (get a single post and its comments)
router.get('/posts/:post', function(req, res) {
	req.post.populate('comment', function(err, post) {
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
	req.post.comments[0].upvote(function(err, comment) {
		if (err) {
			return next(err);
		}

		res.json(comment);
	});
});

module.exports = router;