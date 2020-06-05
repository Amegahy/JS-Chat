/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Submit users to chat with
    Contents:   - Submit users  
----------------------------------------------------------*/

/*
 *   Submit users
 */
function submit_users(checkedUsers) {
    if (checkedUsers.length == 0) { // Stop user from creating chat with just them
        alert("Please select a user to chat with");
        return;
    } else {
        var username = localStorage.getItem("username");

        checkedUsers.push(username);
        checkedUsers = checkedUsers.sort().join();
        $.post("php/chat-setup.php", { chat_item: checkedUsers }).done(function(data) {
            if (data != "Chat created successfully" && data.length != 0) { // Valid responses
                displayAlert("error", data);
            } else {
                window.location.href = "chat.php";
            }
        });
    }
}