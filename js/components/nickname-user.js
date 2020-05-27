/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Nickname user in chat
    Contents:   - Display pop up
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function nicknameUser() {
    pull_users("notChat", "default"); // Display all users bar those not in the chat
    togglePopup("nickname-u");
}