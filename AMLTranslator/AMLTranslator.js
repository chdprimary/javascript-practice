/**
 * AMLTranslator.js
 * by Christian Dean
 */
'use strict';

var AMLTranslator = (function() {

	// Constants, easily adjusted if AML markup changes in future
	var AML_OPENING_TAG_LENGTH = 2;
	var AML_CLOSING_TAG_LENGTH = 3;

	// Simple associative lookup table object for easy extensibility.
	// Could be replaced with hash table if n grows very large.
	var LookupTable = {
		'%': 'strong',
		'~': 'em'
	};

	// Modularized into own function because lookup may become more complex in future.
	function lookup(key) {
		return LookupTable[key];
	}

	/**
	 * Translates a string of certainly valid AML into a string of HTML.
	 * @param  {string} validAML  - syntatically correct AML string
	 * @return {string}           - translated HTML string
	 */
	function translate(validAML) {
		// All vars declared at top of scope to prevent potential hoisting problems.
		var translatedHTML = '';
		var tagList = [];
		var tagHTML = '';
		var i;
		var j;

		// Cursory validation.
		if (validAML === undefined || validAML === '') {
			console.log('translate(): A valid AML string must be provided as an argument.');
		}

		// For each char in validAML, check if beginning of AML tag
		// If not, simply append character to 'translatedHTML'
		// If so, begin translation behavior
		for(i = 0; i < validAML.length; i++) {
			if (validAML.charAt(i) !== '^') {
				translatedHTML += validAML.charAt(i);
			} else {
				// If AML opening tag
				// (1) translate tag to HTML
				// (2) append HTML tag to 'translatedHTML'
				// (3) append HTML tag to 'tagList'
				// (4) increment 'i' to end of AML tag
				if (validAML.charAt(i+1) !== '!') {
					// (1)
					tagHTML = lookup(validAML.charAt(i+1));

					// (2) & (3)
					translatedHTML += '<'+tagHTML+'>';
					tagList.push(tagHTML);

					// (4)
					i += AML_OPENING_TAG_LENGTH-1;

				// If AML closing tag
				// (1) translate tag to HTML
				// (2) traverse backward from end of 'tagList', appending closing HTML tags to 'translatedHTML' until we find the tag being closed
				// (3) append the closing HTML tag for the equiv AML closing tag
				// (4) then delete HTML equiv for the AML closing tag from 'tagList'
				// (5) then 're-open' tags by traversing back to the end of 'tagList'
				// (6) increment 'i' to end of AML tag
				} else {
					// (1)
					tagHTML = lookup(validAML.charAt(i+2));

					// (2)
					for (j = tagList.length-1; tagList[j] !== tagHTML; j--) {
						translatedHTML += '</'+tagList[j]+'>';
					}

					// (3) & (4)
					// splice(j,1) deletes 1 element at index j
					translatedHTML += '</'+tagList[j]+'>';
					tagList.splice(j, 1);
					
					// (5)
					for (j=j; j < tagList.length; j++) {
						translatedHTML += '<'+tagList[j]+'>';
					}
					
					// (6)
					i += AML_CLOSING_TAG_LENGTH-1;
				}
			}
		}

		// Finally, return translated HTML string.
		return translatedHTML;
	}

	// Object we're returning (AMLTranslator) exposes the translate function only.
	return {
		translate: translate
	};

}());

// Make AMLTranslator available via 'require' in Node.js.
if (module.exports) {
	module.exports = AMLTranslator;
}