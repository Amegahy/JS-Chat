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
$nickname = $conn->real_escape_string($_POST['nickname']); // New chat name
$chatId = $conn->real_escape_string($_SESSION["chat_id"]); // Chat ID
$CNSql = "UPDATE chats SET chat_name = '". $nickname ."', nicknamed = '1' WHERE id = '". $chatId ."'"; // Update chat nickname

if (strlen($nickname) > 255){ // Chat name limit
    echo "255 character chat name limit reached";
} else {
    if ($conn->query($CNSql) === TRUE) {
        echo "Chat name updated to " . $nickname;
    } else {
        echo "Error: " . $CNSql . "<br>" . $conn->error;
    }
}