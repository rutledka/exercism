<?php 

function raindrops($number) {
	$output = "";

	$sounds = array(
		3 => "Pling",
		5 => "Plang",
		7 => "Plong"
	);

	foreach($sounds as $int => $sound){
		if($number % $int == 0) {
			$output .= $sound;
		}
	}

	if( empty($output) ){
		$output .= $number;
	}

	return $output;
}
