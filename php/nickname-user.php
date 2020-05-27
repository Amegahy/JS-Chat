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
*   Retrieve user and new nickname
*/
$user = $_POST['user']; // User
$nickname = $_POST['nickname']; // User nickname
$chatId = $_SESSION["chat_id"];
$checkNNSql = "SELECT * FROM nicknames WHERE chat_name ='". $chatId ."' AND user ='". $user ."'"; // Check if user exists in table already
$checkNNResult = $conn->query($checkNNSql);
$NNSql = ""; // Set/Update nickname SQL 

if ($checkNNResult->num_rows > 0) { // If there are more rows
    while($row = $checkNNResult->fetch_assoc()) { 
        $NNSql = "UPDATE nicknames SET nickname = '". $nickname ."' WHERE id = '". $row['id'] ."'"; // Update nickname
    }
} else {
    $NNSql = "INSERT INTO nicknames (chat_name, user, nickname) VALUES ('$chatId', '$user', '$nickname')";
}

if ($conn->query($NNSql) === TRUE) {
    echo "Nickname updated";
} else {
    echo "Error: " . $NNSql . "<br>" . $conn->error;
}

// if ($conn->query($createSQL) === TRUE) {
//     echo "Table created successfully";
// } else {
//     echo "Error creating table: " . $conn->error;
// }

