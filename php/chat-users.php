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
include 'db-con.php';

/*
*   Select all first and last names from DB
*/
$exceptions = $_POST['exceptions']; // Which users to exclude
$chat_users = explode(",",$_SESSION["chat_users"]); // Users currently in chat
$chatUsersSql = "SELECT firstName,lastName FROM `users`";
$chatUsersResult = $conn->query($chatUsersSql);
$respone = [];


if ($chatUsersResult->num_rows > 0) { // If there are more rows
    $users = array();
    
    while($row = $chatUsersResult->fetch_assoc()) { 
        $user = $row['firstName']. " ". $row['lastName'];

        if ($exceptions == "NA" && $user != $_SESSION['user_name']){ // If there are no exceptions and it is not the user
            array_push($users, $user);
        }elseif ($exceptions == "users" && !in_array($user, $chat_users, TRUE) && $user != $_SESSION['user_name']){ // Exclude all current chat users and the user
            array_push($users, $user);
        }
        
    }
    $response[] = array('users'=> $users); // Add users to response array
}
$json = json_encode($response);

echo $json; // Echo list of users
