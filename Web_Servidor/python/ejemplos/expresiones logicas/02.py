# Escribe un script que a partir dun número introducido por teclado, 
# indique se é un número positivo, negativo ou é igual a cero. 
# Se é positivo mostra por pantalla Positivo, se é negativo Negativo e se é 0 Cero.

num1 = int(input("Dame un numero "))

if num1 > 0:

    print("el numero es positivo")

elif num1 == 0:
    print("el numero es 0")
else:
    print("el numero es negativo")