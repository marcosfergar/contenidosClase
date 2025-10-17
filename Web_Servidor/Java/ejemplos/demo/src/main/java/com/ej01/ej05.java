package com.ej01;

public class ej05 {
  public static void main(String[] args) {
        int limite = 50;

        // TODO: imprimir los números primos hasta 'limite'
        // Pista: crea una función esPrimo(int n)
        

        for (int i = 2; i <= limite; i++) {
            if (esPrimo(i)) {
                System.out.println(i);
            }
            // tu código aquí
        }
    }

    // TODO: implementar esta función
    static boolean esPrimo(int n) {

        if ((n%2)!=0) {
            return true;
        }else{
            return false;
        }
         
    }  
}
