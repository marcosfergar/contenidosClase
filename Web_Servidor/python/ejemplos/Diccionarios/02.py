def valor_maximo(dicionario: dict[str, int]) -> list[str]:
    acum=0
    valor_max=[]
    for clave, valor in dicionario.items():     
        if valor>=acum:       
            acum=valor     
            valor_max.append(clave)
    
    return valor_max

dicionario = {'a': 5, 'b': 3, 'c': 5, 'd': 2}

print(valor_maximo(dicionario))
# Saída esperada: ['a', 'c']