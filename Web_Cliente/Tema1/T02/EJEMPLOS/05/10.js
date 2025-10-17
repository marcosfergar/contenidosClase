let opcion = 0;
const opcionFin = 4;
const menu = `
=== Menu ===
1. Nuevo juego
2. Configuracion
3. Ayuda
4. Salir
`;

do{
    console.log(menu);
    opcion = Math.round(Math.random() * 5);

    switch(opcion){
        case 1:
            console.log("Iniciando juego...");
            break;
        case 2:
            console.log("Entrando a la configuracion...");
            break;
        case 3:
            console.log("Entrando en la ayuda");
            break;
        default:
            console.log("introduzca un numero valido");
            break;
            
    }
    
}while(opcion!=opcionFin)
    console.log("Saliendo del juego..");
    