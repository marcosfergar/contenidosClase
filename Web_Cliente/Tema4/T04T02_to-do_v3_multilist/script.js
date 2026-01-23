// =============================================================================
// SECCIÓN 1: MODELO POO (Clases)
// =============================================================================

/**
 * Clase que representa un Item (unha única tarefa) dentro dunha lista.
 */
class Tarefa {
    constructor(texto, completada = false) {
        this.id = Date.now() + Math.random(); // ID único para a tarefa individual
        this.texto = texto;
        this.completada = completada;
    }
}

/**
 * Clase que representa unha Lista completa (como unha "Nota" en Keep).
 */
class ListaDeTarefas {
    constructor(nome = 'Nova Lista') {
        this.id = Date.now(); // ID único para a lista
        this.nome = nome;
        this.tarefas = []; // Array de obxectos Tarefa
    }

    // Métodos de manipulación da lista

    engadirTarefa(texto) {
        const novaTarefa = new Tarefa(texto);
        this.tarefas.push(novaTarefa);
        this.tarefas.sort((a, b) =>
            a.texto.localeCompare(b.texto, 'gl', { sensitivity: 'base' })
        );
    }

    alternarCompletada(idTarefa) {
        const tarefa = this.tarefas.find(t => t.id === idTarefa);
        if (tarefa) {
            tarefa.completada = !tarefa.completada;
        }
    }

    eliminarTarefa(idTarefa) {
        this.tarefas = this.tarefas.filter(t => t.id !== idTarefa);
    }
}

/**
 * Clase que xestiona a colección de todas as ListasDeTarefas e a persistencia.
 */
class XestorDeListas {
    constructor() {
        this.listas = this.cargarDeLocalStorage();
    }

    // Métodos CRUD da colección de listas

    engadirLista(nome) {
        const novaLista = new ListaDeTarefas(nome);
        this.listas.push(novaLista);
        this.gardarEnLocalStorage();
        return novaLista;
    }

    eliminarLista(idLista) {
        this.listas = this.listas.filter(l => l.id !== idLista);
        this.gardarEnLocalStorage();
    }

    obterLista(idLista) {
        return this.listas.find(l => l.id === idLista);
    }

    // Métodos de persistencia

