/*----------------------------------------------------------
    Author: Alex Megahy
    Description: On load function listeners for index.php
    Contents:   - Global variables
                - Event listeners                
----------------------------------------------------------*/

window.onload = function() {

    /*
     *   Global variables
     */
    var form = document.getElementsByClassName("login-form")[0]; // Login form

    /*
     *   Event listeners
     */
    form.reset(); // Reset form on page load
    form.addEventListener("submit", setUsr); // Set user
}