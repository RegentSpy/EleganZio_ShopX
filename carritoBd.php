<?php
//validamos datos del servidor
$user = "root";
$pass = "";
$host = "localhost:3307";

//conetamos al base datos
$connection = mysqli_connect($host, $user, $pass);

//verificamos la conexion a base datos
if(!$connection) 
        {
            echo "No se ha podido conectar con el servidor" . mysqli_connect_error();
        }
  else
        {
            echo "<b><h3>Hemos conectado al servidor</h3></b>" ;
        }
        //indicamos el nombre de la base datos
        $datab = "dbformulario";
        //indicamos selecionar ala base datos
        $db = mysqli_select_db($connection,$datab);

        if (!$db)
        {
        echo "No se ha podido encontrar la Tabla";
        }
        else
        {
        // echo "<h3>Tabla seleccionada:</h3>" ;
        }


// Verificar la conexión
// if ($connection->connect_error) {
//     die("Error de conexión a la base de datos: " . $connection->connect_error);
// }

// La información a guardar
$productosJSON = $_POST["productos"];
$productos = json_decode($productosJSON, true);
if (is_array($productos)) {
    foreach ($productos as $producto) {
        $producto_id = $producto["id"];
        $nombre_producto = $connection->real_escape_string($producto["name"]);
        $cantidad = $producto["quantity"];
        $precio = $producto["price"];
        $precioTotal = $cantidad* $precio;
    
        // Crear la consulta SQL
        $sql = "INSERT INTO compras (producto_id, nombre_producto, cantidad, precio,precioTotal) VALUES ('$producto_id', '$nombre_producto', '$cantidad', '$precio','$precioTotal')";
    
        // Ejecutar la consulta
        if ($connection->query($sql) === false) {
            echo "Error al guardar la compra: " . $connection->error;
            $connection->close();
            exit;
        }
    }
    // 
} else {
    echo "No se encontraron datos de productos en la solicitud.";
}
// Cerrar la conexión
$connection->close();
echo "<table>";
if ($connection) {
    echo '<script>
        window.location.href = "index.html"; // Redirigir al usuario al inicio
    </script>';
}


?>