    gardarEnLocalStorage() {
        // Almacena o array de obxectos ListaDeTarefas
        localStorage.setItem('listasKeep', JSON.stringify(this.listas));
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

/**
 * Renderiza todas as listas almacenadas no Xestor.
 */
function renderizarTodasAsListas() {
    contedorListas.innerHTML = ''; // Limpar o contedor principal

    xestor.listas.forEach(lista => {
        const elementoLista = crearElementoListaDOM(lista);
        contedorListas.appendChild(elementoLista);
    });
}

/**
 * Crea o elemento DOM completo para unha ListaDeTarefas (unha "Nota").
 * @param {ListaDeTarefas} lista - Instancia da ListaDeTarefas.
 */
function crearElementoListaDOM(lista) {
    const divNota = document.createElement('div');
    divNota.className = 'nota';
    divNota.dataset.listaId = lista.id;

    // 1. Encavezamento da Lista
    const encabezado = document.createElement('h3');
    encabezado.textContent = lista.nome;

    // 2. Botón de Eliminar Nota
    const btnEliminarNota = document.createElement('button');
    btnEliminarNota.className = 'btn-eliminar-nota';
    btnEliminarNota.textContent = '✖ Eliminar Lista';
    btnEliminarNota.addEventListener('click', () => eliminarLista(lista.id));

    // 3. Contedor de Tarefas
    const ulTarefas = document.createElement('ul');
    ulTarefas.className = 'lista-tarefas';

    // Renderizar os items da lista
    lista.tarefas.forEach(tarefa => {
        const liTarefa = crearElementoTarefaDOM(lista.id, tarefa);
        ulTarefas.appendChild(liTarefa);
    });

    // 4. Formulario de Engadir Tarefa
    const formTarefa = crearFormularioEngadirTarefa(lista.id);

    // Ensamblaxe final
    divNota.appendChild(encabezado);
    divNota.appendChild(btnEliminarNota);
    divNota.appendChild(ulTarefas);
    divNota.appendChild(formTarefa);

    return divNota;
}

/**
 * Crea o elemento DOM para unha única Tarefa (o li co checkbox).
 * @param {number} idLista - ID da lista á que pertence a tarefa.
 * @param {Tarefa} tarefa - Instancia da Tarefa.
 */
function crearElementoTarefaDOM(idLista, tarefa) {
    const li = document.createElement('li');
    li.className = tarefa.completada ? 'completada' : '';

    // Checkbox
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = tarefa.completada;
    check.addEventListener('change', () => alternarCompletada(idLista, tarefa.id));

    // Texto da tarefa
    const span = document.createElement('span');
    span.textContent = tarefa.texto;

    // Botón de eliminar tarefa individual
    const btnEliminarTarefa = document.createElement('button');
    btnEliminarTarefa.className = 'btn-eliminar-tarefa';
    btnEliminarTarefa.textContent = '✖';
    btnEliminarTarefa.addEventListener('click', () => eliminarTarefa(idLista, tarefa.id));

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(btnEliminarTarefa);

    return li;
}

/**
 * Crea o formulario de input para engadir unha nova tarefa a unha lista específica.
 * @param {number} idLista - ID da lista de destino.
 */
function crearFormularioEngadirTarefa(idLista) {
    const form = document.createElement('form');
    form.className = 'form-engadir-tarefa';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Nova tarefa...';

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = '+';

    form.appendChild(input);
    form.appendChild(button);

    // Evento para engadir
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = input.value.trim();
        if (texto) {
            engadirTarefaALista(idLista, texto);
            input.value = '';
        }
    });

    return form;
}

// =============================================================================
// SECCIÓN 4: FUNCIÓNS DE CONTROL (Eventos)
// =============================================================================

function novaLista() {
    const nome = prompt("Introduce o nome da nova lista:");
    if (nome) {
        xestor.engadirLista(nome);
        renderizarTodasAsListas();
    }
}

function eliminarLista(idLista) {
    if (confirm("Queres eliminar esta lista completa?")) {
        xestor.eliminarLista(idLista);
        renderizarTodasAsListas();
    }
}

function engadirTarefaALista(idLista, texto) {
    const lista = xestor.obterLista(idLista);
    if (lista) {
        lista.engadirTarefa(texto);
        xestor.gardarEnLocalStorage();
        renderizarTodasAsListas(); // Renderizar de novo para actualizar a lista
        const inputLista = document.querySelector(`[data-lista-id="${idLista}"] .form-engadir-tarefa input`);
        inputLista.focus();
    }
}

function alternarCompletada(idLista, idTarefa) {
    const lista = xestor.obterLista(idLista);
    if (lista) {
        lista.alternarCompletada(idTarefa);
        xestor.gardarEnLocalStorage();
        // Non é necesario renderizar todo, só a clase CSS para a animación
        // const elemento = document.querySelector(`[data-lista-id="${idLista}"] .lista-tarefas li input[type="checkbox"][id]`); // MÁIS COMPLEXO
        renderizarTodasAsListas(); // Renderizar de novo (solución máis sinxela)
    }
}

function eliminarTarefa(idLista, idTarefa) {
    const lista = xestor.obterLista(idLista);
    if (lista) {
        lista.eliminarTarefa(idTarefa);
        xestor.gardarEnLocalStorage();
        renderizarTodasAsListas();
    }
}

// =============================================================================
// SECCIÓN 5: INICIALIZACIÓN
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    btnNovaLista.addEventListener('click', novaLista);
    renderizarTodasAsListas(); // Cargar as listas de localStorage ao inicio
});