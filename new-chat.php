<!----------------------------------------------------------
    Author: Alex Megahy
    Description: Start new chat with user
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
    <script src="js/components/display-chats.js"></script>
    <script src="js/components/load-user.js"></script>
    <script src="js/components/select-chat.js"></script>
    <script src="js/pages/new-chat.js"></script>
    <title>New chat</title>
</head>

<body>
    <!-- Chat panel containing messages -->
    <div class="container p-3">
        <h1 class="text-center my-3">Select a user to talk to</h1>
        <div class="container p-3 text-left user-list">
        </div>
    </div>
</body>

</html>