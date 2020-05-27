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

    setInterval(function() {
        if (rows < 5) { // Reset $rows if too low
            rows = 5;
        }
        $.post("php/chat-pull.php", { rows: rows }).done(function(data) {
            display_msg(data);
        });
    }, 500);
}

/*
 *   Display json objects
 */
function display_msg(data) {
    if (data == "No chat found") { // Chat does not exist
        window.location.href = "chat-list.php";
    } else {
        var chat = ""; // Chat that will be displayed
        var parsed = JSON.parse(data); // Parsed JSON response
        var i = parsed.length - 1; // Iterator for json loop
        var chatTitle = document.getElementsByClassName("chat-title")[0].innerHTML;
        var chatPanel = document.getElementsByClassName("chat-panel")[0];

        if (chatTitle != parsed[0].chat_title) { // If new title
            document.getElementsByClassName("chat-title")[0].innerHTML = parsed[0].chat_title;
        }
        if (parsed.length == 1) { // Check if there are any messages
            chat = "<h3 class='text-center'>To start a conversation, send a message</h3>";
        } else {
            if (rows > parsed.length) { // Reset $rows if too high
                rows = parsed.length;
            }

            /*
             *   Loop through json objects
             */
            parsed.forEach(function() {
                if (i > 0) {
                    parsed[i].msg = parsed[i].msg.replace(/(?:\r\n|\r|\n)/g, '<br>'); // Add in any line breaks needed

                    chat += "<div class='row my-5 ";
                    if (parsed[i].name == "You") { // If this is the user's message, add the 'user' class
                        chat += "user";
                    }
                    chat += "'><p class='msg-time mx-2'>" + parsed[i].time + "</p>"; // Time
                    chat += "<div class='col-8 col-sm-6 col-md-4 p-3 msg'>";
                    chat += "<p class='msg-name'>" + parsed[i].name + "</p>"; // Test the current user name and see if the same, output "you"
                    chat += "<p>" + parsed[i].msg + "</p></div></div>";
                    i--; // Iterate back through array of messages
                }
            });
        }
        if (chat != current_chat) { // If there are new or changed messages found
            if (current_chat == "") { // If this is the first load chat
                chatPanel.innerHTML = chat;
                chatPanel.scrollTop = chatPanel.scrollHeight; // Set the scroll to the bottom of chat panel
            }
            chatPanel.innerHTML = chat;
            current_chat = chat;
        }
    }
}