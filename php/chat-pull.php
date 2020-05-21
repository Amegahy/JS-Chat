<?php
/*----------------------------------------------------------
Author: Alex Megahy
Description: Pull messages and chat title from the DB
Contents:   - Include the database connection
            - Chat title 
            - Messages
            - Responds with rows
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Chat title 
*/
$chatIdSql = "SELECT * FROM chats WHERE id ='". $_SESSION['chat_id'] ."'";
$chatIdResult = $conn->query($chatIdSql);
$response = [];

if ($chatIdResult->num_rows > 0) { // If there are more rows
    while($row = $chatIdResult->fetch_assoc()) { 
        $_SESSION["chat_users"] = explode(",",$row['users']); // Set users
        $_SESSION["chat_name"] = $row['chat_name']; // Set chat name
    }
}

$response[] = array('chat_title'=> $_SESSION["chat_name"]); // Add chat title to response array

/*
*   Messages 
*/
$rowCount = $_REQUEST["rows"]; // Number of rows to be shown
$msgSql = "SELECT * FROM ". $_SESSION["chat_id"] ." ORDER BY `". $_SESSION["chat_id"] ."`.`id` DESC LIMIT " . $rowCount;
$msgResult = $conn->query($msgSql);

/*
*   Responds with rows
*/
if ($msgResult->num_rows > 0) { // If there are more rows
    while($row = $msgResult->fetch_assoc()) { 
        $name=$row['name']; 
        $time=$row['time']; 
        $msg=$row['message']; 
        $response[] = array('name'=> $name, 'time'=> $time, 'msg'=> $msg);
    } 
}
$json = json_encode($response);

echo $json; // Send the array of messages
