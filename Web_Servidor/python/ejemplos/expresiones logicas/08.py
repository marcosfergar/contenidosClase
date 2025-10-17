# Crea un menú nun script para seleccionar a acción que desexa realizar o usuario. 
# Neste caso temos tres opcións:

print("a) Sumar 2 números introducidos por teclado e mostrar o resultado.")

print("b) Restar 2 números introducidos por teclado e mostrar o resultado.")

print("c) Multiplicar 2 números introducidos por teclado e mostrar o resultado.")

opcion = str.lower(input("Dame una opcion: a,b o c : "))

if opcion == "a":
    num1 = int(input("Dame un numero "))
    num2 = int(input("Dame otro numero "))

    suma = num1+num2
    print(suma)

elif opcion == "b":
    num1 = int(input("Dame un numero "))
    num2 = int(input("Dame otro numero "))

    resta = num1-num2
    print(resta)

elif opcion == "c":
    num1 = int(input("Dame un numero "))
    num2 = int(input("Dame otro numero "))

    multiplica = num1*num2
    print(multiplica)
else:
    print("Error")