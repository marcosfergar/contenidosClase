package com.ej01;

public class ej02 {
    public static void main(String[] args) {
        int[] numeros = {3, 4, 7, 10, 12, 15, 18};
        
        // TODO: completar la lógica para contar cuántos números pares hay en el array
        int contadorPares = 0;

        
        for (int i = 0; i < numeros.length; i++) {
            if ((numeros[i]%2) == 0) {
                contadorPares ++;
            }
        }
        // tu código aquí

        System.out.println("Cantidad de números pares: " + contadorPares);
    }
}
