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
    pullUsers("notChat-U", "default"); // Display all users bar those not in the chat and the current user

    /*
     *   Timeout to read for users (Callback)
     */
    setTimeout(function() {
        var user = localStorage.getItem("username");
        var fs = document.getElementsByClassName("p-3 text-left user-list")[0]; // Full screen popup

        if (fs.childElementCount <= 1) { // Only 2 users are in the chat
            displayAlert("error", "No users to kick");
        } else {
            togglePopup("kick");
            // Heading
            var h = document.createElement("h3"); // Heading 
            h.innerHTML = "Please select a user to kick";
            h.className = "text-center my-3";
            document.getElementsByClassName("fs container m-auto")[0].prepend(h);
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