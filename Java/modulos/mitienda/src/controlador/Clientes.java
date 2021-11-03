/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import javax.swing.JOptionPane;
import modelo.ClienteDTO;
import modelo.UsuarioDAO;
import vista.viscli;

/**
 *
 * @author caans
 */
public class Clientes {
    
    viscli vistacli;
    
    public Clientes(viscli vistacli){
        this.vistacli = vistacli;
    }
    
    public void cliente (){
        long ced;
        String nom,ema,tel,dir;
        boolean result;
        
        ced=Long.parseLong(vistacli.getCedula().getText());
        dir=vistacli.getDireccion().getText();
        ema=vistacli.getEmail().getText();
        nom=vistacli.getNombre().getText();
        tel=vistacli.getCelular().getText();
        
        
        ClienteDTO cto = new ClienteDTO(ced, dir, ema, nom, tel);
        UsuarioDAO udao = new UsuarioDAO();
        
        result=udao.insertarcliente(cto);
        if(result){
            JOptionPane.showMessageDialog(null, "Datos insertados correctamente");
        }
        else{
            JOptionPane.showMessageDialog(null, "Dato no insertado");
        }
        }
    }

