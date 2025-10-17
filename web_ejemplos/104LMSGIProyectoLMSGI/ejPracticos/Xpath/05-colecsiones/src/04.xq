(:4. Listado de los cursos que imparte el profesor con el siguiente DNI: 33856315:)

for $x in collection("5")/profesor[dni="33856315"]/@id
for $y in collection("5")/curso[profesor/@idref=$x]
return $y