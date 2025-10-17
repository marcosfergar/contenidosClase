<books>
  {
    for $x at $n in /bookstore/book
    return <book>
              {$n}.{$x/title/text()}
           </book>
  }
</books>
