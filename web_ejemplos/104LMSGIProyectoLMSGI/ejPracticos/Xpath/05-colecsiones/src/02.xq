(:2. Qué cursos imparten/o han impartido clases en el "Aula 1":)

for $x in collection("5")/aula[nombre="Aula 1"]/@id

for $y in collection("5")
where $y/curso/aula[@idref=$x]
return $y/curso/nombre/text()