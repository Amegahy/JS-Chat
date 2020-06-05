<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Kick users from the existing chat
    Contents:   - Include the database connection
                - Locate user in chats table
                    - Delete chat
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

if (!$conn -> query($kickSearchSql)) { // Test for errors
    echo("Error: " . $conn -> error);
    exit;
} else if (count($_SESSION["chat_users"]) == 2){ // Not enough users to kick
    echo "Not enough users";
    return;
}else if ($kickSearchResult->num_rows > 0) { // Chat found
    while($row = $kickSearchResult->fetch_assoc()) { 
        $newUsers = removeUser($row['users'], $kickUsers); // Users with kicked user removed
        $kickUserSql = "";

        $newUsers = implode(",", $newUsers);
        if($row['nicknamed'] == 0){ // Chat is not nicknamed
            $kickUserSql = "UPDATE chats SET chat_name = '". $newUsers ."', users= '". $newUsers ."' WHERE id = '". $chatID ."'";
        }else {
            $kickUserSql = "UPDATE chats SET users= '". $newUsers ."' WHERE id = '". $chatID ."'";
        }
        $kickUserSql .= ";DELETE from chat_users WHERE chat_name = '". $chatID ."' AND user = '". $kickUsers ."'"; // Remove user nickname

        // Delete record of the user
        if (mysqli_multi_query($conn, $kickUserSql)) {
            if ($kickUsers == $_SESSION["user_name"]){ // If user left chat
                echo $kickUsers . " left the chat.";
            } else { // Another user was kicked
                echo $kickUsers . " kicked.";

            }
        }else {
            echo "Error: " . $kickUserSql . "<br>" . $conn->error;
        }
    }
}

/*
*   Remove user from array
*/
function removeUser($arr, $user){
    $users = explode(",", $arr);
    $key = array_search($user,$users);

    if (strlen($key) != 0){ // User found
        unset($users[$key]);
    }
    return $users;
}