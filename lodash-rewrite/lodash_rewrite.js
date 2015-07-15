/*
	This was my attempt to rewrite all the functions in lodash.js without looking at the source.
	Tried to conform to best practices and ran each function through JSLint.
	I did this for practice as a JavaScript newbie. 
	Of course, it's not nearly as fast as lodash.
	Maybe I'll optimize it in the future!
*/

function chunk(array, size) {
	"use strict";

	//Sets default parameter value for size argument
	if (size === undefined) {
		size = 1;
	}

	var chunks = [];
	var curr_idx = 0;

	//While array has enough elements for another chunk of length size,
	//create that chunk and push to chunks.
	while((curr_idx + size) < array.length) {
		chunks.push(array.slice(curr_idx, curr_idx+size));
		curr_idx = curr_idx + size;
	}

	//Create a chunk from whatever is left in array
	chunks.push(array.slice(curr_idx));

	return chunks;
}


function compact(array) {
	"use strict";

	//Returns an array composed of only the elements
	//where the test !!(element) returns true.
	return array.filter(function(c) {
		return !!c;
	});
}

function difference(array, values) {
	"use strict";

	if(values === undefined) {
		values = [];
	}

	/* includes() is part of ES7 proposal, oops.
	return array.filter(function(c) {
		return !values.includes(c);
	});
	*/

	return array.filter(function(c) {
		//Step through every value in values
		//if c is encountered, we return false to filter()
		var keep = true;
		values.forEach(function(curr) {
			if (curr === c) { keep = false; }
		});
		return keep;
	});
}

function drop(array, n) {
	"use strict";

	if (n === undefined) {
		n = 1;
	}

	return array.slice(n);
}

function dropRight(array, n) {
	"use strict";

	if (n === undefined) {
		n = 1;
	}
	
	if (n >= array.length) {
		return [];
	} else {
		return array.slice(0,array.length-n);	
	}
}

