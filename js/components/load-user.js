/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Load in all users to chat with
    Contents:   - On load functions           
                - Event listeners                
----------------------------------------------------------*/

/*
 *   Pull in users
 */
function pull_users() {
    $.post("php/db_chat-users.php", {}).done(function(data) {
        display_users(data);
    });
}

function display_users(data) {
    var parsed = JSON.parse(data);
    var users = parsed[0].users;
    var displayedUsers = ""; // HTML to display

    users.forEach(function(item) {
        displayedUsers += "<input type='checkbox' class='user-list-item' name='" + item + "' value='" + item + "'> <label for='" + item + "'>" + item + "</label>";
    });
    document.getElementsByClassName("user-list")[0].innerHTML = displayedUsers; // Increase rows on click of btn-load
}