<?php
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Nickname user
    Contents:   - Include the database connection
                - Retrieve user and new nickname
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Retrieve user and new nickname
*/
$user = $conn->real_escape_string($_POST['user']); // User
$nickname = $conn->real_escape_string($_POST['nickname']); // User nickname
$chatId = $conn->real_escape_string($_SESSION["chat_id"]);
$checkNNSql = "SELECT * from chat_users WHERE chat_name ='". $chatId ."' AND user ='". $user ."'"; // Check if user exists in table already
$checkNNResult = $conn->query($checkNNSql);
$NNSql = ""; // Set/Update nickname SQL 

if (strlen($nickname) > 20){
    echo "20 character nickname limit reached.";
} else {
    if ($checkNNResult->num_rows > 0) { // If the user already has a nickname
        while($row = $checkNNResult->fetch_assoc()) { 
            $NNSql = "UPDATE chat_users SET nickname = '". $nickname ."' WHERE id = '". $row['id'] ."'"; // Update nickname
        }
    } else {
        $NNSql = "INSERT into chat_users (chat_name, user, nickname) VALUES ('$chatId', '$user', '$nickname')";
    }

    if ($conn->query($NNSql) === TRUE) {
        echo $user . " nicknamed " . $nickname;
    } else {
        echo "Error: " . $NNSql . "<br>" . $conn->error;
    }
}