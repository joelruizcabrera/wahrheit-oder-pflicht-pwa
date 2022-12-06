<?php
$_HOST = "localhost:8889";
$_USERNAME = "root";
$_PASSWORD = "root";
$_DBNAME = "wop";

// Create connection
$conn = new PDO("mysql:host=" . $_HOST . ";dbname=" . $_DBNAME, $_USERNAME, $_PASSWORD);
?>