import math
# Escribe un script que pida ao usuario o radio dunha circunferencia e calcular o seu perímetro e área. Mostra o resultado por pantalla, primeiro o perímetro e despois a área.

radio = float(input("dame el radio "))

area = math.pi*(radio*radio)
perimetro = 2*radio*math.pi

print("el area del circulo es ", area, " y el perimetro es ", perimetro)
