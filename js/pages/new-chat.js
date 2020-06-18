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
    pullUsers("NA", "checkbox"); // Display all users to chat to
    closePopup(); // Default close pop up

    /*
     *   Dynamic event listeners
     */
    document.addEventListener('click', function(e) {
        var fs = document.getElementsByClassName("full-screen")[0]; // Full screen popup

        if (e.target && e.target.className == 'user-list-item') { // If user item is selected
            checkedUsers = userCheckbox(e.target, checkedUsers); // Pass the selected user on to be checked
        } else if (e.target && e.target.classList.contains("list-item") && (fs.classList.contains("block") || fs.classList.contains("unblock"))) { // If user item is selected to block
            toggleBlockUser(e.target.innerHTML); // Pass the selected user on to be blocked
        } else if (e.target && e.target.className == 'close-alert') { // Close alert
            closeAlert();
        }
    });

    /*
     *   Event listeners
     */
    document.getElementsByClassName("open-menu")[0].addEventListener("click", openMenu); // Open side menu
    document.getElementsByClassName("close-menu")[0].addEventListener("click", closeMenu); // Close side menu
    document.getElementsByClassName("submit-users")[0].addEventListener("click", function() { submit_users(checkedUsers) }); // Submit users to chat
    document.getElementsByClassName("block-users")[0].addEventListener("click", blockUsrPopup); // Pop up to block users
    document.getElementsByClassName("unblock-users")[0].addEventListener("click", unblockUsrPopup); // Pop up to unblock users
    document.getElementsByClassName("close-fs")[0].addEventListener("click", closePopup); // Close pop up button

}