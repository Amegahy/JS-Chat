<?php
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Place messages into the DB
    Contents:   - Include the database connection
                - Form values
                - SQL to create table
                - Response
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db_con.php';

/*
*   Form values
*/
$name = $_SESSION["username"];
date_default_timezone_set('Europe/London');
$time = date("H:i:s"); 
$msg = $_REQUEST['msg'];

/*
*   SQL to create table
*/
$sql = "INSERT INTO practice_chat (name, time, message)
VALUES ('$name', '$time', '$msg')";

/*
*   Response
*/
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>