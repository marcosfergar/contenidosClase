const entrada = document.getElementById('jugada');
const intentos = document.getElementById('intentos');
const mensaje = document.getElementById('mensaje');

let numalea = Math.floor(Math.random()*100)+1;
let intento = 0;


function comprobarSuposicion(){
  
    // let susposicion = 50;
    let susposicion = Number(entrada.value);    
    //console.log(entrada.value)
    if(susposicion < 1 || susposicion > 100){
        mensaje.textContent='Por favor, inserte un numero valido entre 1 y 100';
        return;
    }
    intento++

    if(susposicion==numalea){
        mensaje.textContent=`Felicidades adivinaste el numero ${numalea} en ${intento}`;
        mensaje.style.color='green';
        entrada.disable = true;        
    }else if (susposicion > numalea){
        mensaje.textContent=`El numero es menor`;
        intento++;
    }else if (susposicion < numalea){
        mensaje.textContent=`El numero es mayor`;
        intento++;
    }

    intentos.textContent= `Intentos: ${intento}`;
    entrada.value="";
    entrada.focus();
}
