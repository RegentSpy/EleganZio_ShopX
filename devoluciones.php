
<?php
//validamos datos del servidor
$user = "root";
$pass = "";
$host = "localhost:3307";

//conetamos al base datos
$connection = mysqli_connect($host, $user, $pass);

//hacemos llamado al imput de formuario
$motivo = $_POST["motivo"] ;
$num_pedido = $_POST["num_pedido"] ;
$nombre = $_POST["nombre"] ;
$apellido = $_POST["apellido"] ;
$telefono = $_POST["telefono"] ;
$email = $_POST["email"] ;
$fechaNacimiento = $_POST["fechaNacimiento"] ;
$cp = $_POST["cp"] ;
$colonia = $_POST["colonia"] ;
$calle = $_POST["calle"] ;
$numero = $_POST["numero"] ;
//$evidencia = $_POST["evidencia"] ;


        //indicamos el nombre de la base datos
        $datab = "dbformulario";
        //indicamos selecionar ala base datos
        $db = mysqli_select_db($connection,$datab);

        //insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
        $instruccion_SQL = "INSERT INTO devoluciones ( motivo, num_pedido,nombre, apellido, telefono, email, cp, colonia, calle, numero)
                             VALUES ('$motivo','$num_pedido','$nombre', '$apellido','$telefono', '$email', '$cp','$colonia', '$calle','$numero')";
                           
                             
        $resultado = mysqli_query($connection,$instruccion_SQL);
       
        $consulta = "SELECT * FROM devoluciones";
        
$result = mysqli_query($connection,$consulta);

echo "</table>";
$connection = true; // Cambia esto a true si la conexión tiene éxito

if ($connection) {
    echo '<script>
        alert("Estimado/a Cliente, Esperamos que se encuentre bien. Queremos agradecerle por su reciente devolución de producto y confirmar que hemos recibido el artículo devuelto. Su satisfacción es una prioridad para nosotros, y estamos comprometidos en asegurarnos de que este proceso de devolución sea lo más sencillo y eficiente posible.");
        window.location.href = "index.html"; // Redirigir al usuario al inicio
    </script>';
}

mysqli_close( $connection );

?>

