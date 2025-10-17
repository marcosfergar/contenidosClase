<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  
  <xsl:output method="html" indent="yes"/>
  

    

  <xsl:template match="zodiaco">
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Marcos Fernandez Garcia"/>
        <meta name="keywords" content="html, css, xslt, xml"/>
        <meta name="robots" content="index, follow"/>
        <meta charset="utf-8"/>
        <title> Horoscopo Marcos Fernández</title>
        <link rel="stylesheet" href="./webroot/css/estilos.css"/>        
        <script src="./webroot/js/script.js" defer="defer"/>
      </head>
      <body>
      <header>
          <h1>HOROSCOPO/SIGNOS ZODIACO</h1>
      </header>
        <div>
          <xsl:for-each select="signo">
            <div class="div1" style="background-image: url({concat('./webroot/images/bg-', @id, '.jpg')})">
              <img src="{concat('./webroot/images/', @id, '.svg')}" alt="signo"/>
              <b><xsl:value-of select="nombre"/></b>
              <div id="fecha">
                <xsl:value-of select="fechaInicio"/>-<xsl:value-of select="fechaFin"/>
              </div>
            </div>
          </xsl:for-each>
        </div>

      <footer>
          <footer>

              Todos los derechos reservados. Creado por: <a href="https://daw104.ieslossauces.es/104LMSGIProyectoLMSGI/index.html">Marcos Fernández García</a>

          </footer>
      </footer>
      </body>
    </html>
  </xsl:template>
  
  
  
</xsl:stylesheet>