// Definir un array con frases sobre informática
let frasesFrikisInformatica = [
  "miau",
  "miau",
  "guau"
];

// Función para cambiar el texto de forma aleatoria
function cambiarTexto() {
  // Obtener un índice aleatorio del array de frases
  let indice = Math.floor(Math.random() * frasesFrikisInformatica.length);
  // Obtener el elemento de texto
  let texto = document.getElementById("texto-informatica");
  // Cambiar el contenido del elemento con una frase aleatoria
  texto.textContent = frasesFrikisInformatica[indice];
}
