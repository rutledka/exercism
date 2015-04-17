<?php 

function toRna($input) {
	$rna_array = array(
		'G' => 'C',
		'C' => 'G',
		'T' => 'A',
		'A' => 'U'
		);
	$output = "";

	foreach(str_split($input) as $dna){
		$output .= $rna_array[$dna];
	}
	return $output;
}