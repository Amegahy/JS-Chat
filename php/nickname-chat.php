<?php
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Nickname chat
    Contents:   - Include the database connection
                - Retrieve chat and enter new name
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Retrieve chat and enter new name
*/
$nickname = $_POST['nickname']; // New chat name
$chatId = $_SESSION["chat_id"]; // Chat ID
$CNSql = "UPDATE chats SET chat_name = '". $nickname ."', nicknamed = '1' WHERE id = '". $chatId ."'"; // Update chat nickname

if ($conn->query($CNSql) === TRUE) {
    echo "Chat name updated to " . $nickname;
} else {
    echo "Error: " . $CNSql . "<br>" . $conn->error;
}