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

    }

    alternarCompletada(idTarefa) {

    }

    eliminarTarefa(idTarefa) {
    }
}

class XestorDeListas {
    constructor() {
        this.listas = this.cargarDeLocalStorage();
    }

    engadirLista(nome) {

    }

    eliminarLista(idLista) {

    }

    obterLista(idLista) {
    }

    // Métodos de persistencia

    gardarEnLocalStorage() {

    }

    cargarDeLocalStorage() {
        const datosJSON = localStorage.getItem('listasKeep');
        if (!datosJSON) return [];

        const dadosCargados = JSON.parse(datosJSON);

        // É crucial RECONSTRUÍR as instancias de ListaDeTarefas e Tarefa
        // para que os métodos (p. ex., engadirTarefa) sigan estando dispoñibles.
        return dadosCargados.map(listaData => {
            const lista = new ListaDeTarefas(listaData.nome);
            lista.id = listaData.id;

            // Reconstruír as instancias de Tarefa dentro da lista
            lista.tarefas = listaData.tarefas.map(tarefaData => {
                const tarefa = new Tarefa(tarefaData.texto, tarefaData.completada);
                tarefa.id = tarefaData.id;
                return tarefa;
            });

            return lista;
        });
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

}


function crearElementoListaDOM(lista) {

}

function crearElementoTarefaDOM(idLista, tarefa) {

}

function crearFormularioEngadirTarefa(idLista) {

}

// =============================================================================
// SECCIÓN 4: FUNCIÓNS DE CONTROL (Eventos)
// =============================================================================

function novaLista() {

}

function eliminarLista(idLista) {

}

function engadirTarefaALista(idLista, texto) {

}

function alternarCompletada(idLista, idTarefa) {

}

function eliminarTarefa(idLista, idTarefa) {

}

// =============================================================================
// SECCIÓN 5: INICIALIZACIÓN
// =============================================================================

document.addEventListener('DOMContentLoaded', async () => {
    
});