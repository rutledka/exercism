var words = function(input){
	input = input.replace(/\n/g, ' ');
	input = input.replace(/\t/g, ' ');
	input = input.replace(/\s{2,}/g, ' ');
	var wordArray = input.split(' '),
		values = [],
		finalVal = {};

	for(var i = 0; i < wordArray.length; i++){
		values[i] = [wordArray[i],0];
		for(var j = 0; j < wordArray.length; j++){
			if(wordArray[i] === wordArray[j]){
				values[i][1]++;
				var pos = wordArray.indexOf(wordArray[j]);
				//wordArray.splice(pos,1);
			}
		}
	}

	for(var i = 0; i < values.length; i++) {
		finalVal[values[i][0]] = values[i][1];
	}

	return finalVal;
};

module.exports = words;