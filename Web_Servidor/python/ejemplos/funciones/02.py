def comprobar_valores_iguais(numero1: int, numero2: int, numero3: int) -> bool:
    if numero1==numero2 or numero1==numero3 or numero2==numero3:
        return print("Ninguno de los numeros se pueden repetir")   
    else:
        return False       

def calcular_menor_numero(num1: int, num2: int, num3: int) -> int:
    pequeño=0
    if num1 < num2 and num1 < num3:
        pequeño = num1
    elif num2 < num1 and num2 < num3:
        pequeño = num2
    elif num3 < num1 and num3 < num2:
        pequeño = num3
    
    return print(pequeño)

num1 = int(input("Dame un numero "))
num2 = int(input("Dame otro numero "))
num3 = int(input("Dame otro numero "))

if comprobar_valores_iguais(num1,num2,num3) == False:
    calcular_menor_numero(num1,num2,num3)
else:
    print("Error")