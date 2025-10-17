lista = []
while True:
    cadena = input("Dame las notas, utiliza 'fin' para salir ")

    if cadena=="fin":
        break
    else:
        try:
            cadena=int(cadena)
            lista.append(cadena)            
        except ValueError:
            print("La nota debe ser un numero entero")
            
print(lista)
