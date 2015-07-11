var Slider = function() { this.initialize.apply(this,arguments); }

Slider.prototype = {
	initialize: function(slider) {
		this.ul = slider.children[0];
		this.li = this.ul.children;

		this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';

		this.currentIndex = 0;
	},

	goTo: function(index) {
		if (index < 0 || index > this.li.length-1)
			return;

		this.ul.style.left = '-' + (100 * index) + '%';

		this.currentIndex = index;
	},

	goToPrev: function() {
		this.goTo(this.currentIndex - 1);
	},

	goToNext: function() {
		this.goTo(this.currentIndex + 1);
	}
}

