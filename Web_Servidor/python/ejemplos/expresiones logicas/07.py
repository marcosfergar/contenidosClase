# Escribe un script que pida ao usuario un ano e indique se é bisesto ou non. 
# Coidado que a condición de ser bisesto non só é ser divisible entre 4.

num1 = float(input("Dame un año "))

if (num1%4)==0:
    if (num1%100)==0 and (num1%400)==0:
        print("el año es bisiesto" )
    else:
        print(num1%100,num1%400)
else:
    print("No es bisiesto")
