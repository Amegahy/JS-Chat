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
$username = $_SESSION["user_name"];
$chatListSql = "SELECT * FROM `chats` WHERE users LIKE '%" . $username . "%'";
$chatListResult = $conn->query($chatListSql);
$response = [];

if (!$conn -> query($chatListSql)) { // Test for errors
    echo("Error: " . $conn -> error);
    exit;
} else {
    if ($chatListResult->num_rows > 0) { // If there are chats    
        while($row = $chatListResult->fetch_assoc()) { 
            $chatID = $row['id'];
            $users = explode(",", $row['users']);
            $name = $row['chat_name'];

            dropBlockedChat($conn, $users, $chatID); // Remove any chats with just blocked users

            if ($row['nicknamed'] == 0) {
                $name = explode(",", $name);
                $key = array_search($username, $name); 
                unset($name[$key]); // Remove the user name 
                sort($name);
            }
            
            $response[] = array('chats'=> $name, 'nickname'=> $row['nicknamed']); // Add chats to response array
        }
        echo json_encode($response);
    } else { // No chats found
        echo "No chats found";
    }
}
