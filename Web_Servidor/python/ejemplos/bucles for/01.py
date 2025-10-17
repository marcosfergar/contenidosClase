num1 = int(input("Dime un numero "))
num1+=1

rango = range(0,num1,1)
acum = 0
for i in rango:
    acum +=i

print(acum)