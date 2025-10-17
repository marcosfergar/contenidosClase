(:24. Mostrar los libros que contenga una X mayúscula o minúscula en el título ordenados de manera descendente:)
for $x in /bookstore/book[contains(title,'X') or contains(title,'x')] 
order by $x/title descending
return $x/title/text()