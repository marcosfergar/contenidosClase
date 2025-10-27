function saludar(nome,mensaje="Bienvenido ") {
    console.log(mensaje+nome);    
}

saludar("Marcos")
saludar("pepe","Hola ")

function mostrarArgumentos() {
    for (let i in arguments) {
        console.log(arguments[i]);        
    }
}

mostrarArgumentos(1,3,5,7)

function mult(...numeros) {
    return numeros.reduce((resultadoFinal, numero) => {return numero * resultadoFinal});
}

console.log(mult(4,8,4,9));
console.log(mult(...[6,9,2,7,8]));

let a = 1;
let b = 8;

function incrementarArray(arr) {
    for (let i in arr) {
        arr[i]++;
    }
    console.log(arr);
}
let array = [1,2,3,4]
incrementarArray(array);

console.log(array);

