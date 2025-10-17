(:2. Filtrar facturas con un importe total mayor que 200:)

for $x in collection("Facturas")
where $x/factura/total>200
return $x 