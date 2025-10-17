(:5. Remplazar el nombre del clietne en la factura F001 por "tu nombre y Apellidos":)
for $doc in collection("Facturas")
where $doc/factura/@id="F001"
return replace value of node $doc/factura/cliente/nombre with "Marcos FER"