/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pop up to select users to existing chat
    Contents:   - Display pop up
                - Timeout to read for users (Callback)
                - Append user container
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function addUserPopup() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pull_users("users", "checkbox"); // Display all users except the users in chat in checkboxes

    /*
     *   Timeout to read for users (Callback)
     */
    setTimeout(function() {
        if (document.getElementsByClassName("user-list-item").length == 0) {
            displayAlert("error", "No users to add")
        } else {
            // Append submit button
            var e = document.createElement("button");
            e.innerHTML = ("Submit added users");
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