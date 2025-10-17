(:15. Mostrar los títulos de los libros y al final una etiqueta con el número total de libros:)
<resultado>
  {
    let $x:=(for $r in /bookstore/book/title/text() return <book>{$r}</book>),
     $y:=count(//book)
    return ($x,<total>{$y}</total>)
  }
</resultado>