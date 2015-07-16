//factory 'posts'
(function() {
	'use strict';

	angular
		.module('flapperNews')
		.factory('posts', posts);

	function posts() {
		var o = {
			posts: [
				{title: 'Blogger Multivariate Bullweevil', upvotes: 5 , link: 'https://www.google.com', comments: [{author: 'Tig', body: 'Nine Inch Nails is so underrated. Their new album Ghosts I-IV is great.', upvotes: 20},{author: 'James', body: 'Free Loving Radical Face Martyr.', upvotes: -1}]},
				{title: 'Tanqueray Mystical Barge Dolphins', upvotes: 2 , link: 'https://www.google.com'},
				{title: 'Complete Control Megalodon Freezes Carpenters Worldwide', upvotes: 15, link: 'https://www.google.com'},
				{title: 'Chimichanga Palay Taiwan Sujeet', upvotes: 16 },
				{title: 'Marksman Candle Powder', upvotes: 9  }
			],
			upvotePost: function(post) {
				post.upvotes += 1;
			}
		};
		return o;
	}
})();