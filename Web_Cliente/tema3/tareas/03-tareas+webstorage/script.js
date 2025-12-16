let tarea = document.getElementById("entrada-tarefa");
let lista = document.getElementById("lista-tarefas");

let taraes = [];

function engadirTarefa() {
    if (tarea.value != false) {

    localStorage.setItem(`${tarea.value}`, false);
    renderizarTarea();
    
    tarea.value='';
    tarea.focus();

    }else{
        alert("introduce un nombre para la tarea")
    }
    

}

function renderizarTarea() {
    taraes.sort((a,b)=> a.nombreT.localeCompare(b.nombreT))

    lista.innerHTML='';

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) == "true") {
       lista.innerHTML+=`
            <li class="elemento-tarea completada">
                <p>${localStorage.key(i)}</p>
                <div class="botones">
                    <button type="button" onclick="completarTarea(${i})">❤️</button>
                    <button type="button" onclick="eliminarTarea(${i})">❌</button>
                </div>
            </li>
       `
        } else {
            
       lista.innerHTML+=`
            <li class="elemento-tarea">
                <p>${localStorage.key(i)}</p>
                <div class="botones">
                    <button type="button" onclick="completarTarea(${i})">❤️</button>
                    <button type="button" onclick="eliminarTarea(${i})">❌</button>
                </div>
            </li>
       `   
        }
    }
}


function completarTarea(i) {
    if (localStorage.getItem(localStorage.key(i)) == "true") {
        localStorage.setItem(`${localStorage.key(i)}`, false)
    } else {
        localStorage.setItem(`${localStorage.key(i)}`, true)
    }
    renderizarTarea();
}


function eliminarTarea(i) {
    localStorage.removeItem(localStorage.key(i));
    renderizarTarea();
}

document.addEventListener('DOMContentLoaded', ()=> {renderizarTarea();});