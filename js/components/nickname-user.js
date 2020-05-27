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
    pull_users("notChat", "default"); // Display all users bar those not in the chat
    togglePopup("nickname-u");
}

/*
 *  Set up for new nickname
 */
function setUpNickname(user) {
    clearPopup();
    // Heading
    var e = document.createElement("h3");
    e.innerHTML = "Set a new nickname for " + user;
    e.className = "text-center";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    // Input for nickname
    var e = document.createElement("input");
    e.className = "nn-input mx-auto d-block my-3 col-12 col-sm-8 col-md-6";
    e.placeholder = "Please enter new nickname here...";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
    // Submit nickname 
    var e = document.createElement("button");
    e.className = "submit-nn";
    e.innerHTML = "Submit nickname";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(e);
}

/*
 *  Nickname user
 */
function nicknameUser(user, nickname) {
    $.post("php/nickname-user.php", { user: user, nickname: nickname }).done(function(data) {
        console.log(data);
        closePopup();
    });
}