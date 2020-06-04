/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Add users to existing chat
    Contents:   - Add users to chat
----------------------------------------------------------*/

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