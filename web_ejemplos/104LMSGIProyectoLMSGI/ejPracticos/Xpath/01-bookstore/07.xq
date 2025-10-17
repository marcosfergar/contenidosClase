<books>
{
  
  for $x at $y in doc("bookstore")/bookstore/book
  
        return 
              <book>{concat($y,'. ',$x/title/text())}</book>
}
</books>