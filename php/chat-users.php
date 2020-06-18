<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull is list of chat users
    Contents:   - Include the database connection
                - Select all first and last names from DB
                - Search for blocked users
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Select all first and last names from DB
*/
$username = $conn->real_escape_string($_SESSION['user_name']);
$exceptions = $conn->real_escape_string($_POST['exceptions']); // Which users to exclude
$chatUsersSql = "SELECT firstName,lastName FROM `users`";
$chatUsersResult = $conn->query($chatUsersSql);
$respone = [];

/*
*   Search for blocked users
*/
$blocked = array(); // Array of blocked users
$searchBlockedSql = "SELECT * FROM blocked WHERE blocker = '". $username ."' OR blocked = '". $username ."'";
$searchBlockedResult = $conn->query($searchBlockedSql);

if ($searchBlockedResult->num_rows > 0) { // If there are blocked users
    while($row = $searchBlockedResult->fetch_assoc()) { 
        if($row['blocker'] == $username){ // If user blocked another
            array_push($blocked, $row['blocked']);
        } else if ($row['blocked'] == $username){ // If user has been blocked, don't show blocker
            array_push($blocked, $row['blocker']);
        }
    }
}

if ($chatUsersResult->num_rows > 0) { // If there are more rows
    $users = array();
    
    while($row = $chatUsersResult->fetch_assoc()) { 
        $user = $row['firstName']. " ". $row['lastName'];

        if ($exceptions == "NA" && $user != $username && !in_array($user, $blocked)){ // If there are no exceptions and it is not the user
            array_push($users, $user);
        }elseif ($exceptions == "users" && !in_array($user, $_SESSION["chat_users"], TRUE) && !in_array($user, $blocked) && $user != $username){ // Include all users not in the chat and the user
            array_push($users, $user);
        }elseif ($exceptions == "notChat" && in_array($user, $_SESSION["chat_users"], TRUE)){ // Include all current chat users and the user
            array_push($users, $user);
        }elseif ($exceptions == "notChat-unblocked" && in_array($user, $_SESSION["chat_users"], TRUE) && !in_array($user, $blocked)){ // Include all unblocked chat users and the user
            array_push($users, $user);
        }elseif ($exceptions == "notChat-U" && in_array($user, $_SESSION["chat_users"], TRUE) && $user != $username){ // Include all current chat users and not the current user
            array_push($users, $user);
        }elseif ($exceptions == "blocked" && in_array($user, $blocked) && $user != $username){ // Include all blocked users
            array_push($users, $user);
        }
    }
    $response[] = array('users'=> $users); // Add users to response array
}

if (count($users) == 0){ // No users found
    echo "No users to display";
}else{
    $json = json_encode($response);
    
    echo $json; // Echo list of users
}
