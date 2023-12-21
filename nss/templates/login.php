<?php
   ob_start();
   include("config.php");
   session_start();
   ?>

<!DOCTYPE html>
<html>
<title>SIESGST NSS PORTAL</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <img src='img/nss.jpg' class='image'>
        <a class="navbar-brand" href="index.html">NSS PORTAL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center custom-navbar">
                <li class="nav-item-active">
                    <a class="nav-link" aria-current="page" href="index.html">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aboutus.html">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="campaign.html">CAMPAIGN</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ACTIVITIES
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">BLOOD DONATION</a></li>
                      <li><a class="dropdown-item" href="#">PLANTATION DRIVE</a></li>
                      <li><a class="dropdown-item" href="#">CLEANUP DRIVE</a></li>
                  </ul>
              </li>
                <li class="nav-item">
                    <a class="nav-link" href="heads.html">HEADS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="join.html">JOINING NSS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">LOGIN</a>
              </li>
            </ul>
        </div>
    </div>
</nav>

<div class='box2'>
    <div class="container mt-5">
            <div class="card">
                <form action='' method='post' style="border: 1px solid #ccc; border-radius: 10px;">
                    <div class="container">
                        <h2>ADMIN LOGIN</h2>
                        <hr>
                    </div>
    
                    <div class="form-group">
                        <input type="text" name="username" class="form-control" placeholder="Enter your Username" required>
                    </div>
    
                    <div class="form-group">
                        <input type="password" name="password" class="form-control" placeholder="Enter Password" required>
                    </div>
    
                    <div class="form-group">
                        <button type="submit" class="btn btn-success" name='submit'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
</div>

<div class="loader-wrapper">
    <div class="spinner-border text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>


<footer class="bg-dark text-white text-center py-2">
  <div class="container">
      <p class="mb-0">&copy; <span id="currentYear"></span> SIES Graduate School Of Technology. All Rights Reserved.</p>
  </div>
</footer>

<script>
    // Set current year dynamically
    document.getElementById('currentYear').innerHTML = new Date().getFullYear();
  
    document.addEventListener('DOMContentLoaded', function () {
      // Add a 2000ms (2 seconds) delay before hiding the loader
      setTimeout(function () {
        document.querySelector('.loader-wrapper').style.display = 'none';
      }, 300);
    });
      
  </script>
    
</body>
</html>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // username and password sent from form
    $myusername = mysqli_real_escape_string($db, $_POST['username']);
    $mypassword = mysqli_real_escape_string($db, $_POST['password']);

    $sql = "SELECT username FROM admin WHERE username = '$myusername' AND password = '$mypassword'";
    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    $count = mysqli_num_rows($result);

    // If result matched $myusername and $mypassword, table row must be 1 row
    if ($count == 1) {
        $_SESSION['login_user'] = $myusername;
        header("Location: admin.html");
        ob_end_flush();
        exit; // Ensure no further code is executed
    } else {
        // Handle login failure, e.g., display an error message
        echo "Login failed. Please check your username and password.";
    }
}
?>