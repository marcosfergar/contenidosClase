package com.ej01;

public class ej03 {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5};

        // TODO: invierte el array
        // al final debería imprimirse: 5 4 3 2 1

        for (int i = numeros.length-1; i >= 0 ; i--) {
            System.out.print(numeros[i] + " ");
        }
    }
}
