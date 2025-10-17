(:9.:)

for $book in /bookstore/book
where count($book/author) gt 2
return $book/title/text()