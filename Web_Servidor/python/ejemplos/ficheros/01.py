# Importamos a librería
import csv

# Abre o ficheiro CSV en modo lectura
with open('C:\\Users\\marcos.fernandezgarc\\A\\Web_Servidor\\python\\ejemplos\\ficheros\\datos.csv', 'r') as arquivo_csv:
    # Crea un obxecto lector de CSV
    linea = arquivo_csv.readlines()
    
    # Recorremos cada fila do ficheiro
    opcion = int(input("dime la opcion: "))
    for fila in linea:
        
        datos= fila.split(",")
        dicc={1:datos[0], 2:datos[1] , 3:datos[2],4:datos[3],5:datos[4]}
        # Imprimimos cada fila que é unha lista de str
        print(dicc.get(opcion))