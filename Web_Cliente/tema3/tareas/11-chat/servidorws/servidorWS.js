const WebSocket = require("ws");
const servidorWS = new WebSocket.Server({
    port: 8082
});
// Nesta liña "ws" fai referencia a cada conexión particular
servidorWS.on("connection", socketServidor => {
    console.log("Conectouse un cliente.")

    socketServidor.send("CONEXIÓN ABIERTA. Listo para enviar y recibir");

    socketServidor.on("message", mensaxe => {

        console.log("Cliente: " + mensaxe);

        socketServidor.send("Cliente: " + mensaxe);

    });
    socketServidor.on("close", () => {
        console.log("O cliente desconectou.")
    });
});