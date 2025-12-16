const novaBD = window.indexedDB; 

const btnAbrCra = document.getElementById('crearBD');
const btnInRegistro = document.getElementById('insertarR');

let basedatos;

function crearBD(){

    const solicitude = novaBD.open("Videojuegos_BD", 1); 
 
    solicitude.onerror = () => {
        console.error("navegador no soportado");        
    }

    solicitude.onsuccess = () => {
        basedatos = solicitude.result; 
        console.log('APERTURA', basedatos);
    };

    solicitude.onupgradeneeded = () => {
        basedatos = solicitude.result;
        console.log('CREACIÓN', basedatos);

        let videojuegosDatos = basedatos.createObjectStore('Videojuegos_BD', {
            keyPath:
                'videojuego'
        });
    };
};

btnAbrCra.addEventListener("click", crearBD);


 const engadirDatos = (datos) => {
    let transaccion = basedatos.transaction('Videojuegos_BD', 'readwrite');
    let videojuegosDatos = transaccion.objectStore('Videojuegos_BD');

    let inserccion = videojuegosDatos.add(datos);

    inserccion.error = () =>{
        console.error("Error al insertar");        
    }

    
 };


btnInRegistro.addEventListener('click', (evento) => {
    let nJuego = document.getElementById('inpVideojuego');
    let cJuego = document.getElementById('inpCategoria');
    evento.preventDefault();
    const videojuego = {
        videojuego: nJuego.value,
        categoria: cJuego.value,
    };
    engadirDatos(videojuego);

});

 const lerDatos = () => {
    const transaccion = basedatos.transaction(['Videojuegos_BD'], 'readonly');

    const videojuegosDatos = transaccion.objectStore('Videojuegos_BD');

    const solicitudeLectura = videojuegosDatos.openCursor();

    solicitudeLectura.onsuccess = (evento) => {
    const novoCursor = evento.target.result;

    if (novoCursor) {
        console.log(novoCursor.value);
        novoCursor.continue();
    } else {
        console.log('Rematouse de ler a base de datos');
    }
    };
 };


 const obterDatos = (clave) => {

    const transaccion = basedatos.transaction(['Videojuegos_BD'], 'readonly');

    const videojuegosDatos = transaccion.objectStore('Videojuegos_BD');
    
    const solicitudeDatos = videojuegosDatos.get(clave);

    solicitudeDatos.onsuccess = () => {
        if (solicitudeDatos.result) {
            console.log(solicitudeDatos.result);
        } else {
            console.log('Non hai ningunha persoa con ese DNI');
        }
    }
 };

 btnLer.addEventListener('click', (evento) => {
    evento.preventDefault();

    console.log("LISTAXE DE TODOS OS OBXECTOS CONTIDOS NO ALMACÉN:");

    lerDatos();

    console.log("DATOS DO OBXECTO CON CLAVE '33333333A':");

    obterDatos('33333333A');
 });

 const actualizarDatos = (datos) => {
 const transaccion = basedatos.transaction(['novo_almacen'], 'readwrite');
 const almacenDatos = transaccion.objectStore('novo_almacen');
 const solicitudeActualizacion = almacenDatos.put(datos);
 solicitudeActualizacion.onsuccess = () => {
 obterDatos(datos.dni);
 };
 }

 btnModificar.addEventListener('click', (evento) => {
 evento.preventDefault();
 const persoa3 = {
 dni: '33333333A',
 nome: 'Lucía Pereira Pérez'
 };
actualizarDatos(persoa3);
 });
