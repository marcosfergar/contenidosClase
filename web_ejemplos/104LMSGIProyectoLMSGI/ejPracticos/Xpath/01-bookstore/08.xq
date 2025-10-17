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
      <h1>Listado de practicas</h1>
    </header>
      {
      for $tema in (1 to 10)
      for $Ejercicio in (1 to 10)
      
     return <a href="{concat($tema,'/',$Ejercicio,'.html')}">
     {concat('Tema',$tema,' Ejercicio',$Ejercicio)}
     </a>
     }
</body>
</html>