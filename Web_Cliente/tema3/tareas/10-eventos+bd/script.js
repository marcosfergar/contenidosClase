let fecha = document.getElementById("date");
let evento = document.getElementById("text");

let eventos = [];

const novaBD = window.indexedDB; 
const btnAbrCra = document.getElementById('crearBD');
const btnInRegistro = document.getElementById('insertarR');
const btnLer = document.getElementById('btnLer');

let basedatos;

// INSERTAR DATOS
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

btnInRegistro.addEventListener('click', (e) => {

    e.preventDefault();

    let nEvento = evento.value
    let fEvento = fecha.value

    const nuevoEvento = {
        evento: nEvento,
        fecha: new Date(fEvento)
    };

    engadirDatos(nuevoEvento);
});

const engadirDatos = (datos) => {

    let transaccion = basedatos.transaction('Eventos', 'readwrite');
    let eventosDatos = transaccion.objectStore('Eventos');

    let inserccion = eventosDatos.add({
        nombreE: datos.nombreE,
        fechaE: datos.fechaE.toISOString()
    });

    inserccion.onerror = () => {
        console.error("Error al insertar");
    };

    inserccion.onsuccess = () => {
        console.log("Insertado:", datos);
    };
};





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


// ELIMINAR UN DATO
function eliminarEvento(indice) {
    eventos.splice(indice,1);
    renderizarEvento();
}

const eliminarDatos = (clave) => {

    const transaccion = basedatos.transaction(['Eventos'], 'readwrite');
    const eventosDatos = transaccion.objectStore('Eventos');

    const solicitudeEliminacion = eventosDatos.delete(clave);

    solicitudeEliminacion.onsuccess = () => {
        console.log(`Registro con clave ${clave} eliminado`);
        lerDatos();
    };
};


btnEliminar.addEventListener('click', (evento) => {

    evento.preventDefault();

    let clave = evento.value;

    eliminarDatos(clave);
});

function editarEvento(indice) {
    alert(eventos[indice].fechaE);
    fecha.value= eventos[indice].fechaE.toISOString().split('T')[0]
    evento.value = eventos[indice].nombreE

    eliminarEvento(indice);
}



// CREAR BASE DE DATOS
function crearBD() {

    const solicitude = novaBD.open("Eventos_BD", 1);

    solicitude.onerror = () => {
        console.error("Navegador no soportado");
    }

    solicitude.onsuccess = () => {
        basedatos = solicitude.result;
        console.log('APERTURA', basedatos);
    };

    solicitude.onupgradeneeded = () => {
        basedatos = solicitude.result;
        console.log('CREACIÓN', basedatos);

        // Nombre correcto del almacenamiento
        basedatos.createObjectStore('Eventos', {
            keyPath: 'id',
            autoIncrement: true
        });
    };
}

crearBD()





// LEER TODOS LOS DATOS
const lerDatos = () => {

    const transaccion = basedatos.transaction(['Eventos'], 'readonly');
    const eventosDatos = transaccion.objectStore('Eventos');

    const solicitudeLectura = eventosDatos.openCursor();

    solicitudeLectura.onsuccess = (evento) => {

        const cursor = evento.target.result;

        if (cursor) {
            console.log(cursor.value);
            cursor.continue();
        } else {
            console.log('Fin de la lectura');
        }
    };
};


// OBTENER UN DATO POR CLAVE
const obterDatos = (clave) => {

    const transaccion = basedatos.transaction(['Eventos'], 'readonly');
    const eventosDatos = transaccion.objectStore('Eventos');

    const solicitudeDatos = eventosDatos.get(clave);

    solicitudeDatos.onsuccess = () => {
        if (solicitudeDatos.result) {
            console.log("Encontrado:", solicitudeDatos.result);
        } else {
            console.log('No hay Eventos con esa clave');
        }
    };
};



