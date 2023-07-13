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

    // cambio moneda
function calculadorCambioMoneda(monto, oficial, blue) {
    let montoBlue = monto / blue;
    let montoOficial = monto / oficial;
    return {montoBlue, montoOficial };
}

  // menu
function mostrarMenu() {
    let opcion;
        do {
            opcion = prompt(
                "Seleccione una opción:\n\n\n" +
                "1. Préstamos personales\n" +
                "2. Plazos fijos\n" +
                "3. Cambio a dolares\n" +
                "4. Salir"

    );

    switch (opcion) {
        case "1":
                let montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
                let tasaInteresPrestamo = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
                let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
                [montoTotalPagar, montoCuota] = calcularMontoTotalPrestamo(montoPrestamo, tasaInteresPrestamo, cuotas);
                alert("Monto total a pagar en préstamo: $" + montoTotalPagar.toFixed(2));
                alert("Monto de cada cuota: $" + montoCuota.toFixed(2));
                break;
        case "2":
                let inversion = parseFloat(prompt("Ingrese el monto de la inversión:"));
                let tasaInteresPlazoFijo = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
                let plazoMeses = parseInt(prompt("Ingrese el plazo en meses:"));
                let montoTotalPlazoFijo = calcularMontoTotalPlazoFijo(inversion, tasaInteresPlazoFijo, plazoMeses);
                alert("Monto total a recibir en plazo fijo: $" + montoTotalPlazoFijo.toFixed(2));
                break;
        case "3":
                let monto = parseFloat(prompt("Ingrese monto a convertir:"));
                let oficial = parseFloat(prompt("Ingrese valor del dolar Oficial"));
                let blue = parseFloat(prompt("Ingrese valor del dolar blue"));
                let { montoBlue, montoOficial } = calculadorCambioMoneda(monto, oficial, blue);
                alert("Monto en dólares oficiales: $" + montoOficial.toFixed(2));
                alert("Monto en dólares blue: $" + montoBlue.toFixed(2));
                break;
        case "4":
                alert("¡Gracias vuelva prontosssss!");
                break;
        default:
                alert("Opción inválida. Solo podes elegir lo que te muestro, no seas vivo XD.");
                break;
        }
    } while (opcion !== "4");
}
mostrarMenu();
