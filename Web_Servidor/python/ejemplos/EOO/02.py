class Alumno():
    nombre: None
    nota: None


    def __init__(self,nombre,nota):
        self.nombre=nombre
        self.nota=nota

    def aprobado(self):
        if self.nota >= 5:
            return f"{self.nombre}:",True
        else:
            return f"{self.nombre}:",False
    
alumnos = [
    Alumno("marcos",5),
    Alumno("Alan",5)
]

for alum in alumnos:
    print(alum.aprobado())