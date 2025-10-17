cadena = str(input("Escribe una plabra "))
cont = 0
for i in cadena:
    
    if i.lower() in "aeiou":
        cont += 1

print(cont)