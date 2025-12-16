let boton = document.getElementById("boton1")

function añadirCelda() {
    let caja = document.getElementById("caja")
    let div = document.createElement('div')
    div.classList.add('item')
    div.classList.add('item12')
    div.textContent = '12'

    caja.appendChild(div);
}

boton.addEventListener("click", añadirCelda);