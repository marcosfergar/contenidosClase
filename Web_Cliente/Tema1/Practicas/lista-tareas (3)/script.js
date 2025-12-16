let tarea = document.getElementById("entrada-tarefa");
let lista = document.getElementById("lista-tarefas");

let taraes = [];

function engadirTarefa() {
    if (tarea.value != false) {
        let nuevaTarea = {
        id: new Date(),
        nombreT: tarea.value,
        estado: false
    }

    taraes.push(nuevaTarea),
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

    for (let i = 0; i < taraes.length; i++) {
        if (taraes[i].estado == true) {
       lista.innerHTML+=`
            <li class="elemento-tarea completada">
                <p>${taraes[i].nombreT}</p>
                <div class="botones">
                    <button type="button" onclick="completarTarea(${i})">❤️</button>
                    <button type="button" onclick="editarTarea(${i})">✏️</button>
                    <button type="button" onclick="eliminarTarea(${i})">❌</button>
                </div>
            </li>
       `
        } else {
            
       lista.innerHTML+=`
            <li class="elemento-tarea">
                <p>${taraes[i].nombreT}</p>
                <div class="botones">
                    <button type="button" onclick="completarTarea(${i})">❤️</button>
                    <button type="button" onclick="editarTarea(${i})">✏️</button>
                    <button type="button" onclick="eliminarTarea(${i})">❌</button>
                </div>
            </li>
       `   
        }
    }
}

function formatearFecha(fecha) {
    opciones = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }

    return fecha.toLocaleDateString('gl-Es', opciones)
}

function completarTarea(i) {
    if (taraes[i].estado == true) {
        taraes[i].estado = false
    } else {
        taraes[i].estado = true
    }
    renderizarTarea();
}

function editarTarea(i) {
    tarea.value = taraes[i].nombreT
    eliminarTarea(i);
}

function eliminarTarea(i) {
    taraes.splice(i,1);
    renderizarTarea();
}