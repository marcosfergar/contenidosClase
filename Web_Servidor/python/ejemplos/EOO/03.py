class Productos():
    nombre: None
    precio: None
    stock: None


    def __init__(self,nombre,precio,stock):
        self.nombre=nombre
        self.precio=precio
        self.stock=stock

    def vender(self, unidades):
        if (self.stock-unidades)>=0:
            self.stock = self.stock-unidades
        else:
            return print("No hay unidades disponibles")
    def __str__(self):
        return f"Produto: <{self.nombre}> (Stock: <{self.stock}>)"
    
productos =Productos("marcos",5,5)
productos1 = Productos("Alan",2,0)

productos.vender(5)
print(productos.__str__())

productos1.vender(5)
print(productos1.__str__())