let persoa = {
    noem: "Marcos",
    idade: 24,
    saudar: function name() {
        console.log("Hola soy "+this.noem+" tengo "+this.idade+" años");
        
    }
}

let otrapersoa = {
    noem: "Alan",
    idade: 15
}
persoa.saudar()
// otrapersoa.saudar()
persoa.saudar.call(otrapersoa)

let datos = ["Lucas", 22];
persoa.saudar.apply(otrapersoa,datos)
