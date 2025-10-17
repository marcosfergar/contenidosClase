let $x := doc("bookstore")/bookstore/book
return  concat($x/title," ",count($x))