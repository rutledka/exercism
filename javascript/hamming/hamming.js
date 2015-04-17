var compute = function(string1 , string2){
	var distance = 0;
	
	if( string1.length !== string2.length ){
		throw new Error("DNA strands must be of equal length.");	
	}
	
	for(var i=0; i<string1.length; i++ ){
		if(string1[i] !== string2[i]){
			distance++;
		}
	}
	return distance;
};

module.exports = compute;