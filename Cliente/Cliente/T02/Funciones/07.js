let saludar1 = (nom, nom2) => 
    {return `ola, ${nom} y ${nom2}! Bienvenidos`}
    console.log(saludar1("pepe", "pipo"));

let saludar2 = (nom, nom2) =>  `Hola, ${nom} y ${nom2}! Bienvenidos`
    console.log(saludar2("pepe", "pipo"));

let cuadrado = (num) => num**2
console.log(cuadrado(4));

let nums = [1,2,3,4,5]
let triple = nums.map((num) => num*3)
console.log(triple);

let numfilter = nums.filter((num) => num%2==0);
console.log(numfilter);

let numReduce = nums.reduce((final, num) => final+num)
console.log(numReduce);

let  primerpar = nums.find((num) => num%2==0)
console.log(primerpar);

let crearPersona = (nombre,edad) => ({nombre,edad})
console.log("Nueva perona: "+crearPersona("Carlos", 30));

function ContadorFunction() {
    this.valor = 0;
    setInterval(function() {
        this.valor++;
        console.log("Valor (function): " + this.valor);
    },1000);
}

function ContadorArrow() {
    this.valor = 0;
    setInterval(()=> {
        this.valor++;
        console.log("Valor (arrow): " + this.valor);
    },1000);
}

ContadorFunction();





    
