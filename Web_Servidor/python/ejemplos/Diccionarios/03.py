def agrupar_datos_por_valor(dicionario: dict[str, list[int]]) -> dict[int, list[str]]:

    dicc = {}
    for clave, valor in dicionario.items():
        for i in range(len(valor)):
            if dicionario.get(clave) == valor[i]:
                print

            
    return dicc

dicionario = {'a': [1, 2], 'b': [2, 3], 'c': [1, 4]}
print(agrupar_datos_por_valor(dicionario))
# Saída esperada:
# {1: ['a', 'c'], 2: ['a', 'b'], 3: ['b'], 4: ['c']}