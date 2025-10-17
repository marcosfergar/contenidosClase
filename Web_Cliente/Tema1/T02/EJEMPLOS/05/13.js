let personas = [
    {nome: 'Marcos',
    edad: 20,
    ciuda: 'Coruña'},
    {nome: 'pepe',
    edad: 20,
    ciuda: 'calle'}
]

for (let persona of personas) {
    console.log(`${persona.nome} tiene ${persona.edad} y vive en ${persona.ciuda} `);    
}

let texto = "hola";

for (const text of texto) {
    console.log(text);
    
}

let colores = new Set(["rojo","verde","azul"]);
for (const color of colores) {
    console.log(color);
}

let edades = new Map([
    ["Ana", 21],
    ["Pepe", 22],
    ["Anton", 23]
]);

for (let [nombre,edad] of edades) {
    console.log(nombre, edad);
    
}

str