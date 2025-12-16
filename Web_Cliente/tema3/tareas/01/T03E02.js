let boton = document.getElementById("boton");

let titulo = document.getElementById("titulo");
let parrafo = document.getElementsByClassName("parrafo");
let parrafo1 = document.querySelector(".parrafo");
let todosParrafos = document.querySelectorAll(".parrafo");
let nuevoP = document.createElement('p');
nuevoP.textContent='Nuevo parrafo creado dinamicamente'
nuevoP.classList.add('parrafo');

let div = document.getElementById("contido")

document.body.appendChild(nuevoP);

let caja = []


console.log("Texto del titulo: "+titulo.textContent);

for (let i = 0; i < parrafo.length; i++) {
    console.log("Parrafo: " + parrafo[i].textContent);
};

console.log("Primer parrafo: " + parrafo1.textContent);

todosParrafos.forEach((p, i) => {
    console.log("Parrafo: "+ i + " " + p.textContent);
});

parrafo1.style.color='green';
parrafo1.style.fontSize='1.5em';

titulo.textContent='Nuevo Titulo';


boton.addEventListener("click", anadirParrafo);
function anadirParrafo() {
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent='Nuevo parrafo creado por evento'
    nuevoParrafo.classList.add('parrafo');

    contido.appendChild(nuevoParrafo);
}