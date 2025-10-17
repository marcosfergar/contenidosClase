(:9. Actualizar todas las facturas con importe inferior a 100 con el valor 100.:)
for $doc in collection("Facturas")
where $doc/factura/imposteTotal<200
return replace value of node $doc/factura/importeTotal with 200