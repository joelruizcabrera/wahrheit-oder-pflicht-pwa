<?php
include 'connectDB.php';

$sql = 'SELECT * from wop_questions WHERE wop_question_td = "truth"';

$result = $conn->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$return = [];
foreach ($result as $row) {
    $return[] = [
        'id' => $row['wop_question_id'],
        'text' => $row['wop_question_text'],
        'mode' => json_decode($row['wop_quesion_mode'], true)
    ];
}
$dbh = null;

header('Content-type: application/json');
echo json_encode($return);