/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Side menu containing options for user
    Contents:   - Open side menu
                - Close side menu 
----------------------------------------------------------*/

/*
 *   Open side menu
 */
function openMenu() {
    pullNN(); // Pull in nicknames
    document.getElementsByClassName("side-menu")[0].classList.add("show");
}

/*
 *  Close side menu 
 */
function closeMenu() {
    document.getElementsByClassName("side-menu")[0].classList.remove("show");
}