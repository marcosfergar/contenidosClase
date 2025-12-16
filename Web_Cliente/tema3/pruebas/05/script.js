window.addEventListener('resize', mostrarInformaciones)
function mostrarInformaciones() {
    let inf_nav = document.getElementById("info-navegador");
        inf_nav.textContent = `${navigator.userAgent} con un tamado de ${innerHeight} x ${innerWidth}`;

    let inf_so = document.getElementById("info-so");
        inf_so.textContent = navigator.platform
    let inf_url = document.getElementById("url-actual");
        inf_url.textContent = window.location.href
    let inf_xeo = document.getElementById("info-xeoloc");
        navigator.geolocation
        inf_xeo.textContent = `${latitude} ${longitude}`
}

function abrirFiestraAviso() {
    let ventanaAviso = window.open("","Aviso", "width=500,height=300");

     const contenidoHTML = `
        <html>
            <head>
                <title>Pop-up con HTML</title>                
            </head>
            <body>
                <h1>Aviso esta ventana se cerrara en 5 segundos</h1>
            </body>
        </html>
    `;

    ventanaAviso.document.write(contenidoHTML);

    setTimeout(() => {
        ventanaAviso.close();
    }, 5000);
    
}

function mudarImaxe(imagen) {
    let imagenGrande = document.getElementById("imaxe-principal");
    imagenGrande.setAttribute("src", `imaxes/${imagen}`);

    // history.pushState({imagen:idimagen, url:`imaxes/${idimaxe}`,})
}

mostrarInformaciones()