<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/software-libre">
    <html>
      <head>
        <title>Pregunta 1</title>
        <meta charset="UTF-8"/>
      </head>
      <body>
        <header>
          <img src="images/logo.jpg" alt="Linux Logo" width="100"/>          
          <h1><xsl:value-of select="concat('Distribución de software ',@tipo)"/></h1>
        </header>
        <div class="caja-exterior">
          <h2>Lanzamiento de sitribuciones</h2>
          <xsl:for-each select="lanzamientos/lanzamiento">
            <div class="lanzamiento">
              <figure>
                <img src="images/{@distribucion}.png" alt="@distribucion"/>
                <figcaption><a href="{//distribucion[@id=current()/@distribucion]/web}">{//distribucion[@id=current()/@distribucion]/nombre}</a></figcaption>
              </figure>
              <xsl:if test="@escritorio != ''">
                <figure>
                  <img src="images/{@escritorio}.png" alt="@escritorio"/>
                  <figcaption><a href="{//escritorio[@id=current()/@escritorio]/web}">{//escritorio[@id=current()/@escritorio]/nombre}</a></figcaption>
                </figure>
              </xsl:if>
              <div class="caja">
                <p><span class="negrita">Version: </span><xsl:value-of select="@version"/></p>
                <p><span class="negrita">Año: </span><xsl:value-of select="@año"/></p>
                <p><span class="negrita">Kernel: </span><xsl:value-of select="@kernel"/></p>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>