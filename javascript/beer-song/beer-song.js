var Song = (function() {
	self = this;

	self.verse = function(verseNum){
		var output = verseNum;
		//console.log('called verse');
		if(verseNum >= 1) {
			if(verseNum == 1) {
				output += " bottle of beer on the wall, ";
				output += verseNum + " bottle of beer.\n";
				output += "Take it down and pass it around, ";
				output += "no more bottles of beer on the wall.\n";	
			} else {
				output += " bottles of beer on the wall, ";
				output += verseNum + " bottles of beer.\n";
				output += "Take one down and pass it around, ";
				output += verseNum-1 + " " + (verseNum-1 > 1 ? "bottles" : "bottle") + " of beer on the wall.\n";	
			}	
		} else {
			output = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
		}
		
		//console.log(output);
		return output;
	}

	self.sing = function(verseStart, verseEnd) {
		var output = "",
		verseEnd = verseEnd || 0;
		//console.log('called sing');
		for(var i = verseStart; i >= verseEnd; i--){
			//console.log(i);
			output += this.verse(i);
			if(i != verseEnd) {
				output += '\n';
			}
		}
		return output;
	}

	return this;
})();

//Song.sing(8,6);
module.exports = Song;
