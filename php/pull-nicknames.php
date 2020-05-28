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

/*
*   Pull nicknames
*/
$chatID = $_SESSION["chat_id"];
$users = $_SESSION["chat_users"];
$response = []; // Response array

foreach ($users as &$user) {
    $username = $user; // User name
    $userNN = ""; // User nickname
    $userNNSql = "SELECT * FROM nicknames WHERE chat_name = '". $chatID ."' AND user = '". $user ."'";
    $userNNResult = $conn->query($userNNSql);

    if ($userNNResult->num_rows > 0) { // User has a nickname
        while($row = $userNNResult->fetch_assoc()) { 
            $userNN = $row['nickname'];
        }
    }
    $response[] = array('name'=> $username, 'nn'=> $userNN);
}
$json = json_encode($response);

echo $json; // Send the array of messages