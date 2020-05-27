<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Kick users from the existing chat
    Contents:   - Include the database connection
                - Locate user in chats table
                    - Delete chat
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

if (count($_SESSION["chat_users"]) == 2){ // Not enough users to kick
    echo "Not enough users";
    return;
}else if ($kickSearchResult->num_rows > 0) { // Chat found
    while($row = $kickSearchResult->fetch_assoc()) { 
        $newUsers = removeUser($row['users'], $kickUsers); // Users with kicked user removed

        if($newUsers == ""){ // If no more users remain
            /*
            *   Delete chat and table
            */
            $deleteChatSql = "DELETE FROM chats WHERE id = '". $chatID ."'"; // Delete index in chat table
            $deleteTableSql = "DROP TABLE ". $chatID; // Delete table of messages

            // Execute multi query
            if ($conn->query($deleteChatSql) === TRUE && $conn->query($deleteTableSql) === TRUE) {
                echo "Chat deleted";
            } else {
                echo "Error: " . $deleteChatSql . "<br>" . $conn->error;
            }

        } else {
            $kickUserSql = "";

            if($row['nicknamed'] == 0){ // Chat is not nicknamed
                $kickUserSql = "UPDATE chats SET chat_name = '". $newUsers ."', users= '". $newUsers ."' WHERE id = '". $chatID ."'";
            }else {
                $kickUserSql = "UPDATE chats SET users= '". $newUsers ."' WHERE id = '". $chatID ."'";
            }
            if ($conn->query($kickUserSql) === TRUE) {
                echo "User kicked";
            } else {
                echo "Error: " . $kickUserSql . "<br>" . $conn->error;
            }
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
            echo "Nickname removed";
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

    if (count($users) == 1){ // If only 1 element in array
        $users = "";
    } else if (($key = array_search($user, $users)) == true) { // Remove the user from the array of users
        unset($users[$key]);
        $users = implode(",", $users);
    }
    return $users;
}