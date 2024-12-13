<?php

// Include database connection
include("config.db.php"); // Make sure the path is correct

// Get the raw POST data
$dataJSON = json_decode(file_get_contents('php://input'), true);

// Initialize response message array
$message = array();

// Check if required fields are provided
if (isset($dataJSON['id_stu'], $dataJSON['name'], $dataJSON['nname'], $dataJSON['age'], $dataJSON['phon'], $dataJSON['address'], $dataJSON['status'])) {

    // Assign variables from JSON
    $id_stu = $dataJSON['id_stu'];
    $name = $dataJSON['name'];
    $nname = $dataJSON['nname'];
    $age = $dataJSON['age'];
    $phon = $dataJSON['phon'];
    $address = $dataJSON['address'];
    $status = $dataJSON['status'];

    // Prepare the SQL query using prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO mambers (id_stu, name, nname, age, phon, address, status) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $id_stu, $name, $nname, $age, $phon, $address, $status);

    // Execute the statement
    if ($stmt->execute()) {
        // Success: Data inserted successfully
        http_response_code(201);
        $message['status'] = "เพิ่มข้อมูลสำเร็จ";
    } else {
        // Failure: Could not insert data
        http_response_code(422);
        $message['status'] = "เพิ่มข้อมูลไม่สำเร็จ";
        $message['error'] = $stmt->error; // Capture the error message from the statement
    }

    // Close the statement
    $stmt->close();
} else {
    // Failure: Missing required fields
    http_response_code(400);
    $message['status'] = "ข้อมูลไม่ครบถ้วน";
    $message['error'] = "กรุณาตรวจสอบข้อมูลให้ครบถ้วน";
}

// Close the database connection
$conn->close();

// Send back the response as JSON
echo json_encode($message);
?>
