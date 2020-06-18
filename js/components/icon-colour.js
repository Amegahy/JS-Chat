/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Select the icon colour for individual users
    Contents:   - Display pop up     
                - Choose the user icon colour   
                - Submit user icon colour   
----------------------------------------------------------*/

/*
 *   Display pop up 
 */
function iconColPopup() {
    clearPopup();
    buildUserList(); // Build the space for the user list
    pullUsers("notChat-unblocked", "default"); // Display all users bar those not in the chat
    togglePopup("colour");

    // Heading
    var h = document.createElement("h3"); // Heading 
    h.innerHTML = "Please select a user";
    h.className = "text-center my-3";
    document.getElementsByClassName("fs container m-auto")[0].prepend(h);
}

/*
 *   Choose the user icon colour
 */
function iconColour(user) {
    var colours = ["red", "purple", "orange", "yellow", "green", "brown", "pink", "acqua"]; // Colours array
    var h = document.createElement("h3"); // Heading 
    var row = document.createElement("div"); // Row

    clearPopup();
    // Heading
    var headingText = document.createTextNode("Set a icon colour for " + user);
    h.appendChild(headingText);
    h.className = "text-center my-3";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(h);
    // Colour blocks row
    row.className = "row my-3 mx-0";
    document.getElementsByClassName("fs container m-auto")[0].appendChild(row);
    // Colour blocks
    colours.forEach(function(item, index) {
        var cont = document.createElement("div"); // Container for colour
        var block = document.createElement("div"); // Colour circle

        // Container
        cont.className = "col-6 col-sm-3 icon-cont my-4";
        document.getElementsByClassName("row my-3 mx-0")[0].appendChild(cont);
        // Circle
        block.className = "m-auto icon " + item;
        document.getElementsByClassName("col-6 col-sm-3 icon-cont my-4")[index].appendChild(block);
    });
}

/*
 *   Submit user icon colour
 */
function submitIconCol(user, colour) {
    $.post("php/icon-colour.php", { user: user, colour: colour }).done(function(data) {
        if (data.substr(-22) == "'s icon colour updated") {
            displayAlert("success", data);
        } else {
            displayAlert("error", data);
        }
    });
}