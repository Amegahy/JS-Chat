/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Load in all users to chat with
    Contents:   - On load functions           
                - Event listeners                
----------------------------------------------------------*/

/*
 *   Pull in users
 */
function pull_users() {
    $.post("php/db_chat-users.php", {}).done(function(data) {
        display_chats(data, "user-list");
    });
}