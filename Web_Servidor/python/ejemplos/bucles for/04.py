num1 = 0

contS = 0
contA = 0
while num1 >= 0 and num1 <= 10:
    num1 = int(input("Dime la nota de la asignatura: "))
    if num1 < 5 and num1 >= 0:
        contS+=1
    elif num1 >=5 and num1 <=10:
        contA+=1

print("Aprobados: ",contA," Suspensos: ",contS)