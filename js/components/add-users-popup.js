/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pop up to select users to existing chat
    Contents:   - Display pop up
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function add_user_popup() {
    document.getElementsByClassName("full-screen")[0].classList.remove("d-none"); // Add selected users to chat
    pull_users("users"); // Display all users except the users in chat
}