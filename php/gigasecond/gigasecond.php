<?php

function from($start) {
    $distance = new DateInterval("PT1000000000S");
    date_add($start,$distance);
    return $start;
}