/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Chat box for writing messages
    Contents:   - Auto size chat box 
----------------------------------------------------------*/

/*
 *   Auto size chat box 
 */
function autoSize() {
    var msgBox = document.getElementsByClassName("msg-box")[0];
    msgBox.style.height = "auto";
    msgBox.style.padding = "0";
    msgBox.style.height = msgBox.scrollHeight + "px";
}