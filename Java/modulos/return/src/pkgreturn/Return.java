
package pkgreturn;

import javax.swing.JOptionPane;

/**
 *
 * @author caans
 */
public class Return {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        login lo=new login();
        boolean y;
        y=lo.login();
        
        if(y){
            JOptionPane.showMessageDialog(null, "Bienvenido al sistema");
        }
        else{
            JOptionPane.showMessageDialog(null, "Datos incorrectos");
        }
    }
    
}
