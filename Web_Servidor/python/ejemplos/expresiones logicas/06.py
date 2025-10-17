# Escribe un script que comprobe se dados dous números introducidos por teclado, se un deles é divisor do outro. 
# Se un deles é divisor mostra o número divisor pon pantalla. 
# Se ningún é divisor do outro, mostra Erro.

num1 = int(input("Dame un numero "))
num2 = int(input("Dame otro numero "))

if (num1%num2)==0:
    print("el numero",num2,"es divisor" )
else:
    print("Error")

