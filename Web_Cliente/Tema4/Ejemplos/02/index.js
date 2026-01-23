"use strict";
try {
    x = 10;
    console.log(x);   
} catch (error) {
    console.warn(error);
}

try {
    let persona = {
        nome : "marcos",
        edad : 20
    }
    persona.nacionalidad = "españa"
    console.log(persona);
    
    let persona2 = Object.freeze(persona);
    persona2.apelido = "fernandez"
    console.log(persona2);

} catch (error) {
    console.warn(error);
    
}

function contexto() {
    console.log(this);
}

contexto();

try {

    function saludar(nome, nome) {
        console.log("Hola " + nome);   
    }
    saludar("marcos", "alan");
} catch (error) {
    console.warn(error);
    
}