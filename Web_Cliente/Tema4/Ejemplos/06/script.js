// Ejemplo 1 clasico
function crearContador() {
    let conta = 0;
    return function () {
        conta++
        console.log("valor actual: "+ conta);
    }
}



const contador1=crearContador();
contador1();
contador1();

const contador2=crearContador();
contador2();

function crearSaludo(saudo) {
    return function (nome) {
        console.log(saudo+", "+nome+"!");
        
    }
}

const saludoGalego = crearSaludo("Boas")
const saludoInformal = crearSaludo("Que tal")

saludoGalego("Marcos")
saludoInformal("Marcos")