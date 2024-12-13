<?php

include('../config.db.php');

$table = "CREATE TABLE mambers(
id int(6) AUTO_INCREMENT COMMENT 'เลขที่',
id_stu int(6) COMMENT 'รหัสนักเรียน',
name varchar(100) COMMENT 'ชื่อสกุล',
nname varchar(100) COMMENT 'ชื่อเล่น',
age varchar(100) COMMENT 'อายุ',
phon varchar(100) COMMENT 'เบอร์โทร',
address varchar(255) COMMENT 'ที่อยู่',
status varchar(30) COMMENT 'สถานะภาพ',
PRIMARY KEY (id)
)";

if($conn->query($table) === TRUE){
   echo "สร้างได้";
}else{
    echo "สร้างไมได้".$conn->error;
}

$conn->close();

?>