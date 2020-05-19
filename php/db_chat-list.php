<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull is list of chats
    Contents:   - Include the database connection
                - Select all first and last names from DB
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db_con.php';

/*
*   Select all first and last names from DB
*/
$chatListSql = "SELECT * FROM `chats` WHERE users LIKE '%" . $_SESSION["user_name"] . "%'";
$chatListResult = $conn->query($chatListSql);
$response = [];
if ($chatListResult->num_rows > 0) { // If there are more rows
    $chats = array();
    while($row = $chatListResult->fetch_assoc()) { 
        array_push($chats, $row['chat_name']);
    }
    $response[] = array('chats'=> $chats); // Add users to response array
}
$json = json_encode($response);
echo $json;
?>