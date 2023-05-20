<?php
$action = $_REQUEST['action'];

if (!empty($action)) {
    require_once 'includes/dash.php';
    $obj = new citoyen();
}

if ($action == 'adduser' && !empty($_POST)) {
    $pname = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['type'];
    $photo = $_FILES['photo'];
    $playerId = (!empty($_POST['userid'])) ? $_POST['userid'] : '';

    // file (photo) upload
    $imagename = '';
    if (!empty($photo['name'])) {
        $imagename = $obj->uploadPhoto($photo);
        $citoyenData = [
            'pname' => $pname,
            'email' => $email,
            'type' => $type,
            'photo' => $imagename,
        ];
    } else {
        $citoyenData = [
            'pname' => $pname,
            'email' => $email,
            'type' => $phone,
        ];
    }

    if ($citoyenId) {
        $obj->update($citoyenData, $citoyenId);
    } else {
        $playerId = $obj->add($citoyenData);
    }

    if (!empty($citoyenId)) {
        $citoyen = $obj->getRow('id', $citoyenId);
        echo json_encode($citoyen);
        exit();
    }
}

if ($action == "getusers") {
    $page = (!empty($_GET['page'])) ? $_GET['page'] : 1;
    $limit = 4;
    $start = ($page - 1) * $limit;

    $players = $obj->getRows($start, $limit);
    if (!empty($players)) {
        $citoyenlist = $citoyen;
    } else {
        $citoyenlist = [];
    }
    $total = $obj->getCount();
    $citoyenArr = ['count' => $total, 'citoyen' => $citoyenlist];
    echo json_encode($citoyenArr);
    exit();
}

if ($action == "getuser") {
    $citoyenId = (!empty($_GET['id'])) ? $_GET['id'] : '';
    if (!empty($citoyenId)) {
        $citoyen = $obj->getRow('id', $citoyenId);
        echo json_encode($citoyen);
        exit();
    }
}

if ($action == "deleteuser") {
    $playerId = (!empty($_GET['id'])) ? $_GET['id'] : '';
    if (!empty($playerId)) {
        $isDeleted = $obj->deleteRow($citoyenId);
        if ($isDeleted) {
            $message = ['deleted' => 1];
        } else {
            $message = ['deleted' => 0];
        }
        echo json_encode($message);
        exit();
    }
}

if ($action == 'search') {
    $queryString = (!empty($_GET['searchQuery'])) ? trim($_GET['searchQuery']) : '';
    $results = $obj->searchcitoyen($queryString);
    echo json_encode($results);
    exit();
}
