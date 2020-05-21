/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for index.php
    Contents:   - Event listeners                
----------------------------------------------------------*/

window.onload = function() {

    /*
     *   Event listeners
     */
    document.getElementsByClassName("login-form")[0].addEventListener("submit", set_usr); // Increase rows on click of btn-load
}