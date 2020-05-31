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
            alert("No users to kick");
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
        closePopup();

        if (user == localStorage.getItem("username") && data != "Not enough users") { // If user leaves and there are enough users to leave
            window.location.href = "chat-list.php";
        } else if (user != localStorage.getItem("username") && data != "Not enough users") { // Other user has been kicked and there are enough to kick
            location.reload();
        } else {
            alert("Not enough users to leave or kick");
        }
    });
}