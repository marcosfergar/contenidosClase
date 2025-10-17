def so_pares(lista: list) -> list:
    lista2=[]
    for i in range(len(lista)):
        if (lista[i]%2)==0:
            lista2.append(lista[i])
    return lista2

lista=[2,3,4,5,6]

print(so_pares(lista))