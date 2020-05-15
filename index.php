<!----------------------------------------------------------
    Author: Alex Megahy
    Description: Log in page
    Contents:   - Log in form
----------------------------------------------------------->

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/pages/login.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script src="js/components/login.js"></script>
    <script src="js/pages/index.js"></script>
    <title>Login</title>
</head>

<body>
    <!-- Log in form -->
    <div class="container p-3">
        <form action="php/login.php" method="POST" class="login-form text-center p-5">
            <div class="row d-block my-3">
                <label for="username">Username:</label>
                <input type="text" name="usr" class="usr" />
                <!-- Will be changed to username/email -->
            </div>
            <div class="row d-block my-3">
                <label for="pwd">Password:</label>
                <input type="password" name="pwd" class="pwd" />
            </div>
            <div class="row d-block my-3">
                <input type="submit" name="SubmitButton" class="login-submit" />
            </div>
        </form>
    </div>
</body>

</html>