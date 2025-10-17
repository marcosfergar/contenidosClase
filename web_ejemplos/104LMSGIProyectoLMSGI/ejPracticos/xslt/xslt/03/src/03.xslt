<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"

                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

  <xsl:output method="xml" indent="yes"/>
  <xsl:template name="meta" >
    <xsl:param name="titulo"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="author" content="Marcos Fernandez Garcia"/>
    <meta name="keywords" content="html, css, xslt, xml"/>
    <meta name="robots" content="index, follow"/>
    <meta charset="utf-8"/>
    <title><xsl:value-of select="$titulo"/></title>
  </xsl:template>
    
    <xsl:template match="/listatickets">
    <html lang="en">
      <head>
          <xsl:apply-templates select="meta">
          <xsl:with-param name="titulo" select="'03ejercicio'"/>
          </xsl:apply-templates>
          <link rel="stylesheet" href="./css/estilos.css"/>
      </head>
      <body>
        
        <header>
          <h1>Información de tickets</h1>
        </header>
        
        <div>
          <div>
          <h2>Listado de tickets</h2>
          </div>

          <div>
            <xsl:for-each select="ticket">
                <div>
                  Tickets: <xsl:value-of select="numero"/>
                </div>
                <table>
                  <tr>
                    <th>Producto</th> <th>Precio</th>
                  </tr>
                <xsl:for-each select="producto">
                  <tr>
                    <td><xsl:value-of select="nombre"/></td> <td><xsl:value-of select="precio"/></td>
                  </tr>
                </xsl:for-each>
                  
                  <tr>
                    <td>Total</td> <td><xsl:value-of select="total"/></td>
                  </tr>
                  <tr>
                  <td>Fecha del ticket: <xsl:value-of select="fecha"/></td></tr>
                </table>
            </xsl:for-each>
          </div>
        </div>

        <footer>
          <h2>NUMERO DE TICKETS: <xsl:value-of select="count(//ticket)"/></h2>
          <h2>TOTAL DE TICKETS: <xsl:value-of select="sum(//ticket/total)"/></h2>
        </footer>

      </body>
    </html>
    </xsl:template>
    
    
    
</xsl:stylesheet>