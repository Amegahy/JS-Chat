/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for chat.php
    Contents:   - Global variables
                - Dynamic event listeners
                - On load functions           
                - Event listeners                
----------------------------------------------------------*/

window.onload = function() {

    /*
     *   Global variables
     */
    var checkedUsers = [];

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'user-list-item') {
            checkedUsers = user_checkbox(e.target, checkedUsers); // Pass the selected user on to be checked
        }
    });

    /*
     *   On load functions
     */
    load_msg(); // Pull messages
    document.getElementsByClassName("msg-submit")[0].disabled = true; // Submit button is default disabled
    document.getElementsByClassName("full-screen")[0].classList.add("d-none"); // Add display:none to popup

    /*
     *   Event listeners
     */
    document.getElementsByClassName("btn-load")[0].addEventListener("click", increaseRows); // Increase rows on click of btn-load
    document.getElementsByClassName("msg-box")[0].addEventListener('keypress', autoSize); // Auto size msg-box
    document.getElementsByClassName("msg-box")[0].addEventListener('keyup', enableSubmit); // Enable submit
    document.getElementsByClassName("msg-submit")[0].addEventListener('click', submitMsg); // Submit message
    document.getElementsByClassName("add-user")[0].addEventListener("click", add_user_popup); // Add selected users to chat
    document.getElementsByClassName("submit-add-user")[0].addEventListener("click", function() { add_user(checkedUsers) }); // Add selected users to chat
}