console.log(innerHeight, "x", innerWidth, "y");

console.log(screenX, "x", screenY, "y");
alert("Bienvenido a esta aplicacion")
let x = confirm("Quieres continuar?")

if (x) {
    console.log("El usuario quiere continuar");
}
else {
    console.log("El usuario ya no quiere continuar");

}

let nombre = prompt("Como te llamas?", "Anonimo")

console.log(nombre);

setTimeout(() => {
    console.log("Este mensaje se muestra en 3 segundos");

}, 3000)

let id = setInterval(() => {
    console.log("Cada un segundo", new Date().toLocaleTimeString());

}, 1000)

setTimeout(() => {
    clearInterval(id)
    console.log("Dejara de mostrar tras 5 segundos");

}, 5000)


let nuevaVentana = window.open("", "_blank", "width=800, height=600")

if (!nuevaVentana.closed) {
    nuevaVentana.document.writeln("Hola mundo")
}

setTimeout(() => {

    if (!nuevaVentana.closed) {
        nuevaVentana.document.writeln("Mundo despues de 5s mundo")
    }

}, 5000)

window.scrollBy(0, 1000);

setTimeout(() =>{
    window.scrollTo(0,0)
}, 5000)

sessionStorage.setItem('usuario', nombre);
console.log('Usuario guardado en sesion', sessionStorage.getItem('usuario'));
