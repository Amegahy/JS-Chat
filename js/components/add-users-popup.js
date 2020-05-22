/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Pop up to select users to existing chat
    Contents:   - Display pop up
----------------------------------------------------------*/

/*
 *   Display pop up
 */
function add_user_popup() {
    if (document.getElementsByClassName("user-list")[0].innerHTML == "") { // No users added
        alert("No users to add");
        return;
    } else {
        document.getElementsByClassName("full-screen")[0].classList.remove("d-none"); // Add selected users to chat
    }

}