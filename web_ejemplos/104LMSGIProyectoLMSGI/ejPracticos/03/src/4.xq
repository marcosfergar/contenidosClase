(:4.Crea un documento XML clasificacion de los libros segun categoria, donde el elemento raiz es libros. Y si la categoria es childre el titulo aparece entrr las etiquetas <children>
y en caso contrario aparece con la etiqueta con la etiqueta:)

<libros>
{
    for $x in bookstore/book
    return if($x/@categoria="children")then
            <children>{$x/title/text()}</children>
           else <adult>{$x/title/text()}</adult>
}
</libros>
