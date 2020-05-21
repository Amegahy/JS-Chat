<?php
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Place messages into the DB
    Contents:   - Include the database connection
                - Form values
                - Insert message into DB
                - Response
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Form values
*/
date_default_timezone_set('Europe/London');
$name = $_POST["user"];
$time = date("H:i:s"); 
$msg = $_POST['msg'];

/*
*   Insert message into DB
*/
$msgSubmitSql = "INSERT INTO " . $_SESSION["chat_id"] . " (name, time, message) VALUES ('$name', '$time', '$msg')";

/*
*   Response
*/
if ($conn->query($msgSubmitSql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
