
package javaapplication14;

import java.util.Scanner;


public class JavaApplication14 {


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int des;
        
        System.out.println("Escriba el ejercicio al cual desea acceder");
        System.out.println("1.Descuentos \n2.Excursion \n3.Nomina");
        des=sc.nextInt();
        
        switch(des){
            
            case 1:
                tallermetodos p1 = new tallermetodos();
                p1.primerpunto();
            break;
            
            case 2:
                tallermetodos p2 = new tallermetodos();
                p2.punto2();
                
             break;
            case 3:
                
                float sal,hor;
                
                System.out.println("Bienvenido al sistema de pago de la"
                        + " universidad del Bosque");
                System.out.println("Ahora escriba el numero de horas que trabajo");
                hor=sc.nextFloat();
                System.out.println("Escribe el valor que gana por hora");
                sal=sc.nextFloat();
                
                tallermetodos p3 = new tallermetodos();
                p3.punto3(sal,hor);
            break;
            
            default:
                System.out.println("Esta pagina no existe");
            break;
        }
    }
    
}
