<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Remove chtas with only blocked users
    Contents:   - Includes
                - Delete chat with only blocked users 
                    - Search for blocked users 
                    - Count users and drop
-----------------------------------------------------------*/

/*
*   Includes
*/
include 'blocked-users.php';

/*
*   Delete chat with only blocked users 
*/
function dropBlockedChat($conn, $users, $id){
    $blocked = blockedSearch($conn);

    /*
    *   Count users and drop 
    */
    if (count($users) == 2 && !empty(array_intersect($blocked, $users))){ // If the only users left are blocked by another
        $dropChatSql = "DROP TABLE " . $id .";"; // Remove table
        $dropChatSql .= "DELETE FROM chats WHERE id = '". $id ."'"; // Remove chat index

        // Delete record of the chat
        if (mysqli_multi_query($conn, $dropChatSql)) {
            echo "Chat deleted";
        }else {
            echo "Error: " . $dropChatSql . "<br>" . $conn->error;
        }
    }
}