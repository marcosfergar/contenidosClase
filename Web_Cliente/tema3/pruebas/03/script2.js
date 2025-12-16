let temporizador = document.getElementById("ventana");
let info = document.getElementById("info");

function amosaInfoNavigator() {
    
    const info_text = ` 
    user-Agent: ${navigator.userAgent}
    Nombre del navegador: ${navigator.appName}
    Version del navegador: ${navigator.appVersion}
    Cookies: ${navigator.cookieEnabled}
    Lenguaje: ${navigator.language}
    Estado: ${navigator.onLine}
    Plataforma: ${navigator.platform}
    Motor de busqueda: ${navigator.product}
    Plugins: ${navigator.plugins}
    `

    info.textContent = info_text;
}

temporizador.addEventListener("click", amosaInfoNavigator);

