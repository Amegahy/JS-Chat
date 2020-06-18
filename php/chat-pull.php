<?php
/*----------------------------------------------------------
Author: Alex Megahy
Description: Pull messages and chat title from the DB
Contents:   - Includes
            - Search for blocked users 
            - Chat title 
            - Messages
            - Responds with rows
                - Check for user nicknames
-----------------------------------------------------------*/

/*
*   Includes
*/
include 'db-con.php';
include 'drop-blocked-chats.php';

/*
*   Chat title 
*/
$blocked = blockedSearch($conn);
$chatID = "";
$chatIdSql = "SELECT * FROM chats WHERE id ='". $_SESSION['chat_id'] ."'";
$chatIdResult = $conn->query($chatIdSql);
$response = [];
$user = $_SESSION['user_name'];

if (!$conn -> query($chatIdSql)) { // Test for errors
    echo("Error: " . $conn -> error);
    exit;
} else {
    if ($chatIdResult->num_rows > 0) { // Chat found
        while($row = $chatIdResult->fetch_assoc()) { 
            $users = explode(",",$row['users']);
            $_SESSION["chat_users"] = $users; // Set users
            $_SESSION["chat_name"] = $row['chat_name']; // Set chat name
            $chatName = $_SESSION["chat_name"];
            
            if ($row['nicknamed'] == 0) { // If chat is not nicknamed
                $chatName = explode(",",$chatName);

                for ($x = 0; $x < count($chatName); $x++) {
                    if (in_array($chatName[$x], $blocked)){
                        $chatName[$x] = "Unidentified user";
                    } else if ($chatName[$x] == $user) {
                        unset($chatName[$x]);
                    }
                }
                $chatName = implode(", " , $chatName);
            }
            $chatID = $row['id'];

            dropBlockedChat($conn, $users, $chatID); // Remove any chats with just blocked users
        }
    }else {
        echo "No chat found";
        return;
    }
}

$response[] = array('chat_title'=> $chatName); // Add chat title to response array

/*
*   Messages 
*/
$rowCount = $_REQUEST["rows"]; // Number of rows to be shown
$msgSql = "SELECT * FROM ". $chatID ." ORDER BY `". $chatID ."`.`id` DESC LIMIT " . $rowCount;
$msgResult = $conn->query($msgSql);

/*
*   Responds with rows
*/
if (!$conn -> query($msgSql)) { // Test for errors
    echo("Error: " . $conn -> error);
    exit;
} else {
    if ($msgResult->num_rows > 0) { // If there are messages
        while($row = $msgResult->fetch_assoc()) { 
            $name=$row['name']; 
            $time=$row['time']; 
            $msg=$row['message'];
            $colour=""; 

            if ($name == $user){ // If this is the current user
                $name = "You";
            }else if (in_array($name, $blocked) && $name != "You"){
                $name = "Unidentified user";
            }else {
                /*
                *   Check for user nicknames and icon colours
                */
                $checkUsrNNSql = "SELECT * from chat_users WHERE chat_name ='". $chatID ."' AND user ='". $name ."'"; // Check if user has a nickname in this chat
                $checkUsrNNResult = $conn->query($checkUsrNNSql);

                if ($checkUsrNNResult->num_rows > 0) { // If the nickname exists
                    while($row = $checkUsrNNResult->fetch_assoc()) { 
                        $name=$row['nickname']; 
                        $colour=$row['colour'];
                    }
                }
            }

            $response[] = array('name'=> $name, 'time'=> $time, 'msg'=> $msg, 'col'=> $colour);
        } 
    }
}

$json = json_encode($response);

echo $json; // Send the array of messages
