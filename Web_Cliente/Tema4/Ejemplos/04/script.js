function CalcularEstadisticas(numeros) {
    let suma = 0;
    function CalcularMedia() {
        for (let i of numeros) {
            suma += i
        }
        return suma /numeros.length
    }
    console.log("Media: " + CalcularMedia());

    function CalcularMaximo() {
        let maximo = numeros[0];
        for (const i of numeros) {
            if (i>maximo) {
                maximo=i;
            }
        }
        return maximo
    }

    console.log("Maximo: "+ CalcularMaximo());
    
}

CalcularEstadisticas([1,4,5,6,7]);
