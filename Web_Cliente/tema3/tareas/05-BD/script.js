const novaBD = window.indexedDB; 

const btnAbrCra = document.getElementById('boton_bd');

function crearBD(){
    let basedatos;
    const solicitude = novaBD.open("Videojuegos_BD", 1); 
 
    solicitude.onsuccess = () => {
        basedatos = solicitude.result; 
        console.log('APERTURA', basedatos);
    };

    solicitude.onupgradeneeded = () => {
        basedatos = solicitude.result;
        console.log('CREACIÓN', basedatos);

    const almacenDatos = basedatos.createObjectStore('videoxogos', {
        keyPath:
            'id'
    })
    };
};

btnAbrCra.addEventListener("click", crearBD);
