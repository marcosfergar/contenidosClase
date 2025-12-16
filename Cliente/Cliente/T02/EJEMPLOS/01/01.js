var n_global = "Son globales con var";
let n_global_let = "Son globales con let";
const n_global_const = "Son globales con const";

function ambito_funcion() {
    var n_funcion = "Son funcion con var";
    let n_funcion_let = "Son funcion con let";
    const n_funcion_const = "Son funcion con const";

    console.log("Dentro de funcion")
    console.log("Funcion: ", n_funcion, " ", n_funcion_let, " ", n_funcion_const);
    console.log("Global: ", n_global, " ", n_global_let, " ", n_global_const);

    if (true) {
        console.log("Dentro de bloque")
        var n_bloque = "Son bloque con var";
        let n_bloque_let = "Son bloque con let";
        const n_bloque_const = "Son bloque con const";
        console.log("Funcion: ", n_funcion, " ", n_funcion_let, " ", n_funcion_const);
        console.log("Global: ", n_global, " ", n_global_let, " ", n_global_const);
        console.log("Bloque: ", n_bloque, " ", n_bloque_let, " ", n_bloque_const)
    }

    console.log("Fuera del bloque pero dentro de la funcion")
    // *Error* console.log("Bloque: ", n_bloque, " ", n_bloque_let, " ", n_bloque_const)
}

console.log("Fuera de la funcion")
// *Error* console.log("Funcion: ", n_funcion, " ", n_funcion_let, " ", n_funcion_const);
console.log("Global: ", n_global, " ", n_global_let, " ", n_global_const);

ambito_funcion()