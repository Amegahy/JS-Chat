/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Select chat to enter
    Contents:   - Pass chat to DB
----------------------------------------------------------*/

/*
 *   Pass chat to DB
 */
function select_chat(chat) {
    var chat_item = chat.innerHTML; // Chat item clicked on
    var username = localStorage.getItem("username"); // Username

    if (chat_item.includes("You")) { // Replace "You" with the username to select table
        chat_item = chat_item.replace("You", username);
    }
    var chatArray = chat_item.split(",");

    chat_item = chatArray.sort().join();
    $.post("php/chat-setup.php", { chat_item: chat_item }).done(function(data) {
        if (data != "Chat created successfully" && data.length != 0) { // Valid responses
            displayAlert("error", data);
        } else {
            window.location.href = "chat.php";
        }
    });
}