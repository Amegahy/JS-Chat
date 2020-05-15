/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Select user to chat with
    Contents:   - Set user and move to chat
----------------------------------------------------------*/

/*
 *   Set user and move to chat
 */
function select_user(user) {
    var usersArray = user.innerHTML.split(",");
    //localStorage.setItem("chat-user", usersArray.innerHTML);
    console.log(usersArray);
    // window.location.href = "chat.php";
}