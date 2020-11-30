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
function loadMsg(type) {
    $.post("php/chat-pull.php", { rows: rows }).done(function(data) {
        if (data.substr(0, 15) != "[{\"chat_title\":" && data != "No chat found") { // Valid responses
            displayAlert("error", data);
        } else {
            display_msg(data, type);
        }
    });
}

/*
 *   Display json objects
 */
function display_msg(data, type) {
    if (data == "No chat found") { // Chat does not exist
        window.location.href = "chat-list.php";
    } else {
        var parsed = JSON.parse(data); // Parsed JSON response
        var chatPanel = document.getElementsByClassName("chat-panel")[0]; // Main chat panel
        var chatTitle = document.getElementsByClassName("chat-title")[0]; // Chat title
        var parsedTitle = parsed[0].chat_title; // Chat title pulled in
        var lastMsg = chatPanel.lastChild; // Last child in chat panel (msg)
        var i = parsed.length - 1; // Iterator for json loop

        // If new title
        if (chatTitle.innerText != parsedTitle) {
            var headingText = document.createTextNode(parsedTitle);
            chatTitle.innerHTML = "";
            chatTitle.appendChild(headingText);
        }

        // If empty
        if (parsed.length == 1 && chatPanel.innerHTML == "") {
            var empty = document.createElement("h3");
            empty.className = "text-center";
            empty.innerHTML = "To start a conversation, send a message.";
            chatPanel.appendChild(empty);
        }

        // Check chat
        if (type == "load" || chatPanel.innerHTML == "" || (parsed.length > 1 && chatPanel.firstChild.innerHTML == "To start a conversation, send a message.") || (parsed.length > 1 && parsed[1].msg != lastMsg.lastChild.lastChild.innerText)) {
            chatPanel.innerHTML = "";
            parsed.forEach(function() {
                if (i > 0) {
                    parsed[i].msg = parsed[i].msg.replace(/(?:\r\n|\r|\n)/g, '<br>'); // Add in any line breaks needed
                    // Msg row
                    var row = document.createElement("div");
                    row.className = "row my-5 ";
                    if (parsed[i].name == "You") { // If this is the user's message, add the 'user' class
                        row.className += "user";
                    }
                    chatPanel.appendChild(row);
                    // Msg time
                    var time = document.createElement("p");
                    time.className = "msg-time mx-2";
                    time.innerHTML = parsed[i].time;
                    row.appendChild(time);
                    // Msg block
                    var block = document.createElement("div");
                    block.className = "col-8 col-sm-6 col-md-4 p-3 msg " + parsed[i].col;
                    row.appendChild(block);
                    // Msg name
                    var name = document.createElement("p");
                    var nameText = document.createTextNode(parsed[i].name);
                    name.appendChild(nameText);
                    name.className = "msg-name";
                    block.appendChild(name);
                    // Msg
                    var msg = document.createElement("p");
                    msg.innerHTML = parsed[i].msg;
                    msg.className = "msg" + parsed[i].col;
                    block.appendChild(msg);
                    i--; // Iterate back through array of messages
                }
            });
        }
    }
}