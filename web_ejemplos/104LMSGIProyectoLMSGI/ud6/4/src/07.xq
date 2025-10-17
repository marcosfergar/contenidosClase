(:7. Eliminar el nodo en la factura F001:)
for $doc in collection("Facturas")
where $doc/factura/@id="F001"
return delete node $doc/factura/estado