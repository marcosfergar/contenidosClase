(:Mostrar los títulos de los libros con la etiqueta "titulo".:)
for $x in doc("bookstore")//book/title/text()
return <titulo>{$x}</titulo>