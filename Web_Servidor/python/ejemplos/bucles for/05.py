num1 = int(input("Intervalo a "))
num2 = int(input("intervalo b "))
num3 = 0

rango = range(num1,num2,1)

if num1>num2:
    num3=num1
    num1=num2
    num2=num3
elif num1==num2:
     print("error")    
    
for i in rango:
    if (i%2)==0:
        print(i)

print(num2)