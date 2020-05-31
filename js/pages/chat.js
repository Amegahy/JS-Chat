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
    var user = localStorage.getItem("username");

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        var fs = document.getElementsByClassName("full-screen")[0]; // Full screen popup
        if (e.target && e.target.className == 'user-list-item') { // A user has been selected
            checkedUsers = user_checkbox(e.target, checkedUsers); // Pass the selected user on to be checked
        } else if (e.target && e.target.className == 'submit-add-user') {
            add_user(checkedUsers);
        } else if (e.target && e.target.className == 'list-item rounded-lg p-3' && fs.classList.contains("nickname-u")) { // Nickname user
            nnUser = e.target.innerHTML;
            setUpNickname(e.target.innerHTML);
        } else if (e.target && e.target.className == 'submit-nn' && fs.classList.contains("nickname-u")) { // Submit user nickname
            var nn = document.getElementsByClassName("nn-input")[0].value; // Nickname
            nicknameUser(nnUser, nn);
        } else if (e.target && e.target.className == 'submit-cn' && fs.classList.contains("nickname-c")) { // Submit chat nickname
            var cn = document.getElementsByClassName("cn-input")[0].value; // Chat nickname
            submitChatName(cn);
        } else if (e.target && e.target.classList.contains("list-item") && fs.classList.contains("kick")) { // Kick selected users
            kickUser(e.target.innerHTML);
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
    document.getElementsByClassName("open-menu")[0].addEventListener("click", openMenu); // Open side menu
    document.getElementsByClassName("close-menu")[0].addEventListener("click", closeMenu); // Close side menu
    document.getElementsByClassName("leave-chat")[0].addEventListener("click", function() { kickUser(user) }); // Leave chat
    document.getElementsByClassName("chat-panel")[0].addEventListener("scroll", checkScroll); // Check scroll
    document.getElementsByClassName("msg-box")[0].addEventListener('keyup', enableSubmit); // Enable submit
    document.getElementsByClassName("msg-submit")[0].addEventListener('click', submitMsg); // Submit message
    document.getElementsByClassName("add-user")[0].addEventListener("click", addUserPopup); // Add selected users to chat
    document.getElementsByClassName("kick-user")[0].addEventListener("click", kickUserPopup); // Kick selected users from chat
    document.getElementsByClassName("user-nickname-btn")[0].addEventListener("click", nicknameUserList); // Nickname user
    document.getElementsByClassName("chat-nickname-btn")[0].addEventListener("click", nicknameChat); // Nickname chat
    document.getElementsByClassName("close-fs")[0].addEventListener("click", closePopup); // Close pop up button
    // Auto size msg-box
    document.getElementsByClassName("msg-box")[0].addEventListener('keyup', autoSize);
    document.getElementsByClassName("msg-box")[0].addEventListener('keydown', autoSize);
}