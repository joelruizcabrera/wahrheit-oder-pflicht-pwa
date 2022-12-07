<?php

header("Access-Control-Allow-Origin: *");

$DB_CONFIG = array(
    "wop_host"=>"localhost:3306",
    "wop_db"=>"wop",
    "wop_user"=>"wop",
    "wop_pass"=>"d9in3Ke7!"
);

// Create connection
try {
    $dsn = "mysql:dbname=" . $DB_CONFIG["wop_db"] . ";host={$DB_CONFIG["wop_host"]}";
    $conn = new PDO($dsn, $DB_CONFIG["wop_user"], $DB_CONFIG["wop_pass"]);
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>