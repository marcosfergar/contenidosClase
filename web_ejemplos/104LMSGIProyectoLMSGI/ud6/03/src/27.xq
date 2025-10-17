(:27. Mostrar todos los autores eliminando los que se repiten y ordenados por el número de caracteres que tiene cada autor.:)
<autores>
{
for $x in
  for $nombre in distinct-values(//author)
  order by string-length($nombre)
  return $nombre
  return <autor>{$x}</autor>
}
</autores>