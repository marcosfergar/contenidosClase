let guardarBoton = document.getElementById("btn-gardar")
let cancelarAccion = document.getElementById("btn-cancelar")
let resultado = document.getElementById("resultado")

function crearSaludo(opcion) {
    let contador = 0
    return function () {
        contador ++
        resultado.innerHTML+=`
        <p>El boton ${opcion} se pulso ${contador} veces</p>
        `;
    }
}
guardarBoton.addEventListener("click", crearSaludo("Guardar Cambios"))
cancelarAccion.addEventListener("click", crearSaludo("Cancelar Accion"))