<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull is list of chats
    Contents:   - Includes
                - Select all first and last names from DB
-----------------------------------------------------------*/

/*
*   Includes
*/
include 'db-con.php';
include 'drop-blocked-chats.php';

/*
*   Select all first and last names from DB
*/
$chatListSql = "SELECT * FROM `chats` WHERE users LIKE '%" . $_SESSION["user_name"] . "%'";
$chatListResult = $conn->query($chatListSql);
$response = [];

if ($chatListResult->num_rows > 0) { // If there are more rows
    $chats = array();

    while($row = $chatListResult->fetch_assoc()) { 
        $users = explode(",",$row['users']);
        $chatID = $row['id'];

        dropBlockedChat($conn, $users, $chatID); // Remove any chats with just blocked users
        array_push($chats, $row['chat_name']);
    }
    $response[] = array('chats'=> $chats); // Add chats to response array
}
$json = json_encode($response);

echo $json; // Echo back list of chats