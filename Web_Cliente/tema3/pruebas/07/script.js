let botonCrear = document.getElementById("guardarNombre");
let botonMostrar = document.getElementById("leerNombre");
let botonBorrar = document.getElementById("borrarNombre")

let cookies = []
function guardarNombre() {
    let nombre = document.getElementById('texto-nombre').vale

    let hoy = new Date;
    hoy.setHours(hoy.getHours()+2);
    let fechaExpiracion = hoy.toUTCString();
    document.cookie = `username=${nombre}; expires=${fechaExpiracion}; path=/`;
    document.cookie = `sesionIniciada=true; expires=${fechaExpiracion}; path=/`;
    alert("cookie creada")

    cookies.push(`username=${nombre}`);
}

function leerNombre() {
    let caja = document.getElementById("cookies_actuales");

    caja.innerHTML=`
    <b>Cookies actuales:</b>
    `;

    for (let i = 0; i < cookies.length; i++) {
        caja.innerHTML += `            
            <p>${cookies[i]}</p>
        `
    }
    
}

function borrarNombre(nombre) {
    nombre = window.prompt("Escribe el nombre de la cookie a crear")
    document.cookie = `username=${nombre}; max-age=0; path=/;`
}

botonCrear.addEventListener("click", guardarNombre);
botonMostrar.addEventListener("click", leerNombre);
botonBorrar.addEventListener("click", borrarNombre)

