//salida de datos
console.log("Ola");
console.info("Ola informativo");
console.warn("Ola primer aviso");
console.error("Adios");

const compra=["pan","tomate","queso","almondigas"];

console.table(compra);
console.group("COMEZO DO GRUPO");
console.log("Primeira mensaxe do grupo");
console.log("Segunda mensaxe do grupo");
console.groupEnd();

//consola navegador

window.alert("Bienvenido a la aplicacion")

//Manipulado Dom

const div_salida=document.getElementById("salida");
div_salida.innerHTML="<strong><p>hola</p></strong>"
// div_salida.textContent="<strong><p>hola</p></strong>"
// div_salida.innerTexts="<strong><p>hola</p></strong>"
div_salida.insertAdjacentHTML("beforebegin","<div>Antes de la principio</di>");
div_salida.insertAdjacentHTML("afterbegin","<div>Antes de la principio</di>");
div_salida.insertAdjacentHTML("beforeend","<div>Antes de la final</di>");
div_salida.insertAdjacentHTML("afterend","<div>de de la final</di>");

let contes=window.confirm("Quieres continuar");

if(contes==true){
    console.log("Usuario 'acepto la entrada' ")
    div_salida.insertAdjacentHTML("beforeend","<p>El Bienvenido gracias por continuar</p>")
}

let nom=window.prompt("Introduce tu nombre", "Nombre Aplld")

if(nom!=null && nom.trim()!=""){
    console.info("El usuario se llama "+nom)
    div_salida.insertAdjacentHTML("beforeend",`<p>Un saludo , ${nom}</p>`)
}else{
    console.log("El usuario rechazo");
    div_salida.insertAdjacentHTML("beforeend",`<p>El usuario lo dejo en blanco</p>`)
}