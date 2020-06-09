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
        if (data.substr(0, 12) != "[{\"chats\":[\"" && !data.includes("No chats found") && !data.includes("Chat deleted")) { // Valid responses
            displayAlert("error", data);
        } else {
            display_chats(data);
        }
    });
}

/*
 *   Display chats
 */
function display_chats(response) {
    if (response == "No chats found" || response.includes("Chat deleted")) { // If no users
        // List item row
        var row = document.createElement("div");
        row.className = "row";
        // List item container
        var cont = document.createElement("div");
        cont.className = "col-12 p-3";
        row.appendChild(cont);
        // List item
        var itemCont = document.createElement("h3");
        itemCont.className = "p-3 rounded-lg text-center";
        itemCont.innerHTML = "Sorry you have no-one to talk to";
        cont.appendChild(itemCont);
        document.getElementsByClassName("chat-list")[0].appendChild(row);
    } else {
        var chats = JSON.parse(response);
        var username = localStorage.getItem("username");

        chats[0].chats.forEach(function(item, index) {
            if (item.includes(username)) { // Remove user's name from list item title
                item = item.replace(username + ",", "");
                item = item.replace("," + username, "");
            }
            // List item row
            var row = document.createElement("div");
            row.className = "row";
            // List item container
            var cont = document.createElement("div");
            cont.className = "col-12 p-3";
            row.appendChild(cont);
            // List item
            var itemCont = document.createElement("h3");
            itemCont.className = "list-item p-3 rounded-lg";
            itemCont.innerHTML = item;
            cont.appendChild(itemCont);
            document.getElementsByClassName("chat-list")[0].appendChild(row);
        })
    }
}