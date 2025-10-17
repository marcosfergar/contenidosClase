<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="author" content="Marcos Fernández García"/>
    <meta name="description" content="Practica01"/>
    <meta name="keywords" content="volcanes"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Volcanes del Mundo_Marcos_Fernández_García</title>
</head>
<body>
    <header>
      <h1>BOOKSTORE</h1>
    </header>
    <table>
      <thead>
          <td>Titulo</td> <td>Categoria</td>
      </thead>
      {
        for $x in doc("bookstore")/bookstore/book
        return 
        <tr>
         <td>{$x/title/text()}</td> 
         <td>{data($x/@category)}</td>
        </tr>
      }      
    </table>
    <ul>
      {
        for $x in /bookstore/book
        return 
            <li class="{data($x/@category)}">{$x/title/text()}</li>            
      }
    </ul>
      
</body>
</html>