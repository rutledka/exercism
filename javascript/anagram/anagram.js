var Anagram = function(input){
  self = this;
  self.input = input;
  self.output = [];
  self.matches = function(input) {
    for(var i=0; i < input.length; i++){
    	var match = false;
		if(input[i].toLowerCase() !== self.input.toLowerCase()) {
			var obj1 = self.letterCount(self.input);
			var obj2 = self.letterCount(input[i]);
			
			if( compareObjects(obj1,obj2) ) {
				match = true;
				//console.log("we got a match");
			}
		}

		if(match) {
			self.output.push(input[i]);
		}
    }
    
    return self.output;
  };

  self.letterCount = function(word) {
	var values = [],
		numLetters = {},
		word = word.toLowerCase();

	for(var i = 0; i < word.length; i++){
		values[i] = [word[i],0];
		for(var j = 0; j < word.length; j++){
			if(word[i] === word[j]){
				values[i][1]++;
			}
		}
	}

	for(var i = 0; i < values.length; i++) {
		numLetters[values[i][0]] = values[i][1];
	}

	return numLetters;
  }

  return this;
};

var compareObjects = function(o1, o2){
    for(var prop in o1){
        if(o1.hasOwnProperty(prop)){
            if(o1[prop] !== o2[prop]){
                return false;
            }
        }
    }
    for(var prop in o2){
        if(o2.hasOwnProperty(prop)){
            if(o1[prop] !== o2[prop]){
                return false;
            }
        }
    }
    return true;
};

module.exports = Anagram;

var A = new Anagram("title");

