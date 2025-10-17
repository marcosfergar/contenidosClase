def contar_frecuencia(lista: list[str]) -> dict[str, int]:
    cont=0
    mas_repetida = {}
    for i in range(len(lista)):
            cont=0
            for x in range(len(lista)):

                if lista[i]==lista[x]:
                    cont+=1
            mas_repetida[lista[i]] = cont
    
    return mas_repetida
    


lista_palabras = ['mazá', 'banana', 'mazá', 'laranxa', 'banana', 'mazá']

print(contar_frecuencia(lista_palabras))