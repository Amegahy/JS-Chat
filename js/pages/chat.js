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
    var nnUser = ""; // Set user to be nicknamed

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        var fs = document.getElementsByClassName("full-screen")[0]; // Full screen popup
        if (e.target && e.target.className == 'user-list-item' && fs.classList.contains("add-u")) { // A user has been selected
            checkedUsers = user_checkbox(e.target, checkedUsers); // Pass the selected user on to be checked
        } else if (e.target && e.target.className == 'submit-add-user') {
            add_user(checkedUsers);
        } else if (e.target && e.target.className == 'list-item rounded-lg p-3' && fs.classList.contains("nickname-u")) { // Nickname user
            nnUser = e.target.innerHTML;
            setUpNickname(e.target.innerHTML);
        } else if (e.target && e.target.className == 'submit-nn' && fs.classList.contains("nickname-u")) { // Submit user nickname
            var nn = document.getElementsByClassName("nn-input")[0].value; // Nickname
            nicknameUser(nnUser, nn)
        }
    });

    /*
     *   On load functions
     */
    load_msg(); // Pull messages
    closePopup(); // Default close pop up
    document.getElementsByClassName("msg-submit")[0].disabled = true; // Submit button is default disabled

    /*
     *   Event listeners
     */
    document.getElementsByClassName("btn-load")[0].addEventListener("click", increaseRows); // Increase rows on click of btn-load
    document.getElementsByClassName("msg-box")[0].addEventListener('keyup', enableSubmit); // Enable submit
    document.getElementsByClassName("msg-submit")[0].addEventListener('click', submitMsg); // Submit message
    document.getElementsByClassName("add-user")[0].addEventListener("click", addUserPopup); // Add selected users to chat
    document.getElementsByClassName("user-nickname-btn")[0].addEventListener("click", nicknameUserList); // Add selected users to chat
    document.getElementsByClassName("close-fs")[0].addEventListener("click", closePopup); // Close pop up button
    // Auto size msg-box
    document.getElementsByClassName("msg-box")[0].addEventListener('keyup', autoSize);
    document.getElementsByClassName("msg-box")[0].addEventListener('keydown', autoSize);
}