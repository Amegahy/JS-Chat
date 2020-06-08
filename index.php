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
    <script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
    <script src="js/components/login.js"></script>
    <script src="js/components/alert.js"></script>
    <script src="js/pages/index.js"></script>
    <title>Login</title>
</head>

<body class="vh-100">
    <!-- Log in form -->
    <div class="container p-3 h-100 d-flex">
        <form action="php/login.php" method="POST" class="login-form text-center p-5 m-auto w-100">
            <div class="row d-block my-3">
                <label for="username">Username:</label>
                <input type="text" name="usr" class="usr" />
            </div>
            <div class="row d-block my-3">
                <label for="pwd">Password:</label>
                <input type="password" name="pwd" class="pwd" />
            </div>
            <div class="row d-block my-3">
                <input type="submit" name="SubmitButton" class="login-submit" value="Log in" />
            </div>
        </form>
    </div>
</body>

</html>