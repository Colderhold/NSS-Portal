<?php
   include("config.php");
   session_start();

   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form

      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']);

      $sql = "SELECT id FROM admin WHERE username = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      //$active = $row['active'];

      $count = mysqli_num_rows($result);
      // If result matched $myusername and $mypassword, table row must be 1 row
      if($count == 1) {
         //session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         echo "$myusername";
         header("location: welcomea.php");
      }
   }
?>
<DOCTYPE html>

<html>
<head>
  <title>ADMIN LOGIN</title>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>

body  {
  background-image: url("nss11.jpg");
  background-size: cover;
}


    body {font-family: Arial, Helvetica, sans-serif;}{font-color:red;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: BLACK;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: WHITE;
  outline: none;
}

hr {
  border: 1px solid black;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: YELLOW;
  color: YELLOW;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  transition: 0.5s;
  opacity: 0.7;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: WHITE;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;

}

/* Clear floats */
.clearfix::after {
  content:"";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
.card { 
  border: solid 3px black;
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.card:hover{
  transition: 0.5s;
  box-shadow: 0 5px 10px 0 black;
}
.title {
  color: BLACK;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: BLACK;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: WHITE;
}

button:hover, a:hover {
  opacity: 0.7;
}


.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: RED;
  background-color: YELLOW;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: yellow;
}

      </style>

   </head>

   <body>
	<div class="w3-top">
     		    <div class="w3-row w3-large w3-black">
     		      <div class="w3-col s3">
     		        <a href='index.html' class="w3-button w3-block">Home</a>
     		      </div>
     		         <div class="w3-col s3">
     		        <a href="contactus.html" class="w3-button w3-block">Contact us</a>
					</div>
     			</div>
     </div>

     <br><br><br><br><br>

     <div class="card">
    <form  action='' method='post' style="border:1px solid #ccc">
      <div class="container" >

      <h2 style="font-weight: bold; font-size: 30px; color: black">Login</h2>
      <p style="font-weight: bold; color: black">Please login in your account.</p>
      <hr></div>


       <div class="col-25">
      <input type="text" name="username"   placeholder="Enter your username"><br>
    </div>

        <div class="col-25">
      <input type="password" placeholder="Enter Password" name="password" required>
        </div>


         <div class="clearfix">

        <button type="submit" class="signupbtn" name='submit' style = "font-weight:bold;margin-left: 70px">Sign In</button>
      </div>


         </form>
          </div>

          <br><br><br><br>

   </body>
</html>
