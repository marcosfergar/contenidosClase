let tarea = document.getElementById("entrada-tarefa");
let lista = document.getElementById("lista-tarefas");

let tareas = [];

function engadirTarefa() {
    
    if (tarea.value != false) {
        let nuevaTarea = {
        id: new Date(),
        nombreT: tarea.value,
        estado: false
    }

    tareas.push(nuevaTarea);
    renderizarTareas();

    tarea.value = '';
    }else{
        alert("Introduce una tarea");
    }
    
}

function renderizarTareas() {

    tareas.sort((a,b)=> a.nombreT.localeCompare(b.nombreT));

    lista.innerHTML='';
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado == true) {
        lista.innerHTML+=`
        <li class="elemento-lista completada">
            <p>${tareas[i].nombreT}</p>
            <div class="botones">
                <button type="button" onclick="completarTarea(${i})">✔</button>
                <button type="button" onclick="eliminarTarea(${i})">X</button>
            </div>                
        </li>
        ` 
        }else{
        lista.innerHTML+=`
        <li class="elemento-lista">
            <p>${tareas[i].nombreT}</p>
            <div class="botones">
                <button type="button" onclick="completarTarea(${i})">✔</button>
                <button type="button" onclick="eliminarTarea(${i})">X</button>
            </div>                
        </li>
        `            
        }  
    }

}

function completarTarea(indiceTarea) {
    if(tareas[indiceTarea].estado == true){
        tareas[indiceTarea].estado=false;
    }else{
        tareas[indiceTarea].estado=true;
    }
    renderizarTareas();
}

function eliminarTarea(indiceTarea) {
    tareas.splice(indiceTarea,1);
    renderizarTareas();
}