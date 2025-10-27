// VARIABLES GLOBAIS

// Arrays de emoticonos 
let emoticonosBase = ['🌟', '🌜', '🌤️', '⛈️', '🏀', '🚿', '🥗', '🦀'];

// Variables de estado do xogo
let estadoTaboleiro = []; // Almacena o estado (virada, atopada, etc.)
let cartasViradas = []; // Almacena os índices das cartas viradas actualmente
let bloqueoTaboleiro = false;
let paresAtopados = 0;
let xogadas = 0;

// FUNCIONES

// Función para embarallar un array (algoritmo de Fisher-Yates)
function embarallarArray(array) {
    let indiceActual = array.length;
    let valorTemporal;
    let indiceAleatorio;

    while (indiceActual !== 0) {
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual--;

        valorTemporal = array[indiceActual];
        array[indiceActual] = array[indiceAleatorio];
        array[indiceAleatorio] = valorTemporal;
    }
    return array;
}

// Función para inicializar e xerar o estado do taboleiro
function iniciarXogo() {
    
}

// Función para renderizar todo o taboleiro usando innerHTML
function renderizarTaboleiro() {
    
}

// Lóxica para voltear as cartas
function voltearCarta(indice) {
   
}

// Función para comprobar se as cartas volteadas son unha parella
function comprobarParella() {
    
}

// Inicia o xogo
iniciarXogo();