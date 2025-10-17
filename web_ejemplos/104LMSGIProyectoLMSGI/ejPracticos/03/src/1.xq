(:Esto es un comentario:)
(:Consulta: Lista el titulo de los libeos ordenados por titulo:)
for $x in bookstore/title
order by $x/title/text()
return $x/title/text()