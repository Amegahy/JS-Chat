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
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            display_chats(this.responseText);
        }
    }
    xmlhttp.open("GET", "php/db_chat-list.php", true);
    xmlhttp.send();
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
        chats[0].chats.forEach(function(item, index) {
            //var res = str.replace("Microsoft", "W3Schools);
            displayed_chats += "<div class='row'><div class='col-12 p-3'><h3 class='user-item'>" + item + "</h3></div></div>";
        })
    }
    document.getElementsByClassName("chat-list")[0].innerHTML = displayed_chats; // Auto size msg-box
}