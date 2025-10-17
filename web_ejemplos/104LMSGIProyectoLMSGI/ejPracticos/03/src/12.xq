(:12. Mostrar los años de publicación, primero con for y luego con let. Etiquetar la salida con publicación:)

(:<resultado>

  {
    for $x in /bookstore/book
    return 
      $x/year
  }
</resultado>:)
<resultado>
  {
    let $x:=/bookstore/book/year
    return $x
   }   
</resultado>
(:Let lo carga en una variable:)