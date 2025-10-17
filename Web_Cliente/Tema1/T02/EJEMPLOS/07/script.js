function calcularAniversario() {
    let fecha = document.getElementById('date').value;
    let dia = document.getElementById('dia').value;
    let mensaje = document.getElementById('mensaje');

    let mes = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]

    if (!fecha || dia === "") {
        mensaje.innerText = "Por favor, introduzca los datos"
        return false
    }
    let añosiguiente = new Date(fecha);
    let hoy = new Date();
    if (añosiguiente < hoy) {
        añosiguiente.setFullYear(añosiguiente.getFullYear() + 1)
    }
    while (true) {

        añosiguiente.setFullYear(añosiguiente.getFullYear() + 1)

        if (añosiguiente.getDay() == dia) {
            mensaje.innerText = `La fecha exacta es ${añosiguiente.getDate()} de ${mes[añosiguiente.getMonth()]} de ${añosiguiente.getFullYear()}`;

            break;
        }
    }



}
