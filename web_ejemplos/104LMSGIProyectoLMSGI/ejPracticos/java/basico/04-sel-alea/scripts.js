const input = document.getElementById('inputId');
const boton = document.getElementById('boton');
const lista = document.getElementById('lista');
const randomBtn = document.getElementById('botonRnd');

// Arreglo para almacenar los nombres ingresados
let names = [];

// Función que se ejecuta al agregar un nuevo nombre
function addTask() {
  // Obtiene el valor del input y elimina espacios al principio y al final
  const name = input.value.trim();

  // Verifica que el nombre no esté vacío
  if (name !== '') {
    // Agrega el nombre al arreglo
    names.push(name);

    // Vuelve a renderizar la lista con los nuevos nombres
    renderNames();

    // Limpia el input para el siguiente nombre
    input.value = '';
  }
}

// Función para mostrar en pantalla todos los nombres de la lista
function renderNames() {
  // Limpia el contenido HTML actual de la lista
  lista.innerHTML = '';

  // Recorre el arreglo de nombres y crea un elemento <li> por cada uno
  names.forEach(name => {
    const listItem = document.createElement('li'); // Crea un nuevo <li>
    listItem.textContent = name; // Asigna el texto del nombre
    lista.appendChild(listItem); // Agrega el <li> a la lista en el DOM
  });
}

// Función para seleccionar aleatoriamente un nombre de la lista
function selectRandomName() {
  // Verifica que haya nombres en la lista
  if (names.length > 0) {
    // 1. Obtener un índice aleatorio válido dentro del arreglo
    const randomIndex = Math.floor(Math.random() * names.length);

    // 2. Obtener el nombre usando ese índice
    const selectedName = names[randomIndex];

    // 3. Buscar el <li> correspondiente en el DOM
    // ❗ Usamos `.children` para evitar problemas con nodos de texto
    const selectedListItem = lista.children[randomIndex];

    // 4. Agregar una clase CSS para resaltarlo
    selectedListItem.classList.add('selected');

    // 5. Modificar el texto del ítem para mostrar que fue elegido
    selectedListItem.textContent += ` - Se ha elegido: ${selectedName}`;
  } else {
    // Si no hay nombres, muestra una alerta
    alert('¡No hay nombres en la lista!');
  }
}
