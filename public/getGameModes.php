<?php
include 'connectDB.php';

$sql = 'SELECT * from wop_game_modes';

$result = $conn->query($sql)->fetchAll(PDO::FETCH_ASSOC);

$return = [];
foreach ($result as $row) {
    $return[] = [
        'id' => $row['wop_game_mode_id'],
        'name' => $row['wop_game_mode_name'],
        'emoji' => $row['wop_game_mode_emoji'],
        'colorGrade' => array(
            'from' => $row['wop_game_mode_color_from'],
            'to' => $row['wop_game_mode_color_to']
        ),
        'active' => intval($row['wop_game_mode_active']),
    ];
}
$dbh = null;

header('Content-type: application/json');
echo json_encode($return);