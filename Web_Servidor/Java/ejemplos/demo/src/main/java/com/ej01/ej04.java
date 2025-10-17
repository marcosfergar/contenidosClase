package com.ej01;

public class ej04 {
    public static void main(String[] args) {
        String palabra = "reconocer";
        String palabra2= "";
        // TODO: comprobar si palabra es palíndroma
        boolean esPalindromo = false;

        for (int i = 0; i < palabra.length(); i++) {
            palabra2 = palabra.charAt(i) + palabra2;
        }
        
        if (esPalindromo) {
            System.out.println(palabra + " es un palíndromo.");
        } else {
            System.out.println(palabra + " no es un palíndromo.");
        }
    }
}
