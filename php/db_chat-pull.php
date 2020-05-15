<?php
/*----------------------------------------------------------
Author: Alex Megahy
Description: Pull messages from the DB
Contents:   - Include the database connection
            - Distinct names 
            - Messages
            - Responds with rows
-----------------------------------------------------------*/

/*
*   Include the database connection
*/
include 'db_con.php';

/*
*   Chat set up
*/
$_SESSION["chatUser"] = $_POST["user"]; // Set the name of the chat
include 'db_chat-setup.php';

/*
*   Distinct names 
*/
// $nameSql = "SELECT DISTINCT name FROM practice_chat";
// $nameResult = $conn->query($nameSql);
// if ($nameResult->num_rows > 0) { // If there are more rows
//     $names = array();
//     while($row = $nameResult->fetch_assoc()) { 
//         array_push($names, $row['name']);
//     }
//     $response[] = array('names'=> $names); // Add names to response array
// }

/*
*   Messages 
*/
// $rowCount = $_REQUEST["rows"];
// $msgSql = "SELECT * FROM `practice_chat` ORDER BY `practice_chat`.`id` DESC LIMIT " . $rowCount;
// $posts = array();
// $msgResult = $conn->query($msgSql);

/*
*   Responds with rows
*/
// if ($msgResult->num_rows > 0) { // If there are more rows
//     while($row = $msgResult->fetch_assoc()) { 
//         if($row['name']==$_SESSION["username"]){ // If this is this user's message
//             $name = "You";
//         }else{
//             $name=$row['name']; 
//         }
//         $time=$row['time']; 
//         $msg=$row['message']; 
//         $response[] = array('name'=> $name, 'time'=> $time, 'msg'=> $msg);
//     } 
//     $json = json_encode($response);
//     echo $json;
// }
?>