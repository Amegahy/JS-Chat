/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Nickname user in chat
    Contents:   - Display pop up
                - Set up for new nickname
                - Nickname user
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function nicknameUserList() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pullUsers("notChat-unblocked", "default"); // Display all users bar those not in the chat
    togglePopup("nickname-u");

    // Heading
    var h = document.createElement("h3"); // Heading 
    h.innerHTML = "Please select a user";
    h.className = "text-center my-3";
    document.getElementsByClassName("fs container m-auto")[0].prepend(h);
}

/*
 *  Set up for new nickname
 */
function setUpNickname(user) {
    clearPopup();
    // Heading
    var e = document.createElement("h3");
    var headingText = document.createTextNode("Set a new nickname for " + user);
    e.appendChild(headingText);
    e.className = "text-center my-3";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    // Input for nickname
    var e = document.createElement("input");
    e.className = "nn-input mx-auto d-block my-4 col-12 col-sm-8 col-md-6";
    e.placeholder = "Please enter new nickname here...";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    // Submit nickname 
    var e = document.createElement("button");
    e.className = "submit-nn my-3";
    e.innerHTML = "Set nickname";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
}

/*
 *  Nickname user
 */
function nicknameUser(user, nickname) {
    if (nickname.length == 0) {
        alert("Please enter a nickname");
        return;
    } else {
        $.post("php/nickname-user.php", { user: user, nickname: nickname }).done(function(data) {
            if (data.includes(" nicknamed ")) {
                displayAlert("success", data);
            } else {
                displayAlert("error", data);
            }
        });
    }
}