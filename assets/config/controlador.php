<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$pass = isset($_POST['pass']) ? $_POST['pass'] : '';

$data = file_get_contents('data.json');

echo 'Hola mundo';