function p_variable(){
    //Var: ambito de funcion
    var x = "Var: Ambito de funcion";
    if (true){
        var x = "Var: Ambito funcion if";
    }
    if (true){
        let y = "Let: Ambito de bloque";
        console.log(y);
    }
    //console.log(y); //Da error porque no esta definida
    const z = "const: No se puede reasignar";
    console.log(z);
    z = "Nuevo valor";
    var x = "Nueva asignacion";
    let y = "Nueva asignacion con let";
}
p_variable();