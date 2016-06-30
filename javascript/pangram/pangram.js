"use strict";

let pangram = function(sentence){
	return {
		isPangram: function() {
			var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
			sentence = sentence.toLowerCase().split('');
			sentence.forEach(function(val, index){
				let isPresent = alphabet.indexOf(val);

				if(isPresent !== -1) {
					alphabet.splice(isPresent, 1);
				}
			});
			if(alphabet.length) {
				return false;
			}
			return true;
		}
	}
}

module.exports = pangram;