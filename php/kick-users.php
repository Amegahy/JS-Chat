<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Kick users from the existing chat
    Contents:   - Include the database connection
                - Locate user in chats table
                - Locate user in nickname table
                - Remove user from array
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db-con.php';

/*
*   Locate user in chats table
*/
$kickUsers = $_POST['users']; // Users to be kicked from chat
$chatID = $_SESSION["chat_id"];
$kickSearchSql = "SELECT * FROM chats WHERE id = '". $chatID ."'";
$kickSearchResult = $conn->query($kickSearchSql);

if ($kickSearchResult->num_rows > 0) { // Chat found
    while($row = $kickSearchResult->fetch_assoc()) { 
        $newUsers = removeUser($row['users'], $kickUsers); // Users with kicked user removed
        $kickUserSql = "";

        if($row['nicknamed'] == 0){ // Chat is not nicknamed
            $kickUserSql = "UPDATE chats SET chat_name = '". $newUsers ."', users= '". $newUsers ."' WHERE id = '". $chatID ."'";
        }else {
            $kickUserSql = "UPDATE chats SET users= '". $newUsers ."' WHERE id = '". $chatID ."'";
        }
        if ($conn->query($kickUserSql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $kickUserSql . "<br>" . $conn->error;
        }
    }
}

/*
*   Locate user in nicknames table
*/
$kickNNSearchSql = "SELECT * FROM nicknames WHERE chat_name = '". $chatID ."' AND user = '". $kickUsers ."'";
$kickNNSearchResult = $conn->query($kickNNSearchSql);

if ($kickNNSearchResult->num_rows > 0) { // Chat found
    $kickNNSql = "";

    while($row = $kickNNSearchResult->fetch_assoc()) { 
       $kickNNSql = "DELETE FROM nicknames WHERE chat_name = '". $chatID ."' AND user = '". $kickUsers ."'";
        
        if ($conn->query($kickNNSql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $kickNNSql . "<br>" . $conn->error;
        }
    }
}


/*
*   Remove user from array
*/
function removeUser($arr, $user){
    $users = explode(",", $arr);

    if (($key = array_search($user, $users)) == true) { // Remove the user from the array of users
        unset($users[$key]);
    }
    $users = implode(",", $users);
    return $users;
}