'use strict';

let DNAtoRNA = function(){
	return {
		toRna : function(DNAstring) {
			let DNAtranslation = {
				'G' : 'C',
				'C' : 'G',
				'T' : 'A',
				'A' : 'U'
			},
			RNAarray = [];

			DNAstring.split('').map(function(el){
				RNAarray.push(DNAtranslation[el]);
			});
			return RNAarray.join('');
		}
	}
};

module.exports = DNAtoRNA;