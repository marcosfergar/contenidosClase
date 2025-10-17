<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes"/>

  <xsl:output method="html" indent="yes"/>

 <xsl:template name="meta" >
  <xsl:param name="titulo"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="author" content="Marcos Fernandez Garcia"/>
  <meta name="keywords" content="html, css, xslt, xml"/>
  <meta name="robots" content="index, follow"/>
  <meta charset="utf-8"/>
  <title><xsl:value-of select="$titulo"/></title>
</xsl:template>

<xsl:template match="pedido">
  <html lang="en">
    <head>
      <xsl:apply-templates select="meta">
        <xsl:with-param name="titulo" select="'03ejercicio'"/>
      </xsl:apply-templates>
      <link rel="stylesheet" href="./css/estilos.css"/>
    </head>
    <body>
      <header><h1>Pedido ID: <xsl:value-of select="@idPedido"/></h1></header>
        
        Fecha: <xsl:value-of select="@fecha"/>

        <h3><label for="fabricanteSelect">Fabricante:</label></h3>
        <option value="Todos">Todos</option>
        <select id="fabricanteSelect" name="opciones">
          <xsl:for-each select="tractor/@codigoFabricante">
            <option value="{.}"><xsl:value-of select="."/></option>
          </xsl:for-each>
        </select>

        <div>
          <xsl:for-each select="tractor">
            <div>
              <img src="{concat('images/', @codigoFabricante, '.png')}" alt="codigo fabricante"/>
              
              <h2>Fabricante: <xsl:value-of select="@codigoFabricante"/>
                <xsl:text> </xsl:text>
                <xsl:value-of select="document('../input/fabricantes.xml')
                  /fabricantes/fabricante[@codigo=current()/@codigoFabricante]/@nombre"/>  
              </h2>
            </div>
            <table>
              <thead>
                <tr>
                  <td></td> <td>Referencia</td> <td>Descripcion</td> <td>Fecha Entrega</td> 
                  <td>Peso PLuma</td> <td>nº Serie</td> <td>Km max</td> <td>Cantidad</td>
                </tr>                
              </thead>              
              <tbody>
                
                <xsl:for-each select="componente">
                  <tr>
                  <td><img src="{concat('images/', @referencia, '.png')}" alt="codigo referencia"/></td> 
                  <td><xsl:value-of select="@referencia"/></td> 
                  <td><xsl:value-of select="document('../input/componentes.xml')
                  /componentes/componente[@codigo=current()/@referencia]/@nombre"/>
                  </td> 
                  <td><xsl:value-of select="fechaEntrega/@mes"/>-<xsl:value-of select="fechaEntrega/@anio"/></td>
                  <td><xsl:value-of select="peso"/></td> 
                  <td><xsl:value-of select="numeroSerie"/></td> 
                  <td><xsl:value-of select="kmMaximos"/></td> 
                  <td><xsl:value-of select="cantidad"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:for-each>
        </div>
      <footer>
        albaro
      </footer>
      
    </body>
  </html>
</xsl:template>

  

</xsl:stylesheet>