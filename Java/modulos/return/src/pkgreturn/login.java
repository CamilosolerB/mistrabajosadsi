
package pkgreturn;

import javax.swing.JOptionPane;

public class login {
    
    public boolean login(){
        
        String c,u;
        boolean x=false;
        u=JOptionPane.showInputDialog("Digite su usuario");
        c=JOptionPane.showInputDialog("Escriba su contraseña");
                
                
        if(u.equals("pepe") && c.equals("123")){
        x=true;
        }
       
    return x;
    }
}
