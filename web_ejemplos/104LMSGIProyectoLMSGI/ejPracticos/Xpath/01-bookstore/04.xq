(:4:)
<libros>
  {
    for $x in /bookstore/book
    return if( $x/@category='CHILDREN') 
            then <children>{$x/title/text()}</children>
            else <adult>{$x/title/text()}</adult>
  }
</libros>
