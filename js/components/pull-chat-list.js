/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull chats in to connect to
    Contents:   - Pull in chat list
----------------------------------------------------------*/

/*
 *   Pull in chat list
 */
function pull_chat_list() {
    $.post("php/db_chat-list.php", {}).done(function(data) {
        display_chats(data, "chat-list");
    });
}