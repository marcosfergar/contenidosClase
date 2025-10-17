try:
    n1 = float(input("Dame un numero "))
    n2 = float(input("Dame otro numero "))
    print("El resultado es ", n1/n2)
except ValueError:
    print("Erro: Entrada non válida, por favor introduce números..")
except ZeroDivisionError:
    print("Erro: Non se pode dividir entre cero.")

