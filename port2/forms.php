<?php

$hName='localhost';
$uName='root';
$password='';
$dbName = "dbase";
$dbCon = mysqli_connect($hName,$uName,$password,"$dbName");
 if(!$dbCon){
      die('Could not Connect MySql Server:' .mysql_error());
  }
  $un=$_POST['username'];
  $psw=$_POST['password'];
  $em=$_POST['Email'];
  $pc=$_POST['confirm password'];
  if(empty($un) ||
      empty($psw) ||
      empty($em) ||
      empty($pc)) {
      die('Please fill all required fields!');
  }
  else{
  if($_POST['password'] !== $_POST['password_confirm']) {
     die('Password and Confirm password should match!');
  }
  else{
      include_once 'dbcon.php';
      $sql="INSERT INTO loginrec VALUES ('$un','$psw','$em')";
      if($dbCon->query($sql) === TRUE){
      echo "Form Validated and Data Submitted to Database Successfully";
      }
      else{
          echo $dbCon->error;
      }
  }
  }


?>