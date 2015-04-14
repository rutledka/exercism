var Anagram = function(input){
  self = this;
  self.input = input;
  self.output = [];
  self.matches = function(array) {
    var match = false;
    array.forEach(function(element){
		if(element.length === self.input.length) {
			if(self.letterCount(element) == self.letterCount(self.input)){
				match = true;
				console.log('works');
			} else {
				console.log('didnt work');
			}
		}

		if(match) {
			self.output.push(element);
		}
    });
    
    return self.output;
  };

  self.letterCount = function(word) {
	var values = [],
		finalVal = {};

	for(var i = 0; i < word.length; i++){
		values[i] = [word[i],0];
		for(var j = 0; j < word.length; j++){
			if(word[i] === word[j]){
				values[i][1]++;
			}
		}
	}

	for(var i = 0; i < values.length; i++) {
		finalVal[values[i][0]] = values[i][1];
	}

	return finalVal;
  }

  return this;
};

module.exports = Anagram;