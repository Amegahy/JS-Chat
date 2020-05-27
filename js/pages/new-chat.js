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
    pull_users("NA", "checkbox"); // Display all users to chat to

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'user-list-item') { // If user item is selected
            checkedUsers = user_checkbox(e.target, checkedUsers); // Pass the selected user on to be checked
        }
    });

    /*
     *   Event listeners
     */
    document.getElementsByClassName("submit-users")[0].addEventListener("click", function() { submit_users(checkedUsers) });
}