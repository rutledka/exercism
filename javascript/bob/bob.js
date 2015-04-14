//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	//remove numbers and spaces
	input = input.replace(/ /g, '');

	//if it's a yell
	if(input === input.toUpperCase() && input.match(/[a-z]/i)) {
		return "Whoa, chill out!";
	} else if(input.indexOf('?') !== -1 && input.indexOf('?') === input.length -1) {
	//Or if its a question
		return "Sure.";
	} else if(input == ""){
	//Or if it's nothing
		return "Fine. Be that way!";
	} else {
		return "Whatever.";
	}
};

module.exports = Bob;
