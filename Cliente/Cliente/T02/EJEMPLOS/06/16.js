let fechaAt = new Date();
console.log("Fecha actual" + fechaAt);

let mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

let DiaSem = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
]

console.log(`Año: ${fechaAt.getFullYear()}  Mes: ${fechaAt.getMonth()}  Dia: ${fechaAt.getDay()}`);

console.log(`Año: ${fechaAt.getFullYear()}  Mes: ${mes[fechaAt.getMonth()]}  Dia: ${DiaSem[fechaAt.getDay()-1]}`);

let fechaNac = new Date(2005, 7, 7,10,10,0)

console.log(`Año: ${fechaNac.getFullYear()}  Mes: ${fechaNac.getMonth()}  Dia: ${fechaNac.getDay()}`);
console.log(`Año: ${fechaNac.getFullYear()}  Mes: ${mes[fechaNac.getMonth()]}  Dia: ${DiaSem[fechaNac.getDay()-1]}`);



