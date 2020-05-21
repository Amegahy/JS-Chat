/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Add users to existing chat
    Contents:   - Increase rows
----------------------------------------------------------*/

/*
 *   Add users to chat
 */
function add_user(users) {
    var username = localStorage.getItem("username"); // Username

    if (users.length == 0) { // User has not selected any new users
        console.log("None");
        return;
    } else {
        users = users.sort().toString(); // Sort array for db
        $.post("php/add-users.php", { users: users }).done(function(data) {
            location.reload();
        });
    }
}