<!----------------------------------------------------------
    Author: Alex Megahy
    Description: Main chat page
    Contents:   - Load more button
                - Chat panel containing messages
                - Message submission form
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
    <script src="js/pages/chat.js"></script>
    <title>Practice chat</title>
</head>

<body>
    <!-- Add users list -->
    <div class="add-user-popup">
        <div class="user-list"></div>
        <button class="submit-add-user">Submit added users</button>
    </div>
    <!-- Chat panel containing messages -->
    <div class="container p-3">
        <h1 class="chat-title text-center my-3"></h1>
        <button class="add-user">Add user</button>
        <div class="container p-3 chat-panel">
        </div>
        <!-- Message submission form -->
        <div class="container p-3">
            <form class="msg-form">
                <textarea name="msg" class="msg-box p-2" rows="1" placeholder="Enter message...."></textarea>
                <input type="submit" name="SubmitButton" class="msg-submit" />
            </form>
        </div>
        <!-- Load more button -->
        <div class="row">
            <button type="button" class="btn-load mx-auto">Load More</button>
        </div>
    </div>
</body>

</html>