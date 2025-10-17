(:5.Crea una web, que contenga todos los libros con su categoria, en la lista aparece distintos colores en el titulo en funcion de la categoria:)
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>UD6-3.3 Listado de libros. Marcos Fernández Garcia</title>
</head>
<body>
<h1>Bookstore</h1>
  <table>
    <tr>
      <th>Titulo</th>
      <th>Categoria</th>
    </tr>
    {
      for $x in /bookstore/book
      return <tr>
                <td>{data($x/title/text())}</td>
                <td>{data($x/@category)}</td>
             </tr>
    }
  </table>
  <ul>
  {
    for $x in /bookstore/book
      return <li class="{data($x/@category)}">
                {data($x/title)}
             </li>
  }
  </ul>
</body>
</html>