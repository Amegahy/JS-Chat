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
    pullChatList(); // Pull chats

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains("list-item")) {
            select_chat(e.target);
        } else if (e.target && e.target.className == 'close-alert') { // Close alert
            closeAlert();
        }
    });

    /*
     *   Event listeners
     */
    document.getElementsByClassName("new-chat")[0].addEventListener("click", function() { window.location.href = "new-chat.php" });
}