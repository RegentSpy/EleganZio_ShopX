
<?php
//validamos datos del servidor
$user = "root";
$pass = "";
$host = "localhost:3307";

//conetamos al base datos
$connection = mysqli_connect($host, $user, $pass);

//hacemos llamado al imput de formuario
$nombre = $_POST["nombre"] ;
$email = $_POST["email"] ;
$mensaje = $_POST["mensaje"] ;

//verificamos la conexion a base datos
/* if(!$connection) 
        {
            echo "No se ha podido conectar con el servidor" . mysqli_connect_error();
        }
  else
        {
            echo "<b><h3>Hemos conectado al servidor</h3></b>" ;
        } */
        //indicamos el nombre de la base datos
        $datab = "dbformulario";
        //indicamos selecionar ala base datos
        $db = mysqli_select_db($connection,$datab);

       /*  if (!$db)
        {
        echo "No se ha podido encontrar la Tabla";
        }
        else
        {
        echo "<h3>Tabla seleccionada:</h3>" ;
        } */
        //insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
        $instruccion_SQL = "INSERT INTO tabla_contacto (nombre,email,mensajes)
                             VALUES ('$nombre','$email','$mensaje')";
                           
    
        $resultado = mysqli_query($connection,$instruccion_SQL);
       
        //$consulta = "SELECT * FROM tabla where id ='2'"; si queremos que nos muestre solo un registro en especifivo de ID
        $consulta = "SELECT * FROM tabla_contacto";
        
$result = mysqli_query($connection,$consulta);
$connection = true; // Cambia esto a true si la conexión tiene éxito

echo "<table>";
if ($connection) {
    echo '<script>
        alert("Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje a través de nuestro formulario de contacto y queremos asegurarte que estamos comprometidos en brindarte la mejor atención posible.");
        window.location.href = "index.html"; // Redirigir al usuario al inicio
    </script>';
}


mysqli_close( $connection );

?>

