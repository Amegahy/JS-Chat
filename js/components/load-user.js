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

    displayedUsers += "<input type='checkbox' class='user-list-item' name='vehicle1' value='Bik'> <label for='vehicle1'> I have a bike</label><br></br>";
    document.getElementsByClassName("user-list")[0].innerHTML = displayedUsers; // Increase rows on click of btn-load
}