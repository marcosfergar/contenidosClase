let agenda = []
let nombreEvento = document.getElementById("text");
let fechaEvento = document.getElementById("date");

function añadirEvento() {
    if (nombreEvento.value == false || fechaEvento.value == false) {
        alert("introduzca fecha y nombre por favor");
        return
    }
        let hoy = new Date();
        let fechaSelec = new Date(fechaEvento.value);

        let nuevoEvento = {
            id: hoy,
            nombre: nombreEvento.value,
            fecha: fechaSelec
        }

        hoy=hoy.setHours(0,0,0,0);

        nombreEvento.value = '';
        fechaEvento.value = '';

        if (fechaSelec >= hoy) {
            agenda.push(nuevoEvento);
            renderizarEventos(agenda);        
        }else{
            alert("Por favor, introduce una fecha valida");
             
        }
        

    
}

function renderizarEventos(lista) {

    agenda.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
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

    lista.innerHTML='';

    let hoy = new Date()
    hoy.setHours(0, 0, 0, 0);
    let fechaLimite = new Date();
    fechaLimite.setHours(0, 0, 0, 0)

    if (rango === 'proxSem') {
        fechaLimite.setDate(hoy.getDate() + 7);
    } else if (rango === 'proxMes') {
        fechaLimite.setMonth(hoy.getMonth() + 1);
    } else if (rango === 'proxAge') {
        fechaLimite.setFullYear(hoy.getFullYear() + 1);
    } else if (rango === 'todos') {
        fechaLimite = null;
    }
    
    for (let i = 0; i < agenda.length; i++) {
        evento = lista[i];
        let fechaEvento = new Date(agenda[i].fecha)
        if(fechaEvento>fechaLimite){
          nuevoLi.innerHTML = `
          <li>
            <p class="evento">${formatearFecha(evento.fecha)}, ${evento.nombre}<p>
            <button class="editar" onclick="editar('${evento.id}')">✏️</button>
            <button class="eliminar" onclick="eliminar('${evento.id}')">❌</button>
          </li>
            `;  
        }
    }

}
function editar(id_evento) {

    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].id == id_evento) {
            evento = agenda[i]
            let hoy = new Date(evento.fecha);
            nombreEvento.value = `${evento.nombre}`;
            fechaEvento.value = `${hoy.toISOString().split('T')[0]}`;
            alert(evento.fecha);
        }
    }

    eliminar(id_evento);
}

function eliminar(id_evento) {
    agenda = agenda.filter(function (evento) {
        return evento.id != id_evento;
    });

    renderizarEventos(agenda);
}
