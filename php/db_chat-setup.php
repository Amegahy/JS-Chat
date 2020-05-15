<?php
/*----------------------------------------------------------
Author: Alex Megahy
Description: Pull messages from the DB
Contents:   - Include the database connection
            - Convert chat name into ID 
            - Locate chat 
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db_con.php';

/*
*   Convert chat name into ID
*/
$chat_item = $_POST["chat_item"];
$chatIdSql = "SELECT id FROM chats WHERE chat_name ='".$chat_item."'";
$chatIdResult = $conn->query($chatIdSql);
if ($chatIdResult->num_rows > 0) { // If there are more rows
    while($row = $chatIdResult->fetch_assoc()) { 
        $_SESSION["chat_id"] = $row['id'];
    }
}

// $chatName = $_SESSION["user_name"].$_SESSION["chatUser"];
// $chatNameSql = "SELECT DISTINCT * FROM " . $chatName;
// $chatNameResult = $conn->query($chatNameSql);

// if (!$chatNameResult->num_rows) { // If the table does not exist
//     $createSQL = "CREATE TABLE ". $chatName ."(
//         id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(20) NOT NULL,
//         time VARCHAR(5) NOT NULL,
//         message text NOT NULL)";
//     if ($conn->query($createSQL) === TRUE) {
//         echo "Table MyGuests created successfully";
//     } else {
//         echo "Error creating table: " . $conn->error;
//     }
// }
// echo $createSQL;

/*
*   Locate chat 
*/
// $usrIdResult = $conn->query($usrIdSql);
// if ($usrIdResult->num_rows > 0) { // If there are more rows
//     while($row = $usrIdResult->fetch_assoc()) { 
//         $_SESSION["user_id"] = $row['name'];
//     }
// }
?>