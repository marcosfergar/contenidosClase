import aritmeticas
import comparaciones

menu = """=== Menú de operacións ===
1. Sumar
2. Restar
3. Multiplicar
4. ¿É maior?
5. ¿É menor?
"""
print(menu)

switch_dict = {
    '1': aritmeticas.suma,
    '2': aritmeticas.resta,
    '3': aritmeticas.multiplicacion,
    '4': comparaciones.mayor,
    '5': comparaciones.menor
}

opcion = input("Escolle unha opción: ")
num = int(input("Introduce o primeiro número: "))
num2 = int(input("Introduce o segundo número: "))

funcion = switch_dict.get(opcion)

if funcion:
    resultado = funcion(num, num2)
    print("Resultado:", resultado)
else:
    print("Opción non válida.")
