<?php
   $db = mysqli_connect('localhost','root','', 'oms1');

   if(!$db) {
      die("Connection failed: " . mysqli_connect_error());
   }
?>