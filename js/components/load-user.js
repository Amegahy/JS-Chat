/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Load in all users to chat with
    Contents:   - Pull in users         
                - Display pulled in users   
                    - Different types of display 
----------------------------------------------------------*/

/*
 *   Pull in users
 */
function pull_users(except, style) {
    $.post("php/chat-users.php", { exceptions: except }).done(function(data) {
        if (data.substr(0, 11) != "[{\"users\":[" && data != "No users to display") { // Only show alert with error
            displayAlert("error", data);
        } else {
            display_users(data, style);
        }
    });
}

/*
 *   Display pulled in users
 */
function display_users(data, style) {
    if (data == "No users to display") {
        // Append title
        var title = document.createElement("h3");
        title.innerHTML = ("No users to display");
        title.className = "text-center";
        document.getElementsByClassName("user-list")[0].appendChild(title);
    } else {
        var parsed = JSON.parse(data);
        var users = parsed[0].users;

        if (users.length > 0) {
            users.forEach(function(item) {
                // User list item row
                var row = document.createElement("div");
                row.className = "row";
                document.getElementsByClassName("user-list")[0].appendChild(row);
                // User list item container
                var cont = document.createElement("div");
                cont.className = "col-12 p-3";
                row.appendChild(cont);
                // User list item
                var itemCont = document.createElement("div");
                itemCont.className = "list-item rounded-lg";

                /*
                 *  Different types of display 
                 */
                if (style == "default") { // Users appear in divs
                    itemCont.className += " p-3";
                    itemCont.innerHTML = item;
                } else if (style == "checkbox") { // Users appear in checkboxes
                    itemCont.className += " checkbox";
                    // User list item label
                    var label = document.createElement("label");
                    label.className = "list-item-container p-3";
                    label.innerHTML = item;
                    itemCont.appendChild(label);
                    // User list item checkbox
                    var input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.className = "user-list-item";
                    input.value = item;
                    label.appendChild(input);
                }
                cont.appendChild(itemCont);
            });
        }
    }
}