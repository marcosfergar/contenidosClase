cadena = str(input("Escribe una plabra "))
cadenai = ""

# cadenai = cadena[::-1] otra forma de hacerlo

for i in reversed(cadena):
    cadenai+=i

if cadena==cadenai:
    print("Si es")
else:
    print("no es")
