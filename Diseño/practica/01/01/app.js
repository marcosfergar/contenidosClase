let boton = document.getElementById("btnEngadir");

let tarea = document.getElementById("inputTarefa");

let tareas = [];

function añadirTarea() {
    let nuevaTarea = {
        id: new Date(),
        nombreT: tarea.value,
        estado: false
    }

    tareas.push(nuevaTarea);

    tareas.sort((a,b) => a.nombreT.localeCompare(b.nombreT))

    renderizarTareas(tareas);
    
    tarea.value='';

    tarea.focus();
}

function renderizarTareas(listadoTareas) {
    let lista = document.getElementById("listaTarefas");
    lista.innerHTML='';



    for (let i = 0; i < listadoTareas.length; i++) {
        
        let elemento_li = document.createElement('li')
        let parrafo = document.createElement('p');
        let cajaBotones = document.createElement('div');
        let botonC = document.createElement('button');
        let botonE = document.createElement('button');

        if (tareas[i].estado == true) {
            elemento_li.classList.add('completada');
        }
        parrafo.textContent = listadoTareas[i].nombreT;
        
        cajaBotones.classList.add("botones-li");
    
        botonC.type = "button";
        botonC.classList.add('botonCompletar');
        botonC.onclick = () => completarTarea(i)
        botonC.textContent = "❤️"
        
        botonE.type = "button";
        botonE.classList.add('botonEliminar');
        botonE.onclick = () => eliminarTarea(i);
        botonE.textContent = "❌"
        
        elemento_li.appendChild(parrafo);

        cajaBotones.appendChild(botonC);
        cajaBotones.appendChild(botonE);

        elemento_li.appendChild(cajaBotones);
        lista.appendChild(elemento_li);

    }     
}

function completarTarea(indice) {

    if (tareas[indice].estado == true) {
        tareas[indice].estado = false
    } else {
        tareas[indice].estado = true

    }
    renderizarTareas(tareas);
    
}

function eliminarTarea(indice) {
    if (confirm('Desea eliminar este elemento?')) {
        tareas.splice(indice,1);
        renderizarTareas(tareas);     
    }else{
        return
    }         
}

boton.addEventListener('click', añadirTarea);
