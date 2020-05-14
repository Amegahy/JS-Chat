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
    <script src="js/chat-box.js"></script>
    <script src="js/chat-name.js"></script>
    <script src="js/pull-chat.js"></script>
    <script src="js/load-more.js"></script>
    <script src="js/submit-msg.js"></script>
    <title>Practice chat</title>
</head>

<body>
    <!-- Chat panel containing messages -->
    <div class="container p-3">
        <h1 class="chat-title text-center my-3"></h1>
        <div class="container p-3 chat-panel">
        </div>
        <!-- Message submission form -->
        <div class="container p-3">
            <form class="msg-form">
                <textarea name="msg" class="msg-box p-2" rows="1" placeholder="Enter message...."></textarea>
                <input type="submit" name="SubmitButton" class="msg-submit"/>
            </form>      
        </div>
        <!-- Load more button -->
        <div class="row">
            <button type="button" class="btn-load mx-auto">Load More</button>
        </div>
    </div>
</body>

</html>