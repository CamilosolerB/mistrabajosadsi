
package session;

import java.util.Scanner;

/**
 *
 * @author caans
 */
public class Session {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String ver,usu,pas;
        System.out.println("Indique el tipo de usuario");
        ver=sc.next();

        switch(ver){
            case "administrador":
                System.out.println("Indique su usuario");
                usu=sc.next();
                System.out.println("Indique su contraseña");
                pas=sc.next();
                cliente adm= new cliente();
                adm.admin(usu,pas);
            break;
            case "cliente":
                System.out.println("Indique su usuario");
                usu=sc.next();
                System.out.println("Indique su contraseña");
                pas=sc.next();
                cliente cli= new cliente();
                cli.Cliente(usu,pas);
            break;
            case "empleado":
            System.out.println("Indique su usuario");
            usu=sc.next();
            System.out.println("Indique su contraseña");
            pas=sc.next();
            cliente emp= new cliente();
            emp.empl(usu,pas);
                
            break;
            default:
                System.out.println("Tipo de usuario no encontrado");
            break;
        }
    }
    
}
