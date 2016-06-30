'use strict';

let gigasecond = function(start) {
	return {
		date : function() {
			return new Date( Date.parse(start) + Math.pow(10, 12) );
		}
	}
};

//gigasecond.date();

module.exports = gigasecond;