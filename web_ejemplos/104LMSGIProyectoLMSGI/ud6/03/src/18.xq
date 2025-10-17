(:18. Mostrar la suma total de los precios con la etiqueta total:)
<total>
{
  format-number(sum(/bookstore/book/price),'#.00')
}
</total>