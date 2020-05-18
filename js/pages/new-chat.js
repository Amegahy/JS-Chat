/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for new-chat.php
    Contents:   - On load functions           
                - Dynamic event listeners           
----------------------------------------------------------*/

window.onload = function() {
    /*
     *   On load functions
     */
    pull_users(); // Display all users to chat to

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'chat-list-item') {
            select_chat(e.target);
        }
    });
}