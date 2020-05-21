<?php 
/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Database connection
    Contents:   - Credentials
                - Create connection
-----------------------------------------------------------*/

/*
*   Credentials
*/
$servername = "127.0.0.1";// Server number
$username = "root";
$password = "";
$dbname = "chat";// Will be user id

session_start();

/*
*   Create connection
*/
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {// Check connection
    die("Connection failed: " . $conn->connect_error);
} 
