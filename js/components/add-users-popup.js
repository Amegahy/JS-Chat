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
    buildUserList(); // Build the space for the user list
    pull_users("users", "checkbox"); // Display all users except the users in chat in checkboxes

    /*
     *   Timeout to read for users (Callback)
     */
    setTimeout(function() {
        if (document.getElementsByClassName("user-list")[0].innerHTML == "") {
            alert("No users to add");
        } else {
            // Append submit button
            var e = document.createElement("button");
            var text = document.createTextNode("Submit added users");
            e.className = "submit-add-user";
            e.appendChild(text);
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