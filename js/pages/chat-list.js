/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for chat-list.php
    Contents:   - On load functions
                - Dynamic event listeners      
                - Event listeners
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
        if (e.target && e.target.className == 'list-item p-3 rounded-lg') {
            select_chat(e.target);
        }
    });

    /*
     *   Event listeners
     */
    document.getElementsByClassName("new-chat")[0].addEventListener("click", function() { window.location.href = "new-chat.php" });
}