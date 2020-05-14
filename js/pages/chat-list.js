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
    pull_users(); // Pull users

    /*
     *   Event listeners
     */
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'user-item') {
            console.log("CLick");
        }
    });
    //  document.getElementsByClassName("row")[0].addEventListener('click', function() { alert("Click"); }); // Auto size msg-box
}