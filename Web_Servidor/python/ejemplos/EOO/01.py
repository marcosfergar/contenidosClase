# Exercicio 1 – Coches. Crea unha clase chamada Coche que teña como atributos: marca, modelo e ano. Engade un método chamado descricion() que devolva unha cadea co seguinte formato:

class Coche():
    Marca: None
    Modelo: None
    Ano: None

    def __init__(self,Marca,Modelo,Ano):
        self.Marca=Marca
        self.Modelo=Modelo
        self.Ano=Ano

    def descripcion(self):
        return f"Marca: <{self.Marca}>, Modelo: <{self.Modelo}>, Ano: <{self.Ano}>"
    
coche = Coche("a","b","2001")

print(coche.descripcion())