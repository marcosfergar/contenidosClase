# Implantar unha aplicación que calcule o menor de tres números introducidos por teclado polo usuario e o mostre por pantalla. 
# Comproba antes de nada que ningún par de números é igual. 
# Se isto é así, indícallo mostra por pantalla Erro. e non calcules cal é o menor dos 3.

num1 = int(input("Dame un numero "))
num2 = int(input("Dame otro numero "))
num3 = int(input("Dame otro numero "))

pequeño = 0

if num1 == num2 or num1 == num3 or num2 == num3:
    print("no se pueden repetir numeros")
else:
    if num1 < num2 and num1 < num3:
        pequeño = num1
    elif num2 < num1 and num2 < num3:
        pequeño = num2
    elif num3 < num1 and num3 < num2:
        pequeño = num3

print("el numero mas pequeño es: ",pequeño)
