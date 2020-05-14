/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pull users in to chat to
    Contents:   - Pull in users
                - Display users
----------------------------------------------------------*/

/*
 *   Pull in users
 */
function pull_users() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            display_users(this.responseText);
            //            console.log(names[0].users[0]);
        }
    }
    xmlhttp.open("GET", "php/db_chat-list.php", true);
    xmlhttp.send();
}

/*
 *   Display users
 */
function display_users(users) {
    var names = JSON.parse(users);
    var displayed_users = ""; // Users to be displayed

    if (names.length == 0) { // If no users
        displayed_users = "Sorry you have no-one to talk to";
    } else {
        names[0].users.forEach(function(item, index) {
            displayed_users += "<div class='row'><div class='col-12 p-3'><h3 class='user-item'>" + item + "</h3></div></div>";
        })
    }
    document.getElementsByClassName("chat-user-list")[0].innerHTML = displayed_users; // Auto size msg-box
}