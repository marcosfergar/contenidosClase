(:3. Mostrar el nombre y email de los profesores que imparten el curso "Bases de Datos OR":)

for $x in collection("5")/curso[nombre="Bases de Datos OR"]/profesor/@idref

for $y in collection("5")/profesor[@id=$x]
 
return concat($y/nombre," ",$y/email)