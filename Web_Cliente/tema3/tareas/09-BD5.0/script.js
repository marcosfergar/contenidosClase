const novaBD = window.indexedDB; 
const btnAbrCra = document.getElementById('crearBD');
const btnInRegistro = document.getElementById('insertarR');
const btnEliminar = document.getElementById('borrarBD');
const btnLer = document.getElementById('btnLer');

let basedatos;

// CREAR BASE DE DATOS
function crearBD() {

    const solicitude = novaBD.open("Videojuegos_BD", 1);

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
        basedatos.createObjectStore('Videojuegos', {
            keyPath: 'videojuego'
        });
    };
}

btnAbrCra.addEventListener("click", crearBD);


// INSERTAR DATOS
const engadirDatos = (datos) => {

    let transaccion = basedatos.transaction('Videojuegos', 'readwrite');
    let videojuegosDatos = transaccion.objectStore('Videojuegos');

    let inserccion = videojuegosDatos.add(datos);

    inserccion.onerror = () => {
        console.error("Error al insertar");
    };

    inserccion.onsuccess = () => {
        console.log("Insertado:", datos);
    };
};


btnInRegistro.addEventListener('click', (evento) => {

    evento.preventDefault();

    let nJuego = document.getElementById('inpVideojuego').value;
    let cJuego = document.getElementById('inpCategoria').value;

    const videojuego = {
        videojuego: nJuego,
        categoria: cJuego
    };

    engadirDatos(videojuego);
});


// LEER TODOS LOS DATOS
const lerDatos = () => {

    const transaccion = basedatos.transaction(['Videojuegos'], 'readonly');
    const videojuegosDatos = transaccion.objectStore('Videojuegos');

    const solicitudeLectura = videojuegosDatos.openCursor();

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

    const transaccion = basedatos.transaction(['Videojuegos'], 'readonly');
    const videojuegosDatos = transaccion.objectStore('Videojuegos');

    const solicitudeDatos = videojuegosDatos.get(clave);

    solicitudeDatos.onsuccess = () => {
        if (solicitudeDatos.result) {
            console.log("Encontrado:", solicitudeDatos.result);
        } else {
            console.log('No hay videojuegos con esa clave');
        }
    };
};


// BOTÓN LEER
btnLer.addEventListener('click', (evento) => {

    evento.preventDefault();

    let inputId = document.getElementById('inpIdVideojuego').value;

    console.log("LISTA COMPLETA:");
    lerDatos();

    console.log(`BUSCAR CLAVE: ${inputId}`);
    obterDatos(inputId);
});


// ELIMINAR UN DATO
const eliminarDatos = (clave) => {

    const transaccion = basedatos.transaction(['Videojuegos'], 'readwrite');
    const almacenDatos = transaccion.objectStore('Videojuegos');

    const solicitudeEliminacion = almacenDatos.delete(clave);

    solicitudeEliminacion.onsuccess = () => {
        console.log(`Registro con clave ${clave} eliminado`);
        lerDatos();
    };
};


btnEliminar.addEventListener('click', (evento) => {

    evento.preventDefault();

    let clave = document.getElementById('inpIdVideojuego').value;

    eliminarDatos(clave);
});
