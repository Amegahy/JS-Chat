/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Checks the user checkboxes on new-chat.php
    Contents:   - Check if users is checked or not
----------------------------------------------------------*/

/*
 *   Check if users is checked or not
 */
function userCheckbox(user, arr) {
    var container = user.parentElement.parentElement.classList;

    if (user.checked == true) { // If checked then add to array
        arr.push(user.value);
        container.add("selected"); // Add highlighter class
    } else { // Else remove as it's unchecked
        var index = arr.indexOf(user.value);

        container.remove("selected");
        if (index !== -1) { // Remove user from array
            arr.splice(index, 1)
        };
    }
    return arr;
}