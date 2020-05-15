<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull is list of chat users
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
$chatUsersSql = "SELECT firstName,lastName FROM `users`";
$chatUsersResult = $conn->query($chatUsersSql);
$respone = [];
if ($chatUsersResult->num_rows > 0) { // If there are more rows
    $users = array();
    while($row = $chatUsersResult->fetch_assoc()) { 
        array_push($users, ($row['firstName']. " ". $row['lastName']));
    }
    $response[] = array('users'=> $users); // Add users to response array
}
$json = json_encode($response);
echo $json;
?>