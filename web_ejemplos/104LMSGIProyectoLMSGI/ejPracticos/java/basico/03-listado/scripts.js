// Seleccionar elementos del DOM
const input = document.getElementById('newTaskInput');
const boton = document.getElementById('addTaddTaskBtnaskBtn');
const lista = document.getElementById('lista');

// Función para agregar una nueva tarea
function addTask() {

  // Obtener el valor del input
  const texto = input.value;

  // Verificar que el campo no esté vacío
  if (texto) {

    // Crear un nuevo elemento de lista (li)
    const li = document.createElement('li');
    li.textContent = texto;

    // Crear botón para eliminar la tarea
    const borrar = document.createElement('button');
    borrar.textContent = 'X';

    // Agregar evento al botón para eliminar la tarea
    borrar.addEventListener('click', () => {
      li.remove();
    });


    //  Agregar la clase deleteBtn al botón de eliminar
    borrar.classList.add('deleteBtn'); 

    // Agregar el botón al elemento de lista
    li.appendChild(borrar);

    // Agregar la tarea a la lista
    lista.appendChild(li);

    // Limpiar el campo de texto después de agregar la tarea
    input.value = '';
  }
}