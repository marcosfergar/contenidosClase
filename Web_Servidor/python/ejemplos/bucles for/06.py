num1 = int(input("Dime un numero entero positivo "))
contP=0
contI=0
acum=0
media=0
if num1>0 :
    num1+=1
    rango = range(1,num1,1)

    for i in rango:
        acum=acum+i
        print(i)
        if (i%2)==0:
            contP+=1
        else:
            contI+=1

    media=num1/contP
    print("Pares ",contP)
    print("Impares ",contI)
    print("Suma total ",acum)
    print("Media de",media)
else:
    print("Error")