/*----------------------------------------------------------
    Author: Alex Megahy
    Description: Display all nicknames for users in current chat
    Contents:   - Pull nicknames
                - Display nicknames
-----------------------------------------------------------*/

/*
 *   Pull nicknames
 */
function pullNN() {
    $.post("php/pull-nicknames.php").done(function(data) {
        displayNN(data);
    });
}

/*
 *   Display nicknames
 */
function displayNN(data) {
    var parsed = JSON.parse(data); // Parsed JSON response
    document.getElementsByClassName("container user-NN-list")[0].innerHTML = ""; // Reset container

    parsed.forEach(function(item, index) {
        // Creat row
        var row = document.createElement("div");
        row.className = "row d-block";
        document.getElementsByClassName("container user-NN-list")[0].appendChild(row);
        // Create username
        var user = document.createElement("h3");
        user.innerHTML = item.name;
        document.getElementsByClassName("row d-block")[index].appendChild(user);
        // Create nickname
        if (item.nn != "") { // If there is a nickname
            var nn = document.createElement("h4");
            nn.innerHTML = item.nn;
            document.getElementsByClassName("row d-block")[index].appendChild(nn);
        }
    });


}