const novaBD = window.indexedDB; 

const btnAbrCra = document.getElementById('crearBD');
const btnInRegistro = document.getElementById('insertarR');

let basedatos;

function crearBD(){
    let basedatos;
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

        let videojuegosDatos = basedatos.createObjectStore('videoxogos', {
            keyPath:
                'videojuego'
        });
    };
};

btnAbrCra.addEventListener("click", crearBD);


 const engadirDatos = (datos) => {
    let transaccion = basedatos.transaction('Videojuegos_BD', 'readwrite');
    let videojuegosDatos = transaccion.objectStore('videoxogos');

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

