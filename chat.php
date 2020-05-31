<!----------------------------------------------------------
    Author: Alex Megahy
    Description: Main chat page
    Contents:   - Load more button
                - Chat panel containing messages
                - Message submission form
                - Load more button
----------------------------------------------------------->

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/pages/chat.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script src="js/components/load-user.js"></script>
    <script src="js/components/user-checkbox.js"></script>
    <script src="js/components/load-more.js"></script>
    <script src="js/components/pull-chat.js"></script>
    <script src="js/components/submit-msg.js"></script>
    <script src="js/components/chat-box.js"></script>
    <script src="js/components/add-user.js"></script>
    <script src="js/components/add-users-popup.js"></script>
    <script src="js/components/nickname-user.js"></script>
    <script src="js/components/nickname-chat.js"></script>
    <script src="js/components/popup.js"></script>
    <script src="js/components/kick-user.js"></script>
    <script src="js/components/pull-nicknames.js"></script>
    <script src="js/components/side-menu.js"></script>
    <script src="js/pages/chat.js"></script>
    <title>Practice chat</title>
</head>

<body>
    <!-- Full screen pop up -->
    <div class="full-screen">
        <div class="close-fs">X</div>
        <div class="fs container m-auto">
        </div>
    </div>
    <!-- Side menu -->
    <div class="side-menu cotainer p-3">
        <button class="close-menu">X</button>
        <!-- Nickname the users -->
        <button class="user-nickname-btn mr-0">Nickname users</button>
        <!-- Nickname the chat -->
        <button class="chat-nickname-btn mr-0">Nickname chat</button>
        <!-- Add users button -->
        <button class="add-user mr-0">Add user</button>
        <!-- Kick users button -->
        <button class="kick-user mr-0">Kick user</button>
        <!-- Leave chat button -->
        <button class="leave-chat mr-0">Leave chat</button>
        <!-- List of users and their nicknames-->
        <h3 class="mt-5"><u>User nicknames</u></h3>
        <div class="container user-NN-list"></div>
    </div>
    <!-- Open side menu -->
    <button class="open-menu mr-3 my-2">i</button>
    <div class="container p-3">
        <h1 class="chat-title text-center my-3"></h1>
        <!-- Chat panel containing messages -->
        <div class="container my-3 p-3 chat-panel">
        </div>
        <!-- Message submission form -->
        <div class="container p-3">
            <form class="msg-form">
                <textarea name="msg" class="msg-box p-2" rows="1" placeholder="Enter message...."></textarea>
                <input type="submit" name="SubmitButton" class="msg-submit rounded-0" />
            </form>
        </div>
    </div>
</body>

</html>