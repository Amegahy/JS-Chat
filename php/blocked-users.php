<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: search for the blocked users
    Contents:   - Search for blocked
-----------------------------------------------------------*/

/*
*   Delete chat with only blocked users 
*/
function blockedSearch($conn){
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
    return $blocked;
}

?>