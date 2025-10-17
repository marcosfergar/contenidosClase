(:25. Mostrar el título y el número de caracteres que tiene cada título, cada uno con su propia etiqueta.:)
declare option output:indent "yes";
<libros>
{
  for $x in /bookstore/book
  return <libro>
  <titulo>{$x/title/text()}</titulo>
  <caracteres>{string-length($x/title/text())}</caracteres>
  </libro>
}
</libros>