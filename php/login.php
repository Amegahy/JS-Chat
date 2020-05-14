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
include 'db_con.php';

session_start();

/*
*   Check log in details with DB
*/
$loginSql = "SELECT email,password FROM `users`";

$_SESSION["username"] = $_POST['usr'];
header('Location: ../chat-list.php');
?>