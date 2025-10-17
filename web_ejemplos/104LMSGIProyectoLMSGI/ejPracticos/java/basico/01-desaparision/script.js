var box = document.getElementById('box');
var boton = document.getElementById('toggleBtn');

// Función para alternar la visibilidad de la caja
function toggleBox() {
  if (boton.value === 'Ocultar_Caja') {
    box.style.display = 'none';    
    boton.value = 'Mostrar_Caja';
  } else {
    box.style.display = 'block';
    boton.value = 'Ocultar_Caja';
  }
}
