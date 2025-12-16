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
            fecha: new Date(hoy)
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
    let hoy = new Date()
    hoy.setHours(0, 0, 0, 0);
    let fechaLimite = new Date();
    fechaLimite.setHours(0, 0, 0, 0)
    let eventosFiltrados = agenda;
    if (rango == 'proxSem') {
        fechaLimite.setDate(hoy.getDate()+7);
        eventosFiltrados = agenda.filter((evento) => {
            return (
                evento.fecha >= hoy &&
                evento.fecha <= fechaLimite
            );
        })
} else if (rango == 'proxMes') {
    fechaLimite.setMonth(hoy.getMonth() + 1);
    eventosFiltrados = agenda.filter(e => e.fecha >= hoy && e.fecha <= fechaLimite);
} else if (rango == 'proxAge') {
    fechaLimite.setFullYear(hoy.getFullYear() + 1);
    eventosFiltrados = agenda.filter(e => e.fecha >= hoy && e.fecha <= fechaLimite);
} else if (rango == 'todos') {
    eventosFiltrados = agenda;
}
renderizarEventos(eventosFiltrados);
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