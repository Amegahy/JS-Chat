<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Remove chtas with only blocked users
    Contents:   - Delete chat with only blocked users 
                    - Search for blocked users 
                    - Count users and drop
-----------------------------------------------------------*/

/*
*   Delete chat with only blocked users 
*/
function dropBlockedChat($conn, $users, $id){

    /*
    *   Search for blocked users 
    */
    $username = $_SESSION['user_name'];
    $blocked = array(); // Array of blocked users
    $searchBlockedSql = "SELECT * FROM blocked WHERE blocker = '". $username ."' OR blocked = '". $username ."'";
    $searchBlockedResult = $conn->query($searchBlockedSql);

    if ($searchBlockedResult->num_rows > 0) { // If there are blocked users
        while($row = $searchBlockedResult->fetch_assoc()) { 
            if($row['blocker'] == $username){ // If user blocked another
                array_push($blocked, $row['blocked']);
            } else if ($row['blocked'] == $username){ // If user has been blocked, don't show blocker
                array_push($blocked, $row['blocker']);
            }
        }
    }

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