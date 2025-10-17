# Escribe un script que pida ao usuario dous números por teclado. 
# Se a suma é maior que 10 mostrase por pantalla A suma é maior que 10 e en caso contrario A suma non é maior que 10.

num1 = int(input("Dame un numero "))
num2 = int(input("Dame otro numero "))

suma = num1+num2

if suma > 10:
    print("La suma es mayor que 10")
else:
    print("La suma es menor que 10")