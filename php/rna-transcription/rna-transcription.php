<?php 

function toRna($input) {
	$rna_array = array(
		'G' => 'C',
		'C' => 'G',
		'T' => 'A',
		'A' => 'U'
		);

	return strtr($input, $rna_array);
}