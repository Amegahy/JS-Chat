<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Add users to the existing chat
    Contents:   - Include the database connection
                - Create new list of users
                - Insert new users into 'users' and 'chat_name'
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Create new list of users
*/
$newUsers = $_POST['users']; // New users to be added to chat
$chat_users =  implode(",",$_SESSION["chat_users"]);
$users = $newUsers . "," . $chat_users;

// Sort string
$users = explode(',', $users);
sort($users);
$users = implode(",",$users);

/*
*   Insert new users into 'users' and 'chat_name'
*/
$newUsersSql = "SELECT * FROM `chats` WHERE id = '". $_SESSION["chat_id"] ."'";
$newUsersResult = $conn->query($newUsersSql);

if ($newUsersResult->num_rows > 0) { // If there are more rows
    while($row = $newUsersResult->fetch_assoc()) {
        if ($row['nicknamed'] == 0) { // If chat is not nicknamed
            $updateChatSql = "UPDATE chats SET chat_name = '". $users ."', users= '". $users ."' WHERE id = '". $_SESSION["chat_id"] ."'";
        }else {
            $updateChatSql = "UPDATE chats SET users= '". $users ."' WHERE id = '". $_SESSION["chat_id"] ."'";
        }
        if ($conn->query($updateChatSql) === TRUE) {
            echo $newUsers . " added to the chat";
        } else {
            echo "Error: " . $updateChatSql . "<br>" . $conn->error;
        }
    }
}
