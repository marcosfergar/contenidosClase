let tarea = document.getElementById("entrada-tarefa");

let tareas = [];

function engadirTarefa() {
    let nuevaTarea = {
        id: new Date(),
        nombreT: tarea.value,
        estado: false
    }

    tareas.push(nuevaTarea);
    renderizaTareas();

    tarea.value='';
    tarea.focus();
}

function renderizaTareas() {
    let lista = document.getElementById("lista-tarefas");

    tareas.sort((a,b) => a.nombreT.localeCompare(b.nombreT));
    lista.innerHTML='';

    for (let i = 0; i < tareas.length; i++) {

    if (tareas[i].estado == true) {
        lista.innerHTML+=`
            <li class="elemento-lista completada">
                <p>${tareas[i].nombreT}</p>
                <div class="botnones">
                    <button type="button" onclick="completarTarea(${i})">✏️</button>
                    <button type="button" onclick="eliminarTarea(${i})">❌</button>
                </div>
            </li>
        ` 
    } else {
        lista.innerHTML+=`
            <li class="elemento-lista">
                <p>${tareas[i].nombreT}</p>
                <div class="botnones">
                    <button type="button" onclick="completarTarea(${i})">✏️</button>
                    <button type="button" onclick="eliminarTarea(${i})">❌</button>
                </div>
            </li>
        `
    }        
    }

}

function completarTarea(i) {
    if (tareas[i].estado == true) {
        tareas[i].estado = false
        alert("ola")
    } else {
        tareas[i].estado = true
    }
    renderizaTareas();
}

function eliminarTarea(i) {
    tareas.splice(i,1);
    renderizaTareas();
}