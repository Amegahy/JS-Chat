/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Add messages to DB
    Contents:   - On message submission
                - Empty check on msg box
----------------------------------------------------------*/

/*
 *   On message submission
 */
function submitMsg(event) {
    var form = document.getElementsByClassName("msg-form")[0]; // Form 
    var msg = document.getElementsByClassName("msg-box")[0].value; // Message 
    var user = localStorage.getItem("username");

    event.preventDefault();
    $.post("php/chat-put.php", { msg: msg, user: user }).done(function(data) {
        form.reset();
        enableSubmit();
    });
}

/*
 *   Empty check on msg box
 */
function enableSubmit() {
    var submitBtn = document.getElementsByClassName("msg-submit")[0];
    var msgBox = document.getElementsByClassName("msg-box")[0];

    if (msgBox.value == "") {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}