let info = document.getElementById("info");
let recarga = document.getElementById("recarga");
let redirigir = document.getElementById("redirigir");
let replace = document.getElementById("replace");

function recargar() {
    window.location.reload();
}

function redirigirPagina() {
    window.location.assign("https://www.xunta.gal/");
}

function renplazar() {
    window.location.replace("https://www.xunta.gal/");
}

function amosaInfoNavigator() {
    info.innerHTML += `
    user-Agent: ${navigator.userAgent} <br>
    Nombre del navegador: ${navigator.appName} <br>
    Version del navegador: ${navigator.appVersion} <br>
    Cookies: ${navigator.cookieEnabled} <br>
    Lenguaje: ${navigator.language} <br>
    Estado: ${navigator.onLine} <br>
    Plataforma: ${navigator.platform} <br>
    Motor de busqueda: ${navigator.product} <br>
    Plugins: ${navigator.plugins} <br>
    `;
}
amosaInfoNavigator()
recarga.addEventListener("click", recargar);

redirigir.addEventListener("click", redirigirPagina);

replace.addEventListener("click", renplazar)

