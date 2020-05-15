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
*   Distinct names 
*/
$nameSql = "SELECT DISTINCT name FROM ". $_SESSION["chat_id"];
$nameResult = $conn->query($nameSql);
if ($nameResult->num_rows > 0) { // If there are more rows
    $names = array();
    while($row = $nameResult->fetch_assoc()) { 
        array_push($names, $row['name']);
    }
    $response[] = array('names'=> $names); // Add names to response array
}

/*
*   Messages 
*/
$rowCount = $_REQUEST["rows"];
$msgSql = "SELECT * FROM ". $_SESSION["chat_id"]. " ORDER BY 'id' DESC LIMIT " . $rowCount;
$posts = array();
$msgResult = $conn->query($msgSql);

/*
*   Responds with rows
*/
if ($msgResult->num_rows > 0) { // If there are more rows
    while($row = $msgResult->fetch_assoc()) { 
        $name=$row['name']; 
        $time=$row['time']; 
        $msg=$row['message']; 
        $response[] = array('name'=> $name, 'time'=> $time, 'msg'=> $msg);
    } 
    $json = json_encode($response);
    echo $json;
}
?>