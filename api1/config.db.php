<?php

//เข้ารหัส
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET , POST , PATCH , PUT , DELETE , OPTIONS');
header('Access-Control-Allow-Headers: token,Content-Type');
header('Access-Control-Max-Age:1728000');
header('Content-Lenath:0');
header('Content-Type: text/plain');

//ประกาศตัวแปร ในการเชื่อมต่อระบบฐานข้อมูล
$hostAPI = "localhost"; 
$userAPI = "root";
$passAPI = "";
$dbNameAPI = "Class24"; //ชื่อฐานข้อมูล

$conn = mysqli_connect($hostAPI, $userAPI, $passAPI, $dbNameAPI)or die("ไม่สามารถเชื่อมต่อได้");
mysqli_set_charset($conn,"utf8");

?>