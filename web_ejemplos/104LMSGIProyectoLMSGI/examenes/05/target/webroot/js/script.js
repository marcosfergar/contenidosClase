let contenedor = document.getElementById("contenido");
document.getElementById("boton").addEventListener("click", cargarLista);

function cargarLista() {
    fetch("./webroot/json/ACUARIO/horoscopo.json")
  .then(response => response.json())
  .then(horoscopo => { 
    console.log(horoscopo);
    contenedor.innerHTML = ""; 


    horoscopo.forEach(e => {
        contenedor.innerHTML += `<li><span class="clave">message: </span>${e.horoscope0} - `;
    });
    

  })
}
