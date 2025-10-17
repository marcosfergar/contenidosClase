(:2. Lista el titulo de los libros ordenados por titulo cuyo precio es superior a 30:)
for $x in /bookstore/book
where $x/price >30
order by $x/title/text()
return $x/title/text()