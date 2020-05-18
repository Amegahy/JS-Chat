/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Display chats to connect to
    Contents:   - Display chats
----------------------------------------------------------*/

/*
 *   Display chats
 */
function display_chats(response, location) {
    var chats = JSON.parse(response);
    var displayed_chats = ""; // Users to be displayed

    if (chats.length == 0) { // If no users
        displayed_chats = "Sorry you have no-one to talk to";
    } else {
        var username = localStorage.getItem("username");

        chats[0].chats.forEach(function(item, index) {
            if (item.includes(username)) { // Remove user's name from list item title
                item = item.replace(username, "You");
            }
            displayed_chats += "<div class='row'><div class='col-12 p-3'><h3 class='chat-list-item'>" + item + "</h3></div></div>";
        })
    }
    document.getElementsByClassName(location)[0].innerHTML = displayed_chats; // Auto size msg-box
}