let fecha = document.getElementById("date");
let evento = document.getElementById("text");

let eventos = [];

function añadirEvento(){
    let hoy= new Date()
    hoy.setHours(0,0,0,0);
    if (fecha.value != false && evento.value.trim() != false) {
        let nuevoEvento = {
            id: new Date(),
            nombreE: evento.value,
            fechaE: new Date(fecha.value)
        }
        if (nuevoEvento.fechaE >= hoy) {
            eventos.push(nuevoEvento);

           
            renderizarEvento();

            fecha.value='';
            evento.value='';
        }else{
            alert("Introduce una fecha valida");
        }        
    }else{
        alert("Rellene todos los campos");
    }
    
}

function filtrarEventos(rango) {
    let hoy = new Date()
    hoy.setHours(0, 0, 0, 0);
    let fechaLimite = new Date();
    fechaLimite.setHours(0, 0, 0, 0)
    let eventosFiltrados = eventos;
    if (rango == 'proxSem') {
        fechaLimite.setDate(hoy.getDate()+7);
        eventosFiltrados = eventos.filter((evento) => {
            return (
                evento.fecha >= hoy &&
                evento.fecha <= fechaLimite
            );
        })
        } else if (rango == 'proxMes') {
            fechaLimite.setMonth(hoy.getMonth() + 1);
            eventosFiltrados = eventos.filter(e => e.fecha >= hoy && e.fecha <= fechaLimite);
        } else if (rango == 'proxAge') {
            fechaLimite.setFullYear(hoy.getFullYear() + 1);
            eventosFiltrados = eventos.filter(e => e.fecha >= hoy && e.fecha <= fechaLimite);
        } else if (rango == 'todos') {
            eventosFiltrados = eventos;
        }
renderizarEvento(eventosFiltrados);
}

function renderizarEvento() {

    eventos.sort((a,b) => new Date(a.fechaE) - new Date(b.fechaE))

    let listaDeEventos = document.getElementById("listaDeEventos");

    listaDeEventos.innerHTML='';

    for (let i = 0; i < eventos.length; i++) {
        let elemento_lista = document.createElement('li');
        let p_lista = document.createElement('p');
            p_lista.textContent = `${eventos[i].nombreE}: ${formatearFecha(eventos[i].fechaE)}`
        let div_lista = document.createElement('div');
            div_lista.classList.add('botones');
        let botonEditar = document.createElement('button');
            botonEditar.type = 'button';
            botonEditar.onclick= () => editarEvento(i);
        let botonEliminar = document.createElement('button');
            botonEliminar.type = 'button';
            botonEliminar.onclick= () => eliminarEvento(i);

            div_lista.appendChild(botonEditar);
            div_lista.appendChild(botonEliminar);

            elemento_lista.appendChild(p_lista);
            elemento_lista.appendChild(div_lista);

            listaDeEventos.appendChild(elemento_lista);
    }

    

}

function formatearFecha(fecha) {
    opciones = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }

    return fecha.toLocaleDateString('gl-Es', opciones)
}

function eliminarEvento(indice) {
    eventos.splice(indice,1);
    renderizarEvento();
}

function editarEvento(indice) {
    alert(eventos[indice].fechaE);
    fecha.value= eventos[indice].fechaE.toISOString().split('T')[0]
    evento.value = eventos[indice].nombreE

    eliminarEvento(indice);
}