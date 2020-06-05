/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pop up to kick users from chat
    Contents:   - Display pop up
                - Timeout to read for users (Callback)
                - Submit kicked users
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function kickUserPopup() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pull_users("notChat-U", "default"); // Display all users bar those not in the chat and the current user

    /*
     *   Timeout to read for users (Callback)
     */
    setTimeout(function() {
        var user = localStorage.getItem("username");

        if (document.getElementsByClassName("list-item").length <= 1) { // Only the user is in the chat
            displayAlert("error", "No users to kick");
        } else {
            togglePopup("kick");
        }
    }, 100);
}

/*
 *   Submit kicked users
 */
function kickUser(user) {
    $.post("php/kick-users.php", { users: user }).done(function(data) {
        if (data.substr(-7) == "kicked.") { // User kicked
            displayAlert("success", data);
        } else if (data.substr(-14) == "left the chat.") { // User left chat
            window.location.href = "chat-list.php";
        } else {
            displayAlert("error", data);
        }
    });
}