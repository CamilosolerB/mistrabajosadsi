
package metodos;

import java.util.Scanner;

public class Datos {
    Scanner sc = new Scanner(System.in);
    String nom,ape,doc;
    public void datos(){
        System.out.println("Digite su documento");
        doc=sc.next();
        System.out.println("Digite su nombre");
        nom=sc.nextLine();
        System.out.println("Digite su apellido");
        ape=sc.nextLine();
        System.out.println("Su documento es: "+doc+" nombre completo: "+nom+" "+ape);
    }
    
}
