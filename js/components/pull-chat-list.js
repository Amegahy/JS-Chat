/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull chats in to connect to
    Contents:   - Pull in chat list
                - Display chats
----------------------------------------------------------*/

/*
 *   Pull in chat list
 */
function pull_chat_list() {
    $.post("php/chat-list.php", {}).done(function(data) {
        display_chats(data);
    });
}

/*
 *   Display chats
 */
function display_chats(response) {
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
    document.getElementsByClassName("chat-list")[0].innerHTML = displayed_chats; // Auto size msg-box
}