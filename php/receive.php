<?php
if(isset($_REQUEST["survey"])){
	$survey_json = json_decode($_REQUEST["survey"]);

	file_put_contents("/tmp/survey_receive_php.log", $_REQUEST["survey"]);
	$rnt = array(
		"code"=>1000,
		"msg"=>"success",
	);
	// echo json_encode($rnt);
	echo count($survey_json);
}