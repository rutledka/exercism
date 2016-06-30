"use strict";

const isogram = function(input) {
	return {
		isIsogram: () => {
			input = input.replace(/\s/g, '').replace(/-/g, '').toLowerCase().split('').sort();
			console.log(input);

			for(let i = 0; i < input.length; i++) {
				if( input[i] == input[i - 1] )
					return false;
			}
			return true;
		}
	}
}

module.exports = isogram;