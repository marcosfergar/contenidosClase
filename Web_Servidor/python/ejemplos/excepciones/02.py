cont = 0
while True:
    try:        
        n1 = float(input("Dame un numero "))
        if n1 < 0:
            raise ValueError
        
    except ValueError:
        print("Erro: Entrada non válida, por favor introduce números..")
        cont+=1
    else:
        break

print("El numero de intentos fallidos es ",cont)


