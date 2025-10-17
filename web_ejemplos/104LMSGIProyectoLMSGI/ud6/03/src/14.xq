(:14. Mostrar cuantos libros hay, y etiquetarlos con "total":)
<total>
{
  let $x:=/bookstore/book
  return count($x)
}
</total>