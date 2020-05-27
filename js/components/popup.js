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
        fs.classList = "full-screen";
        fs.classList.add(type); // Add the type of popup
    } else { // Toggle popup off
        closePopup();
    }
}

/*
 *   Close pop up button 
 */
function closePopup() {
    var fs = document.getElementsByClassName("full-screen")[0];
    fs.classList = "full-screen";
    fs.classList.add("d-none");
    clearPopup();
}

/*
 *  Clear popup
 */
function clearPopup() {
    var cont = document.getElementsByClassName("fs container m-auto")[0]; // Full screen container
    var fs = document.getElementsByClassName("full-screen")[0];

    cont.innerHTML = "";
}