<?php

require "config.db.php";
$data = [];
$sql = "SELECT * FROM mambers";

$qr_read = mysqli_query($conn, $sql);

while($qr = mysqli_fetch_object($qr_read)){
    $data[] = $qr;
}

echo json_encode($data);
echo mysqli_error($conn);

?>