var frase = "Hola que tal"

console.log("La cantidad de caracteres en la cadena es ",frase.length);

console.log(frase.charAt(0));
console.log(frase[0]);

console.log(frase.indexOf("que"));

console.log(frase.includes("Hola"));

console.log(frase.slice(2,5));



var frasespacios = " \n Texto con margenes \t ";

var sustituida = frase.replace("que", "es")
console.log(sustituida);

let palabras = frase.split(" ")

console.log(palabras);







