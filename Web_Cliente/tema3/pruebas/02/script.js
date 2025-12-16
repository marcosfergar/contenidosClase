let temporizador = document.getElementById("temporizador");
let ventana = document.getElementById("ventana");

let info = document.getElementById('info');
info.innerHTML = `
${window.innerWidth} x ${window.innerHeight} px ||
${window.outerWidth} x ${window.outerHeight} px ||
(${window.screenX} x ${window.screenY})
`
function cuentaAtras() {
    let segundos = prompt("Introduze los segundos");
    if (segundos == false) {
        window.alert("Operacion cancelada")
        return
    }

    if (parseInt(segundos) < 1) {
        window.alert("Introduce un numero positivo");
        return
    }

    let parrafo = document.createElement("p");
    info.appendChild(parrafo);

    let intervalo = setInterval(() => {            
        parrafo.textContent="Tiempo restante: "+segundos;
        segundos--;

        if (segundos%2 == 0) {
            parrafo.style.color= "blue"
        } else{
            parrafo.style.color= "green"
        }

        if (segundos == 0) {
           
            clearInterval(intervalo);
            parrafo.textContent=segundos + " Se acabo el tiempo";
        }
        
    }, 1000)


}

function abrirVentana() {
    window.open("", "_blank", "width=400, height=400")
}


temporizador.addEventListener("click", cuentaAtras)


ventana.addEventListener("click", abrirVentana)