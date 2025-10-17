(:Mostrar sólo el título de los libros cuyo precio sea menor o igual a 30.:)

for $x in doc("bookstore")//book[price<=30]/title/text()
return $x