/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Alert user to either success or failure
    Contents:   - Display alert
                - Remove alert
----------------------------------------------------------*/

/*
 *   Display alert
 */
function displayAlert(type, message) {
    // Alert container
    var alertCont = document.createElement("div");
    alertCont.className = "container alert";
    document.body.prepend(alertCont);
    // Alert message
    var alertMsg = document.createElement("h5");
    alertMsg.innerHTML = (message);
    alertMsg.className = "text-center";
    document.getElementsByClassName("alert")[0].appendChild(alertMsg);
    // Close button on alert
    var close = document.createElement("div");
    close.innerHTML = ("X");
    close.className = "close-alert";
    document.getElementsByClassName("alert")[0].appendChild(close);
    // Display alert with transition
    setTimeout(function() {
        alertCont.classList.add("display-alert");
        alertCont.classList.add(type);
    }, 100);

    setTimeout(closeAlert, 2000);
}

/*
 *   Remove alert
 */
function closeAlert() {
    var alertBox = document.getElementsByClassName("alert")[0];
    if (alertBox != null && alertBox.classList.contains("success")) { // Alert has not been closed already
        location.reload();
    } else if (alertBox != null && alertBox.classList.contains("error")) {
        //        document.body.removeChild(document.body.childNodes[0]);
    }
}