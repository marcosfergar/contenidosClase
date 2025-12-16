function hacerTarea(nombre) {
    return new Promise((resolve, reject) => {
        let n = Math.round(Math.random(0,7));
        setTimeout(() => {
            if (n === 0 || n === 7 ) {
                reject("Se produjo un error en la operacion " + nombre)
            } else if(n >= 1 && n <= 6) {
                resolve("Operecion correcta" + nombre)           
            }
        },1000*n)
    })
}

hacerTarea("Tarea1")
    .then((resultado1)=> {
        console.log(resultado1);
        return hacerTarea("Tarea2")
    })
    .then((resultado2)=> {
        console.log(resultado2);
        return hacerTarea("Tarea3")
    })
    .then((resultado3)=> {
        console.log(resultado3);
    })
    .catch((error) => {
        console.error("Error: ", error);
        
    })