let avo = document.getElementById("avo")
let pai = document.getElementById("pai")
let fillo = document.getElementById("fillo")

avo.addEventListener('click', function() {console.log("🟢 Acción A.");}, true);

pai.addEventListener('click', function() { console.log("🟢 Acción B."); }, true);

fillo.addEventListener('click', function() { console.log("🟢 Acción C."); }, true);

avo.addEventListener('click', function(event) {
    event.stopPropagation()
    console.log("🔴 Acción A.")
    console.warn("🟡 Acción A.")}, false);

pai.addEventListener('click', function(event) { 
    event.stopPropagation()
    console.log("🔴 Acción B.")
    console.warn("🟡 Acción B.")}, false);

// pai.addEventListener('click', manejadorPai, false);

// Si quieres borrarlo primero tienes que convertirlo en una funcion normal, no puede ser una en flecha
// pai.removeEventListener("click", manejadorPai, false);

fillo.addEventListener('click', function(event) { 
    event.stopPropagation()
    console.log("🔴 Acción C.")
    console.warn("🟡 Acción C.")}, false);

// Parte 2
let listaDinamica = document.getElementById("lista-dinamica");

const numElementos = 20;
let contador = numElementos;

for (let index = 0; index <= numElementos; index++) {
    const li = document.createElement("li");
    li.innerHTML = `
        Elemento num ${index}
        <button class="btn-engadir">Crear</button>
        <button class="btn-eliminar">Eliminar</button>`;
    listaDinamica.appendChild(li);

}

listaDinamica.addEventListener("click", (event)=>{
    const elementoClikado = event.target

    if(elementoClikado.classList.contains("btn-engadir")){
        contador++;
        let liActual=elementoClikado.closest("li");
        const li = document.createElement("li");
            li.innerHTML = `
        Elemento num ${contador}
        <button class="btn-engadir">Crear</button>
        <button class="btn-eliminar">Eliminar</button>`;
        
        liActual.insertAdjacentElement("afterend",li)
    }



    if(elementoClikado.classList.contains("btn-eliminar")){
        event.closest('li').remove();
    }
})