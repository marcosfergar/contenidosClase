let tarea = document.getElementById("entrada-tarefa");
let lista = document.getElementById("lista-tarefas");
let tareas = []

function engadirTarefa(){
    if (tarea.value != false) {
        let nuevaTarea = {
        id: new Date(),
        nombreT: tarea.value,
        estado: false
    }

    tareas.push(nuevaTarea);

    tareas.sort((a,b) => a.nombreT.localeCompare(b.nombreT));

    renderizarTarea();

    tarea.value='';
    tarea.focus();

    }else{
        alert("Introduce un nombre para crear una tarea")
    }
}

function renderizarTarea() {
    lista.innerHTML='';

    for (let i = 0; i < tareas.length; i++) {
        
        if (tareas[i].estado == true) {
        lista.innerHTML+=`
        <li class="completada">
            <p>${tareas[i].nombreT}</p>
            <div class="botones">
                <button type="button" onclick="completarTarea(${i})">❤️</button>
                <button type="button" onclick="eliminarTarea(${i})">❌</button>
                <button type="button" onclick="editarTarea(${i})">✏️</button>
            </div>
        </li>
        ` 
        } else {
        lista.innerHTML+=`
        <li>
            <p>${tareas[i].nombreT}</p>
            <div class="botones">
                <button type="button" onclick="completarTarea(${i})">❤️</button>
                <button type="button" onclick="eliminarTarea(${i})">❌</button>
                <button type="button" onclick="editarTarea(${i})">✏️</button>
            </div>
        </li>
        `   
        }
                
    }
}

function eliminarTarea(indice) {
    tareas.splice(indice,1);
    renderizarTarea();
}

function completarTarea(i) {
    if (tareas[i].estado == true) {
       tareas[i].estado = false 
    }else{
        tareas[i].estado = true
    }

    renderizarTarea();
}

function editarTarea(indice) {
    tarea.value=tareas[indice].nombreT;
    eliminarTarea(indice);
    tarea.focus();

}