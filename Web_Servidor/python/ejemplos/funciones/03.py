def comprobar_bisesto(num1: int) -> bool:
    if (num1%4)==0:
        if (num1%100)!=0 or (num1%400)==0:
            print("el año es bisiesto" )
        else:
            print("No es bisiesto")
    else:
        print("No es bisiesto")

num1 = int(input("Dime un año "))
comprobar_bisesto(num1)