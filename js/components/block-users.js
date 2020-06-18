/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Block users
    Contents:   - Block users pop up 
                - Unblock users pop up    
                - Block/Unblock user
----------------------------------------------------------*/

/*
 *  Block users pop up   
 */
function blockUsrPopup() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pullUsers("NA", "default"); // Display all users except the users which are blocked
    togglePopup("block");
}

/*
 *  Unblock users pop up   
 */
function unblockUsrPopup() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pullUsers("blocked", "default"); // Display all users except the users which are blocked
    togglePopup("unblock");
}

/*
 *  Block/Unblock user
 */
function toggleBlockUser(blocked) {
    var username = localStorage.getItem("username");

    $.post("php/block-users.php", { user: username, blocked: blocked }).done(function(data) {
        if (data.substr(-7) == "blocked") {
            displayAlert("success", data);
        } else {
            displayAlert("error", data);
        }
    });
}