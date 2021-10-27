/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vista;

import controlador.Controllerusuario;
import javax.swing.JOptionPane;

/**
 *
 * @author caans
 */
public class VistaUsuario {
    
        controlador.Controllerusuario cu;
    
        public void login(){
            
            String u,c;
            
            u=JOptionPane.showInputDialog(null,"Digite su usuario");
            c=JOptionPane.showInputDialog("Digite la clave");
            cu=new Controllerusuario();
            cu.logincontrolador(u, c);
        }
    
}
