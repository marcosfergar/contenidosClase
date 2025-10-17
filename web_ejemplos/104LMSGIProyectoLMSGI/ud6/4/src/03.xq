(:3. Mostrar el ID de factura como ID de cliente y correo del cliente :)

<clientes>
{
for $x in collection("Facturas")/factura
return 
<cliente id="{$x/@id}">
{
  $x/cliente/email/text()
}
</cliente>
}
</clientes>