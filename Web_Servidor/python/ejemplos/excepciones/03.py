def celsius_to_farenheit(celsius: float) -> float:
    celsius = (celsius*1.8)+32
    return celsius

try:
    c = float(input("Dime la cantidad de Grados "))
    if c < 0:
            raise ValueError    
except ValueError:
    print("Erro: Entrada non válida, por favor introduce números..")
else:
    print(celsius_to_farenheit(c))