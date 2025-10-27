let agenda = []
let nombreEvento = document.getElementById("text");
let fechaEvento = document.getElementById("date");

function añadirEvento() {
    if (nombreEvento.value == false || fechaEvento.value == false) {
        alert("introduzca fecha y nombre por favor");
    } else {
        let hoy = new Date(fechaEvento.value)


        let nuevoEvento = {
            id: new Date(),
            nombre: nombreEvento.value,
            fecha: hoy
        }

        nombreEvento.value = '';
        fechaEvento.value = '';
        agenda.push(nuevoEvento);
        renderizarEventos(agenda);

    }
}

function renderizarEventos(lista) {


    let listaEventos = document.getElementById("listaDeEventos");
    listaEventos.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        evento = lista[i];
        let nuevoLi = document.createElement('li');

        nuevoLi.innerHTML = `
        <p class="evento">${formatearFecha(evento.fecha)}, ${evento.nombre}<p>
        <button class="editar" onclick="editar('${evento.id}')">✏️</button>
        <button class="eliminar" onclick="eliminar('${evento.id}')">❌</button>
        `;
        
        listaEventos.appendChild(nuevoLi);
    }

}

function formatearFecha(fecha) {
    let opciones = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }

    return fecha.toLocaleDateString('gl-ES', opciones);
}





function filtrarEventos(rango) {
    let lista = document.getElementById("listaDeEventos");
    let hoy = new Date()
    hoy.setHours(0, 0, 0, 0);
    let fechaLimite = new Date();
    fechaLimite.setHours(0, 0, 0, 0)

    if (rango == 'proxSem') {

    } else if (rango == 'proxMes') {

    } else if (rango == 'proxAge') {

    } else if (rango == 'todos') {

    }


}

function editar(id_evento) {
    agenda = agenda.filter(function (evento) {
        
        let hoy = new Date(fechaEvento.value)
        nombreEvento.value = `${evento.nombre}`;
        fechaEvento.value = `${evento.fecha}`;        
    });   
}

function eliminar(id_evento) {
    agenda = agenda.filter(function (evento) {
        return evento.id != id_evento;
    });

    renderizarEventos(agenda);
}