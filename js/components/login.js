/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Validates login systems
    Contents:   - 'on' functions for login
                - Check username validity
                - Check password validity
----------------------------------------------------------*/

/*
 *   'on' functions for login
 */
$(document).ready(function() {
    $(".login-submit").click(function() {
        username_check($(".usr").val());
        password_check($(".pwd").val());
    });
});

/*
 *   Check username validity
 */
function username_check(details) {
    alert(details);
}

/*
 *   Check password validity
 */
function password_check(details) {
    alert(details);
}