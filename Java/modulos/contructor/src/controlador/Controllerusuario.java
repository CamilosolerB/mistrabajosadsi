
package controlador;

import javax.swing.JOptionPane;
import modelo.UsuarioOTO;
import modelo.UsuarioDAO;

public class Controllerusuario {
    
    UsuarioOTO uo;
    UsuarioDAO dao;
    public void logincontrolador(String us,String cla){
        String y;
        uo= new UsuarioOTO(us, cla);
        
        y=dao.capturardatos(uo);
        JOptionPane.showMessageDialog(null, y);
    }
    
}
