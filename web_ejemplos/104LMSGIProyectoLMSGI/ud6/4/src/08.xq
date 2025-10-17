(:8. Renombrar el nodo total por importeTotal:)
for $doc in collection("Facturas")
return rename node $doc/factura/total as "importeTotal"