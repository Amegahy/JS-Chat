<?php
/*----------------------------------------------------------
Author: Alex Megahy
Description: Pull messages and chat title from the DB
Contents:   - Include the database connection
            - Chat title 
            - Messages
            - Responds with rows
                - Check for user nicknames
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Chat title 
*/
$chatID = "";
$chatIdSql = "SELECT * FROM chats WHERE id ='". $_SESSION['chat_id'] ."'";
$chatIdResult = $conn->query($chatIdSql);
$response = [];

if ($chatIdResult->num_rows > 0) { // Chat found
    while($row = $chatIdResult->fetch_assoc()) { 
        $_SESSION["chat_users"] = explode(",",$row['users']); // Set users
        $_SESSION["chat_name"] = $row['chat_name']; // Set chat name
        $chatID = $row['id'];
    }
}else {
    echo "No chat found";
    return;
}

$response[] = array('chat_title'=> $_SESSION["chat_name"]); // Add chat title to response array

/*
*   Messages 
*/
$rowCount = $_REQUEST["rows"]; // Number of rows to be shown
$msgSql = "SELECT * FROM ". $chatID ." ORDER BY `". $chatID ."`.`id` DESC LIMIT " . $rowCount;
$msgResult = $conn->query($msgSql);

/*
*   Responds with rows
*/
$user = $_SESSION["user_name"]; // Current user

if ($msgResult->num_rows > 0) { // If there are more rows
    while($row = $msgResult->fetch_assoc()) { 
        $name=$row['name']; 
        $time=$row['time']; 
        $msg=$row['message']; 

        if ($name == $user){ // If this is the current user
            $name = "You";
        }else {
            /*
            *   Check for user nicknames
            */
            $checkUsrNNSql = "SELECT * from chat_users WHERE chat_name ='". $chatID ."' AND user ='". $name ."'"; // Check if user has a nickname in this chat
            $checkUsrNNResult = $conn->query($checkUsrNNSql);

            if ($checkUsrNNResult->num_rows > 0) { // If the nickname exists
                while($row = $checkUsrNNResult->fetch_assoc()) { 
                    $name=$row['nickname']; 
                }
            }
        }

        $response[] = array('name'=> $name, 'time'=> $time, 'msg'=> $msg);
    } 
}
$json = json_encode($response);

echo $json; // Send the array of messages
