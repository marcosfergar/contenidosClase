console.log("Combinando arrays")
let compra1= ["pan","leche","fruta"]
let compra2= ["queso","jamon"]

let compraTotal = [...compra1,...compra2];

let compraCopia = [...compraTotal]

console.log("Compra Total")
console.table(compraTotal)

compraCopia.push("abugesa")

console.log("Compra Copia")
console.table(compraCopia)

let persona1 = {
    id: 6,
    nombre: "marcos",
    epellido1: "fer"
}
let persona2={
    id: 7,
    nombre: "mari",
    epellido1: "gar"
}

let tocallo = {
    ...persona1,...persona2
}

console.table(tocallo)

let persona3={
    ...persona1
}

persona3.id = 50

console.table(persona1)
console.table(persona3)