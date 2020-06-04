<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Change user icon colour
    Contents:   - Include the database connection
                - Find user in chat_users
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Find user in chat_users
*/
$user = $_POST['user']; // User for colour change
$colour = $_POST['colour']; // Colour change
$chatId = $_SESSION["chat_id"];
$checkColSql = "SELECT * from chat_users WHERE chat_name ='". $chatId ."' AND user ='". $user ."'"; // Check if user exists in table already
$checkColResult = $conn->query($checkColSql);
$ColSql = ""; // Set/Update icon colour SQL 

if ($checkColResult->num_rows > 0) { // If the user already has a nickname
    while($row = $checkColResult->fetch_assoc()) { 
        $ColSql = "UPDATE chat_users SET colour = '". $colour ."' WHERE id = '". $row['id'] ."'"; // Update icon colour
    }
} else {
    $ColSql = "INSERT into chat_users (chat_name, user, colour) VALUES ('$chatId', '$user', '". $colour ."')";
}

if ($conn->query($ColSql) === TRUE) {
    echo $user . "'s icon colour updated";
} else {
    echo "Error: " . $ColSql . "<br>" . $conn->error;
}
