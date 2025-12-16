setTimeout(function(){console.log("Error tras 3 sg");},3);

let cont = 10;

let interID = setInterval(function(){
    console.log("Cuenta atras: ", cont--);
    if (cont==0) {
        clearInterval(interID);
        console.log("Fin");            
    }
},1000);