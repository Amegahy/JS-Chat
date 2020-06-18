<?php
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull all nicknames for users in current chat
    Contents:   - Include the database connection
                - Pull nicknames
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';
include 'blocked-users.php';

/*
*   Pull nicknames
*/
$chatID = $_SESSION["chat_id"];
$users = $_SESSION["chat_users"];
$response = []; // Response array
$blocked = blockedSearch($conn);

foreach ($users as &$user) {
    if(empty(in_array($user, $blocked))){ // User is not blocked
        $username = $user; // User name
        $userNN = ""; // User nickname
        $userNNSql = "SELECT * from chat_users WHERE chat_name = '". $chatID ."' AND user = '". $user ."'";
        $userNNResult = $conn->query($userNNSql);
    
        if (!$conn -> query($userNNSql)) { // Test for errors
            echo("Error: " . $conn -> error);
            exit;
        } else {
            if ($userNNResult->num_rows > 0) { // User has a nickname
                while($row = $userNNResult->fetch_assoc()) { 
                    $userNN = $row['nickname'];
                }
            }
        }
        $response[] = array('name'=> $username, 'nn'=> $userNN);
    }
}
$json = json_encode($response);

echo $json; // Send the array of messages