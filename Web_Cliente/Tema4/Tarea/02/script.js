// =============================================================================
// SECCIÓN 1: MODELO POO (Clases)
// =============================================================================

class Tarefa {
    constructor(texto, completada = false) {
        this.id = Date.now() + Math.random();
        this.texto = texto;
        this.completada = completada;
    }
}


class ListaDeTarefas {
    constructor(nome = 'Nova Lista') {
        this.id = Date.now(); // ID único para a lista
        this.nome = nome;
        this.tarefas = []; // Array de obxectos Tarefa
    }


    engadirTarefa(texto) {
        let nuevaTarea = new Tarefa(texto)
        this.tarefas.push(nuevaTarea);
        this.tarefas.sort((a,b) => a.texto.localeCompare(b.texto))
    }

    alternarCompletada(idTarefa) {
        const tarefa = this.tarefas.find(t => t.id === idTarefa);
        tarefa.completada = !tarefa.completada;
    }

    eliminarTarefa(idTarefa) {
        this.tarefas = this.tarefas.filter(e => e.id != idTarefa)
    }
}

class XestorDeListas {
    constructor() {
        this.listas = this.cargarDeLocalStorage();
    }

    engadirLista(nome) {
        let nuevaLista = new ListaDeTarefas(nome)
        this.listas.push(nuevaLista)
        this.listas.sort((a,b) => a.nome.localeCompare(b.nome))
    }

    eliminarLista(idLista) {
        this.listas = this.listas.filter(l => l.id != idLista )
    }

    obterLista(idLista) {
        return this.listas.find(e => e.id == idLista );
    }

    // Métodos de persistencia

    gardarEnLocalStorage() {
        localStorage.setItem('lista', JSON.stringify(this.listas))
    }

    cargarDeLocalStorage() {
        const datosJSON = localStorage.getItem('listas')
        if (!datosJSON) {
            return []
        }
        let data = JSON.parse(datosJSON);
        
        data.map(e =>{
            data.nome 
            let lista = new ListaDeTarefas(e.nome)
            lista.id = e.id

            lista.tarefas = data.tarefa.map(e =>{
                let tarea = new Tarefa(e.texto, e.completada)
                tarea.id = e.id
                return tarea
            })

            return lista
        })
    }
}

// =============================================================================
// SECCIÓN 2: INSTANCIA GLOBAL E DOM
// =============================================================================

const xestor = new XestorDeListas();

// DOM
const contedorListas = document.getElementById('contedor-listas');
const btnNovaLista = document.getElementById('btn-nova-lista');


// =============================================================================
// SECCIÓN 3: XESTIÓN DO DOM E EVENTOS
// =============================================================================

function renderizarTodasAsListas() {
    contedorListas.innerHTML=''
    
    xestor.listas.forEach(lista =>{
        let tareasHTML = '';

        lista.tarefas.forEach((tarea, index) => {
            
            tareasHTML += `
                <li>
                    <input type="checkbox" data-index="${index}">
                    <span>${tarea.texto}</span>
                    <button class="btn-eliminar-tarefa" data-lista="${lista.id}" data-id="${tarea.id}">✖</button>
                </li>
            `;
        });

        contedorListas.innerHTML+=`
        <div class="nota">
            <h3>${lista.nome}</h3>
            <ul class="lista-tarefas ">
                ${tareasHTML}
            </ul>
            <button type="button" class="btn-eliminar-nota" data-id="${lista.id}">✖ Eliminar Lista</button>
            <form class="form-engadir-tarefa">
                <input type="text" id="${lista.id}" name="tarea" placeholder="nueva Tarea" ><button type="button" data-id="${lista.id}" class="añadirTareaSub">+</button>
            </form>
        </div>
        `

    })
    
    añadirEventos();
}


function añadirEventos() {
    const btnoEliminarLista = document.querySelectorAll(".btn-eliminar-nota");
    btnoEliminarLista.forEach(btn =>{
        btn.addEventListener("click",(e) => {
            xestor.eliminarLista(e.target.dataset.id)     
            renderizarTodasAsListas();
        })
    })


    const btnoAñadirTarea = document.querySelectorAll(".añadirTareaSub");
    btnoAñadirTarea.forEach(btn =>{
        btn.addEventListener("click",(e) => {
            let texto = document.getElementById(e.target.dataset.id)
            let miLista = xestor.obterLista(e.target.dataset.id);            
            miLista.engadirTarefa(texto.value)
            renderizarTodasAsListas()
        })
    })


    const btnoEliminarTarea = document.querySelectorAll(".btn-eliminar-tarefa");
    btnoEliminarTarea.forEach(btn =>{
        btn.addEventListener("click", (e)=>{
            const lista = xestor.obterLista(e.target.dataset.lista);
            console.log(e.target.dataset.lista);          
            if (lista) {
                lista.eliminarTarefa(e.target.dataset.id);
                renderizarTodasAsListas();
            }
        })
    })
}

function crearElementoTarefaDOM(idLista, tarefa) {

}

// =============================================================================
// SECCIÓN 4: FUNCIÓNS DE CONTROL (Eventos)
// =============================================================================

function novaLista() {
    let nome = prompt("Introduce o nome da nova lista:")
    if (nome) {
        xestor.engadirLista(nome)
        renderizarTodasAsListas();
    }else{
    alert("escriba un nombre")
    }
}

function eliminarLista(idLista) {
    xestor.eliminarLista(idLista)
}

function alternarCompletada(idLista, idTarefa) {

}

// =============================================================================
// SECCIÓN 5: INICIALIZACIÓN
// =============================================================================
document.addEventListener('DOMContentLoaded',() => {

    btnNovaLista.addEventListener("click", novaLista)
    renderizarTodasAsListas();
});