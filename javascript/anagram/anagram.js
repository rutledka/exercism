var Anagram = function(input){
	self = this;
	self.input = input;

	self.matches = function() {
		var args = [],
			output =[];

		//convert our arguments object from any combo of strings and arrays into one array
		for( var i=0; i < arguments.length; i++ ){
			if( typeof arguments[i] === 'object' ) {
				args = args.concat(arguments[i]);
			} else {
				args.push(arguments[i]);
			}
		}

		//loop through args array and compares elements to our input
		for(var i=0; i < args.length; i++){
			var match = false;
			if(args[i].toLowerCase() !== self.input.toLowerCase()) {
				var obj1 = self.letterCount(self.input);
				var obj2 = self.letterCount(args[i]);
				
				if( compareObjects(obj1,obj2) ) {
					match = true;
				}
			}

			if(match) {
				output.push(args[i]);
			}
		}

	return output;
	};

	//accepts input as string. returns an object with letters as the properties and the number of occurences as the values
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

// compares two objects. returns true if they have the same property/value pairs, regardless of order
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
