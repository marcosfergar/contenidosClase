let fechaEvento = document.getElementById("date");
let textoEvento = document.getElementById("text");

let eventos = [];

function añadirEvento() {
    let hoy = new Date();
    hoy.setTime(0,0,0,0);
    if (fechaEvento.value == false || textoEvento.value == false) {
        alert("introduce datos validos")

        fechaEvento.value='';
        textoEvento.value='';
    }else{
    let nuevoEvento = {
        id: new Date(),
        nombreE: textoEvento.value,
        fechaE: new Date(fechaEvento.value)
    }
    if (nuevoEvento.fechaE < hoy) {
        alert('fecha invalida');
    }else{
        eventos.push(nuevoEvento)
        renderizarEventos();

        fechaEvento.value='';
        textoEvento.value='';
    }
    }
}

function filtrarEventos() {
    
}

function formatearFecha(fecha) {
    let opciones = {
        weekday: 'short',
        day:'numeric',
        month: 'short',
        year: 'numeric'

        }
    return fecha.toLocaleDateString('gl-ES', opciones);
}

function renderizarEventos() {
    let lista = document.getElementById("listaDeEventos");
    lista.innerHTML='';
    for (let i = 0; i < eventos.length; i++) {
        
        lista.innerHTML+=`
        <li class="elementos-li">
            <p>${formatearFecha(eventos[i].fechaE)}</p>
            <div class="botones">
                <button type="button" onclick="editarEvento(${i})">✏️</button>
                <button type="button" onclick="eliminarEvento(${i})">❌</button>
            </div>                    
        </li>
        `
        
    }
}

function eliminarEvento(idEvento) {
    eventos.splice(idEvento,1);
    renderizarEventos();
}

function editarEvento(idEvento) {
    textoEvento.value=eventos[idEvento].nombreE;
    fechaEvento.value = eventos[idEvento].fechaE.toISOString().split('T')[0]
}