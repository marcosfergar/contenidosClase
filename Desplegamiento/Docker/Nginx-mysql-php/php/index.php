<?php
echo "<h1>Servidor PHP funcionando</h1>";

$host = "mysql";
$db   = "ejemplo";
$user = "user";
$pass = "user";

try {
    $conexion = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    echo "<p>Conexión a MySQL correcta</p>";
} catch (PDOException $e) {
    echo "<p>Error de conexión</p>";
}
