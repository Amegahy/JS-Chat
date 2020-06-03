<!----------------------------------------------------------
    Author: Alex Megahy
    Description: Start new chat with user
    Contents:   - Chat panel containing users
----------------------------------------------------------->

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/pages/new-chat.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script src="js/components/submit-users.js"></script>
    <script src="js/components/load-user.js"></script>
    <script src="js/components/user-checkbox.js"></script>
    <script src="js/components/select-chat.js"></script>
    <script src="js/components/block-users.js"></script>
    <script src="js/components/popup.js"></script>
    <script src="js/components/add-users-popup.js"></script>
    <script src="js/components/load-user.js"></script>
    <script src="js/pages/new-chat.js"></script>
    <title>New chat</title>
</head>

<body>
    <!-- Full screen pop up -->
    <div class="full-screen">
        <div class="close-fs">X</div>
        <div class="fs container m-auto">
        </div>
    </div>
    <!-- Chat panel containing users -->
    <div class="container p-3">
        <h1 class="text-center my-3">Select a user to talk to</h1>
        <div class="container p-3 text-left user-list">
        </div>
        <div class="row mx-0">
            <button class="submit-users ml-0">Start chat</button>
            <button class="block-users mr-0">Block user</button>
            <button class="unblock-users mr-0">Unblock user</button>
        </div>
    </div>
</body>

</html>