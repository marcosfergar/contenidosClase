for $x in doc("bookstore")/bookstore/book
order by $x/price * 1.04
return concat($x/title," ",$x/price * 1.04)