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
    var data = document.getElementsByClassName("msg-box")[0].value; // Message 

    event.preventDefault();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            form.reset();
            enableSubmit();
        }
    }
    xmlhttp.open("GET", "php/db_chat-put.php?msg=" + data, true);
    xmlhttp.send();
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