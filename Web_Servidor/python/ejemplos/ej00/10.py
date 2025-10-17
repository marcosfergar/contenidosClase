# Escribe un script que simule unha calculadora que reciba unha cantidade de Libras Esterlinas e realice o cambio de divisas a euros. Un € é igual a 1,10 libras. Mostra o resultado por pantalla.

euro = float(input("Dime la canitidad de euros para pasar en libras "))
cambio = euro*1.10

print("Tu cantidad de euros en libras es ", cambio)
