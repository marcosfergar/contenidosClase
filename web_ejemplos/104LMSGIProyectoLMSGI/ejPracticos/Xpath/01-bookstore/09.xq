<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial scale=1.0"/>
    <title>Document</title>
</head>
<body>
    <h1>Listado de libros</h1>
    <ul>
      {
        for $x in /bookstore/book
         return <li>{$x /title/text()}</li>
      }
    </ul>
</body>
</html>