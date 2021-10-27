
package explicacion1;

import java.util.Scanner;


public class Explicacion1 {


    public static void main(String[] args) {
        
        String nombre,apellido;
        int edad;
        
        Scanner sc = new Scanner(System.in);

        System.out.println("Indique su nombre");
        nombre=sc.next();
        System.out.println("Indique su apellido");
        apellido=sc.next();
        System.out.println("Indique su edad");
        edad=sc.nextInt();
        
        holamundo llamado = new holamundo();
        llamado.hola(nombre,apellido,edad);
    }
    
}
