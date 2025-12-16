let promesa = new Promise((resolve, reject) => {
    let resultado = Math.round(Math.random());

    if(resultado) {
        resolve("Operecion correcta")
    } else {
        reject("Se produjo un error en la operacion")
    }
});

promesa
    .then((mensaje)=> {
        console.log("Exito: ", mensaje);
        
    })
    .catch((error) => {
        console.error("Error: ", error);
        
    })