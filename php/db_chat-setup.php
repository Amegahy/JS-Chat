<?php
/*----------------------------------------------------------
Author: Alex Megahy
Description: Pull messages from the DB
Contents:   - Include the database connection
            - Convert chat name into ID 
            - Chat exists
            - Chat does not exist
                - Create new row in chat table
                - Create new table for chat
            - Generate table ID
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db_con.php';

/*
*   Convert chat name into ID
*/
$chat_item = $_POST["chat_item"];
$chatIdSql = "SELECT * FROM chats WHERE chat_name ='".$chat_item."'";
$chatIdResult = $conn->query($chatIdSql);

/*
*   Chat exists
*/
if ($chatIdResult->num_rows > 0) { // If there are more rows
    while($row = $chatIdResult->fetch_assoc()) { 
        $_SESSION["chat_id"] = $row['id'];
        $_SESSION["chat_name"] = $row['chat_name'];
    }

/*
*   Chat does not exist
*/
}else { // If chat does not exist
    while(true){
        $tableID = generateRandomString(); // Potential new table ID
        $newIdSql = "SELECT * FROM chats WHERE id ='".$tableID."'";
        $newIdResult = $conn->query($newIdSql);
        if ($newIdResult->num_rows == 0) { // If the ID doesn't already exists
            
            /*
            *   Create new row in chat table
            */
            $chatName = array($_SESSION["user_name"], $chat_item);
            sort($chatName);
            $chatName = implode(",",$chatName);
            $chatName = $conn -> real_escape_string($chatName);
            $createRowSql = "INSERT INTO chats (id, chat_name, users) VALUES ('". $tableID ."','". $chatName ."','". $chatName ."')";
            if ($conn->query($createRowSql) != TRUE) {
                echo "Error creating table: " . $conn->error;
            }
            $_SESSION["chat_name"] = $chatName;
            $_SESSION["chat_id"] = $tableID;

            /*
            *   Create new table for chat
            */
            $createSQL = "CREATE TABLE ". $tableID ."(
                        id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(20) NOT NULL,
                        time VARCHAR(5) NOT NULL,
                        message text NOT NULL)";
                    if ($conn->query($createSQL) === TRUE) {
                        echo "Table MyGuests created successfully";
                    } else {
                        echo "Error creating table: " . $conn->error;
                    }
            break;
        }
    }
}

/*
*   Generate table ID
*/
function generateRandomString($length = 10) {
    $firstCharacter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $firstCharactersLength = strlen($firstCharacter);
    $charactersLength = strlen($characters);
    $randomString = '';
    $randomString .= $firstCharacter[rand(0, $firstCharactersLength - 1)];
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
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