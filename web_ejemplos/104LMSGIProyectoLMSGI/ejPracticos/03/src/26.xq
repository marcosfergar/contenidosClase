(:26. Mostrar todos los años en los que se ha publicado un libro eliminando los repetidos. Etiquétanoscon "año".:)
declare option output:indent "yes";
<años_publicacion>
{
  for $x in distinct-values(/bookstore/book/year)
  order by $x descending
  return
    <anyo>{$x}</anyo>
}
</años_publicacion>
