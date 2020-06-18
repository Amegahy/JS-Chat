/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Add users to existing chat
    Contents:   - Display pop up
                - Timeout to read for users (Callback)
                - Append user container
                - Add users to chat
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function addUserPopup() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pullUsers("users", "checkbox"); // Display all users except the users in chat in checkboxes

    /*
     *   Timeout to read for users (Callback)
     */
    setTimeout(function() {
        var fs = document.getElementsByClassName("p-3 text-left user-list")[0]; // Full screen popup

        if (fs.childElementCount == 0 || fs.firstElementChild.innerHTML == "No users to display") { // No users to add
            displayAlert("error", "No users to add")
        } else {
            // Heading
            var h = document.createElement("h3"); // Heading 
            h.innerHTML = "Please select a user to add";
            h.className = "text-center my-3";
            document.getElementsByClassName("fs container m-auto")[0].prepend(h);
            // Append submit button
            var e = document.createElement("button");
            e.innerHTML = ("Add users");
            e.className = "submit-add-user";
            document.getElementsByClassName("fs container m-auto")[0].appendChild(e);

            togglePopup("add-u");
        }
    }, 100);
}

/*
 *   Append user container
 */
function buildUserList() {
    var e = document.createElement("div");
    e.className = "p-3 text-left user-list";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
}

/*
 *   Add users to chat
 */
function add_user(users) {
    var username = localStorage.getItem("username"); // Username

    if (users.length == 0) { // User has not selected any new users
        return;
    } else {
        users = users.sort().toString(); // Sort array for db
        $.post("php/add-users.php", { users: users }).done(function(data) {
            // Display response
            if (data.substr(-17) == "added to the chat") {
                displayAlert("success", data);
            } else {
                displayAlert("error", data);
            }
        });
    }
}