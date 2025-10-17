let persona = {
    nome: 'Marcos',
    edad: 20,
    ciuda: 'Coruña'
};

for (const propiedades in persona) {
    console.log(`Propiedade: ${propiedades} valor: ${persona[propiedades]}`);
}

let personas = [
    {nome: 'Marcos',
    edad: 20,
    ciuda: 'Coruña'},
    {nome: 'pepe',
    edad: 20,
    ciuda: 'calle'}
]

for (let persona in personas) {
    console.log(`${personas[persona].nome} ten ${personas[persona].edad} años e vive en ${personas[persona].ciuda}`);
    
}