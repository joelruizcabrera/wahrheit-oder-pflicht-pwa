<?php
include 'connectDB.php';

$sql = 'SELECT * from wop_questions';

$result = $conn->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$return = [];
foreach ($result as $row) {
    $return[] = [
        'id' => $row['wop_question_id'],
        'text' => $row['wop_question_text'],
        'td' => $row['wop_question_td'],
        'mode' => json_decode($row['wop_quesion_mode'], true)
    ];
}
$dbh = null;

header('Content-type: application/json');
echo json_encode($return);