/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for chat-list.php
    Contents:   - On load functions
                - Dynamic event listeners               
----------------------------------------------------------*/

window.onload = function() {

    /*
     *   On load functions
     */
    pull_chat_list(); // Pull chats

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'user-item') {
            select_user(e.target);
        }
    });
}