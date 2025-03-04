<?php
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Log in
    Contents:   - Include the database connection
                - Check log in details with DB
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Retrieve user ID
*/
$user = $conn->real_escape_string($_POST['usr']);
$usrIdSql = "SELECT firstName, lastName FROM `users` WHERE email = '" . $user . "'";
$usrIdResult = $conn->query($usrIdSql);

if ($usrIdResult->num_rows > 0) { // If there are more rows
    while($row = $usrIdResult->fetch_assoc()) { 
        $username = $row['firstName']. " " .$row['lastName'];
    }
}
$_SESSION["user_name"] = $username; // Set the username of the signed in user

echo $username;