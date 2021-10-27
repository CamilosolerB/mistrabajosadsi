/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import javax.swing.JOptionPane;
import modelo.UsuarioDAO;
import modelo.UsuarioDTO;
import vista.insertusu;
/**
 *
 * @author caans
 */
public class Usuarios {
    
    insertusu vistusu;
    
public Usuarios (insertusu vistusu){
    this.vistusu = vistusu;
}
    
    public void usuario(){
    long ce;
    boolean verify;
    String em,nom, pass, usu;
    ce=Long.parseLong(vistusu.getCedula().getText());
    em=vistusu.getEmail().getText();
    nom=vistusu.getNombre().getText();
    pass=vistusu.getPassword().getText();
    usu=vistusu.getUsu().getText();
    
    
    
    UsuarioDTO usudto= new UsuarioDTO(ce, em, nom, pass, usu);
    UsuarioDAO usudao = new UsuarioDAO();
    verify= usudao.insertarusuario(usudto);
    if(verify){
        JOptionPane.showMessageDialog(null, "Dato insertado");
    }
    else{
        JOptionPane.showMessageDialog(null, "datos no ingresado");
    }
    }
}
