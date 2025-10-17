const contenedor = document.getElementById('tablero');
contenedor.innerHTML = 
'<div><img src="https://picsum.photos/200/300?random=1" onclick="cambiarImagen(this)"/>'
+'<img src="https://picsum.photos/200/300?random=2" onclick="cambiarImagen(this)"/>'
+'<img src="https://picsum.photos/200/300?random=3" onclick="cambiarImagen(this)"/></div>'
+'<div><img src="https://picsum.photos/200/300?random=4" onclick="cambiarImagen(this)"/>'
+'<img src="https://picsum.photos/200/300?random=5" onclick="cambiarImagen(this)"/>'
+'<img src="https://picsum.photos/200/300?random=6" onclick="cambiarImagen(this)"/></div>';

function cambiarImagen(imagen) {
    const imagenes = [ 
        'https://picsum.photos/200?random=1', 
        'https://picsum.photos/200?random=2', 
        'https://picsum.photos/200?random=3', 
        'https://picsum.photos/200?random=4', 
        'https://picsum.photos/200?random=5', 
        'https://picsum.photos/200?random=6', 
        'https://picsum.photos/200?random=7', 
        'https://picsum.photos/200?random=8' 
    ];
    imagen.src = imagenes[Math.floor(Math.random() * imagenes.length)];
}