print("a) Moto: importe fixo de 1€")

print("b) Turismo: 0,25€ por km recorrido")

print("c) Camión: 0,25€ por km más 0,15€ por tonelada de peso (Primeiro pídeselle a distancia e despois o peso)")

opcion = str.lower(input("Dame una opcion: a,b o c : "))




if opcion == "a":
    
    print("Debe pagar un importe de un euro")

elif opcion == "b":
    km = float(input("Cuantos km a recorrido "))
    print("Debe pagar un importe de ",km*0.25)

elif opcion == "c":
    km = float(input("Cuantos km a recorrido "))
    peso = float(input("Cuantos peso tiene el vehiculo "))
    print("Debe pagar un importe de ",(km*0.25)+(peso*0.15))
else:
    print("Error")