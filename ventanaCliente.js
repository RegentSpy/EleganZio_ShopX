// Obtén los campos del formulario del cliente y el botón de "Pagar"
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const direccionInput = document.getElementById("direccion");
const telefonoInput = document.getElementById("telefono");
const payButton = document.getElementById("payButton");

// Agrega un evento de clic al botón de "Pagar" en el formulario del cliente
payButton.addEventListener("click", function() {
    // Verifica si todos los campos del formulario del cliente están llenos
    if (
        nombreInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        direccionInput.value.trim() !== "" &&
        telefonoInput.value.trim() !== ""
    ) {
        // Realiza el envío del formulario (puedes utilizar Fetch o AJAX)
        // ...

        // Muestra un mensaje de confirmación
        alert("¡Datos llenado correctamente ya puedes hacer la compra");

        // Habilita el botón de "Pagar" en la página principal
        habilitarBotonPagar();

        // Redirige al usuario a la página principal después de la confirmación
        redirigirAPaginaPrincipal();
    } else {
        // Muestra un mensaje de error si los campos no están llenos
        alert("Por favor, complete todos los campos antes de realizar el pago.");
    }
});

// Función para habilitar el botón de "Pagar" en la página principal
function habilitarBotonPagar() {
    // Simula un clic en el botón de "Pagar" en la página principal
    const botonPagarPrincipal = window.opener.document.getElementById("payButton");
    if (botonPagarPrincipal) {
        botonPagarPrincipal.disabled = false;
    }
}

// Función para redirigir al usuario a la página principal
function redirigirAPaginaPrincipal() {
    // Cambia la ubicación del navegador para redirigir al usuario a la página principal
    window.location.href = "http://localhost/HTML/Trajes.html";
}
const regresarButton = document.getElementById("regresar");

regresarButton.addEventListener("click", function() {
    // Cierra la ventana emergente actual
    window.close();
});


regresarButton.addEventListener("click", function() {
    // Redirige al usuario a la página principal (Trajes.html)
    window.location.href = "Trajes.html";
});
