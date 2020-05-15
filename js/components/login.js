/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Login user
    Contents:   - Set username
----------------------------------------------------------*/

/*
 *   Set username
 */
function set_usr(event) {
    var user = document.getElementsByClassName("usr")[0].value;
    event.preventDefault();
    $.post("php/login.php", { usr: user }).done(function(data) {
        localStorage.setItem("username", data);
        window.location.href = "chat-list.php";
    });
}