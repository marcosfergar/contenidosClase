let saludar = function () {
    console.log("Hola");
}

saludar();

let numero = [1,2,3,4,5];

numero.forEach(function (n) {
    console.log(n);
})

let dobles = numero.map(function (n) {
    return n*2;
});

console.log(dobles);

function aplicarFuncion(valor,funcion) {
    return funcion(valor);
}

let resaultado = aplicarFuncion(9,function (x) {
    return x*x;
});

console.log(resaultado);
