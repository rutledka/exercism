var Song = function() {
	self = this;

	self.verse = function(verseNum){
		var output = verseNum;

		output += " bottles of beer on the wall, ";
		output += verseNum + " bottles of beer.\n";
		output += "Take one down and pass it around, ";
		output += verseNum-1 + " bottles of beer on the wall.\n";
		console.log(output);
		return output;
	}

	/*self.sing = function(verseStart, verseEnd) {
		var output = "";

		for(var i = verseStart; i < verseEnd + 1; i++){
			output += songArray[i - 1]+"\n";
		}
		return output;
	}*/

	return this;
}();

module.exports = Song;