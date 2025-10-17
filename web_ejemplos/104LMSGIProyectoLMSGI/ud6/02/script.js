let contenedor = document.getElementById("contenido");
document.getElementById("boton").addEventListener("click", cargarLista);

function cargarLista() {
    fetch("02.json")
  .then(response => response.json())
  .then(personas => { 
    
    contenedor.innerHTML = ""; 
    personas.forEach(e => {
        contenedor.innerHTML += `<li><span class="clave">Nombre: </span>${e.Nombre} - `
    + `<span class="clave">Edad: </span>: ${e.Edad} `
    + `<button onclick="borrar(this)">Borrar</button> </li>`;
    });
    

  })
  .catch(error => console.error('Error:', error));
}

function borrar(boton) {    
    let li = boton.parentNode; 
    li.parentNode.removeChild(li); 
}