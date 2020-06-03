/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Select the icon colour for individual users
    Contents:   - Display pop up           
----------------------------------------------------------*/

/*
 *   Display pop up 
 */
function iconColour() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pull_users("notChat", "default"); // Display all users bar those not in the chat
    togglePopup("colour");
}