let uri ="https://www.fernandowirtz.com/publicar.php?tag=Secretar%C3%ADa"

let uricodificado = encodeURI(uri);

console.log(uricodificado);

let uriComponente= encodeURIComponent(uri);
console.log(uriComponente);

console.log(decodeURI(uricodificado));
console.log(decodeURIComponent(uriComponente));

console.log(eval("(2+7)/3"));


console.log(eval("((2+7)/3).toFixed(3)"));




