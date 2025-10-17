package com.ej01;

public class ej06 {
     public static void main(String[] args) {
        int n = 10; // primeros 10 números
        int res = 0;
        int res2= 1;
        int fivo = 0;
        // TODO: genera la secuencia de Fibonacci
        // salida esperada: 0 1 1 2 3 5 8 13 21 34
        for (int i = 0; i <= n; i++) {

            System.out.println(fivo);
            fivo=res+res2;
            res=res2;
            res2=fivo;
            
        }
    }
}
