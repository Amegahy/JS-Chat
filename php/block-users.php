<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Block/Unblock users
    Contents:   - Include the database connection
                - Add users
                - Search for block
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Add users
*/
$user = $conn->real_escape_string($_POST['user']);
$blocked = $conn->real_escape_string($_POST['blocked']);

/*
*   Search for block
*/
$blockSql = "SELECT * FROM `blocked` WHERE blocker = '". $user ."' AND blocked = '". $blocked ."'";
$blockResult = $conn->query($blockSql);

if ($blockResult->num_rows > 0) { // If there is aleardy a block
    $updateBlockSql = "DELETE FROM `blocked` WHERE blocker = '". $user ."' AND blocked = '". $blocked ."'"; // Unblock user
    echo $blocked . " has been unblocked";
} else { // The user has not been blocked before
    $updateBlockSql = "INSERT into `blocked` (blocker, blocked) VALUES ('". $user ."','". $blocked ."')";
    echo $blocked . " has been blocked";
}

if ($conn->query($updateBlockSql) === TRUE) {
    return;
} else {
    echo "Error: " . $updateBlockSql . "<br>" . $conn->error;
}
