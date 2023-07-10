
// prestamos 
function calcularMontoTotalPrestamo(prestamo, tasaInteres, cuotas) {
    let montoInteres = prestamo * (tasaInteres / 100);
    let montoTotal = prestamo + montoInteres;
    let montoCuota = montoTotal / cuotas;
    return [montoTotal, montoCuota];
}

  // plazos fijos
function calcularMontoTotalPlazoFijo(inversion, tasaInteres, plazoMeses) {
    let montoInteres = inversion * (tasaInteres / 100) * (plazoMeses / 12);
    let montoTotal = inversion + montoInteres;
    return montoTotal;
}

  // menu
function mostrarMenu() {
    let opcion;
        do {
            opcion = prompt(
                "Seleccione una opción:\n\n" +
                "1. Préstamos personales\n" +
                "2. Plazos fijos\n" +
                "3. Salir"
    );

    switch (opcion) {
        case "1":
                montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
                tasaInteresPrestamo = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
                cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
                [montoTotalPagar, montoCuota] = calcularMontoTotalPrestamo(montoPrestamo, tasaInteresPrestamo, cuotas);
                alert("Monto total a pagar en préstamo: $" + montoTotalPagar.toFixed(2));
                alert("Monto de cada cuota: $" + montoCuota.toFixed(2));
                break;
        case "2":
                inversion = parseFloat(prompt("Ingrese el monto de la inversión:"));
                tasaInteresPlazoFijo = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
                plazoMeses = parseInt(prompt("Ingrese el plazo en meses:"));
                montoTotalPlazoFijo = calcularMontoTotalPlazoFijo(inversion, tasaInteresPlazoFijo, plazoMeses);
                alert("Monto total a recibir en plazo fijo: $" + montoTotalPlazoFijo.toFixed(2));
                break;
        case "3":
                alert("¡Gracias vuelva prontosssss!");
                break;
        default:
                alert("Opción inválida. Solo podes elegir lo que te muestro, no seas vivo XD.");
                break;
        }
    } while (opcion !== "3");
}

mostrarMenu();
