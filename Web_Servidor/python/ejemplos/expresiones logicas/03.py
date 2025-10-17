# Escribe un script que lea un número por teclado e deduza se está entre 10 e 100 (ambos inclusive). 
# Se é así mostra por pantalla Está no intervalo e senón Non está no intervalo.

num1 = int(input("Dame un numero "))

if num1 >= 10 and num1 <= 100:

    print("el numero esta entre 10 y 100")

else:
    print("el numero no esta entre el intervalo")