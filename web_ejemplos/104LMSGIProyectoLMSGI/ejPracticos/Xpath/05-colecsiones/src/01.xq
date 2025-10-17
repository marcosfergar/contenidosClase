(:1. Mostrar el código del "Aula 1":)

for $x in collection("5")/aula[nombre="Aula 1"]
(:data nos sirve para sacar el valor de un atributo:)
return data($x/@id)