let atributoDataCousa = document.createAttribute("data-cousa");
let atributoDataContador = document.createAttribute("data-contador");
let parrafo = document.getElementById("text");
let contador = 0;

atributoDataCousa.value = "Este é o contido do novo atributo";
parrafo.setAttributeNode(atributoDataCousa);

atributoDataContador.value = contador;
parrafo.setAttributeNode(atributoDataContador);

function aumentarCont() {
    contador ++
    atributoDataContador.value = contador;
    if ((contador%5)==0){
        alert(`Llevas ${contador}`);
        return contador
    }
    console.log(contador);
    return contador
}

parrafo.addEventListener("click", aumentarCont);




