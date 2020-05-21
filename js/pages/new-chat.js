/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for new-chat.php
    Contents:   - Global variables
                - On load functions           
                - Dynamic event listeners    
                - Event listeners       
----------------------------------------------------------*/

window.onload = function() {

    /*
     *   Global variables
     */
    var checkedUsers = [];

    /*
     *   On load functions
     */
    pull_users(); // Display all users to chat to

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'user-list-item') {
            checkedUsers = user_checkbox(e.target, checkedUsers); // Pass the selected user on to be checked
        }
    });

    /*
     *   Event listeners
     */
    document.getElementsByClassName("submit-users")[0].addEventListener("click", function() {
        var username = localStorage.getItem("username");
        checkedUsers.push(username);
        checkedUsers = checkedUsers.sort().join();

        $.post("php/chat-setup.php", { chat_item: checkedUsers }).done(function(data) {
            window.location.href = "chat.php";
        });
    });

}