/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Open and close pop up
    Contents:   - Toggle pop up
                - Close pop up button
                - Clear popup 
----------------------------------------------------------*/

/*
 *   Toggle pop up
 */
function togglePopup(type) {
    var fs = document.getElementsByClassName("full-screen")[0]; // Full screen 

    if (fs.classList.contains("d-none")) { // Toggle popup on
        fs.classList.remove("d-none");
    } else { // Toggle popup off
        fs.classList.add("d-none");
        clearPopup();
    }
    fs.classList.add(type); // Add the type of popup
}

/*
 *   Close pop up button 
 */
function closePopup() {
    var fs = document.getElementsByClassName("full-screen")[0];

    fs.classList.add("d-none");
    clearPopup();
}

/*
 *  Clear popup
 */
function clearPopup() {
    var cont = document.getElementsByClassName("fs container m-auto")[0]; // Full screen container
    cont.innerHTML = "";
}