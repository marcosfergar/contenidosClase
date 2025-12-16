let botonCrear = document.getElementById("crearC");
let botonMostrar = document.getElementById("mostrarC");
let botonBorrar = document.getElementById("borrarC")

let cookies = []
function crearCookie(nombre) {
    nombre = window.prompt("Escribe el nombre de la cookie a crear")
    let hoy = new Date;
    hoy.setHours(hoy.getHours()+2);
    let fechaExpiracion = hoy.toUTCString();
    document.cookie = `username=${nombre}; expires=${fechaExpiracion}; path=/`;
    document.cookie = `sesionIniciada=true; expires=${fechaExpiracion}; path=/`;
    alert("cookie creada")

    cookies.push(`username=${nombre}`);
}

function mostrarCookie() {
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

function borraCookie(nombre) {
    nombre = window.prompt("Escribe el nombre de la cookie a crear")
    document.cookie = `username=${nombre}; max-age=0; path=/;`
}

botonCrear.addEventListener("click", crearCookie);
botonMostrar.addEventListener("click", mostrarCookie);
botonBorrar.addEventListener("click", borraCookie)

