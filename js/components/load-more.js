/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Load more messages
    Contents:   - Increase rows on top scroll
----------------------------------------------------------*/

/*
 *   Increase rows on top scroll
 */
function checkScroll() {
    var chatPanel = document.getElementsByClassName("chat-panel")[0];

    if (chatPanel.scrollTop == 0) {
        rows += 5; // Increment the number of rows by 5
    }
}