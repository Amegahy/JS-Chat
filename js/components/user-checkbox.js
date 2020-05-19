/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Checks the user checkboxes on new-chat.php
    Contents:   - Check if users is checked or not
----------------------------------------------------------*/

/*
 *   Check if users is checked or not
 */
function user_checkbox(user, arr) {
    if (user.checked == true) { // If checked then add to array
        arr.push(user.value);
    } else { // Else remove as it's unchecked
        var index = arr.indexOf(user.value);
        delete arr[index];
    }
    return arr;
}