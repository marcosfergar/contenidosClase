let tarea = document.getElementById("entrada-tarefa");
let lista = document.getElementById("lista-tarefas");

let tareas = [];

function engadirTarefa() {


    if (tarea.value != "") {
        let nuevaTarea = {
            id: Date.now(),
            texto: tarea.value.trim(),
            completada: false
        }

        tareas.push(nuevaTarea);

        tareas.sort((a, b) => a.texto.localeCompare(b.texto));

        renderizarTarea(tareas);

        tarea.value = '';
    }
    tarea.focus();

}

function renderizarTarea(listado) {

    lista.innerHTML = "";

    for (let i = 0; i < listado.length; i++) {
        if (listado[i].completada == true) {
            lista.innerHTML += `
            <li class="elemento-tarefa completada">
                <span>${listado[i].texto}</span>
            <div class="contedor-btns" class="completada">
                <button class="btn-completar" onclick="completarTarefa(${i})">✔</button>
                <button class="btn-eliminar" onclick="eliminarTarefa(${i})">✖</button>
            </div>
        </li>
        `
        } else {
            lista.innerHTML += `
        <li class="elemento-tarefa">
                <span>${listado[i].texto}</span>
            <div class="contedor-btns" >
                <button class="btn-completar" onclick="completarTarefa(${i})">✔</button>
                <button class="btn-eliminar" onclick="eliminarTarefa(${i})">✖</button>
            </div>
        </li>
        `
        }
    }

}

function completarTarefa(tarea) {

    if (tareas[tarea].completada == true) {
        tareas[tarea].completada = false
    }else{
    tareas[tarea].completada = true;
    }
    
    renderizarTarea(tareas);
}

function eliminarTarefa(tarea) {
    tareas.splice(tarea, 1);
    renderizarTarea(tareas);
}