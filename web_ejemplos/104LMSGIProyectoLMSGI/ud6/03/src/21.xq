(:21.Mostrar en la misma etiqueta el título y entre paréntesis el número de autores que tiene ese título:)
<libros>
{
  for $book in /bookstore/book
where count($book/author) gt 2
return $book/title/text()
<libro autores="{count($x/author)}"
}
</libros>