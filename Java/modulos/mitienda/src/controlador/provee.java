/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import javax.swing.JOptionPane;
import modelo.ProveedorDTO;
import modelo.UsuarioDAO;
import vista.proveedores;

/**
 *
 * @author caans
 */
public class provee {

    proveedores getpro;
    
    public provee (proveedores getpro){
        this.getpro = getpro;
    }
    
    
public void proveedore (){

    boolean res;
    long nit;
    String nomb,dir,ciu,tel;
    
    nit=Long.parseLong(getpro.getNit().getText());
    ciu=getpro.getCity().getText();
    dir=getpro.getDireccion().getText();
    nomb=getpro.getNombre().getText();
    tel=getpro.getTelefono().getText();
    
    
    ProveedorDTO pdto = new ProveedorDTO(nit, ciu, dir, nomb, tel);
    UsuarioDAO udao = new UsuarioDAO();
    res= udao.insertarproveedor(pdto);
    
    if(res){
        JOptionPane.showMessageDialog(null, "Datos insertados correctamente");
    }
    else{
        JOptionPane.showMessageDialog(null, "Error en la insercion");
    }
    
    

}
}
