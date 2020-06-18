/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Nickname chat
    Contents:   - Display pop up with input
                - Submit chat nickname
----------------------------------------------------------*/

/*
 *   Display pop up with input
 */

function nicknameChat() {
    clearPopup();
    // Heading
    var e = document.createElement("h3");
    e.innerHTML = "Set a new nickname for chat";
    e.className = "text-center my-3";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    // Input for nickname
    var e = document.createElement("input");
    e.className = "cn-input mx-auto my-4 d-block my-3 col-12 col-sm-8 col-md-6";
    e.placeholder = "Please enter new chat name here...";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    // Submit nickname 
    var e = document.createElement("button");
    e.className = "submit-cn my-3";
    e.innerHTML = "Set chat name";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    togglePopup("nickname-c");
}

/*
 *   Submit chat nickname
 */
function submitChatName(newChat) {
    var chatTitle = document.getElementsByClassName("chat-title")[0].innerHTML;

    if (newChat.length == 0 || newChat == chatTitle) {
        alert("Please input a new chat name");
        return;
    } else {
        $.post("php/nickname-chat.php", { nickname: newChat }).done(function(data) {
            if (data.substr(0, 21) == "Chat name updated to ") {
                displayAlert("success", data);
            } else {
                displayAlert("error", data);
            }
        });
    }
}