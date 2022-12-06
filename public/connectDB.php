<?php
$servername = "wop.joelruizcabrera.com";
$username = "root";
$password = "JoelS007";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>