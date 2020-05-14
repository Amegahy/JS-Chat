/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for chat.php
    Contents:   - On load functions
                - Event listeners                
----------------------------------------------------------*/

window.onload = function() {

    /*
     *   On load functions
     */
    load_msg(); // Pull messages
    document.getElementsByClassName("msg-submit")[0].disabled = true; // Submit button is default disabled

    /*
     *   Event listeners
     */
    document.getElementsByClassName("btn-load")[0].addEventListener("click", increaseRows); // Increase rows on click of btn-load
    document.getElementsByClassName("msg-box")[0].addEventListener('keypress', autoSize); // Auto size msg-box
    document.getElementsByClassName("msg-box")[0].addEventListener('keyup', enableSubmit); // Auto size msg-box
    document.getElementsByClassName("msg-submit")[0].addEventListener('click', submitMsg); // Auto size msg-box
}