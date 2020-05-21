/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Retrieve conversation messages from DB
    Contents:   - Interval load messages
                - Display json objects
                - Loop through json objects
                - Unique items in names array
    ----------------------------------------------------------*/

var rows = 5; // Max default number of rows on screen
var current_chat = ""; // Stores the current chat json
var username = localStorage.getItem("username"); // Username 

/*
 *   Interval load messages
 */
function load_msg() {
    var chatUser = localStorage.getItem("chat-user"); // Chat selected

    setInterval(function() {
        if (rows < 5) { // Reset $rows if too low
            rows = 5;
        }
        $.post("php/chat-pull.php", { rows: rows, user: chatUser }).done(function(data) {
            display_msg(data);
        });
    }, 500);
}

/*
 *   Display json objects
 */
function display_msg(data) {
    var chat = ""; // Chat that will be displayed
    var parsed = JSON.parse(data); // Parsed JSON response
    var i = parsed.length - 1; // Iterator for json loop

    document.getElementsByClassName("chat-title")[0].innerHTML = parsed[0].chat_title; // Assign title
    if (parsed.length == 1) { // Check if there are any messages
        chat = "To start a conversation, send a message";
    } else {
        if (rows > parsed.length) { // Reset $rows if too high
            rows = parsed.length;
        }

        /*
         *   Loop through json objects
         */
        parsed.forEach(function() {
            if (i > 0) {
                chat += "<div class='row my-5 ";
                if (parsed[i].name == username) { // If this is the user's message, add the 'user' class
                    chat += "user";
                    parsed[i].name = "You";
                }
                chat += "'>";
                chat += "<p class='msg-time mx-2'>" + parsed[i].time + "</p>";
                chat += "<div class='col-8 col-sm-6 col-md-4 p-3 msg'>";
                parsed[i].msg = parsed[i].msg.replace(/(?:\r\n|\r|\n)/g, '<br>'); // Add in any line breaks needed
                chat += "<p class='msg-name'>" + parsed[i].name + "</p>"; // Test the current user name and see if the same, output "you"
                chat += "<p>" + parsed[i].msg + "</p>";
                i--;
                chat += "</div></div>";
            }
        });
    }
    if (chat != current_chat) { // If there are new or changed messages found
        document.getElementsByClassName("chat-panel")[0].innerHTML = chat;
        current_chat = chat;
    }
}