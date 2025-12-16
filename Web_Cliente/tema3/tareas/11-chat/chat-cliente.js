let estado = document.getElementById('estado');
let chat = document.getElementById('log-mensaxes');
let botonEnviar = document.getElementById('btn-enviar');
let botonConexion = document.getElementById('btn-conexion');
// Créase unha nova conexión ao servidor a través dun WebSocket
const socketCliente = new WebSocket("ws://localhost:8082");
let ws = null;

// Esta liña execútase cada vez que se produce o evento de conexión aun servidor.
socketCliente.addEventListener("open", () => {
    botonEnviar.disabled = false;
    console.log("Conectado ao servidor.");

    alert("[open] conexion establecida")

    estado.classList.add('conectado');
    estado.innerText = 'CONECTADO';
    botonEnviar.addEventListener("click", () => {
        let mensaje_cliente = document.getElementById('input-mensaxe').value;
        socketCliente.send(mensaje_cliente);
    });

    
});
// Nesta función recibimos mensaxes do servidor.
socketCliente.addEventListener("message", (mensaxe) => {
    chat.innerHTML+=`
    <p>${mensaxe.data}</p>
    `

});

function xestionarConexion() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
        botonConexion.innerText = 'Abrir conexion';
    } else {
        botonConexion.innerText = 'Cerrar conexion';
        iniciarConexion()
    }
}

iniciarConexion()