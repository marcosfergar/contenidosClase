let saludar = new Function("nombre", "console.log('Hola '+nombre)");

saludar('Marcos');

let sumar = new Function("a","b", "return a+b");
console.log(sumar(2,3));
console.log(sumar("2","3"));

let media = new Function(
    "notas",
    "let total = notas.reduce(function(t,n){return t+n},0); return total/notas.length;"
);
let notas = [9,8,5,6];

console.log(media(notas));

let valor_ex =5;
let mostrar_v = new Function("console.log(valor_ex)");//da error porque no acepta variasbles globales
// mostrar_v();

let tipo_n = new Function("n","if(n%2)==0{console.log}")