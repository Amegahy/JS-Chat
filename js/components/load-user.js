/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Load in all users to chat with
    Contents:   - Pull in users         
                - Display pulled in users in checkboxes     
----------------------------------------------------------*/

/*
 *   Pull in users
 */
function pull_users(except, style) {
    $.post("php/chat-users.php", { exceptions: except }).done(function(data) {
        display_users(data, style);
    });
}

/*
 *   Display pulled in users in checkboxes
 */
function display_users(data, style) {
    var parsed = JSON.parse(data);
    var users = parsed[0].users;
    var displayedUsers = ""; // HTML to display

    if (users.length > 0) {
        users.forEach(function(item) {
            if (style == "default") { // Users appear in divs
                displayedUsers += "<div class='row'><div class='col-12 p-3'><div class='list-item rounded-lg p-3'>" + item + "</div></div></div>";
            } else if (style == "checkbox") { // Users appear in checkboxes
                displayedUsers += "<div class='row'><div class='col-12 p-3'><div class='checkbox list-item rounded-lg'><label class='list-item-container p-3'><input type='checkbox' class='user-list-item' value='" + item + "'>" + item + "</label></div></div></div>";
            }
        });
    }
    document.getElementsByClassName("user-list")[0].innerHTML = displayedUsers; // Display users
}