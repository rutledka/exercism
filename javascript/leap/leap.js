'use strict';

let leap = function(year) {
	return {
		isLeap : function() {
			if( !(year % 4) ) {
				if( !(year % 100) && !(year % 400) ) {
					return true;
				} else if ( !(year % 100) && (year % 400) ) {
					return false;
				}
				return true;
			}
			return false;
		}
	}
};

module.exports = leap;