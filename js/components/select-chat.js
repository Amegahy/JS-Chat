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
    var chatArray = chat_item.split(",");

    if (chat.classList.contains("nn-0")) { // If not nicknamed, add username to title to search
        chatArray.push(username); // Add user back into chat 
        chat_item = chatArray.sort().join();
    }
    $.post("php/chat-setup.php", { chat_item: chat_item }).done(function(data) {
        if (data != "Chat created successfully" && data.length != 0) { // Valid responses
            displayAlert("error", data);
        } else {
            window.location.href = "chat.php";
        }
    });
}